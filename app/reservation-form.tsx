"use client";

import { FormEvent, useState } from "react";

import type { Dictionary } from "./lib/dictionaries";
import type { Locale } from "./lib/locales";

type ReservationStatus = {
  tone: "error" | "info" | "success";
  message: string;
} | null;

export function ReservationForm({
  locale,
  reservation,
}: {
  locale: Locale;
  reservation: Dictionary["reservation"];
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<ReservationStatus>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setIsSubmitting(true);
    setStatus({
      tone: "info",
      message: reservation.status.submittingRequest,
    });

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as {
        url?: string;
        error?: string;
      };

      if (!response.ok || !data.url) {
        throw new Error(data.error ?? reservation.status.unableRequest);
      }

      setStatus({
        tone: "info",
        message: reservation.status.submitted,
      });
      window.location.assign(data.url);
    } catch (error) {
      setStatus({
        tone: "error",
        message:
          error instanceof Error
            ? error.message
            : reservation.status.unableRequest,
      });
      setIsSubmitting(false);
    }
  }

  return (
    <section id="reserve" className="section reservation-section">
      <div className="reservation-copy" data-reveal>
        <p className="eyebrow">{reservation.eyebrow}</p>
        <h2>{reservation.title}</h2>
        <p>{reservation.text}</p>
        <p className="reservation-payment-note">{reservation.paymentNote}</p>
      </div>

      <form
        className="reservation-form"
        data-reveal
        onSubmit={handleSubmit}
      >
        <input name="locale" type="hidden" value={locale} />

        <div className="form-pair">
          <label>
            <span>{reservation.fields.name}</span>
            <input
              name="name"
              type="text"
              autoComplete="name"
              placeholder={reservation.fields.namePlaceholder}
              required
            />
          </label>

          <label>
            <span>{reservation.fields.age}</span>
            <input name="age" type="number" min="18" max="120" required />
          </label>
        </div>

        <div className="form-pair">
          <label>
            <span>{reservation.fields.email}</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder={reservation.fields.emailPlaceholder}
              required
            />
          </label>

          <label>
            <span>{reservation.fields.partySize}</span>
            <input
              name="partySize"
              type="number"
              min="1"
              max="12"
              defaultValue="2"
              required
            />
          </label>
        </div>

        <label>
          <span>{reservation.fields.foodAllergies}</span>
          <textarea
            name="foodAllergies"
            placeholder={reservation.fields.foodAllergiesPlaceholder}
            rows={4}
          />
        </label>

        <button className="reserve-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? reservation.submit.loading : reservation.submit.idle}
        </button>

        {status ? (
          <p
            className={`reservation-status is-${status.tone}`}
            role={status.tone === "error" ? "alert" : "status"}
          >
            {status.message}
          </p>
        ) : null}
      </form>
    </section>
  );
}
