import React from "react";
import { Sparkles, Wand2, FileText } from "lucide-react";

export const DeleteModal = ({ closeModal, deleteNote }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <h2 className="mb-2 text-lg font-semibold text-[#36656B]">
          Delete note
        </h2>

        <p className="mb-6 text-sm text-[#36656B]/80">
          Are you sure you want to delete this note? This action cannot be
          undone.
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={closeModal}
            className="rounded-full border border-[#36656B] px-5 py-2 text-sm font-medium text-[#36656B] transition hover:bg-[#75B06F] hover:text-white hover:border-none"
          >
            Cancel
          </button>

          <button
            onClick={deleteNote}
            className="rounded-full bg-[#75B06F] border px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export const AiCreateModal = ({ closeModal, aiPrompt, setAiPrompt, handleAiGenerateNote, generating }) => {
  
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={closeModal}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 mb-6">
          <Sparkles size={24} style={{ color: "#75B06F" }} />
          <h2 className="text-2xl font-bold" style={{ color: "#36656B" }}>
            AI Assistant
          </h2>
        </div>
        <div>
          <input
            value={aiPrompt}
            onChange={e => setAiPrompt(e.target.value)}
            type="text"
            placeholder="What should the note be about?"
            className="w-full p-3 rounded-lg mb-4 border-2 focus:outline-none"
            style={{ borderColor: "#75B06F", color: "#36656B" }}
          />
          <button
            className="w-full py-3 rounded-xl text-white font-semibold transition-all hover:shadow-md disabled:opacity-50 cursor-pointer"
            style={{ backgroundColor: "#75B06F" }}
            onClick={handleAiGenerateNote}
            disabled={generating}
          >
            {generating ? "Generating..." : "Generate Note"}
          </button>
        </div>
      </div>
    </div>
  );
};

export const AiUpdateModal = ({ closeModal, handleAiImproveNote, handleAiSummarizeNote, improving, summarizing }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={closeModal}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 mb-6">
          <Sparkles size={24} style={{ color: "#75B06F" }} />
          <h2 className="text-2xl font-bold" style={{ color: "#36656B" }}>
            AI Assistant
          </h2>
        </div>
        <div className="space-y-3">
          <button
            className="disabled:opacity-50 w-full p-4 rounded-xl text-left transition-all hover:shadow-md flex items-center gap-3 cursor-pointer"
            style={{ backgroundColor: "#F0F8A4", color: "#36656B" }}
            onClick={handleAiImproveNote}
            disabled={improving}
          >
            <Wand2 size={20} />
            <div>
              <div className="font-semibold">{improving ? "Improving..." : "Improve Note"}</div>
              <div className="text-sm opacity-70">
                Enhance clarity and structure
              </div>
            </div>
          </button>

          <button
            className="disabled:opacity-50 w-full p-4 rounded-xl text-left transition-all hover:shadow-md flex items-center gap-3 cursor-pointer"
            style={{ backgroundColor: "#DAD887", color: "#36656B" }}
            onClick={handleAiSummarizeNote}
            disabled={summarizing}
          >
            <FileText size={20} />
            <div>
              <div className="font-semibold">{summarizing ? "Summarizing..." : "Summarize Note"}</div>
              <div className="text-sm opacity-70">Create a concise summary</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
