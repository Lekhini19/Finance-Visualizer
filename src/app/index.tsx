import AddTransactionForm from '@/components/AddTransactionForm';

export default function Home() {
  return (
    <div>
      <h1>Welcome to your Finance Tracker</h1>
      <AddTransactionForm /> {/* Add the form to submit transactions */}
      <TransactionsList /> {/* Display the list of transactions */}
    </div>
  );
}
