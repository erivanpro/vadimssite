import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { LanguageSettingsButton } from "../../../language-provider";
import { markBookingPaymentFromSession } from "../../../lib/booking";
import { getDictionary } from "../../../lib/dictionaries";
import { isLocale, type Locale, resolveLocale } from "../../../lib/locales";
import { getStripe, getStripeSecretKey } from "../../../lib/stripe";

export const dynamic = "force-dynamic";

type SuccessPageProps = {
  params: Promise<{
    lang: string;
  }>;
  searchParams: Promise<{
    session_id?: string | string[] | undefined;
  }>;
};

function normalizeParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export async function generateMetadata({
  params,
}: SuccessPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.metadata.success.title,
    description: dictionary.metadata.success.description,
  };
}

function formatAmount({
  amount,
  currency,
  fallback,
  locale,
}: {
  amount: number | null;
  currency: string | null;
  fallback: string;
  locale: Locale;
}) {
  if (!amount || !currency) {
    return fallback;
  }

  return new Intl.NumberFormat(locale, {
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
  params,
  searchParams,
}: SuccessPageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const queryParams = await searchParams;
  const sessionId = normalizeParam(queryParams.session_id);
  const dictionary = getDictionary(lang);
  const { common, successPage } = dictionary;
  const hasStripeConfig = Boolean(getStripeSecretKey());
  const session =
    sessionId && hasStripeConfig
      ? await retrieveCheckoutSession(sessionId)
      : null;
  const isPaid = session?.payment_status === "paid";
  const paymentCopy = isPaid ? successPage.paid : successPage.unpaid;

  if (session) {
    await markBookingPaymentFromSession(session).catch(() => undefined);
  }

  return (
    <main className="legal-page payment-page">
      <nav className="legal-nav" aria-label={successPage.navAria}>
        <Link
          className="brand-lockup"
          href={`/${lang}`}
          aria-label={common.returnHomeAria}
        >
          <span className="brand-symbol" aria-hidden="true">
            {common.brandSymbol}
          </span>
          <span>{common.brandName}</span>
        </Link>
        <div className="legal-actions">
          <LanguageSettingsButton className="is-legal-mobile" />
          <Link className="legal-back" href={`/${lang}/#reserve`}>
            {common.reserve}
          </Link>
        </div>
      </nav>

      <section className="legal-hero payment-hero">
        <p className="eyebrow">{paymentCopy.eyebrow}</p>
        <h1>{paymentCopy.title}</h1>
        <p>{paymentCopy.text}</p>
      </section>

      <section className={`payment-panel${isPaid ? " is-paid" : ""}`}>
        <div className="payment-state">
          <span>{paymentCopy.state}</span>
          <strong>{paymentCopy.summary}</strong>
        </div>

        <dl className="confirmation-grid">
          <div>
            <dt>{successPage.fields.reservationId}</dt>
            <dd>{session?.client_reference_id ?? successPage.notAvailable}</dd>
          </div>
          <div>
            <dt>{successPage.fields.email}</dt>
            <dd>{session?.customer_details?.email ?? successPage.notAvailable}</dd>
          </div>
          <div>
            <dt>{successPage.fields.amount}</dt>
            <dd>
              {formatAmount({
                amount: session?.amount_total ?? null,
                currency: session?.currency ?? null,
                fallback: successPage.amountFallback,
                locale: lang,
              })}
            </dd>
          </div>
          <div>
            <dt>{successPage.fields.stripeSession}</dt>
            <dd>{session?.id ?? sessionId ?? successPage.notAvailable}</dd>
          </div>
        </dl>

        <div className="confirmation-actions">
          <Link className="button button-inverse" href={`/${lang}`}>
            {common.returnHome}
          </Link>
          <Link className="button button-outline" href={`/${lang}/terms`}>
            {common.terms}
          </Link>
        </div>
      </section>
    </main>
  );
}
