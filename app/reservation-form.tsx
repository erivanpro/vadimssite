"use client";

import { FormEvent, useState } from "react";

import {
  BookingCalendar,
  type BookingTimeWindow,
} from "./booking-calendar";
import {
  PickupMapPicker,
  type PickupSelection,
} from "./pickup-map-picker";

type ReservationStatus = {
  tone: "error" | "info";
  message: string;
} | null;

const googleMapsApiKey =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ??
  "AIzaSyD2s3vyySyBlavEpYIa6cG8R0mpTBJM48Y";

export function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<ReservationStatus>(null);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [timeWindow, setTimeWindow] =
    useState<BookingTimeWindow>("full_day");
  const [partySize, setPartySize] = useState(2);
  const [pickup, setPickup] = useState<PickupSelection | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedDate) {
      setStatus({
        tone: "error",
        message: "Choose a preferred booking date before payment.",
      });
      return;
    }

    if (!pickup) {
      setStatus({
        tone: "error",
        message: "Select a pickup location from Google Places or the map.",
      });
      return;
    }

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
          Select your preferred date, arrival window, map-verified pickup, and
          guest essentials. The concierge team can use this request to prepare
          the House, Yacht, and Car journey.
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
        <BookingCalendar
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
          timeWindow={timeWindow}
          onTimeWindowChange={setTimeWindow}
          partySize={partySize}
          onPartySizeChange={setPartySize}
        />

        <PickupMapPicker
          apiKey={googleMapsApiKey}
          value={pickup}
          onChange={setPickup}
        />

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
