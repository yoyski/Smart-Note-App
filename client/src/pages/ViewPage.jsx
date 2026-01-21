import HeaderViewPage from "../components/HeaderViewPage";
import { useParams } from "react-router";
import ViewCard from "../components/ViewCard";
import useFetchNoteById from "../hooks/useFetchNoteById";
import { usePersistedState } from "../hooks/usePersistedState";
import { useNavigate } from "react-router";
import axios from "axios";

export default function ViewPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [viewNote, setViewNote] = usePersistedState(`note-${id}`, {});

  useFetchNoteById(id, setViewNote);

  const deleteNote = async() => {
    try {
      await axios.delete(`http://localhost:3000/api/notes/${id}`)
      console.log('Deleted Successfully')
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <HeaderViewPage id={id} onClick={deleteNote}/>
      <div className="grid">
        <ViewCard key={viewNote._id || id} note={viewNote} />
      </div>
    </div>
  );
}
