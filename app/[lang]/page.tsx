import type { CSSProperties } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getDictionary, type Dictionary } from "../lib/dictionaries";
import { isLocale } from "../lib/locales";
import { MobileNavigation } from "../mobile-navigation";
import { ReservationForm } from "../reservation-form";
import { ScrollOrchestrator } from "../scroll-orchestrator";
import houseHeroImage from "../images/optimized/house/house-hero.jpg";
import housePoolImage from "../images/optimized/house/house-pool.jpg";
import houseArchitectureImage from "../images/optimized/house/house-architecture.jpg";
import houseLivingImage from "../images/optimized/house/house-living.jpg";
import houseWellnessImage from "../images/optimized/house/house-wellness.jpg";
import houseEntertainmentImage from "../images/optimized/house/house-entertainment.jpg";
import houseOutdoorDiningImage from "../images/optimized/house/house-outdoor-dining.jpg";
import houseAerialImage from "../images/optimized/house/house-aerial.jpg";
import houseWardrobeImage from "../images/optimized/house/house-wardrobe.jpg";
import houseTerraceImage from "../images/optimized/house/house-terrace.jpg";
import yachtHeroImage from "../images/optimized/yacht/yacht-hero.jpg";
import yachtJacuzziImage from "../images/optimized/yacht/yacht-jacuzzi.jpg";
import yachtSunsetImage from "../images/optimized/yacht/yacht-sunset.jpg";
import yachtDiningDeckImage from "../images/optimized/yacht/yacht-dining-deck.jpg";
import yachtAerialImage from "../images/optimized/yacht/yacht-aerial.jpg";
import yachtSalonImage from "../images/optimized/yacht/yacht-salon.jpg";
import yachtGuestDiningImage from "../images/optimized/yacht/yacht-guest-dining.jpg";
import carHeroImage from "../images/optimized/car/car-hero.jpg";
import carFrontImage from "../images/optimized/car/car-front.jpg";
import carCockpitImage from "../images/optimized/car/car-cockpit.jpg";
import carRearCabinImage from "../images/optimized/car/car-rear-cabin.jpg";
import carSeatImage from "../images/optimized/car/car-seat.jpg";
import carTechnologyImage from "../images/optimized/car/car-technology.jpg";
import carArrivalImage from "../images/optimized/car/car-arrival.jpg";
import carExteriorImage from "../images/optimized/car/car-exterior.jpg";

type StoryMoment = {
  eyebrow: string;
  title: string;
  text: string;
  image: StaticImageData;
  alt: string;
};

type Metric = Dictionary["home"]["metrics"]["house"][number];

const houseMomentImages = [
  houseArchitectureImage,
  houseLivingImage,
  houseWellnessImage,
  houseEntertainmentImage,
];

const yachtMomentImages = [
  yachtJacuzziImage,
  yachtSunsetImage,
  yachtDiningDeckImage,
  yachtSalonImage,
];

const carMomentImages = [
  carRearCabinImage,
  carSeatImage,
  carTechnologyImage,
  carExteriorImage,
];

const galleryImageAssets = [
  housePoolImage,
  houseOutdoorDiningImage,
  houseWardrobeImage,
  houseAerialImage,
  houseTerraceImage,
  yachtHeroImage,
  yachtAerialImage,
  yachtGuestDiningImage,
  carArrivalImage,
  carCockpitImage,
  carFrontImage,
];

function attachImages<T extends Omit<StoryMoment, "image">>(
  items: T[],
  images: StaticImageData[],
): StoryMoment[] {
  return items.map((item, index) => ({
    ...item,
    image: images[index],
  }));
}

const revealDelay = (delay: string) =>
  ({ "--delay": delay } as CSSProperties);

function MetricStrip({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="metric-strip" data-reveal style={revealDelay("120ms")}>
      {metrics.map(({ label, text }) => (
        <div className="metric-cell" key={label}>
          <span>{label}</span>
          <strong>{text}</strong>
        </div>
      ))}
    </div>
  );
}

