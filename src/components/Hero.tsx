export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-indigo-950 to-slate-950" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-500 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-[128px] animate-pulse-glow animate-delay-200" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-500 rounded-full blur-[128px] animate-pulse-glow animate-delay-400" />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <p className="text-violet-400 font-mono text-sm sm:text-base mb-4 tracking-widest uppercase">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Herat Shah
            </span>
          </h1>
          <div className="inline-block">
            <p className="text-xl sm:text-2xl md:text-3xl font-light text-slate-300 mb-8 border-r-2 border-violet-400 pr-2 inline">
              Associate Project Manager
            </p>
          </div>
        </div>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 animate-slide-up animate-delay-200">
          Results-driven IT Project Coordinator with 4+ years of experience
          delivering SaaS, telecom, and enterprise projects end-to-end.
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-slide-up animate-delay-300">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-slate-600 rounded-full text-slate-300 font-medium hover:border-violet-500 hover:text-violet-400 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg
            className="w-6 h-6 text-slate-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
