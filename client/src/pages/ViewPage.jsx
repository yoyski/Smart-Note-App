import { useState } from "react";
import HeaderViewPage from "../components/HeaderViewPage";
import { useParams } from "react-router";
import { useNoteStore } from "../stores/noteStore";
import ViewCard from "../components/ViewCard";
import useFetchNoteById from "../hooks/useFetchNoteById";

export default function ViewPage() {
  const { setCurrentNote } = useNoteStore();
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useFetchNoteById(id, setLoading, setNote, setCurrentNote);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <HeaderViewPage id={id} />
      <div className="grid">
        <ViewCard key={note._id} note={note} />
      </div>
    </div>
  );
}
