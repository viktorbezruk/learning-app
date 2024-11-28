import { Router } from "express";
import { getLearningContent } from "../controllers/learningController";

const router = Router();

router.get("/", getLearningContent);

export default router;
