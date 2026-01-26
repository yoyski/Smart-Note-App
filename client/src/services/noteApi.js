import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
});

export const updateNote = (id, note) =>
  api.put(`/notes/${id}`, note);

export const aiUpdateNote = (type, note) =>
  api.post(`/ai/${type}`, note);
