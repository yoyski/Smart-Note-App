import { create } from "zustand";

export const useNoteStore = create((set) => ({
  notes: [],
  currentNote: null,
  loading: false,

  // actions
  setNotes: (notes) => set({ notes }),
  addNotes: (note) => set((state) => ({ notes: [...state.notes, note] })),
  setCurrentNote: (note) => set({ currentNote: note }),
  setLoading: (value) => set({ loading: value }),
}));
