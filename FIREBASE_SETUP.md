# Firebase booking setup

The app writes every reservation form submission to Firestore collection:

```txt
booking
```

Each booking document uses the generated reservation ID as the document ID.
The initial write happens before Stripe Checkout is created, so unpaid,
abandoned, failed, and paid attempts all have a record.

## Booking schema v2

New booking documents include top-level query fields plus structured nested
objects for the calendar, availability, pickup, and guest data:

```txt
booking/{reservationId}
  schemaVersion: 2
  reservationId: string
  bookingStatus: submitted | validation_failed | checkout_created | checkout_error | paid | payment_not_confirmed
  paymentStatus: not_paid | paid | unpaid
  bookingDate: YYYY-MM-DD
  bookingTimeWindow: full_day | morning | afternoon | sunset
  availabilityStatus: requested | limited | held | confirmed | unavailable
  pickupLocation: string
  pickupPlaceId: string
  pickupCoordinates: { latitude: number, longitude: number } | null
  form:
    booking:
      requestedDate: YYYY-MM-DD
      timeWindow: full_day | morning | afternoon | sunset
      timezone: string
      calendarProvider: react-day-picker
      calendarSelectionMode: single
    availability:
      status: requested
      requiresManualConfirmation: true
      source: calendar_request
    pickup:
      label: string
      formattedAddress: string
      placeId: string
      latitude: number | null
      longitude: number | null
      mapsUrl: string
      source: google_places_autocomplete | map_click | marker_drag | unknown
    guest:
      name: string
      age: number | null
      idNumber: string
      email: string
      foodAllergies: string
      partySize: number | null
  stripe:
    checkoutSessionId: string | null
    customerId: string | null
    paymentIntentId: string | null
  payment:
    amountTotal: number | null
    currency: string | null
  source:
    ipAddress: string | null
    userAgent: string | null
    origin: string
  createdAt: server timestamp
  requestedAt: server timestamp
  updatedAt: server timestamp
```

The calendar can also be backed by a public read-only availability collection:

```txt
booking_availability/{YYYY-MM-DD}
  date: YYYY-MM-DD
  status: available | limited | held | confirmed | unavailable
  timeWindows:
    full_day: available | limited | held | confirmed | unavailable
    morning: available | limited | held | confirmed | unavailable
    afternoon: available | limited | held | confirmed | unavailable
    sunset: available | limited | held | confirmed | unavailable
  capacity: number | null
  remainingSlots: number | null
  note: string
  updatedAt: server timestamp
```

## Current requirement

The existing `firebase.js` web configuration can initialize Firestore, but it
does not bypass Firestore security rules. If `/api/checkout` returns:

```txt
Missing or insufficient permissions
```

then the Firebase project rules are blocking writes to `booking`.

For a private production setup, use Firebase Admin credentials on the server.
For temporary local testing only, you can allow writes to the booking collection
in the Firebase console rules:

```txt
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /booking/{bookingId} {
      allow create, update: if true;
    }

    match /booking_availability/{dateId} {
      allow read: if true;
      allow create, update, delete: if false;
    }
  }
}
```

Do not leave unauthenticated write rules open for a public deployment.
