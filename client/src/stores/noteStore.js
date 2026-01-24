import { create } from "zustand";

export const useNoteStore = create((set) => ({
  currentNote: null,
  loading: false,
  setCurrentNote: (note) => set({ currentNote: note }),
  setLoading: (loading) => set({ loading }),
}));
