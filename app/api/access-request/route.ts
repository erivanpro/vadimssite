import { NextResponse } from "next/server";

import {
  createBookingDocument,
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

export const runtime = "nodejs";

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

  const { checkoutCopy, form, validationError } =
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

    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  return NextResponse.json({
    reservationId,
    status: "submitted",
  });
}
