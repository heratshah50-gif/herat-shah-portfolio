"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";

const floatingEls = [
  { size: "w-64 h-64", color: "from-purple-300/20", x: "-5%", y: "-10%", delay: 0, drift: -0.3 },
  { size: "w-80 h-80", color: "from-pink-300/20", x: "60%", y: "15%", delay: 0.2, drift: 0.2 },
  { size: "w-72 h-72", color: "from-teal-300/20", x: "20%", y: "60%", delay: 0.4, drift: -0.15 },
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const stagger: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #f5f3ef 0%, #ede9fe 40%, #fce7f3 70%, #ccfbf1 100%)" }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingEls.map((el, i) => (
          <div
            key={i}
            className={`absolute ${el.size} bg-gradient-to-br ${el.color} to-transparent rounded-full blur-3xl animate-pulse-soft`}
            style={{
              top: el.y,
              left: el.x,
              animationDelay: `${el.delay}s`,
              transform: mounted
                ? `translate(${mousePos.x * el.drift}px, ${mousePos.y * el.drift * 0.8}px)`
                : "none",
              transition: "transform 0.1s ease-out",
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: ["#6d28d9", "#db2777", "#0d9488", "#d97706"][i % 4],
              top: `${10 + i * 11}%`,
              left: `${8 + i * 12}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={stagger}
          className="space-y-6"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block px-6 py-2.5 text-sm font-semibold text-purple-700 bg-purple-100/80 backdrop-blur rounded-full border border-purple-200/50 shadow-sm">
              Open for — Project Coordinator &bull; APM &bull; PM &bull; Jr. PM
            </span>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="text-sm sm:text-base text-stone-500 font-medium tracking-[0.25em] uppercase">
              Hello, I&apos;m
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none">
              <span className="gradient-text">Herat Shah</span>
            </h1>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="h-1 w-28 bg-gradient-to-r from-purple-500 via-pink-500 to-teal-500 rounded-full mx-auto my-6" />
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-stone-600">
              Project Coordinator &amp; Associate Project Manager
            </p>
            <p className="text-base sm:text-lg text-stone-400 max-w-xl mx-auto mt-3">
              Delivering SaaS, telecom &amp; enterprise projects end-to-end with Agile precision
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-4 justify-center pt-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-md shadow-purple-200/50 hover:shadow-xl hover:shadow-purple-200/70 transition-shadow"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-white/80 backdrop-blur text-stone-700 font-semibold rounded-xl border border-stone-200/80 hover:border-purple-300 hover:text-purple-700 hover:shadow-md transition-all"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-6 sm:gap-10 pt-8 flex-wrap"
          >
            {["Agile", "SaaS", "Scrum", "BRD/FRD/PRD", "GCP"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
                className="text-sm sm:text-base font-mono text-stone-400"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <a href="#about" aria-label="Scroll down">
          <div className="w-10 h-10 rounded-full bg-white/70 backdrop-blur border border-stone-200 flex items-center justify-center shadow-sm">
            <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
