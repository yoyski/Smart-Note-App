import React from "react";
import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const HeaderHomePage = () => {
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

export default HeaderHomePage;
