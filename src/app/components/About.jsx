import {
  Code2,
  Rocket,
  BrainCircuit,
  BadgeCheck,
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-black px-4 ">
      <div className="max-w-5xl mx-auto">
        
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            About <span className="text-[#00a6fb]">Me</span>
          </h2>

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

              <ul className="space-y-3 text-slate-300">

  <li className="flex items-center gap-3">
    <Code2 className="text-[#00a6fb]" size={18} />
    Full Stack Development
  </li>

  <li className="flex items-center gap-3">
    <BrainCircuit className="text-[#00a6fb]" size={18} />
    Problem Solving Mindset
  </li>

  <li className="flex items-center gap-3">
    <Rocket className="text-[#00a6fb]" size={18} />
    Performance Focused Apps
  </li>

  <li className="flex items-center gap-3">
    <BadgeCheck className="text-[#00a6fb]" size={18} />
    Open to Opportunities
  </li>

</ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}