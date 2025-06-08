import { Document, Schema, model } from 'mongoose';

// 1. Define IUser interface for TypeScript type safety
export interface IUser {
  username: string;
  email: string;
  password_hash: string;
  phone_number: string;
  profile_picture_url?: string;
  total_winnings: number;
  createdAt: Date;
  updatedAt: Date;
}

// 2. Define schema with proper types
const userSchema = new Schema<IUser>(
  {
    username:    { type: String, unique: true, required: true },
    email:       { type: String, unique: true, required: true },
    password_hash: { type: String, required: true },
    phone_number:{ type: String, unique: true, required: true },
    profile_picture_url: String,
    total_winnings: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// 3. Create typed model
const User = model<IUser>('User', userSchema);

export default User;

