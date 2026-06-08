"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Project Manager at TechCorp Solutions",
    initials: "AR",
    rating: 5,
    text: "Ali Asad is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills are outstanding. He transformed our user experience completely.",
  },
  {
    name: "Sarah Johnson",
    role: "Senior Engineer at DevStudio",
    initials: "SJ",
    rating: 5,
    text: "Impressive understanding of asynchronous operations and state management in React applications. Delivered the full-stack features right on time and wrote very clean, readable code.",
  },
  {
    name: "Bilal Hassan",
    role: "CEO at StartupHub",
    initials: "BH",
    rating: 5,
    text: "Working with Ali Asad was a fantastic experience. He built our entire MERN stack application from scratch with excellent UI and a rock-solid backend. Highly recommended!",
  },
];

export default function Review() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  const review = testimonials[current];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What People <span className="text-[#00a6fb]">Say</span>
          </h2>
          <div className="w-24 h-[3px] bg-gradient-to-r from-[#00a6fb] to-[#d400d4] mx-auto mb-4" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-400 text-sm md:text-base"
          >
            Testimonials from clients and colleagues I've had the pleasure to work with
          </motion.p>
        </motion.div>

        {/* Carousel Card */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md shadow-xl px-8 py-10 min-h-[280px] flex flex-col justify-between">

            {/* Big ghost quote icon */}
            <FiMessageSquare
              size={72}
              className="absolute top-4 right-6 text-[#00a6fb]/10 select-none pointer-events-none"
            />

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex flex-col items-center gap-6 text-center"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-slate-200 text-base md:text-lg leading-relaxed max-w-2xl italic">
                  &ldquo;{review.text}&rdquo;
                </blockquote>

                {/* Avatar + Name */}
                <div className="flex flex-col items-center gap-2 mt-2">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00a6fb] to-[#d400d4] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#00a6fb]/20">
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{review.name}</p>
                    <p className="text-xs text-[#00a6fb]">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Prev / Next Buttons */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-[-18px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:border-[#00a6fb] hover:text-[#00a6fb] transition-all duration-300 shadow-md"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-[-18px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:border-[#00a6fb] hover:text-[#00a6fb] transition-all duration-300 shadow-md"
          >
            <FaChevronRight size={14} />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-[#00a6fb] scale-110 shadow-md shadow-[#00a6fb]/40"
                  : "bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}