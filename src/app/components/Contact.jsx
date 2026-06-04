"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";

const contactDetails = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "hammadalimughal08@gmail.com",
    href: "mailto:hammadalimughal08@gmail.com",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+923231005422",
    href: "tel:+923231005422",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Chakwal, Pakistan",
    href: null,
  },
];

const socials = [
  { icon: <FaGithub size={18} />, href: "https://github.com", label: "GitHub" },
  { icon: <FaLinkedinIn size={18} />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <FaTwitter size={18} />, href: "https://twitter.com", label: "Twitter" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO(security): Connect to a backend email API route; do NOT expose SMTP credentials client-side.
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get In <span className="text-[#00a6fb]">Touch</span>
          </motion.h2>

          <div className="w-24 h-[3px] bg-gradient-to-r from-[#00a6fb] to-[#d400d4] mx-auto mb-4" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-400 text-sm md:text-base max-w-lg mx-auto"
          >
            Ready to start your next project? Let&apos;s work together to create something amazing.
          </motion.p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT — Let's Connect */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md p-8 flex flex-col gap-8 shadow-xl"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Let&apos;s Connect</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I&apos;m always interested in hearing about new opportunities, whether
                that&apos;s freelance projects, full-time positions, or just a chat about
                technology and development.
              </p>
            </div>

            {/* Contact details */}
            <ul className="space-y-5">
              {contactDetails.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#00a6fb] to-[#d400d4] flex items-center justify-center text-white text-base flex-shrink-0 shadow-md shadow-[#00a6fb]/20">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-semibold text-white hover:text-[#00a6fb] transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-white">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="border-t border-white/10 pt-6">
              <p className="text-xs text-slate-500 mb-4 font-medium">Follow me on:</p>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-slate-300 hover:border-[#00a6fb] hover:text-[#00a6fb] transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Send Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

            {sent && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 rounded-xl bg-[#00a6fb]/15 border border-[#00a6fb]/40 px-4 py-3 text-sm text-[#00a6fb] font-medium"
              >
                ✓ Message sent successfully! I&apos;ll get back to you soon.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold mb-1.5 text-slate-400">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-xl p-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00a6fb] focus:ring-1 focus:ring-[#00a6fb] transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5 text-slate-400">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-xl p-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00a6fb] focus:ring-1 focus:ring-[#00a6fb] transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1.5 text-slate-400">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-900/80 border border-slate-700 rounded-xl p-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00a6fb] focus:ring-1 focus:ring-[#00a6fb] resize-none transition-all duration-200"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-3 bg-gradient-to-r from-[#00a6fb] to-[#d400d4] hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-[#00a6fb]/20 text-sm"
              >
                <FaPaperPlane size={14} /> Send Message
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}