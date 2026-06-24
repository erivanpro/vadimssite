import { NextResponse } from "next/server";

import {
  createBookingDocument,
  markBookingCheckoutCreated,
  markBookingCheckoutError,
  markBookingValidationFailed,
} from "../../lib/booking";
import {
  getReservationCurrency,
  getReservationPriceCents,
  getStripe,
} from "../../lib/stripe";

export const runtime = "nodejs";

type ReservationPayload = {
  pickupLocation?: unknown;
  name?: unknown;
  age?: unknown;
  idNumber?: unknown;
  email?: unknown;
  foodAllergies?: unknown;
};

function cleanText(value: unknown, maxLength = 500) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function getSiteOrigin(request: Request) {
  const configuredSiteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL;

  if (configuredSiteUrl) {
    return new URL(configuredSiteUrl).origin;
  }

  return new URL(request.url).origin;
}

function hasAllowedOrigin(request: Request, siteOrigin: string) {
  const requestOrigin = request.headers.get("origin");

  if (!requestOrigin) {
    return true;
  }

  return new URL(requestOrigin).origin === siteOrigin;
}

function getRequestSource(request: Request, siteOrigin: string) {
  return {
    ipAddress:
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip"),
    userAgent: request.headers.get("user-agent"),
    origin: siteOrigin,
  };
}

function buildMetadata(reservationId: string, payload: ReservationPayload) {
  return {
    reservation_id: reservationId,
    experience: "El Unico Club Yacht Car",
    pickup_location_provided: cleanText(payload.pickupLocation) ? "true" : "false",
    id_number_provided: cleanText(payload.idNumber) ? "true" : "false",
    dietary_note_provided: cleanText(payload.foodAllergies) ? "true" : "false",
    guest_age_verified: "18_plus",
    source: "website_reservation_form",
  };
}

export async function POST(request: Request) {
  const siteOrigin = getSiteOrigin(request);

  if (!hasAllowedOrigin(request, siteOrigin)) {
    return NextResponse.json(
      { error: "This checkout request is not allowed from that origin." },
      { status: 403 },
    );
  }

  let payload: ReservationPayload;

  try {
    payload = (await request.json()) as ReservationPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid reservation request." },
      { status: 400 },
    );
  }

  const pickupLocation = cleanText(payload.pickupLocation);
  const name = cleanText(payload.name, 160);
  const email = cleanText(payload.email, 254).toLowerCase();
  const idNumber = cleanText(payload.idNumber, 120);
  const foodAllergies = cleanText(payload.foodAllergies, 1200);
  const age = Number(cleanText(payload.age, 3));
  const normalizedAge = Number.isFinite(age) ? age : null;
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const reservationId = crypto.randomUUID();
  const validationError =
    !pickupLocation || !name || !idNumber || !emailIsValid || age < 18
      ? "Please complete pickup, name, adult age, ID number, and email before payment."
      : null;

  try {
    await createBookingDocument({
      reservationId,
      form: {
        pickupLocation,
        name,
        age: normalizedAge,
        idNumber,
        email,
        foodAllergies,
      },
      source: getRequestSource(request, siteOrigin),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to record booking.";

    return NextResponse.json(
      { error: `Unable to record booking in Firestore: ${message}` },
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
    const metadata = buildMetadata(reservationId, payload);
    const amount = getReservationPriceCents();
    const currency = getReservationCurrency();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_creation: "always",
      customer_email: email,
      client_reference_id: reservationId,
      success_url: `${siteOrigin}/reserve/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteOrigin}/#reserve`,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency,
            unit_amount: amount,
            product_data: {
              name: "El Unico Private Experience Preticket",
              description:
                "A paid reservation preticket for the private Club, Yacht, and chauffeur Car journey.",
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
          message:
            "Your El Unico preticket is reserved only after Stripe confirms payment.",
        },
      },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe did not return a checkout URL." },
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
        : "Unable to create Stripe checkout.";

    await markBookingCheckoutError({
      reservationId,
      reason: message,
    }).catch(() => undefined);

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
