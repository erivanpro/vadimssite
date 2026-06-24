# Stripe setup

Do not hardcode live Stripe secret keys in the app source.

Create `.env.local` for local development, or add the same values to your
hosting provider's secret/environment variable settings:

```env
STRIPE_LIVE_KEY=sk_live_replace_with_rotated_key
STRIPE_LIVE_WEBHOOK_SECRET=whsec_replace_with_rotated_secret
STRIPE_RESERVATION_PRICE_CENTS=100000
STRIPE_CURRENCY=eur
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Use a newly rotated live key before launching. The previous key was shared in
chat, so it should be treated as exposed.
