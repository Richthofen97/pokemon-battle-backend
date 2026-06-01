import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";

import leaderboardRoutes from "./routes/leaderboard";

dotenv.config();

dotenv.config();

console.log("TEST ENV MONGO:", process.env.MONGO_URI);
console.log("TEST ENV JWT:", process.env.ACCESS_JWT_SECRET);

const app = express();

app.use(cors());
app.use(express.json());
app.use("/leaderboard", leaderboardRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Backend läuft" });
});

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});

import { errorHandler } from "./middleware/errorHandler";

app.use(errorHandler);
