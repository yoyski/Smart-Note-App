import React from "react";
import HeaderCreatePage from "../components/HeaderCreatePage";
import NoteInput from "../components/NoteInput";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function CreatePage() {
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState({ title: "", content: "" });
  const navigate = useNavigate();

  const handleSaveNote = async () => {
    try {
      if (!note.title.trim() || !note.content.trim())
        return console.log("Note is empty, not saving.");

      setLoading(true);
      const res = await axios.post("http://localhost:3000/api/notes/", note);
      console.log(res.data);
      console.log("Note created successfully");
      navigate("/");
      setNote({ title: "", content: "" });
    } catch (error) {
      console.error("Error creating note:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <HeaderCreatePage />
      <NoteInput note={note} setNote={setNote} />
      <Button onClick={handleSaveNote} loading={loading}>
        Save Note
      </Button>
    </div>
  );
}

export default CreatePage;
