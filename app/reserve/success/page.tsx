import type { Metadata } from "next";
import Link from "next/link";

import { markBookingPaymentFromSession } from "../../lib/booking";
import { getStripe, getStripeSecretKey } from "../../lib/stripe";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Reservation Confirmation | Marbella Private Experience",
  description:
    "Stripe payment confirmation for the Marbella Private Experience private House, Yacht, and Car experience.",
};

type SuccessPageProps = {
  searchParams: Promise<{
    session_id?: string | string[] | undefined;
  }>;
};

function normalizeParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function formatAmount(amount: number | null, currency: string | null) {
  if (!amount || !currency) {
    return "Payment amount confirmed by Stripe";
  }

  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amount / 100);
}

async function retrieveCheckoutSession(sessionId: string) {
  try {
    return await getStripe().checkout.sessions.retrieve(sessionId);
  } catch {
    return null;
  }
}

export default async function ReserveSuccessPage({
  searchParams,
}: SuccessPageProps) {
  const params = await searchParams;
  const sessionId = normalizeParam(params.session_id);
  const hasStripeConfig = Boolean(getStripeSecretKey());
  const session =
    sessionId && hasStripeConfig
      ? await retrieveCheckoutSession(sessionId)
      : null;
  const isPaid = session?.payment_status === "paid";

  if (session) {
    await markBookingPaymentFromSession(session).catch(() => undefined);
  }

  return (
    <main className="legal-page payment-page">
      <nav className="legal-nav" aria-label="Confirmation navigation">
        <Link className="brand-lockup" href="/" aria-label="Return to Marbella Private Experience">
          <span className="brand-symbol" aria-hidden="true">
            M
          </span>
          <span>Marbella Private Experience</span>
        </Link>
        <Link className="legal-back" href="/#reserve">
          Reserve
        </Link>
      </nav>

      <section className="legal-hero payment-hero">
        <p className="eyebrow">
          {isPaid ? "Payment confirmed" : "Payment not confirmed"}
        </p>
        <h1>
          {isPaid
            ? "Your preticket is reserved."
            : "We could not confirm payment."}
        </h1>
        <p>
          {isPaid
            ? "Stripe has confirmed the payment. The concierge team can now use this paid reservation record to continue guest verification and arrival planning."
            : "The reservation is not active until Stripe confirms payment. Return to the reservation form and try again."}
        </p>
      </section>

      <section className={`payment-panel${isPaid ? " is-paid" : ""}`}>
        <div className="payment-state">
          <span>{isPaid ? "Paid" : "Pending"}</span>
          <strong>
            {isPaid
              ? "Reservation payment accepted"
              : "Reservation payment incomplete"}
          </strong>
        </div>

        <dl className="confirmation-grid">
          <div>
            <dt>Reservation ID</dt>
            <dd>{session?.client_reference_id ?? "Not available"}</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>{session?.customer_details?.email ?? "Not available"}</dd>
          </div>
          <div>
            <dt>Amount</dt>
            <dd>
              {formatAmount(
                session?.amount_total ?? null,
                session?.currency ?? null,
              )}
            </dd>
          </div>
          <div>
            <dt>Stripe session</dt>
            <dd>{session?.id ?? sessionId ?? "Not available"}</dd>
          </div>
        </dl>

        <div className="confirmation-actions">
          <Link className="button button-inverse" href="/">
            Return home
          </Link>
          <Link className="button button-outline" href="/terms">
            Terms
          </Link>
        </div>
      </section>
    </main>
  );
}
