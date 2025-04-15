import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
});

const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', transactionSchema);

export default Transaction;
