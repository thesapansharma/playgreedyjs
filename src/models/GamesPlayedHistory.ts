import mongoose, { Document, Schema } from 'mongoose';

export interface IGamesPlayedHistory extends Document {
  user_id: mongoose.Types.ObjectId;
  game_id: mongoose.Types.ObjectId;
  total_played?: number;
  total_won?: number;
  total_lost?: number;
  total_drawn?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const gamesPlayedHistorySchema = new Schema<IGamesPlayedHistory>(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // removed extra space
    game_id: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
    total_played: { type: Number, default: 0 },
    total_won: { type: Number, default: 0 },
    total_lost: { type: Number, default: 0 },
    total_drawn: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const GamesPlayedHistory = mongoose.model<IGamesPlayedHistory>(
  'GamesPlayedHistory',
  gamesPlayedHistorySchema
);

export default GamesPlayedHistory;
