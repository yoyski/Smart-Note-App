import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router";
import { useNoteStore } from "../stores/noteStore";
import { useModal } from "../stores/modalStore";
import { usePersistedState } from "../hooks/usePersistedState";
import useFetchNoteById from "../hooks/useFetchNoteById";

import { HeaderNoteEditPage } from "../components/HeaderPage";
import { AiUpdateModal } from "../components/Modal";
import NoteInput from "../components/NoteInput";
import Button from "../components/Button";

import api from "../lib/api";

export default function NoteEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { currentNote, setCurrentNote } = useNoteStore();
  const { isModal, openModal, closeModal } = useModal();

  const [note, setNote] = usePersistedState(`note-${id}`, {});
  const [loading, setLoading] = useState(false);
  const [improving, setImproving] = useState(false);
  const [summarizing, setSummarizing] = useState(false);

  useFetchNoteById(id, setCurrentNote);

  const isNoteUnchanged = useMemo(() => {
    return (
      note.title === (currentNote?.title || "") &&
      note.content === (currentNote?.content || "")
    );
  }, [note, currentNote]);

  const isNoteEmpty = useMemo(() => {
    return !note.title?.trim() || !note.content?.trim();
  }, [note]);

  const handleAiAction = async (type) => {
    try {
      type === "improve" ? setImproving(true) : setSummarizing(true);

      const res = await api.post(`/ai/${type}`, note);
      setNote(res.data);
      closeModal();
    } catch (error) {
      console.error(`Error ${type} AI note:`, error);
      alert(`Failed to ${type} note. Please try again.`);
    } finally {
      setImproving(false);
      setSummarizing(false);
    }
  };

  const handleUpdateNote = async () => {
    if (isNoteEmpty) return;

    try {
      setLoading(true);
      const res = await api.put(`/notes/${id}`, note);
      setCurrentNote(res.data);
      navigate("/");
    } catch (error) {
      console.error("Error updating note:", error);
    } finally {
      setLoading(false);
    }
  };

  const revertNote = () => {
    setNote(currentNote);
  };

  return (
    <div className="bg-[#DAD887] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeaderNoteEditPage
          id={id}
          revertNote={revertNote}
          isNoteUnchanged={isNoteUnchanged}
          openModal={openModal}
        />

        {isModal && (
          <AiUpdateModal
            closeModal={closeModal}
            handleAiImproveNote={() => handleAiAction("improve")}
            handleAiSummarizeNote={() => handleAiAction("summarize")}
            improving={improving}
            summarizing={summarizing}
          />
        )}

        <NoteInput note={note} setNote={setNote} />

        <Button
          onClick={handleUpdateNote}
          loading={loading}
          disabled={isNoteUnchanged || isNoteEmpty}
        >
          Update Note
        </Button>
      </div>
    </div>
  );
}
