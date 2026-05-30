const skillCategories = [
  {
    title: "Project Management",
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
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Jira & Project Tracking Tools",
      "Google Workspace / MS Office",
      "Google Cloud Platform",
      "Google Cloud Console",
      "Slack & Team Collaboration",
      "CRM & HRMS Platforms",
      "Git / GitHub / Vercel / Cloudflare",
      "Cursor, Claude Code, Figma",
    ],
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Professional Skills",
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
    color: "from-cyan-500 to-teal-600",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full mx-auto mb-16" />
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="group relative bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
              />
              <div
                className={`w-12 h-1 bg-gradient-to-r ${cat.color} rounded-full mb-4`}
              />
              <h3 className="text-lg font-semibold text-white mb-4">
                {cat.title}
              </h3>
              <ul className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <svg
                      className="w-4 h-4 mt-0.5 text-violet-400 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
