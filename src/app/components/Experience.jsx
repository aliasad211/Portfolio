"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Experience() {
  const journey = [
    {
      type: "work",
      title: "Full Stack Developer",
      subtitle: "AlfaOrigin",
      date: "jan 2025 - june 2025",
      location: "Onsite",
      points: [
        "Delivered 10+ client projects including e-commerce, portfolios, and dashboards",
        "Built scalable MERN stack applications with responsive UI and REST APIs",
        "Collaborated with international clients on Upwork and Fiverr with 5-star ratings",
        "Integrated payment gateways, authentication, and third-party APIs for real-world apps",
      ],
      icon: <FaBriefcase />,
    },
    {
      type: "work",
      title: "Full Stack Developer",
      subtitle: "Marifahsol",
      date: "Aug 2025 - Present",
      location: "Onsite",
      points: [
        "Delivered 10+ client projects including e-commerce, portfolios, and dashboards",
        "Built scalable MERN stack applications with responsive UI and REST APIs",
        "Collaborated with international clients on Upwork and Fiverr with 5-star ratings",
        "Integrated payment gateways, authentication, and third-party APIs for real-world apps",
      ],
      icon: <FaBriefcase />,
    },
    {
      type: "education",
      title: "Bachelor in Software Engineering",
      subtitle: "University of Mianwali",
      date: "2021 - 2025",
      location: "Islamabad, Pakistan",
      points: [
        "Graduated with a Bachelor Degree in Software Engineering",
        "Specialized in Software Engineering and Web Development",
        "Participated in coding competitions, improving problem-solving and programming skills.",
        "Built several projects including a HerbLens with AI integration",
      ],
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Experience &amp; <span className="text-[#00a6fb]">Education</span>
          </motion.h2>
          
          {/* Subtle brand gradient line */}
          <div className="w-24 h-[3px] bg-gradient-to-r from-[#00a6fb] to-[#d400d4] mx-auto mb-4" />
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-400 text-sm md:text-base max-w-xl mx-auto"
          >
            My journey through the world of technology and development
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical central line (desktop: middle, mobile: left) */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#00a6fb] to-[#d400d4] opacity-50 z-0" />

          {/* Cards Mapping */}
          {/* Cards Mapping */}
<div className="space-y-12">
  {journey.map((item, index) => {
    const isEven = index % 2 === 0;

    const Card = () => (
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
        className="w-full text-left bg-gradient-to-br from-white/10 to-transparent border border-slate-700 p-6 rounded-2xl backdrop-blur-md shadow-xl hover:border-[#00a6fb]/45 transition-all duration-300"
      >
        <h3 className="text-xl font-bold text-white mb-1">
          {item.title}
        </h3>

        <span className="text-sm font-semibold text-[#00a6fb] block mb-3">
          {item.subtitle}
        </span>

        <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-4 font-medium">
          <span className="flex items-center gap-1.5">
            <FaCalendarAlt className="text-[#00a6fb]" />
            {item.date}
          </span>

          <span className="flex items-center gap-1.5">
            <FaMapMarkerAlt className="text-[#00a6fb]" />
            {item.location}
          </span>
        </div>

        <ul className="space-y-2.5 text-slate-300 text-sm">
          {item.points.map((pt, pIdx) => (
            <li
              key={pIdx}
              className="flex items-start gap-2.5 leading-relaxed"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00a6fb] mt-2 flex-shrink-0" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    );

    return (
      <div key={index} className="relative z-10">
        {/* Timeline Icon */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            delay: 0.15,
          }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.15 }}
          className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-2 w-9 h-9 rounded-full bg-slate-900 border-2 border-[#00a6fb] flex items-center justify-center text-white text-base shadow-lg shadow-[#00a6fb]/20"
        >
          <span className="text-[#00a6fb]">
            {item.icon}
          </span>
        </motion.div>

        {/* Mobile Layout */}
        <div className="md:hidden pl-12">
          <Card />
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-stretch">
          {/* Left Side */}
          <div className="w-1/2 pr-12 flex justify-end">
            {isEven && <Card />}
          </div>

          {/* Right Side */}
          <div className="w-1/2 pl-12 flex justify-start">
            {!isEven && <Card />}
          </div>
        </div>
      </div>
    );
  })}
</div>
        </div>

      </div>
    </section>
  );
}
