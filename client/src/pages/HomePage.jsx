import { useEffect, useState } from "react";
import { HeaderHomePage } from "../components/HeaderPage";
import NoteCard from "../components/NoteCard";
import NoteCardSkeleton from "../components/NoteCardSkeleton";
import NotesNotFound from "../components/NotesNotFound";
import api from "../lib/api";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await api.get("/notes");

        setNotes(res.data);
      } catch (err) {
        console.error("Error fetching notes:", err);
        setError("Failed to load notes.");
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="bg-[#F0F8A4] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeaderHomePage />

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid gap-4 mt-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <NoteCardSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="text-red-600 mt-6">
            {error}
          </div>
        )}

        {/* No Notes */}
        {!loading && !error && notes.length === 0 && (
          <NotesNotFound />
        )}

        {/* Notes List */}
        {!loading && !error && notes.length > 0 && (
          <div className="grid gap-4 mt-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
