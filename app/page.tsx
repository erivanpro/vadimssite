import type { CSSProperties } from "react";
import Image from "next/image";

import { MobileNavigation } from "./mobile-navigation";
import { ReservationForm } from "./reservation-form";
import { ScrollOrchestrator } from "./scroll-orchestrator";
import clubImage from "./images/292_CAM_INT_ZONA_JUEGOS_01-copy-1.jpg";
import arrivalImage from "./images/EL-UNICO-WINNER-1-1024x554.jpg";
import residenceImage from "./images/HD-ZAGALETA-VI_CAM-666-copy.jpg";
import spaImage from "./images/292_CAM_INT_SPA_11-copy-1.jpg";
import yachtImage from "./images/yatch/charter-hbc-yacht.jpg";

const navItems = [
  { label: "Club", href: "#club" },
  { label: "Yacht", href: "#yacht" },
  { label: "Car", href: "#car" },
];

const journeyStats = [
  ["01", "Club", "Private residence, dining, lounge, and wellness"],
  ["02", "Yacht", "Events, entertainment, and leisure at sea"],
  ["03", "Car", "Chauffeur transfer connecting every movement"],
];

const connectedFlow = [
  {
    step: "Club",
    title: "Arrive inside the private residence club.",
    text: "The house opens as an exclusive members club with dining, a hosted lounge, games, wellness rooms, and private service.",
  },
  {
    step: "Yacht",
    title: "Continue the evening on the water.",
    text: "The yacht becomes the second setting for events, music, conversation, and leisure at sea.",
  },
  {
    step: "Car",
    title: "Move invisibly between every point.",
    text: "A chauffeur service picks guests up, transfers them to the house, and connects the residence and yacht without public friction.",
  },
];

const revealDelay = (delay: string) =>
  ({ "--delay": delay } as CSSProperties);

