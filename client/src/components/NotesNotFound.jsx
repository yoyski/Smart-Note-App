import React from "react";
import { FileText, Plus, Sparkles } from 'lucide-react'
import { Link } from "react-router";
export default function NotesNotFound() {


  return (
    <div className="text-center py-20">
      <div className="mb-8">
        <div
          className="mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-6"
          style={{ backgroundColor: "#DAD887" }}
        >
          <FileText size={48} style={{ color: "#36656B" }} />
        </div>
        <h2 className="text-2xl font-bold mb-3" style={{ color: "#36656B" }}>
          No Notes Yet
        </h2>
        <p className="text-lg opacity-60 mb-8" style={{ color: "#36656B" }} >
          Start capturing your thoughts and ideas
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
        <Link
          className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-semibold shadow-lg transition-transform hover:scale-105 bg-[#75B06F]"
          to="create"
        >
          <Plus size={20} />
          Create Note
        </Link>

        <Link
          className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold shadow-lg transition-transform hover:scale-105 bg-[#DAD887] text-[#36656B]"
          to="/create/ai"
        >
          <Sparkles size={20} />
          Generate with AI
        </Link>
      </div>
    </div>
  );
}
