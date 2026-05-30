"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend Development",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ["React / Next.js", "TypeScript / JavaScript", "Tailwind CSS", "HTML5 / CSS3", "Responsive Design", "State Management"],
    accent: "from-emerald-500 to-emerald-600",
    colors: { text: "text-emerald-600", bg: "bg-emerald-100", border: "border-emerald-200" },
  },
  {
    title: "Backend Development",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    skills: ["Node.js / Express", "Python (FastAPI / Flask)", "RESTful APIs", "PostgreSQL / SQL", "Supabase / Firebase", "Authentication & Security"],
    accent: "from-blue-500 to-blue-600",
    colors: { text: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200" },
  },
  {
    title: "AI & Chatbot Engineering",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: ["LLM Integration (OpenAI, Claude)", "Chatbot Development", "Prompt Engineering", "AI Agent Workflows", "Open Code / OpenClaw", "AI-Assisted Development (Cursor, Claude Code)"],
    accent: "from-violet-500 to-violet-600",
    colors: { text: "text-violet-600", bg: "bg-violet-100", border: "border-violet-200" },
  },
  {
    title: "RAG & Vector Databases",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    skills: ["RAG Implementation", "Vector Databases (Qdrant / Pinecone)", "Chunking Strategies", "Text Embeddings", "Semantic Search", "Knowledge Retrieval"],
    accent: "from-pink-500 to-pink-600",
    colors: { text: "text-pink-600", bg: "bg-pink-100", border: "border-pink-200" },
  },
  {
    title: "UI / UX Design",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    skills: ["Figma / Design Prototyping", "Wireframing & Mockups", "User Research & Testing", "Design Systems", "Responsive Layouts", "Accessibility (a11y)"],
    accent: "from-amber-500 to-amber-600",
    colors: { text: "text-amber-600", bg: "bg-amber-100", border: "border-amber-200" },
  },
  {
    title: "Mobile App Development",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    skills: ["React Native", "Cross-Platform Development", "Mobile-First Design", "App Store Deployment", "Push Notifications", "Mobile UI/UX Patterns"],
    accent: "from-cyan-500 to-cyan-600",
    colors: { text: "text-cyan-600", bg: "bg-cyan-100", border: "border-cyan-200" },
  },
];

export default function AISkills() {
  return (
    <section id="ai-skills" className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text-simple">AI &amp; Technical Skills</span>
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto mt-3 text-[15px]">
            From frontend to AI engineering — a full-stack toolkit spanning modern web, mobile, and intelligent systems.
          </p>
          <div className="section-divider" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="card rounded-2xl p-6 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 ${cat.colors.bg} rounded-xl flex items-center justify-center ${cat.colors.text} shrink-0`}>
                  {cat.icon}
                </div>
                <h3 className="text-lg font-semibold text-stone-800">{cat.title}</h3>
              </div>
              <div className={`w-full h-1 rounded-full bg-gradient-to-r ${cat.accent} mb-4`} />
              <ul className="space-y-2.5 flex-1">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2.5 text-sm text-stone-600">
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
