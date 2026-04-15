import { ExpenseRow } from "@/global/types";
import ExpenseTableRow from "./expense-row";

interface Props {
  expenses: ExpenseRow[];
}

export default function ExpenseTable({ expenses }: Props) {
  if (expenses.length === 0) {
    return (
      <p className="text-sm text-gray-400 text-center py-8">
        No transactions yet
      </p>
    );
  }

  return (
    <div className="w-full overflow-x-auto rounded-xl border border-2 border-[var(--color-bg-elevated)]">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border-[var(--color-bg-elevated)] bg-[var(--color-bg-surface)] text-left">
            <th className="px-4 py-3 font-medium text-[var(--color-text-primary)]">Date</th>
            <th className="px-4 py-3 font-medium text-[var(--color-text-primary)]">Merchant</th>
            <th className="px-4 py-3 font-medium text-[var(--color-text-primary)]">Category</th>
            <th className="px-4 py-3 font-medium text-[var(--color-text-primary)]">Description</th>
            <th className="px-4 py-3 font-medium text-[var(--color-text-primary)]">Type</th>
            <th className="px-4 py-3 font-medium text-[var(--color-text-primary)]t">Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
           <ExpenseTableRow expense={expense} />
          ))}
        </tbody>
      </table>
    </div>
  );
}