'use client';

import AddTransactionForm from "@/components/ui/AddTransactionForm";

export default function Home() {
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Personal Finance Visualizer</h1>
      <AddTransactionForm />
    </main>
  );
}
