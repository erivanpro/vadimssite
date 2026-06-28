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
import type { Dictionary } from "./lib/dictionaries";
import type { Locale } from "./lib/locales";

type ReservationStatus = {
  tone: "error" | "info";
  message: string;
} | null;

const googleMapsApiKey =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ??
  "AIzaSyD2s3vyySyBlavEpYIa6cG8R0mpTBJM48Y";

export function ReservationForm({
  bookingCalendar,
  locale,
  pickup: pickupCopy,
  reservation,
}: {
  bookingCalendar: Dictionary["bookingCalendar"];
  locale: Locale;
  pickup: Dictionary["pickup"];
  reservation: Dictionary["reservation"];
}) {
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
        message: reservation.status.missingDate,
      });
      return;
    }

    if (!pickup) {
      setStatus({
        tone: "error",
        message: reservation.status.missingPickup,
      });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setIsSubmitting(true);
    setStatus({
      tone: "info",
      message: reservation.status.openingCheckout,
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
        throw new Error(data.error ?? reservation.status.unableCheckout);
      }

      window.location.assign(data.url);
    } catch (error) {
      setStatus({
        tone: "error",
        message:
          error instanceof Error
            ? error.message
            : reservation.status.unableCheckout,
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

        <BookingCalendar
          copy={bookingCalendar}
          locale={locale}
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
          timeWindow={timeWindow}
          onTimeWindowChange={setTimeWindow}
          partySize={partySize}
          onPartySizeChange={setPartySize}
        />

        <PickupMapPicker
          apiKey={googleMapsApiKey}
          copy={pickupCopy}
          locale={locale}
          value={pickup}
          onChange={setPickup}
        />

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
            <span>{reservation.fields.idNumber}</span>
            <input
              name="idNumber"
              type="text"
              autoComplete="off"
              placeholder={reservation.fields.idNumberPlaceholder}
              required
            />
          </label>

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
