import { Routes, Route } from "react-router";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const CreatePage = lazy(() => import("./pages/CreatePage.jsx"));
const NoteEditPage = lazy(() => import("./pages/NoteEditPage.jsx"));
const ViewPage = lazy(() => import("./pages/ViewPage.jsx"));


const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="create/ai" element={<CreatePage />} />
          <Route path="note/:id" element={<ViewPage />} />
          <Route path="note/:id/edit" element={<NoteEditPage />} />
        </Routes>
    </div>
  );
};

export default App;