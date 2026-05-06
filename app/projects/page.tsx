"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

// --- PROJECT DATA ---
const PROJECTS = [
  {
    id: "01",
    title: "Central Place Forager Model",
    type: "Ecological Modelling",
    year: "2025",
    color: "from-purple-400 to-indigo-400",
    accent: "text-indigo-400",
    border: "border-indigo-500",
    bgHover: "hover:bg-indigo-500/10",
    description:
      "An individual/agent-based model simulating movement behaviour of a central place foraging (CPF) species in a dynamic ecosystem.",
    techStack: ["R", "terra", "tidyverse", "R6", "sf"],
    repo: "https://github.com/jamesowensdev/cpf_simulation",
    features: [
      "Multistate model simulating CPF movement behaviour through correlated random walks.",
      "The agent interacts with the environment, reading in raster data to determine the forage quality in a given location.",
      "Simulates camera trap array monitoring, with imperfect reverse sigmoid detection chance",
    ],
    image: "/barn_owl.jpg",
  },
  {
    id: "02",
    title: "Geographic Profiling Analysis",
    type: "Data-Modelling Pipeline",
    year: "2026",
    color: "from-orange-500 to-yellow-400",
    accent: "text-orange-400",
    border: "border-orange-500",
    bgHover: "hover:bg-orange-500/10",
    description:
      "A complete cross-language modelling pipeline for geographic profiling analysis.",
    techStack: [
      "Python",
      "pandas",
      "numpy",
      "rasterio",
      "matplotlib",
      "R",
      "tidyverse",
      "sf",
      "terra",
    ],
    repo: "https://github.com/jamesowensdev/phd_gp_eval",
    features: [
      "Agent based model written in Python, with agent interactions and environmental raster data.",
      "Multiple sampling methods to simulate a variety of detection methods along agent paths.",
      "Bayesian geographic profiling analysis in R using the `tidyverse` and `sf` packages.",
      "Hit Score comparisons to evaluate model performance for different detection methods.",
      "Project repo protected pending paper submission",
    ],
    image: "/heatmap.png",
  },
  {
    id: "03",
    title: "Interactive Research Portfolio",
    type: "Web Development",
    year: "2026",
    color: "from-yellow-300 to-orange-500",
    accent: "text-yellow-300",
    border: "border-yellow-400",
    bgHover: "hover:bg-yellow-400/10",
    description: "The website you are currently viewing!",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Canvas API",
    ],
    repo: "https://github.com/jamesowensdev/portfolio",
    features: [
      "Custom-built BFCache management for seamless, instant page transitions.",
      "Algorithmically driven Canvas and SVG animations calculating spatial dynamics at 60fps.",
      "Fully responsive split-pane terminal aesthetic mimicking specialised GIS software.",
    ],
    image: "/code.jpg",
  },
];

