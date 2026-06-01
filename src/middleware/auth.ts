import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

/**
 * Middleware: schützt Routen (Authentication Guard)
 *
 * Zweck:
 * - Prüft ob ein JWT Token im Request ist
 * - Validiert das Token
 * - Speichert User-Daten im Request Objekt
 * - Blockt Anfrage wenn Token fehlt oder ungültig ist
 */
export const protect = (req: Request, res: Response, next: NextFunction) => {
  /**
   * DEBUG (WICHTIG!)
   * Zeigt ob Postman / Frontend überhaupt den Header sendet
   */
  console.log("AUTH HEADER:", req.headers.authorization);

  /**
   * Authorization Header sieht so aus:
   * "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6..."
   */
  const header = req.headers.authorization;

  // ❌ Kein Token vorhanden → Zugriff verweigern
  if (!header) {
    return res.status(401).json({ message: "Kein Token" });
  }

  /**
   * Token extrahieren:
   * "Bearer TOKEN" → wir nehmen nur TOKEN
   */
  const token = header.split(" ")[1];

  try {
    /**
     * Token prüfen + entschlüsseln
     * ACCESS_JWT_SECRET muss identisch sein wie im Auth-Service & Render
     */
    const decoded = jwt.verify(token, process.env.ACCESS_JWT_SECRET as string);

    /**
     * User-Daten aus Token an Request anhängen
     */
    (req as any).user = decoded;

    // ✔ alles ok → weiter zur eigentlichen Route
    next();
  } catch (err) {
    console.log("JWT ERROR:", err);

    // ❌ Token ungültig oder abgelaufen
    return res.status(401).json({ message: "Token ungültig" });
  }
};
