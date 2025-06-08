import mongoose, { Document, Schema } from 'mongoose';

/** Document interface */
export interface ITournament extends Document {
  title: string;
  game_id: mongoose.Types.ObjectId;
  start_date: Date;
  end_date: Date;
  max_players: number;
  prize_pool?: number;
  status: 'upcoming' | 'ongoing' | 'completed';
  createdAt?: Date;
  updatedAt?: Date;
}

/** Schema */
const tournamentSchema = new Schema<ITournament>(
  {
    title: { type: String, required: true },
    game_id: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    max_players: { type: Number, required: true },
    prize_pool: { type: Number, default: 0 },
    status: {
      type: String,
      enum: ['upcoming', 'ongoing', 'completed'],
      default: 'upcoming',
    },
  },
  { timestamps: true },
);

/** Model */
const Tournament = mongoose.model<ITournament>('Tournament', tournamentSchema);
export default Tournament;
