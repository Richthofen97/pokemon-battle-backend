import { Request, Response } from "express";
import Score from "../models/score";
import { scoreSchema } from "../utils/validation";

export const createScore = async (req: Request, res: Response) => {
  try {
    // 🔍 DEBUG: Body prüfen
    console.log("BODY:", req.body);

    // 🔍 DEBUG: User prüfen
    console.log("USER:", (req as any).user);

    // 🔍 VALIDATION (Zod)
    const result = scoreSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Ungültige Eingabedaten",
        errors: result.error.flatten(),
      });
    }

    const { score, wins, losses } = result.data;

    const user = (req as any).user;
    const userId = typeof user === "string" ? user : user.id;

    const newScore = await Score.create({
      userId,
      score,
      wins,
      losses,
    });

    return res.status(201).json({
      success: true,
      data: newScore,
    });
  } catch (err) {
    console.log("🔥 LEADERBOARD ERROR:", err);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getLeaderboard = async (req: Request, res: Response) => {
  try {
    const data = await Score.find().sort({ score: -1 }).limit(10);

    return res.json({
      success: true,
      data,
    });
  } catch (err) {
    console.log("🔥 GET LEADERBOARD ERROR:", err);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
