import { doc, serverTimestamp, setDoc } from "firebase/firestore/lite";
import type Stripe from "stripe";

import { db } from "../../firebase";

const bookingCollection = "booking";

export type BookingTimeWindow =
  | "morning"
  | "afternoon"
  | "sunset"
  | "full_day";

export type BookingAvailabilityStatus =
  | "requested"
  | "limited"
  | "held"
  | "confirmed"
  | "unavailable";

export type BookingFormData = {
  booking: {
    requestedDate: string;
    timeWindow: BookingTimeWindow;
    timezone: string;
    calendarProvider: string;
    calendarSelectionMode: "single";
  };
  availability: {
    status: BookingAvailabilityStatus;
    requiresManualConfirmation: boolean;
    source: "calendar_request";
  };
  pickup: {
    label: string;
    formattedAddress: string;
    placeId: string;
    latitude: number | null;
    longitude: number | null;
    mapsUrl: string;
    source:
      | "google_places_autocomplete"
      | "map_click"
      | "marker_drag"
      | "unknown";
  };
  guest: {
    name: string;
    age: number | null;
    idNumber: string;
    email: string;
    foodAllergies: string;
    partySize: number | null;
  };
};

type BookingSource = {
  ipAddress: string | null;
  userAgent: string | null;
  origin: string;
};

type BookingPaymentDetails = {
  amountTotal: number | null;
  currency: string;
};

function bookingRef(reservationId: string) {
  return doc(db, bookingCollection, reservationId);
}

function stripeCustomerId(session: Stripe.Checkout.Session) {
  return typeof session.customer === "string" ? session.customer : null;
}

function stripePaymentIntentId(session: Stripe.Checkout.Session) {
  return typeof session.payment_intent === "string"
    ? session.payment_intent
    : null;
}

export async function createBookingDocument({
  reservationId,
  form,
  source,
}: {
  reservationId: string;
  form: BookingFormData;
  source: BookingSource;
}) {
  await setDoc(bookingRef(reservationId), {
    schemaVersion: 2,
    reservationId,
    bookingStatus: "submitted",
    paymentStatus: "not_paid",
    experience: "Marbella Private Experience",
    bookingDate: form.booking.requestedDate,
    bookingTimeWindow: form.booking.timeWindow,
    availabilityStatus: form.availability.status,
    pickupLocation: form.pickup.label,
    pickupPlaceId: form.pickup.placeId,
    pickupCoordinates:
      form.pickup.latitude !== null && form.pickup.longitude !== null
        ? {
            latitude: form.pickup.latitude,
            longitude: form.pickup.longitude,
          }
        : null,
    form,
    source,
    stripe: {
      checkoutSessionId: null,
      customerId: null,
      paymentIntentId: null,
    },
    createdAt: serverTimestamp(),
    requestedAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function markBookingValidationFailed({
  reservationId,
  reason,
}: {
  reservationId: string;
  reason: string;
}) {
  await setDoc(
    bookingRef(reservationId),
    {
      bookingStatus: "validation_failed",
      paymentStatus: "not_paid",
      validationError: reason,
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
}

export async function markBookingCheckoutCreated({
  reservationId,
  session,
  payment,
}: {
  reservationId: string;
  session: Stripe.Checkout.Session;
  payment: BookingPaymentDetails;
}) {
  await setDoc(
    bookingRef(reservationId),
    {
      bookingStatus: "checkout_created",
      paymentStatus: session.payment_status ?? "not_paid",
      stripe: {
        checkoutSessionId: session.id,
        customerId: stripeCustomerId(session),
        paymentIntentId: stripePaymentIntentId(session),
        checkoutUrlCreated: Boolean(session.url),
      },
      payment,
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
}

export async function markBookingCheckoutError({
  reservationId,
  reason,
}: {
  reservationId: string;
  reason: string;
}) {
  await setDoc(
    bookingRef(reservationId),
    {
      bookingStatus: "checkout_error",
      paymentStatus: "not_paid",
      checkoutError: reason,
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
}

export async function markBookingPaymentFromSession(
  session: Stripe.Checkout.Session,
) {
  const reservationId = session.client_reference_id;

  if (!reservationId) {
    return;
  }

  const isPaid = session.payment_status === "paid";

  await setDoc(
    bookingRef(reservationId),
    {
      reservationId,
      bookingStatus: isPaid ? "paid" : "payment_not_confirmed",
      paymentStatus: session.payment_status ?? "unpaid",
      stripe: {
        checkoutSessionId: session.id,
        customerId: stripeCustomerId(session),
        paymentIntentId: stripePaymentIntentId(session),
      },
      payment: {
        amountTotal: session.amount_total ?? null,
        currency: session.currency ?? null,
      },
      paidAt: isPaid ? serverTimestamp() : null,
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
}
