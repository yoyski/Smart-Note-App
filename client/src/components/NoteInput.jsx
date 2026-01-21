import React from "react";

export default function NoteInput({ note, setNote }) {

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <input
        type="text"
        placeholder="Title"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
        className="w-full text-2xl font-semibold mb-4 p-3 border-b-2 focus:outline-none"
        style={{ borderColor: "#75B06F", color: "#36656B" }}
      />
      <textarea
        placeholder="Start writing..."
        value={note.content}
        onChange={(e) => setNote({ ...note, content: e.target.value })}
        className="w-full h-96 p-3 resize-none focus:outline-none"
        style={{ color: "#36656B" }}
      />
    </div>
  );
}