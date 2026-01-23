import { HeaderViewPage } from "../components/HeaderPage";
import { useParams } from "react-router";
import { usePersistedState } from "../hooks/usePersistedState";
import { useNavigate } from "react-router";
import ViewCard from "../components/ViewCard";
import useFetchNoteById from "../hooks/useFetchNoteById";
import axios from "axios";
import { useModalStore, useNoteStore } from "../stores/noteStore";
import ViewCardSkeleton from "../components/ViewCardSkeleton";
import DeleteModal from "../components/deleteModal";

export default function ViewPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [viewNote, setViewNote] = usePersistedState(`note-${id}`, {});
  const { isModal, openModal, closeModal } = useModalStore();
  const loading = useNoteStore((state) => state.loading);

  useFetchNoteById(id, setViewNote);

  const deleteNote = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/notes/${id}`);
      navigate("/");
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#F0F8A4] min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HeaderViewPage id={id} onClick={openModal} />
        {isModal && (
          <DeleteModal closeModal={closeModal} deleteNote={deleteNote}/>
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
