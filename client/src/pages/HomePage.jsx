import { useEffect, useState } from "react";
import HeaderHomePage from "../components/HeaderHomePage";
import NoteCard from "../components/NoteCard";
import axios from "axios";
import NotesNotFound from "../components/NotesNotFound";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);
  
  useEffect(() => {
    const fetchNotes = async () => {
      const res = await axios.get("http://localhost:3000/api/notes");
      setNotes(res.data);
      setLoading(false);
    };

    fetchNotes();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <HeaderHomePage />

      <div>
        {loading && <div>Loading...</div>}
        {notes.length === 0 && !loading && <NotesNotFound />}
        <div className="grid gap-4">
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
}
