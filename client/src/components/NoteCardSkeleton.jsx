import React from "react";

const NoteCardSkeleton = () => {
  return (
    <div className="p-6 rounded-xl shadow-md bg-white animate-pulse">
      {/* Title */}
      <div className="h-6 w-3/4 bg-gray-200 rounded mb-3" />

      {/* Content lines */}
      <div className="h-4 w-full bg-gray-200 rounded mb-2" />
      <div className="h-4 w-5/6 bg-gray-200 rounded mb-4" />

      {/* Date */}
      <div className="h-3 w-1/3 bg-gray-200 rounded" />
    </div>
  );
};

export default NoteCardSkeleton;
