import { useState } from "react";
import { useParams } from "react-router";
import { useNoteStore } from "../stores/noteStore";
import { HeaderNoteEditPage } from "../components/HeaderPage";
import { useNavigate } from "react-router";
import { usePersistedState } from "../hooks/usePersistedState";
import useFetchNoteById from "../hooks/useFetchNoteById";
import NoteInput from "../components/NoteInput";
import Button from "../components/Button";
import axios from "axios";

export default function TodoEditPage() {
  const { currentNote, setCurrentNote } = useNoteStore();
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading] = useState(false);
  const [note, setNote] = usePersistedState(`note-${id}`, {}); //it already has value came from ViewPage store in same key

  useFetchNoteById(id, setCurrentNote);

  const isNoteUnchanged =
    note.title === (currentNote?.title || "") &&
    note.content === (currentNote?.content || "");

  const isNoteEmpty = !note.title.trim() || !note.content.trim();

  const handleChangeNote = async () => {
    try {
      if (isNoteEmpty) return;
      await axios
        .put(`http://localhost:3000/api/notes/${id}`, note)
        .then((res) => {
          setCurrentNote(res.data);
          navigate("/");
        });
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  const revertNote = () => {
    return setNote(currentNote);
  };

  return (
    <div className="bg-[#DAD887] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeaderNoteEditPage
          onClick={revertNote}
          isNoteUnchanged={isNoteUnchanged}
          id={id}
        />
        <NoteInput note={note} setNote={setNote} />
        <Button
          onClick={handleChangeNote}
          loading={loading}
          disabled={isNoteUnchanged || isNoteEmpty}
        >
          Update Note
        </Button>
      </div>
    </div>
  );
}
