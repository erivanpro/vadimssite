import type { CSSProperties } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { MobileNavigation } from "./mobile-navigation";
import { ReservationForm } from "./reservation-form";
import { ScrollOrchestrator } from "./scroll-orchestrator";
import houseHeroImage from "./images/optimized/house/house-hero.jpg";
import housePoolImage from "./images/optimized/house/house-pool.jpg";
import houseArchitectureImage from "./images/optimized/house/house-architecture.jpg";
import houseLivingImage from "./images/optimized/house/house-living.jpg";
import houseWellnessImage from "./images/optimized/house/house-wellness.jpg";
import houseEntertainmentImage from "./images/optimized/house/house-entertainment.jpg";
import houseOutdoorDiningImage from "./images/optimized/house/house-outdoor-dining.jpg";
import houseAerialImage from "./images/optimized/house/house-aerial.jpg";
import houseWardrobeImage from "./images/optimized/house/house-wardrobe.jpg";
import houseTerraceImage from "./images/optimized/house/house-terrace.jpg";
import yachtHeroImage from "./images/optimized/yacht/yacht-hero.jpg";
import yachtJacuzziImage from "./images/optimized/yacht/yacht-jacuzzi.jpg";
import yachtSunsetImage from "./images/optimized/yacht/yacht-sunset.jpg";
import yachtDiningDeckImage from "./images/optimized/yacht/yacht-dining-deck.jpg";
import yachtAerialImage from "./images/optimized/yacht/yacht-aerial.jpg";
import yachtSalonImage from "./images/optimized/yacht/yacht-salon.jpg";
import yachtGuestDiningImage from "./images/optimized/yacht/yacht-guest-dining.jpg";
import carHeroImage from "./images/optimized/car/car-hero.jpg";
import carFrontImage from "./images/optimized/car/car-front.jpg";
import carCockpitImage from "./images/optimized/car/car-cockpit.jpg";
import carRearCabinImage from "./images/optimized/car/car-rear-cabin.jpg";
import carSeatImage from "./images/optimized/car/car-seat.jpg";
import carTechnologyImage from "./images/optimized/car/car-technology.jpg";
import carArrivalImage from "./images/optimized/car/car-arrival.jpg";
import carExteriorImage from "./images/optimized/car/car-exterior.jpg";

const navItems = [
  { label: "House", href: "#house" },
  { label: "Yacht", href: "#yacht" },
  { label: "Car", href: "#car" },
];

const experienceStats = [
  ["01", "House", "Architecture, wellness, entertainment, and private living"],
  ["02", "Yacht", "Deck leisure, sea activities, dining, and guest spaces"],
  ["03", "Car", "Craftsmanship, comfort, technology, and composed transfers"],
];

const houseMetrics = [
  ["Living", "Indoor and outdoor rooms built around the view"],
  ["Wellness", "Spa, sauna, recovery, and quiet rituals"],
  ["Entertainment", "Dining, music, games, and hosted evenings"],
  ["Architecture", "Stone, glass, water, terraces, and mountain light"],
];

const yachtMetrics = [
  ["Decks", "Sun, shade, lounge, jacuzzi, and open water access"],
  ["Leisure", "Swimming, tender moments, coastal cruising, and sunset hosting"],
  ["Dining", "Open-air service and intimate interior guest settings"],
  ["Stays", "Private salon and guest accommodation atmosphere"],
];

const carMetrics: [string, string][] = [
  ["Comfort", "Quiet rear cabin with executive passenger space"],
  ["Craft", "Leather, stitching, trim, and soft-touch surfaces"],
  ["Technology", "Digital cockpit, navigation, lighting, and rear controls"],
  ["Performance", "Long-wheelbase composure with discreet power"],
];

type StoryMoment = {
  eyebrow: string;
  title: string;
  text: string;
  image: StaticImageData;
  alt: string;
};

