import React from "react";

const DeleteModal = ({ closeModal, deleteNote}) => {
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

export default DeleteModal;
