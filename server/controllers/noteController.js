import Note from "../models/Note.js";

export const createNote = async (req, res) => {

  try {
    const { title, content } = req.body;

    const note = new Note({
      title,
      content,
    });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.log("Error in createNote:", error);
    return res.status(500).json({ message: error.message });
  }
};

export const getAllNotes = async (_, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error in getAllNotes:", error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

export const getNoteById = async (req, res) => {
  const { id } = req.params;

  try {
    const note = await Note.findById(id);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.status(200).json(note);
  } catch (error) {
    console.log("Error in getNoteById:", error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true },
    );

    if (!updatedTodo)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json(updatedNote);
  } catch (error) {
    console.log("Error in updateNote:", error);
    res.status(500).json({ message: "Internal Server error" });
  }
};

export const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedNote = await Todo.findByIdAndDelete(id);
        if (!deletedNote) return res.status(404).json({ message: "Note not found" });
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        console.log("Error in deleteNote:", error);
        res.status(500).json({ message: "Internal Server error" });
    }
}
