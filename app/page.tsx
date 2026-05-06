"use client";

import { motion } from "framer-motion";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function PortfolioPage() {
  return (
    <main className="h-[100dvh] w-full overflow-y-auto snap-y snap-proximity md:snap-mandatory text-[#ECF0F1] relative selection:bg-yellow-300 selection:text-black scroll-smooth">
      {/* =========================================
          SECTION 1: HERO
      ========================================= */}
      <section className="min-h-[100dvh] w-full snap-start relative flex flex-col items-center justify-center z-10 px-6">
        <div className="text-center mt-16 md:mt-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter mb-4"
          >
            James Owens
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xs md:text-sm text-orange-500 font-mono uppercase tracking-[0.3em] md:tracking-[0.5em]"
          >
            PhD Researcher & Spatial Ecologist
          </motion.p>
        </div>

        <div className="hidden md:block">
          <ScrollIndicator />
        </div>
      </section>

      {/* =========================================
          SECTION 2: DIRECTORY
      ========================================= */}
      <section className="min-h-[100dvh] w-full snap-start relative flex flex-col justify-start md:justify-center z-10 px-6 pt-24 pb-16 md:py-0">
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* CARD 01: ABOUT */}
          <a
            href="/about"
            className="group relative p-8 h-87.5 md:h-112.5 bg-black/20 backdrop-blur-xl border border-white/5 transition-all duration-500 hover:bg-black/40"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-indigo-500/50 group-hover:bg-indigo-400 transition-colors" />

            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/10 group-hover:border-indigo-400/50 transition-colors" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/10 group-hover:border-indigo-400/50 transition-colors" />

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start font-mono text-[10px] text-indigo-400">
                <span>USER_PROFILE</span>
                <span className="opacity-40 tracking-widest">01</span>
              </div>
              <h3 className="mt-8 md:mt-12 text-3xl md:text-4xl font-bold tracking-tighter">
                About Me
              </h3>
              <p className="mt-3 md:mt-4 text-xs md:text-sm text-white/40 leading-relaxed font-light">
                Deatils of my personal and professional background.
              </p>
              <div className="mt-auto pt-4 flex items-center gap-3 font-mono text-[9px] text-white/20 group-hover:text-indigo-400 transition-colors">
                <div className="h-px w-8 bg-white/10 group-hover:bg-indigo-400 transition-all" />
                <span>ACCESS_BIOGRAPHY</span>
              </div>
            </div>
          </a>

          {/* CARD 02: RESEARCH */}
          <a
            href="/research"
            className="group relative p-8 h-87.5 md:h-112.5 bg-black/20 backdrop-blur-xl border border-white/5 transition-all duration-500 hover:bg-black/40"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-orange-500/50 group-hover:bg-orange-500 transition-colors" />
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/10 group-hover:border-orange-500/50 transition-colors" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/10 group-hover:border-orange-500/50 transition-colors" />

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start font-mono text-[10px] text-orange-500">
                <span>RESEARCH_LOGS</span>
                <span className="opacity-40 tracking-widest">02</span>
              </div>
              <h3 className="mt-8 md:mt-12 text-3xl md:text-4xl font-bold tracking-tighter">
                Research
              </h3>
              <p className="mt-3 md:mt-4 text-xs md:text-sm text-white/40 leading-relaxed font-light">
                A crash-course on my research topic
              </p>
              <div className="mt-auto pt-4 flex items-center gap-3 font-mono text-[9px] text-white/20 group-hover:text-orange-500 transition-colors">
                <div className="h-px w-8 bg-white/10 group-hover:bg-orange-500 transition-all" />
                <span>VIEW_RESEARCH</span>
              </div>
            </div>
          </a>

          {/* CARD 03: PROJECTS */}
          <a
            href="/projects"
            className="group relative p-8 h-87.5 md:h-112.5 bg-black/20 backdrop-blur-xl border border-white/5 transition-all duration-500 hover:bg-black/40"
          >
            <div className="absolute top-0 left-0 w-full h-0.5 bg-yellow-500/50 group-hover:bg-yellow-300 transition-colors" />
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/10 group-hover:border-yellow-300/50 transition-colors" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/10 group-hover:border-yellow-300/50 transition-colors" />

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start font-mono text-[10px] text-yellow-300">
                <span>SRC</span>
                <span className="opacity-40 tracking-widest">03</span>
              </div>
              <h3 className="mt-8 md:mt-12 text-3xl md:text-4xl font-bold tracking-tighter">
                Projects
              </h3>
              <p className="mt-3 md:mt-4 text-xs md:text-sm text-white/40 leading-relaxed font-light">
                Insights into technical projects, both personal and academic
              </p>
              <div className="mt-auto pt-4 flex items-center gap-3 font-mono text-[9px] text-white/20 group-hover:text-yellow-300 transition-colors">
                <div className="h-px w-8 bg-white/10 group-hover:bg-yellow-300 transition-all" />
                <span>EXPLORE_BUILDS</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* =========================================
          SECTION 3: CONTACT
      ========================================= */}
      <section className="min-h-[100dvh] w-full snap-start relative flex flex-col justify-start md:justify-center z-10 px-6 pt-24 pb-16 md:py-0 bg-linear-to-t from-black/60 to-transparent">
        <div className="max-w-4xl w-full mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-mono text-orange-500 uppercase tracking-[0.3em] mb-4 block">
              Available for Collaboration
            </span>
            <h2 className="text-4xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tighter">
              Get in Touch
            </h2>

            <a
              href="mailto:jamesowenswildlife@gmail.com"
              className="text-xl sm:text-2xl md:text-4xl font-light text-white/80 hover:text-yellow-300 transition-colors duration-300 underline underline-offset-8 decoration-white/10 hover:decoration-yellow-300/50 break-all"
            >
              jamesowenswildlife@gmail.com
            </a>

            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12 md:mt-16">
              {[
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/james-owens-91b731168/",
                  hover: "hover:text-indigo-400",
                },
                {
                  name: "GitHub",
                  url: "https://github.com/jamesowensdev",
                  hover: "hover:text-purple-400",
                },
                {
                  name: "ResearchGate",
                  url: "https://www.researchgate.net/profile/James-Owens-7",
                  hover: "hover:text-yellow-300",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-[9px] md:text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 transition-all duration-300 ${social.hover}`}
                >
                  {social.name}
                </a>
              ))}
            </div>

            <div className="mt-16 md:mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] md:text-[10px] font-mono text-white/10 uppercase tracking-widest">
              <p>© 2026 James Owens</p>
              <p>54.5973° N, 5.9301° W</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
