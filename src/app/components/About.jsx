"use client";

import {
  Code2,
  Rocket,
  BrainCircuit,
  BadgeCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 bg-black px-4 ">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            About <span className="text-[#00a6fb]">Me</span>
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-[#00a6fb] to-[#d400d4] mx-auto mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="/about-img.png"
              alt="Profile"
              className="w-64 h-72 md:w-80 md:h-96 max-w-full object-cover rounded-2xl border-2 border-[#00a6fb] shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-5 text-slate-300">
            <p>
              Hello! I'm a passionate Full Stack Developer who loves building modern,
              responsive, and user-friendly digital experiences.
            </p>

            <p>
              I enjoy working with MERN Stack, Next.js, and React Native to create
              scalable and performant applications.
            </p>

            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
              <h3 className="text-xl font-semibold mb-4 text-[#00a6fb]">
                Quick Facts
              </h3>

              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-3 text-slate-300"
              >
                {[
                  { icon: <Code2 className="text-[#00a6fb]" size={18} />, text: "Full Stack Development" },
                  { icon: <BrainCircuit className="text-[#00a6fb]" size={18} />, text: "Problem Solving Mindset" },
                  { icon: <Rocket className="text-[#00a6fb]" size={18} />, text: "Performance Focused Apps" },
                  { icon: <BadgeCheck className="text-[#00a6fb]" size={18} />, text: "Open to Opportunities" },
                ].map((fact, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ x: 8, color: "#00a6fb" }}
                    className="flex items-center gap-3 cursor-default transition-colors duration-200"
                  >
                    {fact.icon}
                    <span>{fact.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}