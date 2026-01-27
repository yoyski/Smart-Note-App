import { HeaderViewPage } from "../components/HeaderPage";
import { useParams } from "react-router";
import { usePersistedState } from "../hooks/usePersistedState";
import { useNavigate } from "react-router";
import ViewCard from "../components/ViewCard";
import useFetchNoteById from "../hooks/useFetchNoteById";
import { useNoteStore } from "../stores/noteStore";
import { useModal } from "../stores/modalStore";
import ViewCardSkeleton from "../components/ViewCardSkeleton";
import { DeleteModal } from "../components/Modal";
import api from "../lib/api";

export default function ViewPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [viewNote, setViewNote] = usePersistedState(`note-${id}`, {});
  const isModal = useModal((state) => state.isModal);
  const openModal = useModal((state) => state.openModal);
  const closeModal = useModal((state) => state.closeModal);

  const loading = useNoteStore((state) => state.loading);

  useFetchNoteById(id, setViewNote);

  const deleteNote = async () => {
    try {
      await api.delete(`/notes/${id}`);
      navigate("/");
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#F0F8A4] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeaderViewPage id={id} openModal={openModal} />
        {isModal && (
          <DeleteModal closeModal={closeModal} deleteNote={deleteNote} />
        )}
        <div className="grid">
          {loading ? (
            <ViewCardSkeleton />
          ) : (
            <ViewCard key={viewNote._id || id} note={viewNote} />
          )}
        </div>
      </div>
    </div>
  );
}
