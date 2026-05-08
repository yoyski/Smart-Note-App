import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import noteRoutes from "./routes/noteRoutes.js";
import aiRoutes from "./routes/aiRoutes.js"

const app = express();

dotenv.config();
// Add this right after dotenv.config()
console.log("GROQ_API_KEY exists:", !!process.env.GROQ_API_KEY);
console.log("PORT:", process.env.PORT);
const PORT = process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use("/notes", noteRoutes);
app.use("/ai", aiRoutes)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Mongodb connected");
    app.listen(PORT, () => {
      console.log("Server is running on port " + PORT);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
