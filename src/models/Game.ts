import mongoose, { Document, Schema } from 'mongoose';

export interface IGame extends Document {
  title: string;
  description?: string;
  game_type: 'singleplayer' | 'multiplayer';
  category?: string;
  min_players?: number;
  max_players?: number;
  entry_fee?: number;
  prize_pool?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const gameSchema = new Schema<IGame>(
  {
    title: { type: String, required: true },
    description: { type: String },
    game_type: {
      type: String,
      enum: ['singleplayer', 'multiplayer'],
      required: true,
    },
    category: { type: String },
    min_players: { type: Number, default: 1 },
    max_players: { type: Number, default: 2 },
    entry_fee: { type: Number, default: 0 },
    prize_pool: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Game = mongoose.model<IGame>('Game', gameSchema);
export default Game;
