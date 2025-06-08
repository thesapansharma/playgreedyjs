import mongoose, { Document, Schema } from 'mongoose';

export interface IGameSession extends Document {
  game_id: mongoose.Types.ObjectId;
  user_id: mongoose.Types.ObjectId;
  start_time?: Date;
  end_time?: Date;
  status: 'active' | 'completed' | 'abandoned';
  score: number;
  result: 'win' | 'lose' | 'draw';
  createdAt?: Date;
  updatedAt?: Date;
}

const gameSessionSchema = new Schema<IGameSession>(
  {
    game_id: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // removed extra space from 'User '
    start_time: { type: Date, default: Date.now },
    end_time: { type: Date },
    status: {
      type: String,
      enum: ['active', 'completed', 'abandoned'],
      default: 'active',
    },
    score: { type: Number, default: 0 },
    result: {
      type: String,
      enum: ['win', 'lose', 'draw'],
      default: 'lose',
    },
  },
  { timestamps: true }
);

const GameSession = mongoose.model<IGameSession>('GameSession', gameSessionSchema);
export default GameSession;
