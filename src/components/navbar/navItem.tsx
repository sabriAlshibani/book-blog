// components/Navbar/NavItem.tsx
"use client";

interface NavItemProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export default function NavItem({ href, label, onClick }: NavItemProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
    >
      {label}
    </a>
  );
}
