import express from "express";
import {
  getLeaderboard,
  createScore,
} from "../controllers/leaderboardController";
import { protect } from "../middleware/auth";

const router = express.Router();

router.get("/", getLeaderboard);
router.post("/", protect, createScore);

export default router;
