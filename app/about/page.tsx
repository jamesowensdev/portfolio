"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    /*
       1. Removed any 'bg-...' classes from the main tag.
       2. Kept the relative z-index to 10 so it sits above the heatmap (z-0).
    */
    <main className="min-h-screen w-full text-[#ECF0F1] relative selection:bg-orange-500/30 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* SECTION HEADER */}
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-indigo-500" />
            <span className="text-xs font-mono uppercase tracking-[0.4em] text-indigo-400">
              User_Profile // Index_01
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter"
          >
            James Owens
          </motion.h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* LEFT COLUMN: THE NARRATIVE */}
          <div className="md:col-span-8 space-y-8">
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-invert max-w-none"
            >
              <p className="text-xl leading-relaxed text-white/80 font-light">
                I am a{" "}
                <span className="text-white font-medium italic">
                  Spatial Ecologist
                </span>{" "}
                and
                <span className="text-white font-medium italic">
                  {" "}
                  Data Architect
                </span>{" "}
                dedicated to deciphering the complex spatial-temporal dynamics
                of the natural world.
              </p>
              <p className="text-white/60 leading-relaxed">
                My work focuses on the intersection of biological field data and
                computational modeling. By utilizing advanced GIS techniques and
                custom Python-based analytics, I translate raw environmental
                sensors into high-resolution visual narratives that drive
                conservation strategy and habitat management.
              </p>
            </motion.section>

            {/* CORE COMPETENCIES */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="p-6 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm">
                <h3 className="font-mono text-[10px] text-indigo-400 uppercase tracking-widest mb-3">
                  01 / Analysis
                </h3>
                <p className="text-sm text-white/70">
                  Kernel Density Estimation (KDE), species distribution
                  modeling, and multivariate regression.
                </p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm">
                <h3 className="font-mono text-[10px] text-orange-500 uppercase tracking-widest mb-3">
                  02 / Visualization
                </h3>
                <p className="text-sm text-white/70">
                  Interactive web-mapping (Leaflet/Mapbox), D3.js data
                  storytelling, and cartographic design.
                </p>
              </div>
            </motion.section>
          </div>

          {/* RIGHT COLUMN: TECHNICAL STACK / SPECS */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="md:col-span-4 space-y-8"
          >
            <div className="border-l border-white/10 pl-6 py-2">
              <h4 className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-4">
                Technical_Stack
              </h4>
              <ul className="space-y-3 text-sm font-mono">
                <li className="flex justify-between">
                  <span className="text-white/50">Language</span>
                  <span className="text-indigo-400">Python / R</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-white/50">GIS</span>
                  <span className="text-orange-500">QGIS / ArcGIS</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-white/50">Frontend</span>
                  <span className="text-yellow-300">Next.js / TS</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-white/50">Database</span>
                  <span className="text-white/80">PostgreSQL</span>
                </li>
              </ul>
            </div>

            <div className="border-l border-white/10 pl-6 py-2">
              <h4 className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-4">
                Location_Data
              </h4>
              <p className="text-xs text-white/60 leading-loose">
                Current_Base: <br />
                Belfast, Northern Ireland <br />
                <span className="text-indigo-500 font-mono">
                  54.5973° N, 5.9301° W
                </span>
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </main>
  );
}
