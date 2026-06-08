"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, useScroll, useSpring } from 'framer-motion';

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // trigger offset
      
      // Check which section is currently active
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const sectionId = navLinks[i].href.substring(1);
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.4, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-slate-800 text-white"
    >
      {/* Scroll Progress Bar Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00a6fb] to-[#d400d4] origin-left"
        style={{ scaleX }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo / Name */}
        <div className="logocontent relative w-36 h-12 flex items-center">
          <Link href="#home" onClick={closeMenu} className="relative z-10 w-full h-full flex items-center justify-start">
            <h1>AliAsad</h1>
            <h1>AliAsad</h1>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-md font-semibold">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors duration-300 ${
                  isActive ? "text-[#00a6fb]" : "text-slate-300 hover:text-white"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00a6fb] to-[#d400d4]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
        
        {/* Desktop Hire Me Button */}
        <div className="hidden md:block">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="#contact" 
              className="border-[#00a6fb] border-2 hover:bg-[#00a6fb] text-white px-6 py-2 rounded-md font-medium transition-all duration-300"
            >
              Hire Me
            </Link>
          </motion.div>
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
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`w-full text-center py-2 text-lg transition-colors duration-200 ${
                  isActive ? "text-[#00a6fb] font-semibold" : "text-slate-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          
          <Link 
            href="#contact" 
            onClick={closeMenu}
            className="w-2/3 text-center border-[#00a6fb] border-2 bg-transparent text-white px-6 py-2.5 rounded-md font-medium hover:bg-[#00a6fb] transition-all duration-300"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.header>
  );
}