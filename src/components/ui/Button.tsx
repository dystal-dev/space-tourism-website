import type { ButtonHTMLAttributes, ReactNode } from "react";

const buttonVariants = {
  primary:
    "h-1200 inline-flex items-center text-preset-8 gap-150 border-b-3 uppercase border-white/0 hover:border-white/50",
  secondary:
    "h-300 inline-flex items-center text-preset-8 gap-150border-b-3 border-white/0 hover:border-white/50",
} as const;

type ButtonVariant = keyof typeof buttonVariants;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`cursor-pointer ${buttonVariants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
