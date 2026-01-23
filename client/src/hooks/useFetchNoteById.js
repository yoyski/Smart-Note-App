import { useEffect } from "react";
import axios from "axios";
import { useNoteStore } from "../stores/noteStore";

export default function useFetchNoteById(id, setCurrentNote) {
  const setLoading = useNoteStore((state) => state.setLoading);

  useEffect(() => {
    if (!id) return;

    const fetchNoteById = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:3000/api/notes/${id}`);
        setCurrentNote(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch note:", error);
      }
    };

    fetchNoteById();
  }, [id, setCurrentNote]);
}
