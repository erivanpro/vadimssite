import { NextResponse } from "next/server";

import {
  type BookingFormData,
  type BookingTimeWindow,
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
  bookingDate?: unknown;
  bookingTimeWindow?: unknown;
  bookingTimezone?: unknown;
  calendarProvider?: unknown;
  calendarSelectionMode?: unknown;
  partySize?: unknown;
  pickupLocation?: unknown;
  pickupFormattedAddress?: unknown;
  pickupPlaceId?: unknown;
  pickupLatitude?: unknown;
  pickupLongitude?: unknown;
  pickupMapsUrl?: unknown;
  pickupSource?: unknown;
  name?: unknown;
  age?: unknown;
  idNumber?: unknown;
  email?: unknown;
  foodAllergies?: unknown;
};

function cleanText(value: unknown, maxLength = 500) {
  return String(value ?? "").trim().slice(0, maxLength);
}

const allowedTimeWindows = new Set<BookingTimeWindow>([
  "morning",
  "afternoon",
  "sunset",
  "full_day",
]);

function cleanBookingTimeWindow(value: unknown): BookingTimeWindow {
  const timeWindow = cleanText(value, 32) as BookingTimeWindow;

  return allowedTimeWindows.has(timeWindow) ? timeWindow : "full_day";
}

function cleanInteger(value: unknown, maxLength: number) {
  const number = Number(cleanText(value, maxLength));

  return Number.isFinite(number) ? Math.trunc(number) : null;
}

function cleanCoordinate(value: unknown, min: number, max: number) {
  const coordinate = Number(cleanText(value, 40));

  if (!Number.isFinite(coordinate) || coordinate < min || coordinate > max) {
    return null;
  }

  return coordinate;
}

function cleanBookingDate(value: unknown) {
  const date = cleanText(value, 10);

  return /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : "";
}

function utcDateFromDateKey(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  return date;
}

function firstBookableUtcDate() {
  const date = new Date();
  date.setUTCHours(0, 0, 0, 0);
  date.setUTCDate(date.getUTCDate() + 1);
  return date;
}

function isBookableDate(dateKey: string) {
  const date = utcDateFromDateKey(dateKey);

  return Boolean(date && date >= firstBookableUtcDate());
}

function cleanPickupSource(value: unknown): BookingFormData["pickup"]["source"] {
  const source = cleanText(value, 64);

  if (
    source === "google_places_autocomplete" ||
    source === "map_click" ||
    source === "marker_drag"
  ) {
    return source;
  }

  return "unknown";
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

function buildMetadata(reservationId: string, form: BookingFormData) {
  return {
    reservation_id: reservationId,
    experience: "Marbella Private Experience",
    booking_date: form.booking.requestedDate,
    booking_time_window: form.booking.timeWindow,
    availability_status: form.availability.status,
    party_size: String(form.guest.partySize ?? ""),
    pickup_location_provided: form.pickup.label ? "true" : "false",
    pickup_place_id: form.pickup.placeId,
    pickup_source: form.pickup.source,
    id_number_provided: form.guest.idNumber ? "true" : "false",
    dietary_note_provided: form.guest.foodAllergies ? "true" : "false",
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

  const bookingDate = cleanBookingDate(payload.bookingDate);
  const bookingTimeWindow = cleanBookingTimeWindow(payload.bookingTimeWindow);
  const bookingTimezone = cleanText(payload.bookingTimezone, 80) || "UTC";
  const calendarProvider =
    cleanText(payload.calendarProvider, 80) || "react-day-picker";
  const calendarSelectionMode =
    cleanText(payload.calendarSelectionMode, 32) === "single"
      ? "single"
      : "single";
  const partySize = cleanInteger(payload.partySize, 2);
  const pickupLocation = cleanText(payload.pickupLocation, 280);
  const pickupFormattedAddress = cleanText(
    payload.pickupFormattedAddress,
    500,
  );
  const pickupPlaceId = cleanText(payload.pickupPlaceId, 180);
  const pickupLatitude = cleanCoordinate(payload.pickupLatitude, -90, 90);
  const pickupLongitude = cleanCoordinate(payload.pickupLongitude, -180, 180);
  const pickupMapsUrl = cleanText(payload.pickupMapsUrl, 1000);
  const pickupSource = cleanPickupSource(payload.pickupSource);
  const name = cleanText(payload.name, 160);
  const email = cleanText(payload.email, 254).toLowerCase();
  const idNumber = cleanText(payload.idNumber, 120);
  const foodAllergies = cleanText(payload.foodAllergies, 1200);
  const age = cleanInteger(payload.age, 3);
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const reservationId = crypto.randomUUID();
  const form: BookingFormData = {
    booking: {
      requestedDate: bookingDate,
      timeWindow: bookingTimeWindow,
      timezone: bookingTimezone,
      calendarProvider,
      calendarSelectionMode,
    },
    availability: {
      status: "requested",
      requiresManualConfirmation: true,
      source: "calendar_request",
    },
    pickup: {
      label: pickupLocation,
      formattedAddress: pickupFormattedAddress,
      placeId: pickupPlaceId,
      latitude: pickupLatitude,
      longitude: pickupLongitude,
      mapsUrl: pickupMapsUrl,
      source: pickupSource,
    },
    guest: {
      name,
      age,
      idNumber,
      email,
      foodAllergies,
      partySize,
    },
  };
  const errors = [
    !bookingDate || !isBookableDate(bookingDate)
      ? "a future booking date"
      : null,
    !allowedTimeWindows.has(bookingTimeWindow)
      ? "an arrival window"
      : null,
    !pickupLocation || pickupLatitude === null || pickupLongitude === null
      ? "a Google Maps pickup selection"
      : null,
    !name ? "your full name" : null,
    age === null || age < 18 ? "adult age verification" : null,
    !idNumber ? "your ID number" : null,
    !emailIsValid ? "a valid email" : null,
    partySize === null || partySize < 1 || partySize > 12
      ? "a party size between 1 and 12"
      : null,
  ].filter(Boolean);
  const validationError =
    errors.length > 0
      ? `Please complete ${errors.join(", ")} before payment.`
      : null;

  try {
    await createBookingDocument({
      reservationId,
      form,
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
    const metadata = buildMetadata(reservationId, form);
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
              name: "Marbella Private Experience Preticket",
              description:
                "A paid reservation preticket for the private House, Yacht, and chauffeur Car journey.",
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
            "Your Marbella Private Experience preticket is reserved only after Stripe confirms payment.",
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
