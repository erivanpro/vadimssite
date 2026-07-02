# Firebase booking setup

The app writes every reservation form submission to Firestore collection:

```txt
booking
```

Each booking document uses the generated reservation ID as the document ID.
The initial write happens before Stripe Checkout is created, so unpaid,
abandoned, failed, and paid attempts all have a record.

## Booking schema v3

New booking documents include top-level query fields plus structured nested
objects for the access status and guest data:

```txt
booking/{reservationId}
  schemaVersion: 3
  reservationId: string
  bookingStatus: submitted | validation_failed | checkout_created | checkout_error | paid | payment_not_confirmed
  paymentStatus: not_paid | paid | unpaid
  availabilityStatus: requested | limited | held | confirmed | unavailable
  guestName: string
  guestEmail: string
  partySize: number | null
  form:
    availability:
      status: requested
      requiresManualConfirmation: true
      source: private_access_request
    guest:
      name: string
      age: number | null
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
  }
}
```

Do not leave unauthenticated write rules open for a public deployment.
