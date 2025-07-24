"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-colors rounded-xl px-5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

  let variantClasses = "";

  if (variant === "primary") {
    variantClasses = "bg-blue-600 text-white hover:bg-blue-700";
  } else if (variant === "secondary") {
    variantClasses = "bg-gray-100 text-gray-900 hover:bg-gray-200";
  } else if (variant === "outline") {
    variantClasses =
      "border border-gray-300 text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800";
  }

  const finalClasses = `${baseClasses} ${variantClasses} ${className}`;

  return (
    <button
      onClick={onClick}
      type={type}
      className={finalClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
