export interface ExpenseRow{
  id: string;
  type: "expense" | "income";
  amount: number; 
  date: string; 
  description: string;
  category: string;
  merchant: string | null;
  paymentMethod: string | null;
  receiptUrl: string | null;
  notes: string | null;
  createdAt: string; 
}