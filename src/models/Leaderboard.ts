import mongoose, { Document, Schema } from 'mongoose';

export interface ILeaderboard extends Document {
  user_id: mongoose.Types.ObjectId;
  game_id: mongoose.Types.ObjectId;
  total_score: number;
  rank?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const leaderboardSchema = new Schema<ILeaderboard>(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // fixed space in 'User '
    game_id: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
    total_score: { type: Number, required: true },
    rank: { type: Number },
  },
  { timestamps: true }
);

const Leaderboard = mongoose.model<ILeaderboard>('Leaderboard', leaderboardSchema);
export default Leaderboard;
