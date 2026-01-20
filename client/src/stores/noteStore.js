import { create } from "zustand";
import axios from "axios";

export const useNoteStore = create((set, get) => ({
  notes: [],
  loading: false,
  currentNote: null,

  fetchNotes: async () => {
    set({ loading: true });
    try {
      const res = await axios.get("http://localhost:3000/api/notes", {
        withCredentials: true,
      });
      set({ notes: res.data, loading: false });
    } catch (err) {
      console.error("Failed to fetch notes:", err);
    } finally {
      set({ loading: false });
    }
  },

  createNote: async (noteData) => {
    try {
        set({ loading: true });
        const res = await axios.post(
            "http://localhost:3000/api/notes/",
            noteData,
            { withCredentials: true }
        );
        set({ notes: [...get().notes, res.data]});
    } catch (error) {
        console.error("Failed to create note:", error);
    } finally {
        set({ loading: false });
    }
  },

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
    }
  },
}));
