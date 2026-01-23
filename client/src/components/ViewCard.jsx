import React from "react";
import { checkDate, formatDate } from "../lib/util";

const ViewCard = ({ note }) => {

  return (
    <div className="p-6 rounded-xl shadow-md cursor-pointer transition-all hover:shadow-lg bg-white ">
      <h3 className="text-xl font-semibold mb-2 text-[#36656B]">
        {note.title}
      </h3>
      <p className="opacity-70 mb-3 line-clamp-2 text-[#36656B]">
        {note.content}
      </p>
      <p className="text-sm opacity-50 text-[#36656B]">
        {formatDate(new Date(checkDate(note)))}
      </p>
    </div>
  );
};

export default ViewCard;
