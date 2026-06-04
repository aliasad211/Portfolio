"use client";

import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo / Name */}
        <div className="logocontent relative w-36 h-12 flex items-center">
          <Link href="#home" onClick={closeMenu} className="relative z-10 w-full h-full flex items-center justify-start">
            <h1>AliAsad</h1>
            <h1>AliAsad</h1>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-md font-medium">
          <Link href="#home" className="hover:text-[#00a6fb] transition-colors">
            Home
          </Link>
          <Link href="#about" className="hover:text-[#00a6fb] transition-colors">
            About
          </Link>
          <Link href="#projects" className="hover:text-[#00a6fb] transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-[#00a6fb] transition-colors">
            Contact
          </Link>
        </nav>
        
        {/* Desktop Hire Me Button */}
        <div className="hidden md:block">
          <Link 
            href="#contact" 
            className="border-[#00a6fb] border-2 hover:bg-[#00a6fb] text-white px-6 py-2 rounded-md font-medium transition-all duration-300"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-[#00a6fb] focus:outline-none p-2 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Smooth Dropdown) */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-black/95 border-b border-slate-800 transition-all duration-350 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col items-center">
          <Link
            href="#home"
            onClick={closeMenu}
            className="w-full text-center py-2 text-lg hover:text-[#00a6fb] transition-colors"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={closeMenu}
            className="w-full text-center py-2 text-lg hover:text-[#00a6fb] transition-colors"
          >
            About
          </Link>
          <Link
            href="#projects"
            onClick={closeMenu}
            className="w-full text-center py-2 text-lg hover:text-[#00a6fb] transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            onClick={closeMenu}
            className="w-full text-center py-2 text-lg hover:text-[#00a6fb] transition-colors"
          >
            Contact
          </Link>
          
          <Link 
            href="#contact" 
            onClick={closeMenu}
            className="w-2/3 text-center border-[#00a6fb] border-2 bg-transparent text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#00a6fb] transition-all duration-300"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </header>
  );
}