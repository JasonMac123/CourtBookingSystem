import { create } from "zustand";

interface FilterStore {
  location: string;
  sport: string;
  setLocation: (location: string) => void;
  setSport: (sport: string) => void;
  clearFilters: () => void;
}

export const useFilters = create<FilterStore>((set) => ({
  location: "",
  sport: "",
  setLocation: (location: string) => set({ location }),
  setSport: (sport: string) => set({ sport }),
  clearFilters: () => set({ location: "", sport: "" }),
}));
