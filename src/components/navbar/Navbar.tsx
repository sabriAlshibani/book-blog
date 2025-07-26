// components/Navbar/Navbar.tsx
"use client";

import { useState } from "react";
import navData from "@/data/navData";
import NavItem from "./navItem";
import { Menu, ShoppingCart, X } from "lucide-react";
import MobileMenu from "./mobileMenu";
import Button from "../ui/Button";
import IconCircle from "../ui/Icon";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-600">
            {navData.logo.src}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navData.navMenu.map((item) => (
            <NavItem key={item.href} {...item} icon={item.icon} />
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="flex items-center gap-6">
          <Button variant="primary" size="sm">
            {navData.btn.label}
          </Button>
          <IconCircle icon={ShoppingCart} size={20} withBg = {false} className="text-gray-800"/>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 "
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && <MobileMenu onClose={closeMenu} />}
    </header>
  );
}
