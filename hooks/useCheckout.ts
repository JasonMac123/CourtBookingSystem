import { create } from "zustand";

import { Reservation } from "@prisma/client";

interface CheckoutModalStore {
  isOpen: boolean;
  reservationData: Reservation | undefined;
  onOpen: () => void;
  onClose: () => void;
}

export const useCheckout = create<CheckoutModalStore>((set) => ({
  isOpen: false,
  reservationData: undefined,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