export default function Home() {
  return (
    <>
      <ScrollOrchestrator />

      <header className="site-header">
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="brand-lockup" href="#top" aria-label="El Unico home">
            <span className="brand-symbol" aria-hidden="true">
              U
            </span>
            <span>EL UNICO</span>
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

      <main id="top" className="club-page">
        <section className="club-hero" aria-label="El Unico connected journey">
          <div className="hero-media" data-parallax="0.055">
            <Image
              src={residenceImage}
              alt="Private hillside residence where the El Unico club journey begins"
              fill
              preload
              placeholder="blur"
              sizes="100vw"
              className="hero-image"
            />
          </div>
          <div className="hero-shade" aria-hidden="true" />

          <div className="hero-content" data-reveal>
            <p className="eyebrow">Club / Yacht / Car</p>
            <h1>One private journey in three connected services.</h1>
            <p className="hero-copy">
              El Unico is a continuous members experience: begin inside the
              private residence club, continue the night on the yacht, and move
              between each moment through a discreet chauffeur service.
            </p>
            <div className="hero-actions">
              <a href="#club" className="button button-primary">
                Start at the Club
              </a>
              <a href="#yacht" className="button button-secondary">
                Continue to Yacht
              </a>
            </div>
          </div>

          <aside className="journey-card" data-reveal style={revealDelay("120ms")}>
            <p className="journey-label">The connected experience</p>
            {journeyStats.map(([number, label, text]) => (
              <div className="journey-row" key={label}>
                <span>
                  {number} / {label}
                </span>
                <strong>{text}</strong>
              </div>
            ))}
          </aside>

          <a className="scroll-cue" href="#club" aria-label="Skip to Club section">
            <span>01</span>
            <i aria-hidden="true" />
          </a>
        </section>

        <section
          id="club"
          className="section residence-section"
          data-section-id="club"
        >
          <div className="section-media residence-media" data-reveal data-parallax="0.035">
            <Image
              src={clubImage}
              alt="Private residence club lounge with marble bar and billiards table"
              fill
              placeholder="blur"
              sizes="(max-width: 900px) 100vw, 54vw"
            />
          </div>

          <div className="section-copy" data-reveal style={revealDelay("80ms")}>
            <p className="eyebrow">01 / Club</p>
            <h2>The house becomes the private members club.</h2>
            <p>
              Guests start inside the residence, where dining, drinks, wellness
              rooms, lounge service, and entertainment areas are curated like a
              closed-door club rather than a public venue.
            </p>
            <dl className="detail-list">
              <div>
                <dt>Dining</dt>
                <dd>Hosted meal service in a private residential setting.</dd>
              </div>
              <div>
                <dt>Leisure</dt>
                <dd>Games, bar, wellness, and quiet rooms for members only.</dd>
              </div>
              <div>
                <dt>Privacy</dt>
                <dd>Controlled access, discreet staff, and no public exposure.</dd>
              </div>
            </dl>
          </div>
        </section>

        <section
          id="yacht"
          className="feature-section yacht-section"
          data-section-id="yacht"
        >
          <div className="feature-background" data-parallax="0.045">
            <Image
              src={yachtImage}
              alt=""
              fill
              placeholder="blur"
              sizes="100vw"
            />
          </div>
          <div className="feature-overlay" aria-hidden="true" />
          <div className="feature-copy" data-reveal>
            <p className="eyebrow">02 / Yacht</p>
            <h2>The night continues at sea.</h2>
            <p>
              The yacht is the second chapter of the same experience: a private
              platform for events, entertainment, music, leisure, and coastal
              movement after the residence club.
            </p>
          </div>
        </section>

        <section id="car" className="section car-section" data-section-id="car">
          <div className="car-copy" data-reveal>
            <p className="eyebrow">03 / Car</p>
            <h2>The chauffeur service connects the whole journey.</h2>
            <p>
              The car is not a separate add-on. It is the private thread that
              makes the journey feel seamless: pickup, arrival at the house,
              transfer to the yacht, and the final return handled with the same
              discretion as the club itself.
            </p>
          </div>

          <div className="car-visual" data-reveal data-parallax="0.028">
            <Image
              src={arrivalImage}
              alt="Aerial view of the private residence arrival road for chauffeur access"
              fill
              placeholder="blur"
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <div className="car-visual-shade" aria-hidden="true" />
            <div className="car-panel" data-reveal style={revealDelay("110ms")}>
              <div className="route-line" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="route-stop">
                <strong>Pickup</strong>
                <span>Private chauffeur collection</span>
              </div>
              <div className="route-stop">
                <strong>House</strong>
                <span>Arrival at the members club</span>
              </div>
              <div className="route-stop">
                <strong>Yacht</strong>
                <span>Seamless transfer to sea</span>
              </div>
              <div className="car-callout" aria-hidden="true">
                <span>Discreet route</span>
                <strong>Door to dock</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section journey-section">
          <div className="journey-heading" data-reveal>
            <p className="eyebrow">Continuous flow</p>
            <h2>Three services, one uninterrupted experience.</h2>
          </div>
          <div className="journey-list">
            {connectedFlow.map((item, index) => (
              <article
                className="journey-item"
                key={item.step}
                data-reveal
                style={revealDelay(`${index * 90}ms`)}
              >
                <span>0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section scene-section">
          <div className="scene-heading" data-reveal>
            <p className="eyebrow">The setting</p>
            <h2>The residence and sea experience are designed as one world.</h2>
          </div>

          <div className="scene-stack">
            <article className="scene-item" data-reveal>
              <div className="scene-image" data-parallax="0.025">
                <Image
                  src={spaImage}
                  alt="Luxury wellness room inside the private residence"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 900px) 100vw, 58vw"
                />
              </div>
              <div className="scene-copy">
                <p className="eyebrow">Club atmosphere</p>
                <h3>Spaces for dining, leisure, recovery, and privacy.</h3>
                <p>
                  The residence gives the journey its private foundation before
                  the yacht extends the experience into the night.
                </p>
              </div>
            </article>

            <article className="scene-item" data-reveal style={revealDelay("100ms")}>
              <div className="scene-image" data-parallax="0.025">
                <Image
                  src={arrivalImage}
                  alt="Aerial view of the private estate and arrival road"
                  fill
                  placeholder="blur"
                  sizes="(max-width: 900px) 100vw, 58vw"
                />
              </div>
              <div className="scene-copy">
                <p className="eyebrow">Connected by car</p>
                <h3>Every movement is handled before guests notice it.</h3>
                <p>
                  The chauffeur layer keeps the experience composed: no waiting,
                  no public transfers, and no visible break between destinations.
                </p>
              </div>
            </article>
          </div>
        </section>

        <ReservationForm />

        <footer className="site-footer">
          <div className="footer-brand">
            <a className="brand-lockup" href="#top" aria-label="El Unico home">
              <span className="brand-symbol" aria-hidden="true">
                U
              </span>
              <span>EL UNICO</span>
            </a>
            <p>
              A private journey through the Club, Yacht, and chauffeur Car
              service.
            </p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#club">Club</a>
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
