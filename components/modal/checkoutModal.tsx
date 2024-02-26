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
  };

  if (!reservationData) {
    return;
  }

  let bodyContent = (
    <div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative rounded-xl overflow-auto w-60 h-40">
          <Image
            src={data.imageId}
            alt="picture of court"
            fill
            className="object-fit"
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="space-y-8">
            <h3 className="text-2xl">Court</h3>
            <h3> {data.title}</h3>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl">Court Reservation Time</h3>
            <h3>
              {reservationData.start.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}{" "}
              -{" "}
              {reservationData.end.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </h3>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl">Total Price</h3>
            <h3>
              $
              {reservationData.end.getHours() -
                reservationData.start.getHours() >
              1
                ? data.price *
                  (reservationData.end.getHours() -
                    reservationData.start.getHours())
                : data.price + 10}
            </h3>
          </div>
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
              reservationData={reservationData}
              courtData={data}
            />
          </Elements>
        )}
      </div>
    );
  }

  if (step === STEPS.CONFIRM) {
    bodyContent = (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 py-8">
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
