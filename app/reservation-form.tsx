"use client";

import { FormEvent, useState } from "react";

type ReservationStatus = {
  tone: "error" | "info";
  message: string;
} | null;

export function ReservationForm() {
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
      message: "Opening Stripe secure checkout...",
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
        throw new Error(data.error ?? "Unable to start Stripe checkout.");
      }

      window.location.assign(data.url);
    } catch (error) {
      setStatus({
        tone: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to start Stripe checkout.",
      });
      setIsSubmitting(false);
    }
  }

  return (
    <section id="reserve" className="section reservation-section">
      <div className="reservation-copy" data-reveal>
        <p className="eyebrow">Reserve</p>
        <h2>Reserve your private experience.</h2>
        <p>
          Share the essentials for pickup, identification, and dining
          preferences. The concierge team can use this request to prepare the
          Club, Yacht, and Car journey.
        </p>
        <p className="reservation-payment-note">
          Payment is completed through Stripe. The preticket becomes active only
          after successful payment confirmation.
        </p>
      </div>

      <form
        className="reservation-form"
        data-reveal
        onSubmit={handleSubmit}
      >
        <label>
          <span>Pickup location</span>
          <input
            name="pickupLocation"
            type="text"
            autoComplete="street-address"
            placeholder="Hotel, residence, airport, or marina"
            required
          />
        </label>

        <div className="form-pair">
          <label>
            <span>Name</span>
            <input
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Full name"
              required
            />
          </label>

          <label>
            <span>Age</span>
            <input name="age" type="number" min="18" max="120" required />
          </label>
        </div>

        <div className="form-pair">
          <label>
            <span>ID number</span>
            <input
              name="idNumber"
              type="text"
              autoComplete="off"
              placeholder="Passport or national ID"
              required
            />
          </label>

          <label>
            <span>Email</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="name@example.com"
              required
            />
          </label>
        </div>

        <label>
          <span>Food allergies</span>
          <textarea
            name="foodAllergies"
            placeholder="List allergies, dietary restrictions, or write none"
            rows={4}
          />
        </label>

        <button className="reserve-submit" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Opening secure payment" : "Pay and reserve my experience"}
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
