// components/Navbar/NavItem.tsx
"use client";

import { LucideIcon } from "lucide-react";

interface NavItemProps {
  href: string;
  label: string;
  icon?:LucideIcon;
  onClick?: () => void;
}

export default function NavItem({ href, label,icon : Icon, onClick }: NavItemProps) {
  return (
    <li className="flex items-center justify-center gap-1.5 text-gray-700 hover:text-blue-600  transition">
    <a
      href={href}
      onClick={onClick}
      className="px-2 py-2 text-sm "
    >
      {label}
    </a>
      {Icon && <Icon className="w-5 h-5"/>}

    </li>

  );
}
