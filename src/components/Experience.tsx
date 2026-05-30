const experiences = [
  {
    title: "IT Project Coordinator",
    company: "Cord4 Technologies",
    location: "Ahmedabad",
    period: "Jan 2026 – Present",
    highlights: [
      "Coordinated end-to-end delivery of multiple concurrent SaaS projects, managing cross-functional teams across the full SDLC.",
      "Led Agile sprint ceremonies — planning, stand-ups, reviews, and retrospectives.",
      "Authored BRDs, FRDs, and PRDs, translating client needs into developer-ready specifications.",
      "Managed Google Cloud Console for infrastructure oversight and OAuth 2.0 compliance.",
      "Delivered 3 SaaS platform modules (HRMS, CRM, workflow automation) within agreed timelines.",
      "Reduced documentation gaps by 60% through standardized templates.",
    ],
  },
  {
    title: "Technical Sales Specialist",
    company: "Zedd CSR",
    location: "Toronto",
    period: "Apr 2024 – Oct 2025",
    highlights: [
      "Managed full technical sales cycle for IT solutions — qualifying leads, product demos, and tailored proposals.",
      "Bridged prospective clients and technical teams for accurate scoping and requirement documentation.",
      "Maintained CRM pipelines and leveraged platform insights to improve lead conversion workflows.",
    ],
  },
  {
    title: "Technical Support Specialist",
    company: "Rogers Communications",
    location: "Toronto",
    period: "2021 – 2023",
    highlights: [
      "Provided frontline and escalated technical support for internet, cable, and wireless products.",
      "Diagnosed complex network and hardware issues using internal diagnostic tools.",
      "Maintained detailed case documentation contributing to a knowledge base that improved resolution times.",
    ],
  },
  {
    title: "Game Developer",
    company: "SkyHill Games",
    location: "",
    period: "Nov 2017 – Nov 2020",
    highlights: [
      "Developed and shipped game features across mobile and desktop platforms.",
      "Collaborated with artists, designers, and QA in a sprint-based, deadline-driven environment.",
      "Gained foundational exposure to Agile delivery workflows and iterative release planning.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full mx-auto mb-16" />
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-pink-500 to-cyan-500 transform md:-translate-x-px" />
          {experiences.map((exp, index) => (
            <div
              key={exp.title + exp.period}
              className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block md:w-1/2" />
              <div className="absolute left-[-7px] md:left-1/2 md:-translate-x-1/2 top-1 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 border-2 border-slate-900 z-10" />
              <div className="md:w-1/2 pl-8 md:pl-0 md:px-8">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all duration-300">
                  <span className="inline-block text-xs font-mono text-violet-400 mb-2">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-3">
                    {exp.company}
                    {exp.location && ` — ${exp.location}`}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-sm text-slate-300 flex items-start gap-2"
                      >
                        <span className="text-violet-400 mt-1 shrink-0">
                          &raquo;
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
