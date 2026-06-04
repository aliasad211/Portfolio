import Image from 'next/image';
// 👇 React Icons se icons import karen
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaDownload, FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si'; // Next.js ka icon 'si' package se aata hai

export default function Hero() {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-black text-white px-6 py-12 md:py-0">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side: Content */}
        <div className="text-center md:text-left space-y-6 order-2 md:order-1">
          {/* <h1 className="font-['Playfair_Display',serif] font-normal text-[clamp(44px,7vw,86px)] tracking-tight leading-tight">
            Hi, I'm <span className="text-cyan-400 italic">Ali Asad</span>
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-white">
            Full Stack Web & Mobile Application Developer
          </p>

          <p className="text-base text-white max-w-xl mx-auto md:mx-0 leading-relaxed">
            I build clean, scalable, and high-performance applications using modern web technologies like Next.js, React Native, and the MERN stack.
          </p> */}
          <h1 className="font-['Playfair_Display',serif] font-semibold text-[clamp(44px,7vw,50px)] tracking-tight leading-tight">
            I’m a <span className="text-[#00a6fb] italic">MERN Developer</span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-white">
            Full Stack Web & Mobile Application Developer
          </p>

          <p className="text-base text-slate-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
            I craft modern, scalable, and high-performance web & mobile applications using
            Next.js, React, React Native, Node.js, and the MERN stack — focused on clean UI,
            seamless user experience, and robust backend architecture.
          </p>

          {/* SOCIAL MEDIA ICONS (Using React Icons) */}
          <div className="flex justify-center md:justify-start items-center pt-2">
            <ul className="flex space-x-4">
              {[
                { icon: <FaFacebookF />, url: "https://facebook.com" },
                { icon: <FaTwitter />, url: "https://twitter.com" },
                { icon: <FaInstagram />, url: "https://instagram.com" },
                { icon: <FaLinkedinIn />, url: "https://linkedin.com" }
              ].map((social, index) => (
                <li key={index}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-black border border-slate-400 flex items-center justify-center text-white hover:text-[#00a6fb] hover:border-[#00a6fb] shadow-lg transition-all duration-300 text-lg"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <a href="#projects" className="bg-[#00a6fb] hover:bg-[#008be3] text-white px-6 py-3 rounded-md font-semibold transition-colors shadow-lg shadow-[#00a6fb]/20">
              View My Work
            </a>

            {/* Download CV Button with React Icon */}
            <a
              href="/my-cv.pdf"
              download
              className="border-2 border-[#00a6fb] text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 flex items-center gap-2 hover:bg-[#00a6fb]/10"
            >
              Download CV <FaDownload className="text-[#00a6fb] text-sm" />
            </a>
          </div>
        </div>

        {/* Right Side: Your Animated Profile Card */}
        <div className="flex justify-center items-center order-1 md:order-2">
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
        </div>

      </div>
    </section>
  );
}