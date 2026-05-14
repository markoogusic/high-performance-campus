import { cn } from "@/lib/cn";

interface SectionProps {
  id?: string;
  bg?: "white" | "gray" | "navy";
  children: React.ReactNode;
  className?: string;
}

const bgClasses = {
  white: "bg-white",
  gray: "bg-gray-50",
  navy: "bg-navy-800 text-white",
};

export function Section({ id, bg = "white", children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", bgClasses[bg], className)}
    >
      {children}
    </section>
  );
}
