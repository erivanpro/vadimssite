import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | Marbella Private Experience",
  description:
    "Terms and conditions for the Marbella Private Experience private House, Yacht, and Car experience.",
};

const terms = [
  {
    title: "Private Access",
    text: "Access to the House, Yacht, and Car experience is private, limited, and subject to approval, availability, guest verification, and final confirmation by the concierge team.",
  },
  {
    title: "Reservation Requests",
    text: "Submitting a reservation request does not guarantee entry, transport, yacht access, dining service, or event availability. A booking becomes active only after written confirmation.",
  },
  {
    title: "Identification",
    text: "Guests may be required to provide valid identification before pickup or entry. The information requested is used to verify access and prepare the experience.",
  },
  {
    title: "Chauffeur Pickup",
    text: "Pickup location and timing must be confirmed in advance. Changes may affect the schedule, route, and availability of the residence or yacht portions of the experience.",
  },
  {
    title: "Dining and Allergies",
    text: "Guests should disclose food allergies and dietary restrictions before arrival. The team will make reasonable efforts to accommodate disclosed requirements.",
  },
  {
    title: "Guest Conduct",
    text: "Guests are expected to respect the residence, yacht, staff, drivers, other guests, and all safety instructions. Access may be refused or ended for unsafe, abusive, or disruptive conduct.",
  },
  {
    title: "Yacht and Weather",
    text: "Yacht access may be adjusted, postponed, or cancelled due to weather, marina conditions, captain instructions, safety requirements, or operational restrictions.",
  },
  {
    title: "Final Terms",
    text: "These website terms are a presentation draft. Final commercial terms, cancellation rules, payment requirements, and liability terms should be confirmed in the official booking agreement.",
  },
];

export default function TermsPage() {
  return (
    <main className="legal-page">
      <nav className="legal-nav" aria-label="Terms navigation">
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

      <section className="legal-hero">
        <p className="eyebrow">Terms</p>
        <h1>Terms and conditions.</h1>
        <p>
          These terms outline the core conditions for requesting access to the
          private House, Yacht, and chauffeur Car experience.
        </p>
      </section>

      <section className="legal-list" aria-label="Terms and conditions">
        {terms.map((item, index) => (
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
