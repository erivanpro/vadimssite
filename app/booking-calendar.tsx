"use client";

import { useEffect, useMemo, useState } from "react";
import { enUS, es, fr } from "date-fns/locale";
import { DayPicker } from "react-day-picker";

import type { Dictionary } from "./lib/dictionaries";
import type { Locale } from "./lib/locales";

export type BookingTimeWindow =
  | "morning"
  | "afternoon"
  | "sunset"
  | "full_day";

const timeWindowOrder: BookingTimeWindow[] = [
  "full_day",
  "morning",
  "afternoon",
  "sunset",
];

const datePickerLocales = {
  en: enUS,
  es,
  fr,
};

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

function formatBookingDateLabel({
  date,
  emptyLabel,
  locale,
}: {
  date: Date | undefined;
  emptyLabel: string;
  locale: Locale;
}) {
  if (!date) {
    return emptyLabel;
  }

  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function BookingCalendar({
  copy,
  locale,
  selectedDate,
  onDateChange,
  timeWindow,
  onTimeWindowChange,
  partySize,
  onPartySizeChange,
}: {
  copy: Dictionary["bookingCalendar"];
  locale: Locale;
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

  const selectedTimeWindow = copy.timeWindows[timeWindow];
  const selectedAvailability = copy.selectedAvailability
    .replace("{window}", selectedTimeWindow.summaryLabel)
    .replace("{timezone}", timezone);

  return (
    <fieldset className="booking-card booking-calendar-card">
      <legend>{copy.legend}</legend>

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
          locale={datePickerLocales[locale]}
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
        <span>{copy.preferredDate}</span>
        <strong>
          {formatBookingDateLabel({
            date: selectedDate,
            emptyLabel: copy.emptyDateLabel,
            locale,
          })}
        </strong>
        <p>{selectedDate ? selectedAvailability : copy.emptyAvailability}</p>
      </div>

      <div className="booking-controls">
        <label className="booking-party-size">
          <span>{copy.guests}</span>
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

        <div
          className="time-window-group"
          role="radiogroup"
          aria-label={copy.arrivalWindowAria}
        >
          {timeWindowOrder.map((value) => {
            const item = copy.timeWindows[value];

            return (
            <label
              className={`time-window-option${
                timeWindow === value ? " is-active" : ""
              }`}
              key={value}
            >
              <input
                name="bookingTimeWindow"
                type="radio"
                value={value}
                checked={timeWindow === value}
                onChange={() => onTimeWindowChange(value)}
              />
              <span>{item.label}</span>
              <small>{item.detail}</small>
            </label>
            );
          })}
        </div>
      </div>
    </fieldset>
  );
}
