import React from "react";

export default function NoteInputSpinner() {
  return (
    <div className="flex justify-center items-center h-96">
      <div className="w-12 h-12 border-4 border-t-green-500 border-b-green-500 border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
}
