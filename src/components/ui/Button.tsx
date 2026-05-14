import { cn } from "@/lib/cn";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "white";
  size?: "md" | "lg";
  href?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const variantClasses = {
  primary:
    "bg-navy-800 text-white hover:bg-navy-900 focus-visible:ring-2 focus-visible:ring-navy-700",
  secondary:
    "border-2 border-navy-800 text-navy-800 hover:bg-navy-50 focus-visible:ring-2 focus-visible:ring-navy-700",
  ghost:
    "text-navy-800 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-navy-700",
  white:
    "bg-white text-navy-900 hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-white",
};

const sizeClasses = {
  md: "px-5 py-2.5 text-sm font-medium",
  lg: "px-8 py-3.5 text-base font-semibold",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  type = "button",
  children,
  className,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-md transition-colors duration-150 outline-none focus-visible:ring-offset-2",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
