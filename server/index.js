import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import noteRoutes from "./routes/noteRoutes.js";
import aiRoutes from "./routes/aiRoutes.js"

const app = express();

dotenv.config();
const PORT = process.env.PORT;

app.use
app.use(express.json());
app.use(
  cors({
    origin: "process.env.CLIENT_URL",
    credentials: true,
  }),
);

app.use("/api/notes", noteRoutes);
app.use("/api/ai", aiRoutes)

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