export default function ProjectsPage() {
  const [activeProjectId, setActiveProjectId] = useState(PROJECTS[0].id);
  const activeProject =
    PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];

  const scrollRef = useRef<HTMLElement>(null);

  return (
    <main
      ref={scrollRef}
      className="h-[100dvh] w-full overflow-y-auto snap-y snap-proximity md:snap-mandatory text-[#ECF0F1] relative selection:bg-orange-500/30 scroll-smooth"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .viewer-scroll::-webkit-scrollbar { width: 6px; }
        .viewer-scroll::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); border-radius: 4px; }
        .viewer-scroll::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 4px; }
        .viewer-scroll::-webkit-scrollbar-thumb:hover { background: rgba(249, 115, 22, 0.5); }
      `,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* =========================================
            SNAP SECTION 01: HEADER
        ========================================= */}
        <section className="min-h-[100dvh] w-full snap-start flex flex-col justify-start md:justify-center px-6 pt-24 pb-16 md:py-24 relative">
          <header className="mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-px w-8 md:w-12 bg-yellow-400" />
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] md:tracking-[0.4em] text-yellow-300">
                SRC // Index_03
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter "
            >
              Technical Projects
            </motion.h1>
          </header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-3xl"
          >
            <div className="bg-black/10 backdrop-blur-md border border-white/10 rounded-sm p-6 md:p-8 shadow-2xl prose prose-invert max-w-none">
              <p className="text-lg md:text-xl leading-relaxed font-light mb-6 text-orange-500">
                Bridging the gap between ecology and technology
              </p>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mb-0">
                Below is a collection of technical projects I have completed
                recently. These were made as part of my PhD research, to learn
                new skills, or simply to make my day-to-day or research workflow
                more efficient. <br></br> <br></br>
                Select a directory to view the project specifications.
              </p>
            </div>
          </motion.div>
          <div className="hidden md:block">
            <ScrollIndicator />
          </div>
        </section>

        {/* =========================================
            SNAP SECTION 02: THE SPLIT-PANE TERMINAL
        ========================================= */}
        <section className="min-h-[100dvh] w-full snap-start flex flex-col justify-start md:justify-center px-6 pt-24 pb-16 md:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ root: scrollRef, once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full h-[75vh] md:h-[650px] bg-black/10 backdrop-blur-md border border-white/10 rounded-sm overflow-hidden flex flex-col md:flex-row shadow-2xl"
          >
            {/* LEFT PANE: DIRECTORY NAVIGATION */}
            <nav className="w-full md:w-[30%] shrink-0 border-b md:border-b-0 md:border-r border-white/10 bg-white/[0.02] flex flex-col">
              <div className="p-4 md:p-6 border-b border-white/10 bg-black/10 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest ml-2">
                  /root/projects
                </span>
              </div>

              <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-hidden viewer-scroll p-2 md:p-4 gap-2">
                {PROJECTS.map((project) => {
                  const isActive = activeProjectId === project.id;
                  return (
                    <button
                      key={project.id}
                      onClick={() => setActiveProjectId(project.id)}
                      className={`
                        text-left flex flex-col p-4 rounded-sm transition-all duration-300 min-w-[200px] md:min-w-0 cursor-none
                        ${isActive ? `bg-white/10 border-l-2 md:border-b-0 border-b-2 md:border-l-2 ${project.border}` : `hover:bg-white/5 border-l-2 border-transparent`}
                      `}
                    >
                      <span
                        className={`text-[10px] font-mono tracking-widest mb-1 transition-colors duration-300 ${isActive ? project.accent : "text-white/40"}`}
                      >
                        FILE_0{project.id}
                      </span>
                      <span
                        className={`font-medium tracking-tight transition-colors duration-300 ${isActive ? "text-white" : "text-white/60"}`}
                      >
                        {project.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* RIGHT PANE: CONTENT VIEWER */}
            <div className="w-full md:w-[70%] h-full relative overflow-y-auto viewer-scroll bg-[#050214]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 md:p-10"
                >
                  <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                    <div>
                      <h2
                        className={`text-sm md:text-base font-mono uppercase tracking-[0.3em] mb-2 bg-clip-text text-transparent bg-gradient-to-r ${activeProject.color} inline-block`}
                      >
                        {activeProject.type}
                      </h2>
                      <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
                        {activeProject.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-white/30 tracking-widest border border-white/10 px-3 py-1 rounded-full">
                      BUILD_{activeProject.year}
                    </span>
                  </div>

                  <div className="relative w-full aspect-video md:aspect-[21/9] mb-10 overflow-hidden rounded-sm border border-white/10 group">
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] pointer-events-none mix-blend-overlay" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    <div className="md:col-span-8 prose prose-invert">
                      <p className="text-sm md:text-base text-white/60 leading-relaxed font-light mb-8">
                        {activeProject.description}
                      </p>

                      <h4
                        className={`text-[10px] font-mono tracking-widest uppercase mb-4 ${activeProject.accent}`}
                      >
                        Core_Features
                      </h4>
                      <ul className="space-y-3 text-xs md:text-sm text-white/60 list-none pl-0">
                        {activeProject.features.map((feature, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className={activeProject.accent}>+</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="md:col-span-4 space-y-8 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-6">
                      <div>
                        <h4 className="text-[10px] font-mono text-white/40 tracking-widest uppercase mb-4">
                          Tech_Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {activeProject.techStack.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-[9px] font-mono text-white/60 bg-white/5 border border-white/10 px-2 py-1 rounded-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3 pt-4">
                        {activeProject.repo && (
                          <a
                            href={activeProject.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-between w-full p-3 border border-white/10 transition-colors duration-300 cursor-none group ${activeProject.bgHover}`}
                          >
                            <span className="text-[10px] font-mono tracking-widest uppercase text-white/60 group-hover:text-white">
                              View_Repository
                            </span>
                            <svg
                              className={`w-3 h-3 text-white/30 group-hover:${activeProject.accent} transition-colors`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
