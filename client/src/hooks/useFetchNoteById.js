import React from "react";
import { useEffect } from "react";
import axios from "axios";

export default function useFetchNoteById(
  id,
  setLoading,
  setNote,
  setCurrentNote,
) {
  useEffect(() => {
    if (!id) return;
    const fetchNoteById = async () => {
      setLoading(true);
      await axios.get(`http://localhost:3000/api/notes/${id}`).then((res) => {
        setNote(res.data);
        setLoading(false);
        setCurrentNote(res.data);
      });
    };

    fetchNoteById();
  }, []);
}
