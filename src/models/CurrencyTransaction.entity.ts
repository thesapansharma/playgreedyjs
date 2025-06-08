import { Schema, model, Types } from 'mongoose';

export interface ICurrencyTransaction {
  user_id: Types.ObjectId; // Make sure it's an ObjectId here
  transaction_type: 'earn' | 'spend' | 'deposit' | 'withdraw';
  amount: number;
  transaction_date: Date;
}

const CurrencyTransactionSchema = new Schema<ICurrencyTransaction>(
  {
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    transaction_type: {
      type: String,
      enum: ['earn', 'spend', 'deposit', 'withdraw'],
      required: true,
    },
    amount: { type: Number, required: true },
    transaction_date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const CurrencyTransaction = model<ICurrencyTransaction>(
  'CurrencyTransaction',
  CurrencyTransactionSchema
);
