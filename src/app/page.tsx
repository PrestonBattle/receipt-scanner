"use client";

import Image from "next/image";
import ExpenseTable from "./components/table/expense-table";
import { ExpenseRow } from "@/global/types";
import { AddButton } from "./components/buttons/add-button";
import { useState } from "react";

const sampleExpenses: ExpenseRow[] = [
  {
    id: "1",
    type: "expense",
    amount: 42.50,
    date: "2026-04-10",
    description: "Lunch with client",
    category: "Food",
    merchant: "Chipotle",
    paymentMethod: "card",
    receiptUrl: null,
    notes: null,
    createdAt: "2026-04-10",
  },
  {
    id: "2",
    type: "income",
    amount: 1500.00,
    date: "2026-04-11",
    description: "Website project payment",
    category: "Services",
    merchant: null,
    paymentMethod: "bank transfer",
    receiptUrl: null,
    notes: null,
    createdAt: "2026-04-11",
  },
  {
    id: "3",
    type: "expense",
    amount: 12.99,
    date: "2026-04-12",
    description: "Monthly subscription",
    category: "Utilities",
    merchant: "Adobe",
    paymentMethod: "card",
    receiptUrl: null,
    notes: null,
    createdAt: "2026-04-12",
  },
];

const [isOpen, setOpen] = useState<boolean>(false);

export default function Home() {
  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-1">
        <h1 className="text-2xl font-semibold">Transaction Tracker</h1>
        <AddButton label="Add Transaction" onClick={() => setOpen(true)}/>
      </div>
      <p className="text-sm text-gray-500 mb-8">Your recent income and expenses</p>
      <ExpenseTable expenses={sampleExpenses} />
    </main>
  );
}