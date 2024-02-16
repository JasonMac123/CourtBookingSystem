import { create } from "zustand";

import { CourtReservationEvent } from "@/types";

interface CheckoutModalStore {
  isOpen: boolean;
  reservationData: CourtReservationEvent | undefined;
  onOpen: () => void;
  onClose: () => void;
  setReservationData: (reservation: CourtReservationEvent) => void;
}

export const useCheckout = create<CheckoutModalStore>((set) => ({
  isOpen: false,
  reservationData: undefined,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false, reservationData: undefined }),
  setReservationData: (reservation: CourtReservationEvent) =>
    set({ reservationData: reservation }),
}));
