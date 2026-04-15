import type { ExpenseRow } from "@/global/types";

interface Props {
  expense: ExpenseRow;
}

export default function ExpenseTableRow({ expense }: Props) {
  return (
    <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition">
      <td className="px-4 py-3 text-gray-500">
        {new Date(expense.date).toLocaleDateString()}
      </td>
      <td className="px-4 py-3 font-medium">{expense.merchant ?? "—"}</td>
      <td className="px-4 py-3">
        <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600">
          {expense.category}
        </span>
      </td>
      <td className="px-4 py-3 text-gray-500">{expense.description}</td>
      <td className="px-4 py-3">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            expense.type === "income"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {expense.type}
        </span>
      </td>
      <td
        className={`px-4 py-3 text-right font-medium ${
          expense.type === "income" ? "text-green-600" : "text-red-500"
        }`}
      >
        {expense.type === "expense" ? "−" : "+"}$
        {expense.amount.toFixed(2)}
      </td>
    </tr>
  );
}