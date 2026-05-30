"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "IT Project Coordinator",
    company: "Cord4 Technologies",
    location: "Ahmedabad",
    period: "Jan 2026 – Present",
    type: "Current",
    highlights: [
      "Coordinated end-to-end delivery of multiple concurrent SaaS projects across the full SDLC",
      "Led Agile sprint ceremonies — planning, stand-ups, reviews, and retrospectives",
      "Authored BRDs, FRDs, and PRDs, translating client needs into developer-ready specs",
      "Delivered 3 SaaS platform modules (HRMS, CRM, workflow automation) within agreed timelines",
      "Reduced documentation gaps by 60% through standardized templates",
    ],
  },
  {
    title: "Technical Sales Specialist",
    company: "Zedd CSR",
    location: "Toronto",
    period: "Apr 2024 – Oct 2025",
    highlights: [
      "Managed full technical sales cycle — qualifying leads, product demos, and proposals",
      "Bridged clients and technical teams for accurate scoping and documentation",
      "Maintained CRM pipelines to improve lead conversion workflows",
    ],
  },
  {
    title: "Technical Support Specialist",
    company: "Rogers Communications",
    location: "Toronto",
    period: "2021 – 2023",
    highlights: [
      "Provided escalated support for internet, cable, and wireless products",
      "Diagnosed complex network issues using internal diagnostic tools",
      "Built knowledge base that improved first-contact resolution rates",
    ],
  },
  {
    title: "Game Developer",
    company: "SkyHill Games",
    period: "Nov 2017 – Nov 2020",
    highlights: [
      "Developed and shipped features across mobile and desktop platforms",
      "Collaborated in a sprint-based, deadline-driven Agile environment",
      "Gained foundational exposure to iterative release planning",
    ],
  },
];

export default function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dotY, setDotY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setDotY(y);
  };

  return (
    <section id="experience" className="py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text-simple">Experience</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div ref={trackRef} onMouseMove={handleMouseMove} className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 via-pink-300 to-teal-300 transform md:-translate-x-px" />

          <div
            className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 z-20 pointer-events-none"
            style={{ top: `${dotY}%` }}
          >
            <div className="w-4 h-4 rounded-full bg-purple-500 shadow-lg shadow-purple-300/50 transition-all duration-75" />
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`relative flex flex-col md:flex-row gap-6 md:gap-10 mb-10 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-[-6px] md:left-1/2 md:-translate-x-1/2 top-2 w-3.5 h-3.5 rounded-full bg-white border-2 border-purple-400 shadow-md z-10" />
                <div className="md:w-1/2 pl-10 md:pl-0 md:px-10">
                  <div className="card rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm font-mono text-stone-400">{exp.period}</span>
                      {exp.type === "Current" && (
                        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">CURRENT</span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-stone-800">{exp.title}</h3>
                    <p className="text-base text-purple-600 font-medium mb-3">{exp.company}{exp.location && ` — ${exp.location}`}</p>
                    <ul className="space-y-2.5">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-[15px] text-stone-600 flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
