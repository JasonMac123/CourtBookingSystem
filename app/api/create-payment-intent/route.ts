import { NextRequest, NextResponse } from "next/server";

import stripe from "@/lib/stripe";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount } = body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "cad",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return NextResponse.json(paymentIntent);
  } catch (e: any) {
    throw new Error(e);
  }
}
