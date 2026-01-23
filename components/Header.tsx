"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Destinations", href: "#destinations" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-ceylon-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            whileHover={{ scale: 1.02, x: 5 }}
            className="flex items-center space-x-4 cursor-pointer"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-ceylon-teal bg-white shadow-lg">
              <Image
                src="/company-logo.jpeg"
                alt="Ceylon Shine Travel Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-serif tracking-tight leading-tight ${isScrolled ? "text-ceylon-dark" : "text-white"}`}>
                <span className="text-ceylon-gold">Ceylon</span>
                <span>Shine</span>
              </span>
              <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${isScrolled ? "text-ceylon-teal" : "text-ceylon-gold"}`}>
                Vibrant Horizons
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex space-x-10"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                variants={navItemVariants}
                whileHover={{ y: -2, color: "#1da2a0" }}
                className={`nav-link text-sm uppercase tracking-widest ${
                  isScrolled ? "text-ceylon-dark/80" : "text-white/90"
                }`}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ y: -2, color: "#1da2a0" }}
              className={`text-sm font-medium uppercase tracking-widest transition-colors ${
                isScrolled ? "text-ceylon-dark" : "text-white"
              }`}
            >
              Contact
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 1 }}
              whileHover={{ 
                y: -2, 
                scale: 1.05,
                boxShadow: "0 10px 20px -5px rgba(29, 162, 160, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary py-2.5 px-6 text-xs uppercase tracking-widest"
              aria-label="Plan your trip to Sri Lanka"
            >
              Plan a Trip
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2.5 rounded-full transition-colors ${
              isScrolled 
                ? "bg-ceylon-teal/10 text-ceylon-dark" 
                : "bg-white/10 text-white backdrop-blur-md"
            }`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-ceylon-gold/10"
            >
              <div className="px-6 py-8 flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-serif text-ceylon-dark border-b border-ceylon-gold/5 pb-4 last:border-0"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <button className="btn-primary w-full py-4 uppercase tracking-widest text-xs">
                  Plan Your Journey
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
