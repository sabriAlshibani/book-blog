// components/Navbar/MobileMenu.tsx
"use client";

import navData from "@/data/navData";
import NavItem from "./navItem";


interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-3">
      <div className="flex flex-col gap-1 px-4">
        {navData.navMenu.map((item) => (
          <NavItem key={item.href} {...item} onClick={onClose} />
        ))}
      </div>
    </div>
  );
}