const houseMoments: StoryMoment[] = [
  {
    eyebrow: "Architecture",
    title: "A hillside residence shaped by water, stone, glass, and light.",
    text: "The first chapter opens with a sculptural facade, broad terraces, and a pool that turns the house into a private resort from arrival to late evening.",
    image: houseArchitectureImage,
    alt: "Modern hillside house with pool, glass terraces, and mountain backdrop at dusk",
  },
  {
    eyebrow: "Indoor / outdoor",
    title: "Rooms dissolve into terraces, gardens, and the pool edge.",
    text: "Wide openings pull the landscape into the living room, so dining, conversation, and quiet mornings move naturally between interior comfort and open air.",
    image: houseLivingImage,
    alt: "Luxury living room opening directly onto the pool terrace",
  },
  {
    eyebrow: "Wellness",
    title: "A private recovery layer for sauna, spa, movement, and reset.",
    text: "Wellness is treated as part of daily life, not an amenity hidden away: warm timber, glass, gym areas, and spa rituals sit within the same private world.",
    image: houseWellnessImage,
    alt: "Private sauna and wellness area inside the house",
  },
  {
    eyebrow: "Entertainment",
    title: "Evenings shift from piano and wine to games, dining, and poolside air.",
    text: "The house supports hosted nights with composed entertainment spaces, intimate lighting, and enough variety for guests to find their own rhythm.",
    image: houseEntertainmentImage,
    alt: "Entertainment room with piano, dining, wine storage, and ambient lighting",
  },
];

const yachtMoments: StoryMoment[] = [
  {
    eyebrow: "Deck life",
    title: "The upper deck is staged for sun, shade, water, and conversation.",
    text: "A jacuzzi, lounge seating, sea air, and open horizons make the yacht feel like a private beach lounge moving with the coastline.",
    image: yachtJacuzziImage,
    alt: "Yacht upper deck jacuzzi with sea and coastline view",
  },
  {
    eyebrow: "Onboard activity",
    title: "The day expands into swimming, tenders, and sunset movement.",
    text: "Decks are organized for active moments as much as stillness: water access, leisure equipment, and the transition from afternoon sun to evening light.",
    image: yachtSunsetImage,
    alt: "Yacht deck at sunset with water access and tender equipment",
  },
  {
    eyebrow: "Dining",
    title: "Meals happen close to the water, with every table framed by the horizon.",
    text: "Open-air dining keeps service relaxed and cinematic, while the interior salon gives guests a quieter place for late conversation.",
    image: yachtDiningDeckImage,
    alt: "Open-air yacht dining deck with table set toward the sea",
  },
  {
    eyebrow: "Guest spaces",
    title: "The interior keeps the same tone: polished, private, and unhurried.",
    text: "Salon and guest accommodation areas add depth to the charter, turning the yacht from a day platform into a complete private setting.",
    image: yachtSalonImage,
    alt: "Luxury yacht interior salon with polished finishes and lounge seating",
  },
];

const carMoments: StoryMoment[] = [
  {
    eyebrow: "Comfort",
    title: "A quiet rear cabin composed for private transfers.",
    text: "The car chapter returns to high-resolution imagery that focuses on passenger calm, long-wheelbase space, soft surfaces, and chauffeur-grade privacy.",
    image: carRearCabinImage,
    alt: "Mercedes S-Class rear cabin with premium passenger seating",
  },
  {
    eyebrow: "Craftsmanship",
    title: "Leather, stitching, trim, and lighting carry the same private tone.",
    text: "Close interior details show the material layer of the experience: seat texture, ambient light, polished controls, and a cabin designed to feel quiet.",
    image: carSeatImage,
    alt: "Luxury Mercedes S-Class seat and interior craftsmanship detail",
  },
  {
    eyebrow: "Technology",
    title: "Digital controls and navigation sit inside a calm cockpit.",
    text: "Technology is presented as a discreet part of the service: cockpit displays, lighting, navigation, and rear comfort systems support the journey.",
    image: carTechnologyImage,
    alt: "Mercedes S-Class dashboard technology and digital cockpit",
  },
  {
    eyebrow: "Arrival",
    title: "The exterior keeps the handover composed, dark, and precise.",
    text: "The final car images return to stance and arrival: black paint, chrome details, clean surfaces, and the calm confidence of a premium transfer.",
    image: carExteriorImage,
    alt: "Black Mercedes S-Class exterior detail with premium finish",
  },
];

