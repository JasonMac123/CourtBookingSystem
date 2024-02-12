import { create } from "zustand";

interface FilterStore {
  location: string | undefined;
  sport: string | undefined;
  setLocation: (location: string) => void;
  setSport: (sport: string) => void;
  clearFilters: () => void;
}

export const useFilters = create<FilterStore>((set) => ({
  location: undefined,
  sport: undefined,
  setLocation: (location: string) => set({ location }),
  setSport: (sport: string) => set({ sport }),
  clearFilters: () => set({ location: undefined, sport: undefined }),
}));
