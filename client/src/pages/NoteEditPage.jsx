import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useNoteStore } from "../stores/noteStore";
import HeaderNoteEditPage from "../components/HeaderNoteEditPage";
import NoteInput from "../components/NoteInput";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import useFetchNoteById from "../hooks/useFetchNoteById";

export default function TodoEditPage() {
  const { currentNote, setCurrentNote } = useNoteStore();
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useFetchNoteById(id, setLoading, setNote, setCurrentNote);

  const isNoteUnchanged =
    note.title === (currentNote?.title || "") &&
    note.content === (currentNote?.content || "");

  const revertNote = () => {
    return setNote(currentNote);
  };

  const handleChangeNote = async () => {
    try {
      if (!note.title.trim() || !note.content.trim())
        return console.log("Note is empty, not saving.");
      if (isNoteUnchanged) return console.log("No changes");
      setLoading(true);
      await axios
        .put(`http://localhost:3000/api/notes/${id}`, note)
        .then((res) => {
          setCurrentNote(res.data);
          setLoading(false);
          navigate("/");
        });
    } catch (error) {
      console.error("Error updating note:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <HeaderNoteEditPage
        onClick={revertNote}
        isNoteUnchanged={isNoteUnchanged}
        id={id}
      />
      <NoteInput note={note} setNote={setNote} />
      <Button onClick={handleChangeNote} loading={loading}>
        Update Note
      </Button>
    </div>
  );
}
