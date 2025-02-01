'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Animation variants for the mobile menu
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3 },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.header
      className="bg-[#0457C1] shadow-md px-6 py-4 text-white"
      initial={false} // Prevents white flash
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <span className="text-white">AY</span>
          <span className="text-white">TECH</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <div className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 text-white hover:text-white focus:outline-none"
            >
              Solutions <ChevronDown size={16} />
            </button>
            <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-[#034B99] text-white shadow-lg p-2 rounded w-40 z-10">
              <Link href="#" className="block px-4 py-2 hover:bg-[#023672] hover:text-white">
                AnyCaaS
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-[#023672] hover:text-white">
                AnyBaaS
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-[#023672] hover:text-white">
                AnyPaaS
              </Link>
            </div>
          </div>
          <Link href="#" className="text-white hover:text-white">
            Services
          </Link>
          <Link href="#" className="text-white hover:text-white">
            About Us
          </Link>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-1 border border-white px-3 py-1 rounded-full text-white hover:border-white hover:text-white transition-colors">
            <Globe size={16} /> EN <ChevronDown size={16} />
          </button>
          <button className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#0457C1] transition-colors">
            Contact Us →
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 flex flex-col space-y-4 border-t border-white pt-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <Link href="#" className="block text-white hover:text-white">
              Solutions
            </Link>
            <Link href="#" className="block text-white hover:text-white">
              Services
            </Link>
            <Link href="#" className="block text-white hover:text-white">
              About Us
            </Link>
            <button className="flex items-center gap-1 border border-white px-3 py-1 rounded-full text-white hover:border-white hover:text-white transition-colors">
              <Globe size={16} /> EN <ChevronDown size={16} />
            </button>
            <button className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-[#0457C1] transition-colors">
              Contact Us →
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
