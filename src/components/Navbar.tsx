'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = ['About', 'Services', 'Case Studies', 'Projects'];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-6">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto glass rounded-full py-3 px-8 flex justify-between items-center shadow-2xl relative z-50"
      >
        <Link href="/" className="text-lg font-bold tracking-tight text-white flex items-center group">
          <span className="text-primary group-hover:text-secondary transition-colors duration-300">Bay1</span>
          <span className="ml-1 text-white/90">Consulting Group</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-[13px] font-medium items-center">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="text-white/70 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2 bg-primary text-white rounded-full hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all text-[12px] font-bold tracking-wider uppercase shadow-lg shadow-primary/20"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2 text-white"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined cursor-pointer">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute top-20 left-6 right-6 glass rounded-3xl p-8 shadow-2xl md:hidden flex flex-col items-center space-y-6 z-40"
          >
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold text-white/70 hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-4 bg-primary text-white rounded-2xl font-bold tracking-widest uppercase shadow-lg shadow-primary/20"
            >
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
