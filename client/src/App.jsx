import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NoteEditPage from "./pages/NoteEditPage.jsx";
import ViewPage from "./pages/ViewPage.jsx";

const App = () => {
  //   AI Features:

  // Generate Notes - Click the AI button on an empty note and describe what you want. The AI will create a complete note for you.
  // Generate a JSON object with two fields: "title" and "content". The topic of the note is "How to start with React.js". Generate a title and content, and respond ONLY in JSON format.

  // Example: "A recipe for chocolate chip cookies" or "Meeting notes template"

  // Improve Note - If you have content, the AI can enhance it to be clearer, better structured, and more professional.
  // Improve and enhance the following note content. Make it clearer, better structured, and more professional while keeping the core message. Return ONLY the improved content:\n\n${editData.content}
  // Summarize - Condense long notes into concise summaries with just the key points
  // Create a concise summary of the following note. Keep only the key points. Return ONLY the summary:\n\n${editData.content}`

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
