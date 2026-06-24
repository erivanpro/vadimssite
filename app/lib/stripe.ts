import Stripe from "stripe";

const stripeApiVersion = "2026-05-27.dahlia";

export function getStripeSecretKey() {
  return process.env.STRIPE_LIVE_KEY ?? process.env.STRIPE_SECRET_KEY ?? "";
}

export function getStripeWebhookSecret() {
  return (
    process.env.STRIPE_LIVE_WEBHOOK_SECRET ??
    process.env.STRIPE_WEBHOOK_SECRET ??
    ""
  );
}

export function getReservationPriceCents() {
  const rawPrice =
    process.env.STRIPE_RESERVATION_PRICE_CENTS ??
    process.env.STRIPE_TICKET_PRICE_CENTS;
  const price = Number(rawPrice);

  if (!Number.isInteger(price) || price < 50) {
    throw new Error(
      "Set STRIPE_RESERVATION_PRICE_CENTS in .env.local or host secrets before creating Stripe checkout.",
    );
  }

  return price;
}

export function getReservationCurrency() {
  return (process.env.STRIPE_CURRENCY ?? "eur").toLowerCase();
}

export function getStripe() {
  const secretKey = getStripeSecretKey();

  if (!secretKey) {
    throw new Error(
      "Set STRIPE_LIVE_KEY in .env.local or host secrets before creating Stripe checkout. Do not hardcode live Stripe secret keys in source code.",
    );
  }

  return new Stripe(secretKey, {
    apiVersion: stripeApiVersion,
    appInfo: {
      name: "El Unico",
      version: "0.1.0",
    },
    maxNetworkRetries: 2,
    typescript: true,
  });
}
