import mongoose, { Document, Schema } from 'mongoose';

export interface IUserReward extends Document {
  user_id: mongoose.Types.ObjectId;
  reward_type: 'cash' | 'item' | 'bonus';
  reward_amount?: number;
  reward_item_id?: mongoose.Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
}

const userRewardSchema = new Schema<IUserReward>(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // fixed extra space in 'User '
    reward_type: {
      type: String,
      enum: ['cash', 'item', 'bonus'],
      required: true,
    },
    reward_amount: { type: Number },
    reward_item_id: { type: Schema.Types.ObjectId, ref: 'Item' },
  },
  { timestamps: true }
);

const UserReward = mongoose.model<IUserReward>('UserReward', userRewardSchema);
export default UserReward;
