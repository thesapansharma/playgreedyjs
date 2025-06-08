import mongoose, { Document, Schema } from 'mongoose';

export interface ITournamentParticipant extends Document {
  tournament_id: mongoose.Types.ObjectId;
  user_id: mongoose.Types.ObjectId;
  status: 'joined' | 'completed' | 'disqualified';
  points?: number;
  ranking?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const tournamentParticipantSchema = new Schema<ITournamentParticipant>(
  {
    tournament_id: { type: Schema.Types.ObjectId, ref: 'Tournament', required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // removed extra space in 'User '
    status: {
      type: String,
      enum: ['joined', 'completed', 'disqualified'],
      default: 'joined',
    },
    points: { type: Number, default: 0 },
    ranking: { type: Number },
  },
  { timestamps: true }
);

const TournamentParticipant = mongoose.model<ITournamentParticipant>(
  'TournamentParticipant',
  tournamentParticipantSchema
);

export default TournamentParticipant;
