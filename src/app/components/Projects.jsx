"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiFilter, FiExternalLink, FiGithub } from "react-icons/fi";

// ─── Filter Categories ────────────────────────────────────────────────────────
const FILTERS = ["All", "Frontend", "Backend", "Fullstack", "Mobile"];

// ─── Projects Data ────────────────────────────────────────────────────────────
const projects = [
  {
    title: "Portfolio Website",
    description: "Modern portfolio built with Next.js and Tailwind CSS featuring smooth animations and a responsive layout.",
    image: "/projects/portfolio.png",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    category: "Frontend",
    live: "#",
    github: "#",
  },
  {
    title: "E-Commerce App",
    description: "Full stack ecommerce application with cart, authentication and Stripe payments integration.",
    image: "/wandarlust.jfif",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Fullstack",
    live: "#",
    github: "#",
  },
  {
    title: "REST API Service",
    description: "Scalable RESTful API built with Express and MongoDB with JWT authentication and role-based access.",
    image: "/projects/ecommerce.png",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "Backend",
    live: "#",
    github: "#",
  },
  {
    title: "React Dashboard",
    description: "Admin dashboard with data visualization, charts and real-time updates using React and Chart.js.",
    image: "/projects/portfolio.png",
    tech: ["React", "Chart.js", "Tailwind"],
    category: "Frontend",
    live: "#",
    github: "#",
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
                <div className="relative overflow-hidden h-52">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
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