// components/Navbar/NavItem.tsx
"use client";

import { LucideIcon } from "lucide-react";

interface NavItemProps {
  href: string;
  label: string;
  icon?:LucideIcon;
  className?:string;
  onClick?: () => void;
}

export default function NavItem({ href, label,icon : Icon, className, onClick }: NavItemProps) {
  return (
    <li className={`flex items-center gap-1.5 text-gray-700 hover:text-blue-600  transition ${className}`}>
    <a
      href={href}
      onClick={onClick}
      className="px-2 py-2 text-sm "
    >
      {label}
    </a>
      {Icon && <Icon className="max-w-5 max-h-5 shrink-0"/>}

    </li>

  );
}
