import { HeaderCreatePage } from "../components/HeaderPage";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useModal } from "../stores/modalStore";
import NoteInput from "../components/NoteInput";
import Button from "../components/Button";
import axios from "axios";
import { AiCreateModal } from "../components/Modal";
import { usePersistedState } from "../hooks/usePersistedState";

function CreatePage() {
  const [loading, setLoading] = useState(false);
  const [note, setNote] = usePersistedState("createNote", {
    title:"",
    content:""
  });
  const [aiPrompt, setAiPrompt] = useState('');
  const isModal = useModal((state) => state.isModal);
  const openModal = useModal((state) => state.openModal);
  const closeModal = useModal((state) => state.closeModal);

  const navigate = useNavigate();

  const isNoteEmpty = !note.title.trim() || !note.content.trim();

  const handleSaveNote = async () => {
    if (isNoteEmpty) return;

    try {
      setLoading(true);
      await axios.post("http://localhost:3000/api/notes/", note);
      navigate("/");
    } catch (error) {
      console.error("Error creating note:", error);
      alert("Failed to create note. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#DAD887] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeaderCreatePage openModal={openModal} />
        {isModal && (
          <AiCreateModal
            closeModal={closeModal}
            aiPrompt={aiPrompt}
            setAiPrompt={setAiPrompt}
          />
        )}
        <NoteInput note={note} setNote={setNote} />
        <Button
          onClick={handleSaveNote}
          loading={loading}
          disabled={isNoteEmpty || loading}
        >
          Save Note
        </Button>
      </div>
    </div>
  );
}

export default CreatePage;
