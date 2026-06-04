// export default function Projects() {
//   const projectList = [
//     {
//       title: "Wanderlust",
//       description: "A complete travel-related web application featuring comprehensive listings, smooth navigation, and secure user authentication via Passport.js.",
//       tech: ["Express", "MongoDB", "Passport.js", "Node.js"],
//       github: "https://github.com",
//     },
//     {
//       title: "Herblens",
//       description: "A mobile/web platform designed to scan, find, and identify various herbs and plants effortlessly using intuitive interfaces.",
//       tech: ["React Native", "JavaScript", "REST API"],
//       github: "https://github.com",
//     },
//     {
//       title: "MyOrders System",
//       description: "A clean mobile order-management dashboard built with modular tab views and dynamic status-based filtering.",
//       tech: ["React Native", "Tailwind CSS"],
//       github: "https://github.com",
//     }
//   ];

//   return (
//     <section id="projects" className="py-20 bg-slate-950 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12">
//           Featured <span className="text-cyan-400">Projects</span>
//         </h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projectList.map((project, index) => (
//             <div key={index} className="bg-slate-900 border border-slate-800 rounded-lg p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
//               <div>
//                 <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
//                 <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.tech.map((t, idx) => (
//                     <span key={idx} className="bg-slate-950 text-cyan-400 text-xs px-2.5 py-1 rounded border border-slate-800">
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <a 
//                 href={project.github} 
//                 target="_blank" 
//                 rel="noopener noreferrer" 
//                 className="text-sm font-semibold text-cyan-400 hover:underline inline-flex items-center gap-1"
//               >
//                 View Repository &rarr;
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

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
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            My <span className="text-[#00a6fb]">Projects</span>
          </h2>

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