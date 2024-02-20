"use client";

import Image from "next/image";

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
  const [step, setStep] = useState(STEPS.INFO);

  const buttonLabel = useMemo(() => {
    if (step === STEPS.INFO) {
      return "Confirm your purchase";
    }
    return "Checkout";
  }, [step]);

  const onSubmit = () => {
    if (step !== STEPS.CHECKOUT) {
      setStep((value) => value + 1);
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
