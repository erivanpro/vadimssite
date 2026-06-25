"use client";

import { useEffect, useMemo, useState } from "react";
import { DayPicker } from "react-day-picker";

export type BookingTimeWindow =
  | "morning"
  | "afternoon"
  | "sunset"
  | "full_day";

const timeWindows: Array<{
  value: BookingTimeWindow;
  label: string;
  detail: string;
}> = [
  {
    value: "full_day",
    label: "Full day",
    detail: "House, yacht, and car sequence",
  },
  {
    value: "morning",
    label: "Morning",
    detail: "10:00 arrival window",
  },
  {
    value: "afternoon",
    label: "Afternoon",
    detail: "14:00 arrival window",
  },
  {
    value: "sunset",
    label: "Sunset",
    detail: "Golden-hour arrival",
  },
];

function startOfToday() {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  return date;
}

function addDays(date: Date, days: number) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + days);
  return nextDate;
}

export function formatBookingDateValue(date: Date | undefined) {
  if (!date) {
    return "";
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatBookingDateLabel(date: Date | undefined) {
  if (!date) {
    return "Select a preferred booking date";
  }

  return new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function BookingCalendar({
  selectedDate,
  onDateChange,
  timeWindow,
  onTimeWindowChange,
  partySize,
  onPartySizeChange,
}: {
  selectedDate: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
  timeWindow: BookingTimeWindow;
  onTimeWindowChange: (timeWindow: BookingTimeWindow) => void;
  partySize: number;
  onPartySizeChange: (partySize: number) => void;
}) {
  const [timezone, setTimezone] = useState("UTC");
  const firstBookableDate = useMemo(() => addDays(startOfToday(), 1), []);
  const finalBookableMonth = useMemo(() => addDays(firstBookableDate, 180), [
    firstBookableDate,
  ]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC");
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  const selectedTimeWindow = timeWindows.find(
    (item) => item.value === timeWindow,
  );

  return (
    <fieldset className="booking-card booking-calendar-card">
      <legend>Booking calendar</legend>

      <input
        type="hidden"
        name="bookingDate"
        value={formatBookingDateValue(selectedDate)}
      />
      <input type="hidden" name="bookingTimezone" value={timezone} />
      <input type="hidden" name="calendarProvider" value="react-day-picker" />
      <input type="hidden" name="calendarSelectionMode" value="single" />

      <div className="booking-calendar-shell">
        <DayPicker
          animate
          fixedWeeks
          mode="single"
          selected={selectedDate}
          onSelect={onDateChange}
          defaultMonth={selectedDate ?? firstBookableDate}
          startMonth={firstBookableDate}
          endMonth={finalBookableMonth}
          disabled={{ before: firstBookableDate }}
          showOutsideDays
          className="booking-calendar"
          modifiersClassNames={{
            selected: "is-selected",
            today: "is-today",
            disabled: "is-disabled",
          }}
        />
      </div>

      <div className="booking-summary">
        <span>Preferred date</span>
        <strong>{formatBookingDateLabel(selectedDate)}</strong>
        <p>
          {selectedDate
            ? `Availability will be checked for ${selectedTimeWindow?.label.toLowerCase() ?? "the selected window"} in ${timezone}.`
            : "Choose a future date. Final availability is confirmed by concierge after payment."}
        </p>
      </div>

      <div className="booking-controls">
        <label className="booking-party-size">
          <span>Guests</span>
          <input
            name="partySize"
            type="number"
            min="1"
            max="12"
            value={partySize}
            onChange={(event) => {
              const nextValue = Number(event.currentTarget.value);
              onPartySizeChange(
                Number.isFinite(nextValue)
                  ? Math.min(Math.max(nextValue, 1), 12)
                  : 1,
              );
            }}
            required
          />
        </label>

        <div className="time-window-group" role="radiogroup" aria-label="Arrival window">
          {timeWindows.map((item) => (
            <label
              className={`time-window-option${
                timeWindow === item.value ? " is-active" : ""
              }`}
              key={item.value}
            >
              <input
                name="bookingTimeWindow"
                type="radio"
                value={item.value}
                checked={timeWindow === item.value}
                onChange={() => onTimeWindowChange(item.value)}
              />
              <span>{item.label}</span>
              <small>{item.detail}</small>
            </label>
          ))}
        </div>
      </div>
    </fieldset>
  );
}
