'use client';
import { useEffect, useState } from 'react';

type Transaction = {
  _id: string;
  amount: number;
  description: string;
  category: string;
  date: string;
};

export default function TransactionList() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/transactions');
      const data = await res.json();
      setTransactions(data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 border rounded-lg shadow mt-4">
      <h2 className="text-xl font-semibold mb-2">Transactions</h2>
      <ul>
        {transactions.map((txn) => (
          <li key={txn._id} className="mb-2">
            ₹{txn.amount} - {txn.description} ({txn.category}) on {new Date(txn.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
