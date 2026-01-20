import { useEffect } from "react";
import HeaderHomePage from "../components/HeaderHomePage";
import { useNoteStore } from "../stores/noteStore";
import NoteCard from "../components/NoteCard";

export default function HomePage() {

  const fetchNotes = useNoteStore((state) => state.fetchNotes);
  const notes = useNoteStore((state) => state.notes);
  const loading = useNoteStore((state) => state.loading);

  useEffect(() => {
    fetchNotes();
  }, [])

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
      <HeaderHomePage />

      <div>
        {loading && <div>Loading...</div>}
        {notes.length === 0 && !loading && <div>No notes available.</div>}
        <div className="grid gap-4">
            {notes.map(note => (
                <NoteCard key={note._id} note={note} />
            ))}
            
        </div>
      </div>
    </div>
  );
}