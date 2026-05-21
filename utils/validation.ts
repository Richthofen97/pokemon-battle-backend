import { z } from "zod";
/**
 * Validierung für Score-Daten
 * Wird genutzt bei POST /leaderboard
 */
export const scoreSchema = z.object({
  score: z.number().min(0),
  wins: z.number().min(0),
  losses: z.number().min(0),
});
