import { Plus } from "lucide-react";

interface Props {
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  label?: string;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
}

export function AddButton({
  onClick,
  label,
  ariaLabel,
  disabled,
  isLoading,
  type = "button",
  className,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      aria-label={ariaLabel ?? label ?? "Add"}
      className={`flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)] hover:opacity-80 transition disabled:opacity-40 ${className ?? ""}`}
    >
      <Plus size={24} />
      {label && <span className="text-sm font-medium">{label}</span>}
    </button>
  );
}