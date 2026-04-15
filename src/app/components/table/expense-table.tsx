import { ExpenseRow } from "@/global/types";

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
            <tr
              key={expense.id}
              className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition"
            >
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
          ))}
        </tbody>
      </table>
    </div>
  );
}