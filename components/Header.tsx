'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative bg-blue-600 text-white px-6 py-4">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center z-[-1]" 
           style={{ backgroundImage: "url('/Assets/backgrounds/WaveLinesDesktop1.svg')" }} 
      ></div>

      <div className="max-w-7xl mx-auto relative z-10 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <span className="text-white">AY</span>
          <span className="text-gray-200">TECH</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <div className="relative group">
            <button className="flex items-center gap-1">Solutions <ChevronDown size={16} /></button>
            <div className="absolute hidden group-hover:block bg-white text-black shadow-lg p-2 rounded w-40">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-200">AnyCaaS</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-200">AnyBaaS</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-200">AnyPaaS</Link>
            </div>
          </div>
          <Link href="#" className="hover:underline">Services</Link>
          <Link href="#" className="hover:underline">About Us</Link>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-1 border border-white px-3 py-1 rounded-full">
            <Globe size={16} /> EN <ChevronDown size={16} />
          </button>
          <button className="border border-white px-4 py-2 rounded-md">Contact Us →</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden mt-4 flex flex-col space-y-4">
          <Link href="#" className="block py-2">Solutions</Link>
          <Link href="#" className="block py-2">Services</Link>
          <Link href="#" className="block py-2">About Us</Link>
          <button className="flex items-center gap-1 border border-white px-3 py-1 rounded-full">
            <Globe size={16} /> EN <ChevronDown size={16} />
          </button>
          <button className="border border-white px-4 py-2 rounded-md">Contact Us →</button>
        </nav>
      )}
    </header>
  );
}
