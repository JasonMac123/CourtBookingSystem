"use client";

import Image from "next/image";

import axios from "axios";
import Stripe from "stripe";

import { useCheckout } from "@/hooks/useCheckout";

import Modal from "./modal";
import { CourtWithReservationsAndSports } from "@/types";
import { useMemo, useState } from "react";

interface CheckoutModalProps {
  data: CourtWithReservationsAndSports;
}

enum STEPS {
  INFO = 0,
  CHECKOUT = 1,
}

export const CheckoutModal = ({ data }: CheckoutModalProps) => {
  const { isOpen, onClose, reservationData } = useCheckout();
  const [clientSecret, setClientSecret] = useState<String | null>("");
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

      const responseData = await axios.post("/create-payment-intent", {
        price: totalPrice,
      });

      const paymentIntent: Stripe.PaymentIntent = responseData.data();
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
    bodyContent = <div id="checkout"></div>;
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      buttonTitle={buttonLabel}
      body={bodyContent}
      onSubmit={onSubmit}
    />
  );
};