const galleryImages = [
  {
    label: "Pool terrace",
    image: housePoolImage,
    alt: "House pool terrace at twilight with modern architecture",
  },
  {
    label: "Outdoor dining",
    image: houseOutdoorDiningImage,
    alt: "Outdoor dining bar facing the pool and garden",
  },
  {
    label: "Wardrobe suite",
    image: houseWardrobeImage,
    alt: "Luxury walk-in wardrobe with soft lighting and seating",
  },
  {
    label: "Aerial estate",
    image: houseAerialImage,
    alt: "Aerial view of the private estate, pool, tennis court, and gardens",
  },
  {
    label: "Sea terrace",
    image: houseTerraceImage,
    alt: "Bedroom terrace with sea and pool view",
  },
  {
    label: "Yacht profile",
    image: yachtHeroImage,
    alt: "Luxury yacht cruising close to the coast",
  },
  {
    label: "Deck plan",
    image: yachtAerialImage,
    alt: "Top-down yacht deck with pool and tender access",
  },
  {
    label: "Private dining",
    image: yachtGuestDiningImage,
    alt: "Interior yacht dining space with art and guest seating",
  },
  {
    label: "S-Class arrival",
    image: carArrivalImage,
    alt: "Black Mercedes S-Class staged for a private arrival",
  },
  {
    label: "Cockpit detail",
    image: carCockpitImage,
    alt: "Mercedes S-Class cockpit and dashboard detail",
  },
  {
    label: "Front profile",
    image: carFrontImage,
    alt: "Black Mercedes S-Class front profile and lighting",
  },
];

const revealDelay = (delay: string) =>
  ({ "--delay": delay } as CSSProperties);

