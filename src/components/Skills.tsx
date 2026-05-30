"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Project Management",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    skills: [
      "Agile & Scrum Methodologies",
      "Sprint Planning & Execution",
      "End-to-End Project Coordination",
      "BRD, FRD & PRD Authoring",
      "Requirement Gathering & Analysis",
      "Risk & Issue Management",
      "QA Coordination & Release Mgmt",
      "Multi-Project Management",
    ],
    accent: "from-purple-500 to-purple-600",
    colors: { text: "text-purple-600", bg: "bg-purple-100", border: "border-purple-200", tag: "bg-purple-50", tagText: "text-purple-700", tagBorder: "border-purple-100" },
  },
  {
    title: "Tools & Platforms",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      </svg>
    ),
    skills: [
      "Jira & Project Tracking Tools",
      "Google Workspace / MS Office",
      "Google Cloud Platform (GCP)",
      "Slack & Team Collaboration",
      "CRM & HRMS Platforms",
      "Git / GitHub / Vercel / Cloudflare",
      "Cursor, Claude Code, Figma",
    ],
    accent: "from-pink-500 to-pink-600",
    colors: { text: "text-pink-600", bg: "bg-pink-100", border: "border-pink-200", tag: "bg-pink-50", tagText: "text-pink-700", tagBorder: "border-pink-100" },
  },
  {
    title: "Professional Skills",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    skills: [
      "Cross-functional Team Leadership",
      "Client & Stakeholder Communication",
      "SDLC & Software Delivery",
      "Workflow & Process Optimization",
      "Technical Documentation",
      "Mobile & Web Dev Coordination",
      "Remote Team Coordination",
      "UI/UX Design Coordination",
    ],
    accent: "from-teal-500 to-teal-600",
    colors: { text: "text-teal-600", bg: "bg-teal-100", border: "border-teal-200", tag: "bg-teal-50", tagText: "text-teal-700", tagBorder: "border-teal-100" },
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text-simple">Skills &amp; Expertise</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="card rounded-2xl p-7 flex flex-col h-full"
            >
              <div className={`w-12 h-12 ${cat.colors.bg} rounded-xl flex items-center justify-center ${cat.colors.text} mb-5`}>
                {cat.icon}
              </div>
              <div className={`w-full h-1 rounded-full bg-gradient-to-r ${cat.accent} mb-5`} />
              <h3 className="text-xl font-semibold text-stone-800 mb-4">{cat.title}</h3>
              <ul className="space-y-3 flex-1">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2.5 text-[15px] text-stone-600">
                    <svg className={`w-4 h-4 mt-0.5 shrink-0 ${cat.colors.text}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
