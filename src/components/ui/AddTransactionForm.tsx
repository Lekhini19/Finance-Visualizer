import { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Card } from './card';

const AddTransactionForm = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send transaction data to your backend API (we'll create it next)
    const newTransaction = { amount, description, category, date };

    const response = await fetch('/api/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    });

    if (response.ok) {
      alert('Transaction added successfully');
      // Optionally, reset form fields
      setAmount('');
      setDescription('');
      setCategory('');
      setDate('');
    } else {
      alert('Failed to add transaction');
    }
  };

  return (
    <Card className="p-4">
      <h2 className="text-xl font-bold">Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="amount">Amount</Label>
          <Input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="category">Category</Label>
          <Input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="date">Date</Label>
          <Input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="mt-4">
          Add Transaction
        </Button>
      </form>
    </Card>
  );
};

export default AddTransactionForm;
