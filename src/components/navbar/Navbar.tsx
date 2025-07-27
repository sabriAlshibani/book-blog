// components/Navbar/Navbar.tsx
"use client";

import { useState } from "react";
import navData from "@/data/navData";
import NavItem from "./navItem";
import { Menu, ShoppingCart, X } from "lucide-react";
import Button from "../ui/Button";
import IconCircle from "../ui/Icon";
import { AnimatePresence, motion } from "framer-motion";
import { goToTop, toggleMenu } from "../utils/logic";
import ScrollTop from "../ui/ScrollTop";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  return (
     <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`w-full fixed top-0 z-50 max-h-[12vh] bg-white shadow-sm`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-600">
            {navData.logo.src}
          </span>
        </a>


        {/* Desktop Navigation */}
        <div className="flex items-center space-x-10">
          <ul className="hidden lg:flex items-center space-x-6">
               {navData.navMenu.map((item) => (
            <NavItem key={item.href} {...item} icon={item.icon} />
          ))}
          </ul>

          <Button
            variant="primary"
            size="sm"
            href={navData.btn.href}
            className="max-md:hidden shrink-0"
          >
            {navData.btn.label}
          </Button>
          {/* Hamburger Button */}
          <button
            onClick={(e) => toggleMenu(e, setIsMenuOpen, isMenuOpen)}
            className="lg:hidden text-primary hover:text-secondary transition-colors duration-300 w-8 h-8"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-[12vh] left-0 w-full bg-white z-40"
            >
              <div className="flex flex-col space-y-6 py-4">
                <ul className="flex flex-col space-y-6 px-8">
                  {navData.navMenu.map((item, index) => (
                    <NavItem
                      key={index}
                      href={item.href}
                      label={item.label}
                      icon={item.icon}
                      className="flex justify-between not-last:border-b border-gray-300"
                    />
                  ))}
                </ul>
                <Button
                  variant="primary"
                  size="sm"
                  href={navData.btn.href}
                  className="mx-4"
                >
                  {navData.btn.label}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Scroll to Top Button */}
      <ScrollTop scrolled={isScrolled} onClick={goToTop} />
    </motion.div>
  );
}
