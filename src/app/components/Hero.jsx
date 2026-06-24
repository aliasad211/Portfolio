"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
  FaDownload,
} from 'react-icons/fa';

export default function Hero() {

  const text = "MERN Developer";
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timer;
    // Typing speed, Deleting speed, aur Rukne ka time set karne ke liye
    const typingSpeed = isDeleting ? 50 : 150; 

    if (!isDeleting && index < text.length) {
      // Ek-ek karke letter add karna
      timer = setTimeout(() => {
        setCurrentText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && index > 0) {
      // Ek-ek karke letter delete karna
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, typingSpeed);
    } else if (index === text.length && !isDeleting) {
      // Poora word type hone ke baad 1.5 second tak rukna
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (index === 0 && isDeleting) {
      // Poora delete hone ke baad dobara shuru karna
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting]);

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-black text-white px-6 py-12 md:py-0"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE ANIMATION */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.4, ease: "easeOut" }}
          className="text-center md:text-left space-y-6 order-2 md:order-1"
        >
          {/* <h1 className="font-['Playfair_Display',serif] font-semibold text-[clamp(44px,7vw,50px)] leading-tight">
            I’m a <span className="text-[#00a6fb] italic">MERN Developer</span>
          </h1> */}

          {/* AVAILABLE FOR WORK BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-xs font-bold tracking-widest uppercase w-fit mx-auto md:mx-0"
            style={{ background: "linear-gradient(135deg, #00a6fb, #d400d4)" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Available for Work
          </motion.div>

       <h1 className="font-['Playfair_Display',serif] font-semibold text-[clamp(28px,7vw,50px)] leading-tight text-white whitespace-nowrap">
      I'm a{" "}
      <span className="text-[#00a6fb] italic inline-block relative">
        {currentText}
        {/* Blinking Cursor Effect */}
        <span className="ml-1 inline-block w-0.75 h-[0.9em] blinking-cursor animate-pulse absolute bottom-1"></span>
      </span>
    </h1>

          <p className="text-xl sm:text-2xl font-medium text-white">
            Full Stack Web & Mobile Application Developer
          </p>

          <p className="text-base text-slate-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
            I craft modern, scalable, and high-performance web & mobile applications using
            Next.js, React, React Native, Node.js, and the MERN stack.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center md:justify-start pt-2">
            <ul className="flex space-x-4">
              {[
                { icon: <FaGithub />, url: "https://github.com/aliasad211" },
                { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/muhammad-ali-asad-0b34562b1" },
                { icon: <FaInstagram />, url: "https://www.instagram.com/its_me_aliasad785?igsh=NmV4NXdwMHFubTBv" },
                { icon: <FaTelegramPlane />, url: "http://t.me/ItsAliAsad785" },
              ].map((social, index) => (
                <li key={index}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-slate-400 flex items-center justify-center hover:text-[#00a6fb] hover:border-[#00a6fb] transition-all"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* BUTTONS */}
          <div className="flex justify-center md:justify-start gap-2 sm:gap-4 pt-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00a6fb] px-4 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold hover:bg-[#008be3] transition shadow-lg shadow-[#00a6fb]/20 text-sm sm:text-base whitespace-nowrap text-white"
            >
              View My Work
            </motion.a>

            <motion.a
              href="/MAliAsad_CV.pdf"
              download
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              variants={{
                hover: {
                  scale: 1.05,
                  borderColor: "#d400d4",
                  boxShadow: "0px 0px 15px rgba(212, 0, 212, 0.4)",
                  backgroundColor: "rgba(212, 0, 212, 0.05)"
                }
              }}
              className="cv-btn border-2 border-[#00a6fb] px-4 sm:px-6 py-2.5 sm:py-3 rounded-md flex items-center gap-1.5 sm:gap-2 transition-colors duration-300 font-semibold text-sm sm:text-base whitespace-nowrap text-white"
            >
              Download CV{" "}
              <motion.span
                variants={{
                  hover: {
                    y: [0, 4, 0],
                    transition: {
                      repeat: Infinity,
                      duration: 0.8,
                      ease: "easeInOut"
                    }
                  }
                }}
              >
                <FaDownload className="text-[#00a6fb] text-xs sm:text-sm" />
              </motion.span>
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT SIDE ANIMATION */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.4, ease: "easeOut" }}
          className="flex justify-center items-center order-1 md:order-2"
        >
          <div className="profile-container">
            <div className="innerdiv">
              <Image
                src="/image.png"
                alt="Ali Asad"
                width={350}
                height={350}
                priority
                className="my-profile-pic"
              />
              <h3>It's Me</h3>
              <h3>Ali Asad</h3>
              <a href="#contact">Hire me</a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}