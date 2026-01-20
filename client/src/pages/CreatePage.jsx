import React from "react";
import HeaderCreatePage from "../components/HeaderCreatePage";
import NoteInput from "../components/NoteInput";
import Button from "../components/Button";
import { useNoteStore } from "../stores/noteStore";
import { useState } from "react";
import { useNavigate } from "react-router";

function CreatePage() {
  const createNote = useNoteStore((state) => state.createNote);
  const loading = useNoteStore((state) => state.loading);
  const [data, setData] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handleSaveNote = async () => {
    try {
      if (!data.title.trim() && !data.content.trim()) return;
      await createNote(data);
      console.log("Note created successfully");
      navigate("/");
      setData({ title: "", content: "" });
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
      <HeaderCreatePage />
      <NoteInput data={data} setData={setData} />
      <Button onClick={handleSaveNote} loading={loading}>Save Note</Button>
    </div>
  );
}

export default CreatePage;
