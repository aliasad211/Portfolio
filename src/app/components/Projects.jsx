"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Modern portfolio built with Next.js and Tailwind CSS.",
      image: "/projects/portfolio.png",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      live: "#",
      github: "#",
    },

    {
      title: "E-Commerce App",
      description:
        "Full stack ecommerce application with cart and payments.",
      image: "/wandarlust.jfif",
      tech: ["React", "Node.js", "MongoDB"],
      live: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern portfolio built with Next.js and Tailwind CSS.",
      image: "/projects/portfolio.png",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      live: "#",
      github: "#",
    },

    {
      title: "E-Commerce App",
      description:
        "Full stack ecommerce application with cart and payments.",
      image: "/projects/ecommerce.png",
      tech: ["React", "Node.js", "MongoDB"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            My <span className="text-[#00a6fb]">Projects</span>
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-[#00a6fb] to-[#d400d4] mx-auto mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#00a6fb] transition-all duration-350"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-zinc-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-[#00a6fb]/10 text-[#00a6fb] rounded-full font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#00a6fb] hover:bg-[#008be3] text-white font-semibold rounded-lg transition-colors duration-300 flex-1 text-center"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-[#00a6fb] text-white hover:bg-[#00a6fb]/10 font-semibold rounded-lg transition-colors duration-300 flex-1 text-center"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}