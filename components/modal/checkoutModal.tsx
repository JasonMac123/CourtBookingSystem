"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import Stripe from "stripe";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";

import { getStripe } from "@/lib/getStripe";
import { useCheckout } from "@/hooks/useCheckout";

import { CourtWithReservationsAndSports } from "@/types";

import Modal from "./modal";
import CheckoutForm from "../layout/checkoutForm";
import { FaCheck } from "react-icons/fa";

interface CheckoutModalProps {
  data: CourtWithReservationsAndSports;
}

export enum STEPS {
  INFO = 0,
  CHECKOUT = 1,
  CONFIRM = 2,
}

export const CheckoutModal = ({ data }: CheckoutModalProps) => {
  const { isOpen, onClose, reservationData } = useCheckout();
  const [disabled, setDisabled] = useState(false);

  const [clientSecret, setClientSecret] = useState<string>("");
  const [step, setStep] = useState(STEPS.INFO);

  const buttonLabel = useMemo(() => {
    if (step === STEPS.INFO) {
      return "Confirm your purchase";
    }
    return "Checkout";
  }, [step]);

  const onSubmit = async () => {
    if (step === STEPS.INFO) {
      const hours =
        reservationData!.end.getHours() - reservationData!.start.getHours();
      const totalPrice = hours > 1 ? data.price * hours : data.price + 10;

      const responseData = await axios.post("/api/create-payment-intent", {
        amount: totalPrice,
      });

      const paymentIntent: Stripe.PaymentIntent = responseData.data;
      if (!paymentIntent.client_secret) {
        toast("Error, could not proceed with checkout. Try again.");
        return;
      }
      setStep(STEPS.CHECKOUT);
      setDisabled(true);
      setClientSecret(paymentIntent.client_secret);
      return;
    }
    return;
  };

  let bodyContent = (
    <div>
      <div className="flex gap-4">
        <div className="relative rounded-xl overflow-auto mx-auto w-60 h-40">
          <Image
            src={data.imageId}
            alt="picture of court"
            fill
            className="object-fit"
          />
        </div>
      </div>
    </div>
  );

  if (step === STEPS.CHECKOUT) {
    bodyContent = (
      <div id="checkout">
        {clientSecret && (
          <Elements
            stripe={getStripe()}
            options={{ clientSecret: clientSecret }}
          >
            <CheckoutForm
              clientSecret={clientSecret}
              courtId={data.id}
              setStep={setStep}
            />
          </Elements>
        )}
      </div>
    );
  }

  if (step === STEPS.CONFIRM) {
    bodyContent = (
      <div className="w-60 h-40 flex flex-col items-center justify-center gap-4">
        <FaCheck
          size={40}
          color="white"
          className="w-20 h-20 rounded-full bg-green-600"
        />
        <p className="text-lg">
          Booking confirmed. Thanks for booking with us!
        </p>
      </div>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      buttonTitle={buttonLabel}
      body={bodyContent}
      onSubmit={onSubmit}
      disabled={disabled}
    />
  );
};
