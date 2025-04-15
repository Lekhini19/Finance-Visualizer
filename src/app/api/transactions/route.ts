import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Transaction from 'mongodb+srv://<db_username>:<db_password>@cluster0.rkxvrrl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // This imports your Transaction model

// Connect to MongoDB
const connectDb = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI || 'your_mongo_uri_here');
};

export const GET = async () => {
  await connectDb();
  try {
    const transactions = await Transaction.find(); // Fetch all transactions
    return NextResponse.json(transactions, { status: 200 });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return NextResponse.json({ message: 'Failed to fetch transactions' }, { status: 500 });
  }
};
