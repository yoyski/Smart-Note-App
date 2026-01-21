import { useEffect } from "react";
import axios from "axios";

export default function useFetchNoteById(id, setCurrentNote) {
  useEffect(() => {
    if (!id) return;

    const fetchNoteById = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/notes/${id}`);
        setCurrentNote(res.data);     // Zustand state
      } catch (error) {
        console.error("Failed to fetch note:", error);
      }
    };

    fetchNoteById();
  }, [id, setCurrentNote]); 
}
