import { Request, Response, NextFunction } from "express";

/**
 * Globaler Error Handler
 * Fängt unerwartete Fehler ab
 */
export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error("ERROR:", err);

  res.status(500).json({
    success: false,
    message: "Interner Serverfehler",
  });
};
