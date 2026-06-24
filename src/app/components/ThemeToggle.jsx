"use client";

import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    console.log("ThemeToggle: Button clicked. Current state theme:", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("light");
      console.log("ThemeToggle: Added 'light' class. HTML classes:", document.documentElement.className);
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.remove("light");
      console.log("ThemeToggle: Removed 'light' class. HTML classes:", document.documentElement.className);
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  if (!mounted) return (
    <div className="w-10 h-10 rounded-full border border-slate-700/50" />
  );

  return (
    <motion.button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full border border-slate-700/50 hover:border-[#00a6fb] bg-white/5 flex items-center justify-center text-white cursor-pointer transition-all duration-300 shadow-md shadow-[#00a6fb]/5"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <FiSun className="text-yellow-400 text-lg" />
      ) : (
        <FiMoon className="text-[#00a6fb] text-lg" />
      )}
    </motion.button>
  );
}
