import { generateNoteFromPrompt } from "../ai/noteHelper.js";

export const generateNote = async (req, res) => {
  const { prompt } = req.body;

  const instruction = `Generate a note in a JSON object with two fields: "title" and "content". The topic of the note: ${prompt}.If the content contains steps, format each step on a new line, numbered or bulleted as appropriate. Respond ONLY in valid JSON. Do NOT include markdown, code blocks, or extra text.`;

  try {
    const note = await generateNoteFromPrompt(instruction);

    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const improveNote = async (req, res) => {
  const { title, content } = req.body;

  const instruction = `Improve and enhance this following note ${title} and ${content} in a JSON object with two fields: "title" and "content". Make it clearer, better structured, and more professional while keeping the core message. If the content contains steps, format each step on a new line, numbered or bulleted as appropriate. Respond ONLY in valid JSON. Do NOT include markdown, code blocks, or extra text.`;

  try {
    const note = await generateNoteFromPrompt(instruction);

    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const summarizeNote = async (req, res) => {
  const { title, content } = req.body;

  const instruction = `Concise and summarize this following note ${title} and ${content} in a JSON object with two field: "title" and "content". Make it clearer, better structured, and more professional while keeping the core message. Respond ONLY in valid JSON. Do NOT include markdown, code blocks, or extra text.`;

  try {
    const note = await generateNoteFromPrompt(instruction);

    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
