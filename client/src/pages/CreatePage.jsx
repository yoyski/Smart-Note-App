import { HeaderCreatePage } from "../components/HeaderPage";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { useModal } from "../stores/modalStore";
import NoteInput from "../components/NoteInput";
import Button from "../components/Button";
import { AiCreateModal } from "../components/Modal";
import { usePersistedState } from "../hooks/usePersistedState";
import api from "../lib/api";

function CreatePage() {
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [note, setNote] = usePersistedState("createNote", {
    title: "",
    content: "",
  });
  const [aiPrompt, setAiPrompt] = useState("");
  const isModal = useModal((state) => state.isModal);
  const openModal = useModal((state) => state.openModal);
  const closeModal = useModal((state) => state.closeModal);

  const navigate = useNavigate();
  const location = useLocation();

  const isNoteEmpty = !note.title.trim() || !note.content.trim();

  const handleAiGenerateNote = async () => {
    try {
      setGenerating(true);
      const res = await api.post("/ai/generate", {
        prompt: aiPrompt,
      });
      setGenerating(false);
      setNote(res.data);
      setAiPrompt("");
      closeModal();
    } catch (error) {
      console.error("Error creating Ai prompt note:", error);
      alert("Failed to create note. Please try again.");
      setGenerating(false);
    }
  };

  const handleSaveNote = async () => {
    if (isNoteEmpty) return;

    try {
      setLoading(true);
      await api.post("/notes/", note);
      navigate("/");
      setNote({ title: "", content: "" });
    } catch (error) {
      console.error("Error creating note:", error);
      alert("Failed to create note. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location.pathname.includes("/ai")) {
      openModal();
    } else {
      closeModal();
    }
  }, [location.pathname]);

  const handleCloseAiModal = () => {
    closeModal();
    navigate("/create", { replace: false });
  };

  return (
    <div className="bg-[#DAD887] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeaderCreatePage openModal={openModal} />
        {isModal && (
          <AiCreateModal
            closeModal={handleCloseAiModal}
            aiPrompt={aiPrompt}
            setAiPrompt={setAiPrompt}
            handleAiGenerateNote={handleAiGenerateNote}
            generating={generating}
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
