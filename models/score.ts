import mongoose, { Schema } from "mongoose";

const scoreSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },

  score: {
    type: Number,
    required: true,
  },

  wins: {
    type: Number,
    default: 0,
  },

  losses: {
    type: Number,
    default: 0,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Score", scoreSchema);
