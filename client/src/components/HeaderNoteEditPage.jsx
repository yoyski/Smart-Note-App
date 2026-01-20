import { Link } from "react-router";
import { ArrowLeft, Sparkles, RotateCcw } from "lucide-react";

export default function HeaderNoteEditPage({ onClick, isNoteUnchanged, id}) {
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
            className="inline-flex items-center justify-center rounded-full bg-[#36656B] p-3 text-white disabled:opacity-50"
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
