"use client";

import { motion } from "framer-motion";
import HeatmapBackground from "@/components/ui/HeatmapBackground";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function PortfolioPage() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory text-[#ECF0F1] relative selection:bg-yellow-300 selection:text-black scroll-smooth">
      {/* THE BACKGROUND: Persistent across all sections */}
      <HeatmapBackground />

      {/* =========================================
          SECTION 1: HERO
      ========================================= */}
      <section className="h-screen w-full snap-start relative flex flex-col items-center justify-center z-10 px-6">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-9xl font-bold tracking-tighter mb-4"
          >
            James Owens
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-sm md:text-base text-orange-400 font-mono uppercase tracking-[0.5em]"
          >
            Spatial Ecology & Data Visualization
          </motion.p>
        </div>

        <ScrollIndicator />
      </section>

      {/* =========================================
          SECTION 2: DIRECTORY (Glassmorphic Terminal)
      ========================================= */}
      <section className="h-screen w-full snap-start relative flex items-center justify-center z-10 px-6">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {/* CARD 01: ABOUT (Indigo Accent) */}
          <a
            href="/about"
            className="group relative p-8 h-[450px] bg-black/20 backdrop-blur-xl border border-white/5 transition-all duration-500 hover:bg-black/40"
          >
            {/* Density Stripe */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-indigo-500/50 group-hover:bg-indigo-400 transition-colors" />
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/10 group-hover:border-indigo-400/50 transition-colors" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/10 group-hover:border-indigo-400/50 transition-colors" />

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start font-mono text-[10px] text-indigo-400">
                <span>FILE_PATH: /PROFILE</span>
                <span className="opacity-40 tracking-widest">01</span>
              </div>
              <h3 className="mt-12 text-4xl font-bold tracking-tighter">
                About Me
              </h3>
              <p className="mt-4 text-sm text-white/40 leading-relaxed font-light">
                Bridging the gap between biological datasets and visual
                storytelling through spatial analysis.
              </p>
              <div className="mt-auto pt-4 flex items-center gap-3 font-mono text-[9px] text-white/20 group-hover:text-indigo-400 transition-colors">
                <div className="h-[1px] w-8 bg-white/10 group-hover:bg-indigo-400 transition-all" />
                <span>ACCESS_BIOGRAPHY</span>
              </div>
            </div>
          </a>

          {/* CARD 02: RESEARCH (Orange Accent) */}
          <a
            href="/research"
            className="group relative p-8 h-[450px] bg-black/20 backdrop-blur-xl border border-white/5 transition-all duration-500 hover:bg-black/40"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-orange-500/50 group-hover:bg-orange-500 transition-colors" />
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/10 group-hover:border-orange-500/50 transition-colors" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/10 group-hover:border-orange-500/50 transition-colors" />

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start font-mono text-[10px] text-orange-500">
                <span>SET: HABITAT_ANALYSIS</span>
                <span className="opacity-40 tracking-widest">02</span>
              </div>
              <h3 className="mt-12 text-4xl font-bold tracking-tighter">
                Research
              </h3>
              <p className="mt-4 text-sm text-white/40 leading-relaxed font-light">
                Peer-reviewed investigations into biodiversity hotspots and
                climate-driven migration.
              </p>
              <div className="mt-auto pt-4 flex items-center gap-3 font-mono text-[9px] text-white/20 group-hover:text-orange-500 transition-colors">
                <div className="h-[1px] w-8 bg-white/10 group-hover:bg-orange-500 transition-all" />
                <span>OPEN_PUBLICATIONS</span>
              </div>
            </div>
          </a>

          {/* CARD 03: PROJECTS (Yellow Accent) */}
          <a
            href="/projects"
            className="group relative p-8 h-[450px] bg-black/20 backdrop-blur-xl border border-white/5 transition-all duration-500 hover:bg-black/40"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-yellow-500/50 group-hover:bg-yellow-300 transition-colors" />
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/10 group-hover:border-yellow-300/50 transition-colors" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/10 group-hover:border-yellow-300/50 transition-colors" />

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start font-mono text-[10px] text-yellow-300">
                <span>EXP: MAPPING_TOOLS</span>
                <span className="opacity-40 tracking-widest">03</span>
              </div>
              <h3 className="mt-12 text-4xl font-bold tracking-tighter">
                Projects
              </h3>
              <p className="mt-4 text-sm text-white/40 leading-relaxed font-light">
                Custom Python libraries and interactive web-maps for real-time
                ecological monitoring.
              </p>
              <div className="mt-auto pt-4 flex items-center gap-3 font-mono text-[9px] text-white/20 group-hover:text-yellow-300 transition-colors">
                <div className="h-[1px] w-8 bg-white/10 group-hover:bg-yellow-300 transition-all" />
                <span>EXPLORE_BUILDS</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* =========================================
          SECTION 3: CONTACT
      ========================================= */}
      <section className="h-screen w-full snap-start relative flex items-center justify-center z-10 px-6 bg-gradient-to-t from-black/60 to-transparent">
        <div className="max-w-4xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-mono text-orange-500 uppercase tracking-[0.3em] mb-4 block">
              Available for Collaboration
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
              Get in Touch
            </h2>

            <a
              href="mailto:hello@jamesowens.com"
              className="text-2xl md:text-4xl font-light text-white/80 hover:text-yellow-300 transition-colors duration-300 underline underline-offset-8 decoration-white/10 hover:decoration-yellow-300/50"
            >
              hello@jamesowens.com
            </a>

            <div className="flex flex-wrap justify-center gap-12 mt-16">
              {[
                { name: "LinkedIn", url: "#", hover: "hover:text-indigo-400" },
                { name: "GitHub", url: "#", hover: "hover:text-purple-400" },
                {
                  name: "ResearchGate",
                  url: "#",
                  hover: "hover:text-yellow-300",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 transition-all duration-300 ${social.hover}`}
                >
                  {social.name}
                </a>
              ))}
            </div>

            <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-white/10 uppercase tracking-widest">
              <p>© 2026 James Owens</p>
              <p>54.5973° N, 5.9301° W</p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
