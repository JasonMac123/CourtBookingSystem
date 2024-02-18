import { create } from "zustand";

import { CourtReservationEvent } from "@/types";
import { Court } from "@prisma/client";

interface CheckoutModalStore {
  isOpen: boolean;
  reservationData: CourtReservationEvent | undefined;
  courtData: Court | undefined;
  onOpen: () => void;
  onClose: () => void;
  setReservationData: (reservation: CourtReservationEvent) => void;
  setCourtData: (court: Court) => void;
}

export const useCheckout = create<CheckoutModalStore>((set) => ({
  isOpen: false,
  reservationData: undefined,
  courtData: undefined,
  onOpen: () => set({ isOpen: true }),
  onClose: () =>
    set({ isOpen: false, reservationData: undefined, courtData: undefined }),
  setReservationData: (reservation: CourtReservationEvent) =>
    set({ reservationData: reservation }),
  setCourtData: (court: Court) => set({ courtData: court }),
}));
