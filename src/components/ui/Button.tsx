import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-blue text-white hover:bg-blue-200 shadow-[0_4px_14px_rgba(0,101,255,0.4)] hover:shadow-[0_6px_20px_rgba(0,101,255,0.6)]",
  secondary:
    "bg-white/10 text-white hover:bg-white/20 border border-white/20",
  outline:
    "bg-transparent text-white border border-white/30 hover:border-white/60 hover:bg-white/5",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  onClick,
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-[4px] transition-all duration-300";
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
