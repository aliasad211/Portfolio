// "use client";

// import {
//   SiNextdotjs,
//   SiReact,
//   SiTailwindcss,
//   SiFramer,
//   SiNodedotjs,
//   SiExpress,
//   SiMongodb,
//   SiGit,
//   SiGithub,
//   SiVercel,
//   SiPostman,
//   SiHtml5,
//   SiCss,
//   SiBootstrap,
//   SiJavascript,
//   SiTypescript,
//   SiMysql,
//   SiPostgresql,
//   SiFirebase,
//   SiSupabase,
//   SiDocker,
// } from "react-icons/si";

// import { motion } from "framer-motion";

// const techStack = [
//   {
//     title: "Frontend",
//     className: "md:col-span-2",
//     techs: [
//       { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
//       { name: "CSS", icon: <SiCss className="text-blue-500" /> },
//       { name: "Next.js", icon: <SiNextdotjs /> },
//       { name: "React", icon: <SiReact className="text-sky-400" /> },
//       { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
//       { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
//       // { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> },
//     ],
//   },
//   {
//     title: "Backend",
//     className: "",
//     techs: [
//       { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
//       { name: "Express.js", icon: <SiExpress /> },
//       { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
//       { name: "TypeScript", icon: <SiTypescript className="text-white" /> },
//     ],
//   },
//   {
//     title: "Database",
//     className: "",
//     techs: [
//       { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
//       { name: "MySQL", icon: <SiMysql className="text-pink-500 text-2xl" /> },
//       { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" /> },
//       { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
//       { name: "Supabase", icon: <SiSupabase className="text-green-400" /> },
//     ],
//   },
//   {
//     title: "Tools",
//     className: "md:col-span-2",
//     techs: [
//       { name: "Git", icon: <SiGit className="text-orange-500" /> },
//       { name: "GitHub", icon: <SiGithub /> },
//       { name: "Vercel", icon: <SiVercel /> },
//       { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
//       { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
//     ],
//   },
// ];

// export default function TechStack() {
//   return (
//     <section className="py-20 px-6 bg-black text-white">
//       <div className="max-w-6xl mx-auto">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-12"
//         >

//           <h2 className="text-4xl md:text-5xl font-bold text-[#00a6fb] text-center mb-12">
//             Tech <span className=" text-white">Stack</span>
//           </h2>
//         </motion.div>

//         {/* Bento Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//           {techStack.map((section, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{
//                 y: -5,
//                 scale: 1.02,
//               }}
//               className={`
//                 ${section.className}
//                 relative overflow-hidden
//                 rounded-3xl
//                 border border-[#00a6fb]
//                 bg-white/10
//                 backdrop-blur-xl
//                 p-6
//                 shadow-lg
//                 hover:border-[#00a6fb]
//                 hover:shadow-[#00a6fb]
//                 transition-all duration-300
//               `}
//             >
//               {/* Glow */}
//               <div className="absolute inset-0 bg-gradient-to-br from-[#00a6fb]/20 via-[#00a6fb]/20 to-transparent opacity-0 hover:opacity-100 transition-all duration-500" />
//               <div className="relative z-10">

//                 <h3 className="text-2xl font-semibold mb-6">
//                   {section.title}
//                 </h3>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
//                   {section.techs.map((tech, i) => (
//                     <motion.div
//                       key={i}
//                       whileHover={{ scale: 1.05 }}
//                       className="
//                         flex items-center gap-3
//                         rounded-2xl
//                         border border-[#00a6fb]
//                         bg-white/5
//                         px-4 py-3
//                         text-sm
//                         hover:bg-white/10
//                         transition-all duration-300
//                       "
//                     >
//                       <span className="text-2xl">
//                         {tech.icon}
//                       </span>

//                       <span className="font-medium">
//                         {tech.name}
//                       </span>
//                     </motion.div>
//                   ))}
//                 </div>

//               </div>
//             </motion.div>
//           ))}

//         </div>

//         {/* Always Learning Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           whileHover={{ y: -6, scale: 1.015 }}
//           className="relative overflow-hidden rounded-3xl border border-[#00a6fb]/35 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl p-8 md:p-12 mt-12 text-center shadow-xl transition-all duration-300 hover:border-[#00a6fb]/60 hover:shadow-lg hover:shadow-[#00a6fb]/10"
//         >
//           {/* Subtle brand gradient accent line on the side/top */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[3px] bg-gradient-to-r from-[#00a6fb] to-[#d400d4]" />
          
//           <div className="relative z-10 space-y-4">
//             <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
//               Always Learning
//             </h3>
            
//             <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
//               Technology is constantly evolving, and so am I. I'm always eager to learn new tools,
//               frameworks, and best practices to deliver cutting-edge solutions.
//             </p>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

"use client";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiDocker,
} from "react-icons/si";

import { motion } from "framer-motion";

const techStack = [
  {
    title: "Frontend",
    className: "md:col-span-2",
    techs: [
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <SiCss className="text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React", icon: <SiReact className="text-sky-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
    ],
  },
  {
    title: "Backend",
    className: "",
    techs: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-white" /> },
    ],
  },
  {
    title: "Database",
    className: "",
    techs: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-pink-500 text-2xl" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "Supabase", icon: <SiSupabase className="text-green-400" /> },
    ],
  },
  {
    title: "Tools",
    className: "md:col-span-2",
    techs: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#00a6fb] text-center mb-4">
            Tech <span className="heading-span-white">Stack</span>
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-[#00a6fb] to-[#d400d4] mx-auto mb-12" />
        </motion.div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {techStack.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              className={`${section.className} relative overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md p-6 shadow-xl hover:border-[#00a6fb]/45 transition-all duration-300`}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00a6fb]/20 via-[#00a6fb]/20 to-transparent opacity-0 hover:opacity-100 transition-all duration-500" />
              <div className="relative z-10">

                <h3 className="text-2xl font-semibold mb-6">
                  {section.title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {section.techs.map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-white/5 px-4 py-3 text-sm hover:bg-white/10 transition-all duration-300"
                    >
                      <span className="text-2xl">
                        {tech.icon}
                      </span>

                      <span className="font-medium">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Always Learning Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -6, scale: 1.015 }}
          className="relative overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md p-8 md:p-12 mt-12 text-center shadow-xl transition-all duration-300 hover:border-[#00a6fb]/45"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[3px] bg-gradient-to-r from-[#00a6fb] to-[#d400d4]" />
          
          <div className="relative z-10 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
              Always Learning
            </h3>
            
            <p className="text-slate-300 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
              Technology is constantly evolving, and so am I. I&apos;m always eager to learn new tools,
              frameworks, and best practices to deliver cutting-edge solutions.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}