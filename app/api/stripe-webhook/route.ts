import { NextResponse } from "next/server";
import Stripe from "stripe";

import { markBookingPaymentFromSession } from "../../lib/booking";
import { getStripe, getStripeWebhookSecret } from "../../lib/stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const webhookSecret = getStripeWebhookSecret();
  const signature = request.headers.get("stripe-signature");

  if (!webhookSecret || !signature) {
    return NextResponse.json(
      { error: "Stripe webhook is not configured." },
      { status: 400 },
    );
  }

  let event: Stripe.Event;

  try {
    const payload = await request.text();
    event = getStripe().webhooks.constructEvent(
      payload,
      signature,
      webhookSecret,
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Invalid Stripe webhook event.";

    return NextResponse.json({ error: message }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    if (
      session.object === "checkout.session" &&
      session.payment_status === "paid"
    ) {
      await markBookingPaymentFromSession(session);

      console.info("Paid Marbella Private Experience reservation received", {
        sessionId: session.id,
        reservationId: session.client_reference_id,
      });
    }
  }

  return NextResponse.json({ received: true });
}
