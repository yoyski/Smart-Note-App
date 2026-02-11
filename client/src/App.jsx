import { Routes, Route } from "react-router";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const CreatePage = lazy(() => import("./pages/CreatePage.jsx"));
const NoteEditPage = lazy(() => import("./pages/NoteEditPage.jsx"));
const ViewPage = lazy(() => import("./pages/ViewPage.jsx"));


const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="create/ai" element={<CreatePage />} />
          <Route path="note/:id" element={<ViewPage />} />
          <Route path="note/:id/edit" element={<NoteEditPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;