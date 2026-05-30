"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "TeamGrid — HRMS & Employee Management",
    type: "SaaS Platform",
    description: "Authored FRDs and BRDs for HRMS modules including employee management, dashboards, announcements, rewards, polls, and anniversary notifications.",
    highlights: [
      "Managed sprint planning across 5+ concurrent module workstreams",
      "Coordinated bug tracking, QA testing, and production releases",
      "Maintained sprint reports for full project traceability",
    ],
    tags: ["HRMS", "SaaS", "Agile", "Documentation"],
    accent: "from-purple-500 to-purple-600",
  },
  {
    title: "CRM Development & Workflow Automation",
    type: "SaaS Platform",
    description: "Authored PRDs and FRDs for core CRM features including lead management, sales pipeline tracking, and marketing automation.",
    highlights: [
      "Oversaw API integrations (Plivo VoIP, Google Meet)",
      "Monitored sprint velocity across product, engineering, QA",
      "Coordinated between dev teams and third-party vendors",
    ],
    tags: ["CRM", "API Integration", "SaaS", "Agile"],
    accent: "from-pink-500 to-pink-600",
  },
  {
    title: "AI-Assisted Development Workflows",
    type: "Process Innovation",
    description: "Introduced and coordinated modern AI-assisted development workflows to improve team velocity and prototyping capabilities.",
    highlights: [
      "Leveraged Cursor, Claude Code for rapid prototyping",
      "Integrated AI workflows into existing Agile processes",
      "Reduced initial development cycles through prompt engineering",
    ],
    tags: ["AI", "Workflow", "Innovation", "Agile"],
    accent: "from-teal-500 to-teal-600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text-simple">Featured Projects</span>
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto mt-3 text-[15px]">
            Key projects I&apos;ve coordinated and delivered across SaaS platforms and workflow automation.
          </p>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="card rounded-2xl overflow-hidden flex flex-col h-full"
            >
              <div className={`h-2 bg-gradient-to-r ${project.accent}`} />
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100 uppercase tracking-wider self-start mb-3">
                  {project.type}
                </span>
                <h3 className="text-lg font-semibold text-stone-800 mb-3 leading-snug">{project.title}</h3>
                <p className="text-[15px] text-stone-500 mb-4 leading-relaxed">{project.description}</p>
                <ul className="space-y-2 mb-5">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="text-[15px] text-stone-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-sm font-medium bg-stone-50 text-stone-500 rounded-lg border border-stone-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
