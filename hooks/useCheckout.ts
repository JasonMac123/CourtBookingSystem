import { create } from "zustand";

interface CheckoutModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCheckout = create<CheckoutModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
