export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mx-auto mb-12" />
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-56 h-56 rounded-full bg-gradient-to-br from-violet-600 via-pink-500 to-cyan-400 p-1 animate-float">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                  <span className="text-6xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                    HS
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                4+ yrs
              </div>
            </div>
          </div>
          <div className="md:col-span-3 space-y-4">
            <p className="text-slate-300 leading-relaxed">
              Results-driven IT Project Coordinator with 4+ years of experience
              managing end-to-end software development projects across SaaS,
              telecom, and technical sales environments. Proven ability to lead
              Agile/Scrum ceremonies, author comprehensive BRDs, FRDs, and PRDs,
              and translate stakeholder requirements into actionable development
              roadmaps.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Experienced in coordinating cross-functional teams, managing CRM
              and HRMS platform lifecycles, and driving operational efficiency
              through structured documentation and workflow optimization.
              Comfortable working in fast-paced environments with remote and
              distributed teams, with additional hands-on proficiency in
              AI-assisted development workflows, Google Cloud Platform, and
              modern collaboration tools.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "Agile & Scrum",
                "SaaS Delivery",
                "BRD/FRD/PRD",
                "Cross-functional",
                "Remote Teams",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium bg-slate-800 text-violet-300 rounded-full border border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
