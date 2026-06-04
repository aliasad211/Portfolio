"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaDownload,
} from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-black text-white px-6 py-12 md:py-0"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE ANIMATION */}
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left space-y-6 order-2 md:order-1"
        >
          <h1 className="font-['Playfair_Display',serif] font-semibold text-[clamp(44px,7vw,50px)] leading-tight">
            I’m a <span className="text-[#00a6fb] italic">MERN Developer</span>
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
                { icon: <FaFacebookF />, url: "https://facebook.com" },
                { icon: <FaTwitter />, url: "https://twitter.com" },
                { icon: <FaInstagram />, url: "https://instagram.com" },
                { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
              ].map((social, index) => (
                <li key={index}>
                  <a
                    href={social.url}
                    className="w-10 h-10 rounded-full border border-slate-400 flex items-center justify-center hover:text-[#00a6fb] hover:border-[#00a6fb] transition-all"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <a
              href="#projects"
              className="bg-[#00a6fb] px-6 py-3 rounded-md font-semibold hover:bg-[#008be3] transition"
            >
              View My Work
            </a>

            <a
              href="/my-cv.pdf"
              download
              className="border-2 border-[#00a6fb] px-6 py-3 rounded-md flex items-center gap-2 hover:bg-[#00a6fb]/10"
            >
              Download CV <FaDownload />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE ANIMATION */}
        <motion.div
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center items-center order-1 md:order-2"
        >
          <div className="profile-container">
            <div className="innerdiv">
              <Image
                src="/home-img.png"
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