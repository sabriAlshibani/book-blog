"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface IconCircleProps {
  icon?: LucideIcon;
  size?: number;
  withBg?: boolean;
  className?: string;
  bgColor?: string; // custom background or gradient class
  rounded?: "full" | "md" | "lg" | "none";
  tooltip?: string;
  onClick?: () => void;
}

export default function IconCircle({
  icon: Icon,
  size = 40,
  withBg = true,
  className = "",
  bgColor = "bg-gradient-to-r from-blue-500 to-cyan-400",
  rounded = "full",
  tooltip,
  onClick,
}: IconCircleProps) {
  const shape = {
    full: "rounded-full",
    md: "rounded-md",
    lg: "rounded-lg",
    none: "",
  }[rounded];

  return (
    <div
      title={tooltip}
      onClick={onClick}
      className={`flex items-center justify-center cursor-pointer ${shape} ${
        withBg ? bgColor : ""
      }`}
      style={{ width: size + 20, height: size + 20 }}
    >
      {Icon && <Icon className={`text-white ${className}`} size={size} />}
    </div>
  );
}
