import React from "react";
import { formatDate } from "../lib/util";

const NoteCard = ({ note }) => {
  return (
    <div key={note._id} className="p-6 rounded-xl shadow-md cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 bg-white ">
      <h3 className="text-xl font-semibold mb-2 text-[#36656B]">
        {note.title}
      </h3>
      <p className="opacity-70 mb-3 line-clamp-2 text-[##36656B]">
        {note.content}
      </p>
      <p className="text-sm opacity-50 text-[#36656B]">
        {formatDate(new Date(note.createdAt))}
      </p>
    </div>
  );
};

export default NoteCard;
