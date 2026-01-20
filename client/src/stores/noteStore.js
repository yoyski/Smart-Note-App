import { create } from "zustand";
import axios from "axios";

export const useNoteStore = create((set) => ({
  notes: [],
  loading: false,
  currentNote: null,
  selectedNoteId:null,

  setSelectedNoteId: (id) => set({ selectedNoteId: id }),


  fetchNoteById: async (id) => {
    set({ loading: true });
    try {
      const res = await axios.get(`http://localhost:3000/api/notes/${id}`, {
        withCredentials: true,
      });
      set({ loading: false });
      set({ currentNote: res.data }); // for previewing
      return res.data; // for editing
    } catch (error) {
      console.error("Failed to fetch note by ID:", error);
    } finally {
      set({ loading: false });
    }
  },
}));
