import { ObjectId } from "mongoose";

export interface IScore {
  userId: ObjectId;
  score: number;
  wins: number;
  losses: number;
  date?: Date;
}
