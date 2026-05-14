import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg border border-gray-100 p-6",
        "shadow-[0_1px_3px_rgba(15,26,51,0.06),0_4px_12px_rgba(15,26,51,0.05)]",
        className
      )}
    >
      {children}
    </div>
  );
}
