"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LandingLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut", when: "afterChildren" }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black select-none"
        >
          {/* Left panel slide out */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "-100%", transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] } }}
            className="absolute top-0 left-0 w-1/2 h-full bg-black border-r border-[#00a6fb]/10"
          />

          {/* Right panel slide out */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "100%", transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] } }}
            className="absolute top-0 right-0 w-1/2 h-full bg-black border-l border-[#00a6fb]/10"
          />

          {/* Loading Content Container */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Glowing Ring */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                rotate: 360,
              }}
              transition={{ 
                scale: { duration: 0.6, ease: "easeOut" },
                opacity: { duration: 0.6 },
                rotate: { repeat: Infinity, duration: 2, ease: "linear" }
              }}
              className="w-20 h-20 rounded-full border-2 border-t-[#00a6fb] border-r-transparent border-b-[#d400d4] border-l-transparent mb-6 shadow-[0_0_20px_rgba(0,166,251,0.3)]"
            />

            {/* Title Text with reveal effect */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl font-bold tracking-widest text-white font-['Playfair_Display',serif]"
              >
                ALI <span className="text-[#00a6fb]">ASAD</span>
              </motion.h1>
            </div>

            {/* Subtitle / Loading progress indicator */}
            <div className="overflow-hidden h-6 flex justify-center items-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="text-xs sm:text-sm tracking-[0.2em] text-slate-400 uppercase"
              >
                Creative MERN Developer
              </motion.p>
            </div>

            {/* Horizontal progress bar */}
            <div className="w-48 h-[2px] bg-slate-800 rounded-full mt-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.1, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#00a6fb] to-[#d400d4]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
