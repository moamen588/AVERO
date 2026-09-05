"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, Search, User } from "lucide-react";
import { useCartStore } from "@/store/cart";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const totalItems = useCartStore((state) => state.totalItems());
  const openCart = useCartStore((state) => state.openCart);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isMobileMenuOpen
            ? "hidden"
            : isScrolled
              ? "bg-avero-black/90 backdrop-blur-md border-b border-avero-border"
              : "bg-transparent"
        }`}
      >
        <div className="px-8 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Left — Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-avero-silver text-xs tracking-[0.2em] uppercase hover:text-avero-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-avero-white hover:text-avero-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Center — Logo */}
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2"
            >
              <h1 className="text-avero-white text-2xl md:text-3xl font-light tracking-[0.3em] uppercase">
                AVERO
              </h1>
            </Link>

            {/* Right — Actions */}
            <div className="flex items-center gap-5">
              <button
                className="text-avero-silver hover:text-avero-white transition-colors hidden md:block"
                aria-label="Search"
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                className="text-avero-silver hover:text-avero-white transition-colors hidden md:block"
                aria-label="Account"
              >
                <User size={18} strokeWidth={1.5} />
              </button>
              <button
                onClick={openCart}
                className="relative text-avero-silver hover:text-avero-white transition-colors"
                aria-label="Cart"
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-avero-white text-avero-black text-[10px] font-medium rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-avero-black backdrop-blur-xl lg:hidden"
          >
            {/* Close Button */}
            <div className="absolute top-0 left-0 right-0 px-8 h-20 flex items-center justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-avero-white hover:text-avero-accent transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col h-full pt-28 px-8 pb-8">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="border-b border-avero-border/30"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-5 text-avero-white text-2xl font-light tracking-[0.15em] uppercase hover:text-avero-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
