const projects = [
  {
    title: "TeamGrid — HRMS & Employee Management Platform",
    type: "SaaS",
    description:
      "Authored FRDs and BRDs for HRMS modules including employee management, dashboards, announcements, rewards, polls, and anniversary notifications. Drove requirement clarity from discovery to delivery.",
    highlights: [
      "Managed sprint planning and cross-team workflow tracking across 5+ concurrent module workstreams.",
      "Coordinated bug tracking, QA testing, and production releases.",
      "Maintained sprint reports and meeting notes for full project traceability.",
    ],
    tags: ["HRMS", "SaaS", "Agile", "Documentation"],
    gradient: "from-violet-600 to-purple-700",
  },
  {
    title: "CRM Development & Workflow Automation Platform",
    type: "SaaS",
    description:
      "Authored PRDs and FRDs for core CRM features including lead management, sales pipeline tracking, customer communication workflows, and marketing automation.",
    highlights: [
      "Oversaw API integration workstreams including Plivo (VoIP calling) and Google Meet (video conferencing).",
      "Monitored sprint velocity, resolved blockers across product, engineering, and QA teams.",
      "Coordinated between development teams and third-party vendors.",
    ],
    tags: ["CRM", "API Integration", "SaaS", "Agile"],
    gradient: "from-pink-600 to-rose-700",
  },
  {
    title: "AI-Assisted Development Workflows",
    type: "Innovation",
    description:
      "Introduced and coordinated modern vibe coding tools and AI-assisted development workflows to improve team velocity and prototyping capabilities.",
    highlights: [
      "Leveraged Cursor, Claude Code, and other AI tools for rapid prototyping.",
      "Integrated AI workflows into existing Agile processes.",
      "Reduced initial development cycles through structured prompt engineering.",
    ],
    tags: ["AI", "Workflow", "Innovation", "Prototyping"],
    gradient: "from-cyan-600 to-teal-700",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full mx-auto mb-4" />
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
          Key projects I&apos;ve coordinated and delivered across SaaS platforms
          and workflow automation.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div
                className={`h-2 bg-gradient-to-r ${project.gradient}`}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-violet-400 uppercase tracking-wider">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-xs text-slate-300 flex items-start gap-1.5"
                    >
                      <span className="text-violet-400 shrink-0">&#8226;</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs bg-slate-700/50 text-slate-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
