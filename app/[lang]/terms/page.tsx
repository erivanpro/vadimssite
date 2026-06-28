import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { LanguageSettingsButton } from "../../language-provider";
import { getDictionary } from "../../lib/dictionaries";
import { isLocale, resolveLocale } from "../../lib/locales";

type TermsPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export async function generateMetadata({
  params,
}: TermsPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = resolveLocale(lang);
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.metadata.terms.title,
    description: dictionary.metadata.terms.description,
  };
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);
  const { common, termsPage } = dictionary;

  return (
    <main className="legal-page">
      <nav className="legal-nav" aria-label={termsPage.navAria}>
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

      <section className="legal-hero">
        <p className="eyebrow">{termsPage.hero.eyebrow}</p>
        <h1>{termsPage.hero.title}</h1>
        <p>{termsPage.hero.text}</p>
      </section>

      <section className="legal-list" aria-label={termsPage.listAria}>
        {termsPage.items.map((item, index) => (
          <article className="legal-item" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
