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
    <div className="w-full overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50 text-left">
            <th className="px-4 py-3 font-medium text-gray-500">Date</th>
            <th className="px-4 py-3 font-medium text-gray-500">Merchant</th>
            <th className="px-4 py-3 font-medium text-gray-500">Category</th>
            <th className="px-4 py-3 font-medium text-gray-500">Description</th>
            <th className="px-4 py-3 font-medium text-gray-500">Type</th>
            <th className="px-4 py-3 font-medium text-gray-500 text-right">Amount</th>
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