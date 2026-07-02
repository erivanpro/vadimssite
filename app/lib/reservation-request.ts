import { type BookingFormData } from "./booking";
import { getDictionary } from "./dictionaries";
import { resolveLocale, type Locale } from "./locales";

export type ReservationPayload = {
  locale?: unknown;
  partySize?: unknown;
  name?: unknown;
  age?: unknown;
  email?: unknown;
  foodAllergies?: unknown;
};

export type ParsedReservationRequest = {
  checkoutCopy: ReturnType<typeof getDictionary>["checkout"];
  email: string;
  form: BookingFormData;
  locale: Locale;
  validationError: string | null;
};

export function cleanText(value: unknown, maxLength = 500) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function cleanInteger(value: unknown, maxLength: number) {
  const number = Number(cleanText(value, maxLength));

  return Number.isFinite(number) ? Math.trunc(number) : null;
}

function parseOrigin(value: string | null | undefined) {
  if (!value) {
    return null;
  }

  try {
    return new URL(value).origin;
  } catch {
    return null;
  }
}

function configuredSiteOrigin() {
  return parseOrigin(process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL);
}

function isLocalOrigin(origin: string) {
  const hostname = new URL(origin).hostname;

  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";
}

export function getSiteOrigin(request: Request) {
  const requestOrigin = parseOrigin(request.headers.get("origin"));
  const requestUrlOrigin = new URL(request.url).origin;

  if (
    process.env.NODE_ENV !== "production" &&
    requestOrigin &&
    isLocalOrigin(requestOrigin)
  ) {
    return requestOrigin;
  }

  return configuredSiteOrigin() ?? requestUrlOrigin;
}

export function hasAllowedOrigin(request: Request, siteOrigin: string) {
  const rawOrigin = request.headers.get("origin");
  const requestOrigin = parseOrigin(rawOrigin);

  if (!rawOrigin) {
    return true;
  }

  if (!requestOrigin) {
    return false;
  }

  const allowedOrigins = new Set(
    [siteOrigin, configuredSiteOrigin(), new URL(request.url).origin].filter(
      Boolean,
    ),
  );

  return (
    allowedOrigins.has(requestOrigin) ||
    (process.env.NODE_ENV !== "production" && isLocalOrigin(requestOrigin))
  );
}

export function getRequestSource(request: Request, siteOrigin: string) {
  return {
    ipAddress:
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip"),
    userAgent: request.headers.get("user-agent"),
    origin: siteOrigin,
  };
}

export function parseReservationPayload(
  payload: ReservationPayload,
): ParsedReservationRequest {
  const locale = resolveLocale(cleanText(payload.locale, 8));
  const checkoutCopy = getDictionary(locale).checkout;
  const partySize = cleanInteger(payload.partySize, 2);
  const name = cleanText(payload.name, 160);
  const email = cleanText(payload.email, 254).toLowerCase();
  const foodAllergies = cleanText(payload.foodAllergies, 1200);
  const age = cleanInteger(payload.age, 3);
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const form: BookingFormData = {
    availability: {
      status: "requested",
      requiresManualConfirmation: true,
      source: "private_access_request",
    },
    guest: {
      name,
      age,
      email,
      foodAllergies,
      partySize,
    },
  };
  const validationCopy = checkoutCopy.validation;
  const errors = [
    !name ? validationCopy.fullName : null,
    age === null || age < 18 ? validationCopy.adultAge : null,
    !emailIsValid ? validationCopy.email : null,
    partySize === null || partySize < 1 || partySize > 12
      ? validationCopy.partySize
      : null,
  ].filter(Boolean);
  const validationError =
    errors.length > 0
      ? validationCopy.complete.replace("{items}", errors.join(", "))
      : null;

  return {
    checkoutCopy,
    email,
    form,
    locale,
    validationError,
  };
}
