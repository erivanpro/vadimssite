"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import logoblack from "@/app/components/images/Logo - Black.png";
import fleetPhone from "@/app/components/imagesiphone/screenthree.png";
import insurancePhone from "@/app/components/imagesiphone/2rentyourcar.png";
import Footer from "@/app/components/footer";
import LocaleSwitcher from "@/app/components/localeSwitcher/LocaleSwitcher";
import MenuIcon from "@/app/components/menuIcon/MenuIcon";
import SearchBar from "@/app/components/serachbar/SearchBar";

type LandingPageKey = "professionalsPage" | "insurancePage";
type LandingVariant = "professionals" | "insurance";

type LandingCard = {
  title: string;
  text: string;
};

type LandingStat = {
  value: string;
  label: string;
};

type LandingDetail = {
  title: string;
  items: string[];
};

type VisualCopy = {
  title: string;
  first: string;
  second: string;
};

const navigation = [
  { name: "Location de voiture", href: "/" },
  { name: "Devenir locataire", href: "/new" },
  { name: "Professionnels", href: "/professionals" },
  { name: "Assurance", href: "/assurance" },
  { name: "Aide", href: "/aide" },
  { name: "Contact-w", href: "/contact" },
];

const visualImages: Record<LandingVariant, StaticImageData> = {
  professionals: fleetPhone,
  insurance: insurancePhone,
};

export default function SubpageLanding({
  pageKey,
  variant,
}: {
  pageKey: LandingPageKey;
  variant: LandingVariant;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations(pageKey);
  const navT = useTranslations("homePage");
  const stats = t.raw("stats") as LandingStat[];
  const sections = t.raw("sections") as LandingCard[];
  const details = t.raw("details") as LandingDetail[];
  const steps = t.raw("steps") as LandingCard[];
  const visual = t.raw("visual") as VisualCopy;

  return (
    <div className={`subpage-shell info-page info-page-${variant}`}>
      <header className="modern-header">
        <nav aria-label="Global" className="modern-nav">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">limitless</span>
              <Image src={logoblack} alt="Logo" className="h-8 w-auto" width={52} height={52} />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="modern-menu-button"
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon />
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center lg:gap-x-2">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="modern-nav-link">
                {navT(item.name)}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <LocaleSwitcher />
          </div>
          <SearchBar />
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-40 bg-slate-900/20" />
          <DialogPanel className="modern-mobile-panel">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">limitless</span>
                <Image src={logoblack} alt="Logo" className="h-8 w-auto" width={52} height={52} />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="modern-menu-button"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-2xl px-4 py-3 text-base font-bold leading-7 text-gray-900 hover:bg-[#f4f6f2]"
                >
                  {navT(item.name)}
                </a>
              ))}
              <LocaleSwitcher removeMargin removePadding />
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main>
        <section className="info-hero">
          <div className="info-hero-inner">
            <div className="info-copy-stack">
              <p className="modern-eyebrow">{t("eyebrow")}</p>
              <h1 className="different subpage-title">{t("title")}</h1>
              <p className="subpage-copy">{t("intro")}</p>
              <div className="modern-hero-actions">
                <a href="/contact" className="modern-button modern-button-primary">
                  {t("primaryAction")}
                </a>
                <a href={t("secondaryHref")} className="modern-button modern-button-secondary">
                  {t("secondaryAction")}
                </a>
              </div>
            </div>

            <div className="info-visual-stage" aria-hidden="true">
              <div className="info-visual-panel info-visual-panel-one" />
              <div className="info-visual-panel info-visual-panel-two" />
              <div className="info-device-shell">
                <Image src={visualImages[variant]} alt="" priority />
              </div>
              <div className="info-summary-card">
                <span />
                <strong>{visual.title}</strong>
                <p>{visual.first}</p>
                <p>{visual.second}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-section">
          <div className="modern-container">
            <div className="info-stat-grid">
              {stats.map((stat) => (
                <div key={stat.value} className="host-stat-card">
                  <p className="host-stat-kicker">{stat.value}</p>
                  <p className="modern-section-copy">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="modern-feature-flow">
          <div className="modern-container">
            <div className="info-card-grid">
              {sections.map((section) => (
                <article key={section.title} className="host-incentive-card">
                  <h2 className="text-2xl font-black leading-tight">{section.title}</h2>
                  <p className="mt-4 text-base leading-7 text-gray-600">{section.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="soft-section info-detail-section">
          <div className="modern-container info-detail-grid">
            {details.map((detail) => (
              <article key={detail.title} className="info-detail-block">
                <h2 className="different modern-section-title">{detail.title}</h2>
                <ul>
                  {detail.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="proof-section">
          <div className="modern-container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="different modern-section-title">{t("stepsTitle")}</h2>
              <p className="modern-section-copy">{t("stepsIntro")}</p>
            </div>
            <div className="info-card-grid mt-14">
              {steps.map((step) => (
                <article key={step.title} className="proof-card">
                  <h3 className="proof-card-title">{step.title}</h3>
                  <p className="proof-card-copy">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="info-contact-band">
          <div className="modern-container info-contact-inner">
            <div>
              <h2 className="different modern-section-title">{t("contactTitle")}</h2>
              <p className="modern-section-copy">{t("contactText")}</p>
            </div>
            <a href="/contact" className="modern-button modern-button-primary">
              {t("contactAction")}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
