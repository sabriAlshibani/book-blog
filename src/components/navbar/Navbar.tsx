// components/Navbar/Navbar.tsx
"use client";

import { useState } from "react";
import navData from "@/data/navData";
import NavItem from "./navItem";
import { Menu, X } from "lucide-react";
import MobileMenu from "./mobileMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          {navData.logo?.src && (
            <img
              src={navData.logo.src}
              alt={navData.logo.alt || "Logo"}
              className="h-8 w-auto"
            />
          )}
          <span className="text-xl font-bold text-blue-600">
            {navData.logo.alt || "BookBlog"}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navData.navMenu.map((item) => (
            <NavItem key={item.href} {...item} />
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <a
            href={navData.btn.href}
            className="inline-block px-5 py-2 text-sm font-medium bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            {navData.btn.label}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700 dark:text-white">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && <MobileMenu onClose={closeMenu} />}
    </header>
  );
}
