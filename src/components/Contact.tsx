export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mx-auto mb-16" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I&apos;m always open to new opportunities, collaborations, and
              conversations. Whether you have a project in mind or just want to
              connect — feel free to reach out.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:heratshah50@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-violet-600/20 transition-colors duration-300">
                  <svg
                    className="w-5 h-5 text-violet-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="text-slate-300 group-hover:text-violet-400 transition-colors">
                    heratshah50@gmail.com
                  </p>
                </div>
              </a>
              <a
                href="tel:+917698225335"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-pink-600/20 transition-colors duration-300">
                  <svg
                    className="w-5 h-5 text-pink-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="text-slate-300 group-hover:text-pink-400 transition-colors">
                    +91-7698225335
                  </p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/heratshah1810"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-cyan-600/20 transition-colors duration-300">
                  <svg
                    className="w-5 h-5 text-cyan-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500">LinkedIn</p>
                  <p className="text-slate-300 group-hover:text-cyan-400 transition-colors">
                    linkedin.com/in/heratshah1810
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">
              Location
            </h3>
            <div className="flex items-start gap-3 mb-6">
              <svg
                className="w-5 h-5 text-violet-400 mt-0.5 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-slate-300">
                Ahmedabad, Gujarat, India
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/Herat_Shah_IT_Project_Coordinator_Resume.docx"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full text-sm text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