function StoryPanel({
  moment,
  index,
}: {
  moment: StoryMoment;
  index: number;
}) {
  return (
    <article
      className={`story-panel${index % 2 === 1 ? " is-reverse" : ""}`}
      data-progress
    >
      <div className="story-media" data-reveal data-parallax="0.026">
        <Image
          src={moment.image}
          alt={moment.alt}
          fill
          placeholder="blur"
          sizes="(max-width: 980px) 100vw, 58vw"
        />
      </div>
      <div className="story-copy" data-reveal style={revealDelay("90ms")}>
        <span className="story-count">0{index + 1}</span>
        <p className="eyebrow">{moment.eyebrow}</p>
        <h3>{moment.title}</h3>
        <p>{moment.text}</p>
      </div>
    </article>
  );
}

type HomeProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function Home({ params }: HomeProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);
  const { common, home } = dictionary;
  const navItems = home.navItems;
  const houseMoments = attachImages(home.moments.house, houseMomentImages);
  const yachtMoments = attachImages(home.moments.yacht, yachtMomentImages);
  const carMoments = attachImages(home.moments.car, carMomentImages);
  const galleryImages = home.galleryImages.map((item, index) => ({
    ...item,
    image: galleryImageAssets[index],
  }));

  return (
    <>
      <ScrollOrchestrator />

      <header className="site-header">
        <nav className="site-nav" aria-label={common.nav.primaryAria}>
          <a className="brand-lockup" href="#top" aria-label={common.homeAria}>
            <span className="brand-symbol" aria-hidden="true">
              {common.brandSymbol}
            </span>
            <span>{common.brandName}</span>
          </a>

          <div className="nav-links" aria-label={common.nav.journeyAria}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-nav-item={item.id}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a className="nav-cta" href="#reserve">
              {common.reserve}
            </a>
          </div>

          <MobileNavigation
            items={navItems}
            labels={common.nav}
          
            languageLabel={dictionary.language.settingsLabel}
          />
        </nav>
      </header>

      <main id="top" className="lux-page">
        <section className="lux-hero" aria-label={home.hero.aria}>
          <div className="lux-hero-media" data-parallax="0.052">
            <Image
              src={houseHeroImage}
              alt={home.hero.imageAlt}
              fill
              preload
              placeholder="blur"
              sizes="100vw"
            />
          </div>
          <div className="lux-hero-shade" aria-hidden="true" />

          <div className="lux-hero-content" data-reveal>
            <p className="eyebrow">{home.hero.eyebrow}</p>
            <h1>{home.hero.title}</h1>
            <p className="hero-copy">{home.hero.copy}</p>
            <div className="hero-actions">
              <a href="#house" className="button button-primary">
                {home.hero.exploreHouse}
              </a>
              <a href="#yacht" className="button button-secondary">
                {home.hero.continueYacht}
              </a>
            </div>
          </div>

          <aside
            className="experience-rail"
            data-reveal
            style={revealDelay("140ms")}
          >
            <p>{home.hero.railLabel}</p>
            {home.experienceStats.map((item) => (
              <a className="rail-item" href={`#${item.id}`} key={item.id}>
                <span>{item.number}</span>
                <strong>{item.label}</strong>
                <small>{item.text}</small>
              </a>
            ))}
          </aside>

          <a className="scroll-cue" href="#house" aria-label={home.hero.skipHouseAria}>
            <span>01</span>
            <i aria-hidden="true" />
          </a>
        </section>

        <section
          id="house"
          className="asset-chapter house-chapter"
          data-section-id="house"
          data-progress
        >
          <div className="chapter-progress" aria-hidden="true" />
          <div className="chapter-opener">
            <div className="chapter-opener-media" data-parallax="0.038">
              <Image
                src={housePoolImage}
                alt={home.chapters.house.imageAlt}
                fill
                placeholder="blur"
                sizes="100vw"
              />
            </div>
            <div className="chapter-shade" aria-hidden="true" />
            <div className="chapter-opener-copy" data-reveal>
              <p className="eyebrow">{home.chapters.house.eyebrow}</p>
              <h2>{home.chapters.house.title}</h2>
              <p>{home.chapters.house.text}</p>
            </div>
            <MetricStrip metrics={home.metrics.house} />
          </div>

          <div className="story-panels">
            {houseMoments.map((moment, index) => (
              <StoryPanel moment={moment} index={index} key={moment.title} />
            ))}
          </div>
        </section>

        <section
          id="yacht"
          className="asset-chapter yacht-chapter"
          data-section-id="yacht"
          data-progress
        >
          <div className="chapter-progress" aria-hidden="true" />
          <div className="chapter-opener">
            <div
              className="chapter-opener-media yacht-opener-media"
              data-parallax="0.044"
            >
              <Image
                src={yachtHeroImage}
                alt={home.chapters.yacht.imageAlt}
                fill
                placeholder="blur"
                sizes="100vw"
              />
            </div>
            <div className="chapter-shade" aria-hidden="true" />
            <div className="chapter-opener-copy" data-reveal>
              <p className="eyebrow">{home.chapters.yacht.eyebrow}</p>
              <h2>{home.chapters.yacht.title}</h2>
              <p>{home.chapters.yacht.text}</p>
            </div>
            <MetricStrip metrics={home.metrics.yacht} />
          </div>

          <div className="story-panels">
            {yachtMoments.map((moment, index) => (
              <StoryPanel moment={moment} index={index} key={moment.title} />
            ))}
          </div>
        </section>

        <section
          id="car"
          className="asset-chapter car-chapter"
          data-section-id="car"
          data-progress
        >
          <div className="chapter-progress" aria-hidden="true" />
          <div className="chapter-opener car-opener">
            <div
              className="chapter-opener-media car-opener-media"
              data-parallax="0.04"
            >
              <Image
                src={carHeroImage}
                alt={home.chapters.car.imageAlt}
                fill
                placeholder="blur"
                sizes="100vw"
              />
            </div>
            <div className="chapter-shade" aria-hidden="true" />
            <div className="chapter-opener-copy" data-reveal>
              <p className="eyebrow">{home.chapters.car.eyebrow}</p>
              <h2>{home.chapters.car.title}</h2>
              <p>{home.chapters.car.text}</p>
            </div>
            <MetricStrip metrics={home.metrics.car} />
          </div>

          <div className="story-panels">
            {carMoments.map((moment, index) => (
              <StoryPanel moment={moment} index={index} key={moment.title} />
            ))}
          </div>
        </section>

        <section className="gallery-chapter" aria-label={home.gallery.aria}>
          <div className="gallery-heading" data-reveal>
            <p className="eyebrow">{home.gallery.eyebrow}</p>
            <h2>{home.gallery.title}</h2>
            <p>{home.gallery.text}</p>
          </div>

          <div className="cinema-strip" data-progress>
            {galleryImages.map((item, index) => (
              <figure
                className="cinema-frame"
                data-reveal
                style={revealDelay(`${(index % 4) * 65}ms`)}
                key={`${item.label}-${index}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 760px) 82vw, 32vw"
                />
                <figcaption>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <ReservationForm
          bookingCalendar={dictionary.bookingCalendar}
          locale={lang}
          pickup={dictionary.pickup}
          reservation={dictionary.reservation}
        />

        <footer className="site-footer">
          <div className="footer-brand">
            <a className="brand-lockup" href="#top" aria-label={common.homeAria}>
              <span className="brand-symbol" aria-hidden="true">
                {common.brandSymbol}
              </span>
              <span>{common.brandName}</span>
            </a>
            <p>{home.footer.copy}</p>
          </div>

          <nav className="footer-links" aria-label={home.footer.navigationAria}>
            {navItems.map((item) => (
              <a href={item.href} key={item.id}>
                {item.label}
              </a>
            ))}
            <a href="#reserve">{common.reserve}</a>
            <a href={`/${lang}/terms`}>{common.terms}</a>
          </nav>

          <p className="footer-note">{home.footer.note}</p>
        </footer>
      </main>
    </>
  );
}
