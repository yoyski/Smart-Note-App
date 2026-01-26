import express from "express";
import { generateNote, improveNote, summarizeNote } from "../controllers/aiController.js";

const router = express.Router();

router.post("/generate", generateNote);
router.post("/improve", improveNote);
router.post("/summarize", summarizeNote);

export default router;
