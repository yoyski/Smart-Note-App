import { Link } from "react-router";
import { ArrowLeft, Pencil, Trash2 } from "lucide-react";

export default function HeaderViewPage({ id }) {
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
          <Link
            className="inline-flex items-center justify-center rounded-lg bg-[#75B06F] p-3 text-white"
          >
            <Trash2 className="h-3 w-3 md:h-6 md:w-6" />
          </Link>
        </div>
      </div>
    </header>
  );
}
