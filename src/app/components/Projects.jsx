"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiFilter, FiExternalLink, FiGithub } from "react-icons/fi";

// ─── Filter Categories ────────────────────────────────────────────────────────
const FILTERS = ["All", "Frontend", "Fullstack", "Mobile"];

// ─── Projects Data ────────────────────────────────────────────────────────────
const projects = [
  {
    title: "Foodie Website",
    description: "Foodie is a beautifully designed, fully responsive food website featuring an elegant UI with smooth animations, an interactive menu section, customer testimonials, and a seamless ordering experience. Built with a mobile-first approach to deliver a premium dining experience online.",
    image: "/Foodie.png",
    tech: ["HTML", "CSS", "JS"],
    category: "Frontend",
    live: "https://foodie-website-lyart.vercel.app",
    github: "https://github.com/aliasad211/FoodieWebsite",
  },
  {
    title: "Wandarlust",
    description: "WandarLust is a premium, fully-functional web application that allows travelers and property owners to list, discover, review, and map amazing vacation rentals and travel stays across the globe.Inspired by Airbnb, it features robust user authentication, interactive map rendering, dynamic image uploads, and listing management.",
    image: "/wandarlust.jpg",
    tech: ["HTML", "CSS", "Node.js", "MongoDB"],
    category: "Fullstack",
    live: "https://wandarlust-4-6coi.onrender.com",
    github: "https://github.com/aliasad211/wandarlust",
  },
  {
    title: "E-Commerce Frontend",
    description: "TechZone is a premium e-commerce web application featuring a modern product catalog, interactive cart management, dynamic search/filter features, and a smooth checkout flow.",
    image: "/TechZone.png",
    tech: ["React", "JavaScript", "MongoDB", "Node.js"],
    category: "Fullstack",
    live: "https://tech-zone-frontend.vercel.app/",
    github: "https://github.com/aliasad211/TechZone-frontend",
  },
  {
    title: "Personal Portfolio",
    description: "A stunning and creative developer portfolio website designed to showcase projects, skills, and career timeline. Features smooth micro-animations, sleek dark mode styling, and fully responsive contact forms.",
    image: "/portfolio.png",
    tech: ["Next.js", "React", "Framer Motion", "Tailwind CSS"],
    category: "Frontend",
    live: "#",
    github: "https://github.com/aliasad211/Portfolio",
  },
];

// ─── Card animation variants ──────────────────────────────────────────────────
const cardVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" },
  }),
  exit: { opacity: 0, scale: 0.88, y: -20, transition: { duration: 0.3 } },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6 bg-black relative overflow-hidden">

      {/* ── Section Heading ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Featured <span className="text-[#00a6fb]">Projects</span>
        </h2>
        <div className="w-24 h-[3px] bg-gradient-to-r from-[#00a6fb] to-[#d400d4] mx-auto mb-5" />
        <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto">
          A collection of projects that showcase my skills and passion for development
        </p>
      </motion.div>

      {/* ── Filter Buttons ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mt-10 mb-12"
      >
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className="project-filter-btn"
            data-active={activeFilter === filter}
          >
            {activeFilter === filter && (
              <motion.span
                layoutId="filterBubble"
                className="project-filter-bubble"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <FiFilter className="project-filter-icon" />
            <span className="relative z-10">{filter}</span>
          </button>
        ))}
      </motion.div>

      {/* ── Project Cards Grid ── */}
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.title + project.category}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="project-card group"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category Badge */}
                  <span className="project-category-badge">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((item) => (
                      <span key={item} className="project-tech-tag">
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn-primary"
                    >
                      <FiExternalLink size={15} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn-outline"
                    >
                      <FiGithub size={15} />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-zinc-500 mt-16 text-lg"
          >
            No projects found in this category yet.
          </motion.p>
        )}
      </div>
    </section>
  );
}