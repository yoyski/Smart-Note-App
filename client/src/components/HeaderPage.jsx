import React from "react";
import { Link } from "react-router";
import { PlusIcon, ArrowLeft, Sparkles, Pencil, Trash2, RotateCcw } from "lucide-react";

export function HeaderHomePage() {
  return (
    <header>
      <div className="w-full py-4 flex items-center justify-between">
        <h1 className="font-bold text-xl md:text-4xl text-[#36656B]">
          My Notes
        </h1>

        <Link
          to="/create"
          className="inline-flex items-center justify-center rounded-full bg-[#75B06F] p-2 text-white"
        >
          <PlusIcon className="h-5 w-5 md:h-8 md:w-8" />
        </Link>
      </div>
    </header>
  );
};

export function HeaderCreatePage() {
  return (
    <header>
      <div className="w-full py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/">
            <ArrowLeft className="text-[#36656B] h-5 w-5 md:h-8 md:w-8" />
          </Link>
          <h1 className="font-bold text-xl md:text-4xl text-[#36656B]">
            Create Note
          </h1>
        </div>
        <Link
          to="/create"
          className="inline-flex items-center justify-center rounded-full bg-[#75B06F] p-3 text-white"
        >
          <Sparkles className="h-3 w-3 md:h-6 md:w-6" />
        </Link>
      </div>
    </header>
  );
};

export function HeaderViewPage({ id, onClick }) {
  return (
    <header>
      <div className="w-full py-4 flex items-center justify-between">
        <Link to="/">
          <ArrowLeft className="text-[#36656B] h-5 w-5 md:h-8 md:w-8" />
        </Link>
        <div className="flex items-center gap-3">
          <Link
            className="inline-flex items-center justify-center rounded-lg bg-[#36656B] p-3 text-white"
            to={`/note/${id}/edit`}
          >
            <Pencil className="h-3 w-3 md:h-6 md:w-6" />
          </Link>
          <button
            className="inline-flex items-center justify-center rounded-lg bg-[#75B06F] p-3 text-white cursor-pointer"
            onClick={onClick}
          >
            <Trash2 className="h-3 w-3 md:h-6 md:w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

export function HeaderNoteEditPage({ onClick, isNoteUnchanged, id}) {
  return (
    <header>
      <div className="w-full py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to={`/note/${id}`}>
            <ArrowLeft className="text-[#36656B] h-5 w-5 md:h-8 md:w-8" />
          </Link>
          <h1 className="font-bold text-xl md:text-4xl text-[#36656B]">
            Update Note
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="disabled:opacity-50 inline-flex items-center justify-center rounded-full bg-[#36656B] p-3 text-white"
            onClick={onClick}
            disabled={isNoteUnchanged}
          >
            <RotateCcw className="h-3 w-3 md:h-6 md:w-6" />
          </button>
          <button
            className="inline-flex items-center justify-center rounded-full bg-[#75B06F] p-3 text-white"
          >
            <Sparkles className="h-3 w-3 md:h-6 md:w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
