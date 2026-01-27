import { useEffect } from "react";
import { useNoteStore } from "../stores/noteStore";
import api from "../lib/api";

export default function useFetchNoteById(id, setCurrentNote) {
  const setLoading = useNoteStore((state) => state.setLoading);

  useEffect(() => {
    if (!id) return;

    const fetchNoteById = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/notes/${id}`);
        setCurrentNote(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch note:", error);
      }
    };

    fetchNoteById();
  }, [id, setCurrentNote]);
}
