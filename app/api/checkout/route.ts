import { NextResponse } from "next/server";

import {
  type BookingFormData,
  createBookingDocument,
  markBookingCheckoutCreated,
  markBookingCheckoutError,
  markBookingValidationFailed,
} from "../../lib/booking";
import { getDictionary } from "../../lib/dictionaries";
import { defaultLocale } from "../../lib/locales";
import {
  getRequestSource,
  getSiteOrigin,
  hasAllowedOrigin,
  parseReservationPayload,
  type ReservationPayload,
} from "../../lib/reservation-request";
import {
  getReservationCurrency,
  getReservationPriceCents,
  getStripe,
} from "../../lib/stripe";

export const runtime = "nodejs";

function buildMetadata(reservationId: string, form: BookingFormData) {
  return {
    reservation_id: reservationId,
    experience: "MARBELLA PRIVATE EXPERIENCE",
    availability_status: form.availability.status,
    party_size: String(form.guest.partySize ?? ""),
    dietary_note_provided: form.guest.foodAllergies ? "true" : "false",
    guest_age_verified: "18_plus",
    source: "website_reservation_form",
  };
}

export async function POST(request: Request) {
  const siteOrigin = getSiteOrigin(request);
  const defaultCheckoutCopy = getDictionary(defaultLocale).checkout;

  if (!hasAllowedOrigin(request, siteOrigin)) {
    return NextResponse.json(
      { error: defaultCheckoutCopy.errors.origin },
      { status: 403 },
    );
  }

  let payload: ReservationPayload;

  try {
    payload = (await request.json()) as ReservationPayload;
  } catch {
    return NextResponse.json(
      { error: defaultCheckoutCopy.errors.invalidRequest },
      { status: 400 },
    );
  }

  const { checkoutCopy, email, form, locale, validationError } =
    parseReservationPayload(payload);
  const reservationId = crypto.randomUUID();

  try {
    await createBookingDocument({
      reservationId,
      form,
      source: getRequestSource(request, siteOrigin),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : checkoutCopy.errors.unableRecord;

    return NextResponse.json(
      { error: `${checkoutCopy.errors.firestorePrefix} ${message}` },
      { status: 500 },
    );
  }

  if (validationError) {
    await markBookingValidationFailed({
      reservationId,
      reason: validationError,
    });

    return NextResponse.json(
      { error: validationError },
      { status: 400 },
    );
  }

  try {
    const stripe = getStripe();
    const metadata = buildMetadata(reservationId, form);
    const amount = getReservationPriceCents();
    const currency = getReservationCurrency();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_creation: "always",
      customer_email: email,
      client_reference_id: reservationId,
      success_url: `${siteOrigin}/${locale}/reserve/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteOrigin}/${locale}/#reserve`,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency,
            unit_amount: amount,
            product_data: {
              name: checkoutCopy.stripe.productName,
              description: checkoutCopy.stripe.productDescription,
            },
          },
        },
      ],
      metadata,
      payment_intent_data: {
        metadata,
      },
      phone_number_collection: {
        enabled: true,
      },
      custom_text: {
        submit: {
          message: checkoutCopy.stripe.customSubmit,
        },
      },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: checkoutCopy.errors.noUrl },
        { status: 502 },
      );
    }

    await markBookingCheckoutCreated({
      reservationId,
      session,
      payment: {
        amountTotal: amount,
        currency,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : checkoutCopy.errors.unableCreate;

    await markBookingCheckoutError({
      reservationId,
      reason: message,
    }).catch(() => undefined);

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
