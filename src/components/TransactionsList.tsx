import { useEffect, useState } from 'react';

const TransactionsList = () => {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch('/api/transactions');
      const data = await response.json();
      setTransactions(data); // Save the data to state
    };
    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction: any) => (
          <li key={transaction._id}>
            {transaction.amount} - {transaction.category} - {transaction.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;
