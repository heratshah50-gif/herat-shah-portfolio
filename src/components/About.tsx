"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "6+", label: "Agile Teams Led" },
  { value: "60%", label: "Doc Gap Reduction" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text-simple">About Me</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-teal-400 p-1 shadow-2xl glow animate-float">
                <div className="w-full h-full rounded-3xl overflow-hidden">
                  <Image
                    src="/profile.jpeg"
                    alt="Herat Shah"
                    width={288}
                    height={288}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="absolute -bottom-3 -right-3 w-20 h-20 bg-gradient-to-br from-teal-400 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-base shadow-lg shadow-teal-200/50"
              >
                4+ yrs
              </motion.div>
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-white/80 backdrop-blur rounded-xl flex items-center justify-center shadow-md border border-stone-100">
                <svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-5"
          >
            <h3 className="text-2xl font-semibold text-stone-800">
              Project Coordinator / Associate Project Manager
              <span className="text-stone-400 font-light"> — Ahmedabad, India</span>
            </h3>
            <p className="text-stone-600 leading-relaxed text-[15px]">
              Results-driven IT Project Coordinator with 4+ years of experience
              managing end-to-end software development projects across SaaS,
              telecom, and technical sales environments. I specialize in leading
              Agile/Scrum ceremonies, authoring comprehensive BRDs, FRDs, and
              PRDs, and translating stakeholder requirements into actionable
              development roadmaps.
            </p>
            <p className="text-stone-500 leading-relaxed text-[15px]">
              I thrive in fast-paced environments with remote and distributed
              teams, and bring hands-on proficiency in AI-assisted development
              workflows, Google Cloud Platform, and modern collaboration tools.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Agile & Scrum", "SaaS Delivery", "BRD/FRD/PRD", "Cross-functional Teams", "Remote Collaboration", "GCP"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 text-sm font-medium bg-purple-50 text-purple-700 rounded-xl border border-purple-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="card rounded-2xl p-5 text-center"
            >
              <p className="text-3xl font-bold gradient-text-simple">{stat.value}</p>
              <p className="text-sm text-stone-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
