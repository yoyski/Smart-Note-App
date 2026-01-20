import { create } from "zustand";

export const useNoteStore = create((set) => ({
  notes: [],
  loading: false,
  selectedNoteId: null,
  currentNote: null, // use this for preview


  setSelectedNoteId: (id) => set({ selectedNoteId: id }),
  setCurrentNote: (note) => set({ currentNote: note })

}));
