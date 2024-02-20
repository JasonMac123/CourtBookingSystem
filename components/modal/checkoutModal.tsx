"use client";

import Image from "next/image";

import { useCheckout } from "@/hooks/useCheckout";

import Modal from "./modal";
import { CourtWithReservationsAndSports } from "@/types";

interface CheckoutModalProps {
  data: CourtWithReservationsAndSports;
}

export const CheckoutModal = ({ data }: CheckoutModalProps) => {
  const { isOpen, onClose, reservationData } = useCheckout();

  const bodyContent = (
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

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      buttonTitle="Purchase"
      body={bodyContent}
    />
  );
};