function MetricStrip({ metrics }: { metrics: string[][] }) {
  return (
    <div className="metric-strip" data-reveal style={revealDelay("120ms")}>
      {metrics.map(([label, text]) => (
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

export default function Home() {
  return (
    <>
      <ScrollOrchestrator />

      <header className="site-header">
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="brand-lockup" href="#top" aria-label="Marbella Private Experience home">
            <span className="brand-symbol" aria-hidden="true">
              M
            </span>
            <span>Marbella Private Experience</span>
          </a>

          <div className="nav-links" aria-label="Journey sections">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                data-nav-item={item.href.replace("#", "")}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a className="nav-cta" href="#reserve">
            Reserve
          </a>

          <MobileNavigation items={navItems} />
        </nav>
      </header>

      <main id="top" className="lux-page">
        <section className="lux-hero" aria-label="Marbella Private Experience private collection">
          <div className="lux-hero-media" data-parallax="0.052">
            <Image
              src={houseHeroImage}
              alt="Marbella Private Experience modern private house with pool and mountain views at dusk"
              fill
              preload
              placeholder="blur"
              sizes="100vw"
            />
          </div>
          <div className="lux-hero-shade" aria-hidden="true" />

          <div className="lux-hero-content" data-reveal>
            <p className="eyebrow">Private collection / House / Yacht / Car</p>
            <h1>Three luxury assets presented as one cinematic world.</h1>
            <p className="hero-copy">
              A scroll-driven presentation for the residence, yacht, and
              chauffeur car. Each chapter reveals the lifestyle, details, and
              movement that make Marbella Private Experience feel private from
              door to dock.
            </p>
            <div className="hero-actions">
              <a href="#house" className="button button-primary">
                Explore House
              </a>
              <a href="#yacht" className="button button-secondary">
                Continue to Yacht
              </a>
            </div>
          </div>

          <aside
            className="experience-rail"
            data-reveal
            style={revealDelay("140ms")}
          >
            <p>Scroll narrative</p>
            {experienceStats.map(([number, label, text]) => (
              <a className="rail-item" href={`#${label.toLowerCase()}`} key={label}>
                <span>{number}</span>
                <strong>{label}</strong>
                <small>{text}</small>
              </a>
            ))}
          </aside>

          <a className="scroll-cue" href="#house" aria-label="Skip to House">
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
                alt="Modern house pool terrace glowing at twilight"
                fill
                placeholder="blur"
                sizes="100vw"
              />
            </div>
            <div className="chapter-shade" aria-hidden="true" />
            <div className="chapter-opener-copy" data-reveal>
              <p className="eyebrow">01 / House</p>
              <h2>A private residence that behaves like a full lifestyle resort.</h2>
              <p>
                The house is the arrival chapter: architecture, pool terraces,
                entertaining rooms, wellness spaces, bedrooms, wardrobes, and
                indoor-outdoor living are revealed as one composed experience.
              </p>
            </div>
            <MetricStrip metrics={houseMetrics} />
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
            <div className="chapter-opener-media yacht-opener-media" data-parallax="0.044">
              <Image
                src={yachtHeroImage}
                alt="Luxury yacht underway near the coast"
                fill
                placeholder="blur"
                sizes="100vw"
              />
            </div>
            <div className="chapter-shade" aria-hidden="true" />
            <div className="chapter-opener-copy" data-reveal>
              <p className="eyebrow">02 / Yacht</p>
              <h2>A floating private retreat for sun, water, dining, and nightfall.</h2>
              <p>
                The yacht extends the residence into the sea: deck areas,
                onboard activities, lounge moments, dining, water access, and
                guest spaces unfold with the same high-service atmosphere.
              </p>
            </div>
            <MetricStrip metrics={yachtMetrics} />
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
            <div className="chapter-opener-media car-opener-media" data-parallax="0.04">
              <Image
                src={carHeroImage}
                alt="Black Mercedes S-Class presented as the Marbella Private Experience chauffeur car"
                fill
                placeholder="blur"
                sizes="100vw"
              />
            </div>
            <div className="chapter-shade" aria-hidden="true" />
            <div className="chapter-opener-copy" data-reveal>
              <p className="eyebrow">03 / Car</p>
              <h2>A composed S-Class transfer for comfort, craft, and arrival.</h2>
              <p>
                The car chapter returns to premium still imagery for now,
                focusing on comfort, craftsmanship, technology, performance,
                interior calm, and the final arrival experience.
              </p>
            </div>
            <MetricStrip metrics={carMetrics} />
          </div>

          <div className="story-panels">
            {carMoments.map((moment, index) => (
              <StoryPanel moment={moment} index={index} key={moment.title} />
            ))}
          </div>
        </section>

        <section className="gallery-chapter" aria-label="Marbella Private Experience detail gallery">
          <div className="gallery-heading" data-reveal>
            <p className="eyebrow">Details in motion</p>
            <h2>Every image works as part of the same private sequence.</h2>
            <p>
              Architecture, terraces, decks, cabins, dining rooms, and sea
              moments are arranged as a continuous visual archive, with the car
              returned to the same image-led cinematic sequence.
            </p>
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

        <ReservationForm />

        <footer className="site-footer">
          <div className="footer-brand">
            <a className="brand-lockup" href="#top" aria-label="Marbella Private Experience home">
              <span className="brand-symbol" aria-hidden="true">
                M
              </span>
              <span>Marbella Private Experience</span>
            </a>
            <p>
              A private presentation across the House, Yacht, and chauffeur Car
              experience.
            </p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#house">House</a>
            <a href="#yacht">Yacht</a>
            <a href="#car">Car</a>
            <a href="#reserve">Reserve</a>
            <a href="/terms">Terms and conditions</a>
          </nav>

          <p className="footer-note">
            Private access is subject to availability, guest verification, and
            final confirmation.
          </p>
        </footer>
      </main>
    </>
  );
}
