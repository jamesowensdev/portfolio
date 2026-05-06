"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function AboutPage() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory text-[#ECF0F1] relative selection:bg-orange-500/30 scroll-smooth">
      {/* Custom Terminal Scrollbar */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .resume-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .resume-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 4px;
        }
        .resume-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .resume-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(249, 115, 22, 0.5); /* Orange hover */
        }
      `,
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10 w-full">
        {/* =========================================
            SNAP SECTION 01: HEADER & PERSONAL BIO
        ========================================= */}
        <section className="min-h-screen w-full snap-start flex flex-col justify-center px-6 py-24 relative">
          <header className="mb-12 md:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-px w-8 md:w-12 bg-indigo-500" />
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] md:tracking-[0.4em] text-indigo-400">
                User_Profile // Index_01
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter"
            >
              James Owens
            </motion.h1>
          </header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.3em] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 inline-block">
              01 // Personal_background
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
              {/* Left Column: Bio Text */}
              <div className="md:col-span-7 prose prose-invert max-w-none">
                <p className="text-lg md:text-xl leading-relaxed text-orange-500 font-light mb-6">
                  PhD Researcher, Ecologist, Father
                </p>
                <p className="text-sm md:text-base text-white/60 leading-relaxed">
                  I am a PhD researcher in ecology, with a passion for nature
                  and technology, and how the two can intersect to improve
                  conservation efforts.
                  <br />
                  <br />
                  When I&apos;m not working, you can find me exploring nature,
                  enjoying a coffee, or spending time with my family.
                </p>
              </div>

              {/* Right Column: Stylized Portrait Frame */}
              <div className="md:col-span-5 relative group mt-6 md:mt-0 max-w-[300px] md:max-w-none mx-auto w-full">
                {/* Tech Bracket Corners */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-indigo-500/50 group-hover:border-indigo-400 transition-colors duration-500 z-20 pointer-events-none" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-indigo-500/50 group-hover:border-indigo-400 transition-colors duration-500 z-20 pointer-events-none" />

                {/* Targeting Crosshairs */}
                <div className="absolute top-1/2 -left-4 w-2 h-[1px] bg-white/20 z-20 pointer-events-none" />
                <div className="absolute top-1/2 -right-4 w-2 h-[1px] bg-white/20 z-20 pointer-events-none" />
                <div className="absolute -top-4 left-1/2 w-[1px] h-2 bg-white/20 z-20 pointer-events-none" />
                <div className="absolute -bottom-4 left-1/2 w-[1px] h-2 bg-white/20 z-20 pointer-events-none" />

                {/* Inner Image Container */}
                <div className="relative aspect-[4/5] w-full bg-black/40 border border-white/10 overflow-hidden backdrop-blur-sm p-2">
                  <div className="relative w-full h-full overflow-hidden bg-[#050214]">
                    {/* OPTIMIZED NEXT.JS IMAGE */}
                    <Image
                      src="/profile2.jpg"
                      alt="James Owens"
                      fill
                      priority
                      className="object-cover opacity-60 grayscale contrast-125 group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100 transition-all duration-1000 ease-in-out"
                    />

                    {/* Scanline Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50 mix-blend-overlay" />

                    {/* Data Overlay Text */}
                    <div className="absolute bottom-3 right-3 text-[8px] font-mono tracking-widest text-right pointer-events-none drop-shadow-md">
                      <p className="text-white/50 mb-0.5">IMG_SRC: BIO_01</p>
                      <p className="text-indigo-400/80 group-hover:text-indigo-400 transition-colors">
                        LAT: 54.5973° N
                      </p>
                      <p className="text-indigo-400/80 group-hover:text-indigo-400 transition-colors">
                        LON: 5.9301° W
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <ScrollIndicator />
        </section>

        {/* =========================================
            SNAP SECTION 02: PROFESSIONAL & ACADEMIC
        ========================================= */}
        <section className="min-h-screen w-full snap-start flex flex-col justify-center px-6 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.3em] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-400 inline-block">
              02 // PROFESSIONAL_BACKGROUND
            </h2>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg md:text-xl leading-relaxed text-white/90 font-light mb-6 max-w-3xl">
                I am a{" "}
                <span className="text-yellow-300 font-medium italic">
                  Spatial Ecologist
                </span>{" "}
                and{" "}
                <span className="text-yellow-300 font-medium italic">
                  Data Scientist
                </span>{" "}
                utilising my software engineering background to bridge the gap
                between raw data and actionable conservation strategy.
              </p>
              <p className="text-sm md:text-base text-white/60 leading-relaxed mb-8 max-w-3xl">
                I am currently a PhD researcher in Spatial Ecology at
                Queen&apos;s University Belfast, with a focus on geographic
                profiling and bayesian modelling. I was previously employed as a
                software engineer where I worked on Java based web applications,
                and overhauling legacy systems written in C.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-10 max-w-3xl">
                <div className="p-5 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm hover:border-orange-500/30 transition-colors">
                  <h3 className="font-mono text-[10px] text-indigo-400 uppercase tracking-widest mb-2">
                    Data Science & Geospatial Analysis
                  </h3>
                  <ul>
                    <li className="text-xs">
                      <span className="text-orange-500">Python:</span> pandas,
                      numpy, geopandas, scikit-learn, xarray, rasterio,
                      matplotlib, seaborn, steamlit
                    </li>
                    <br></br>
                    <li className="text-xs">
                      <span className="text-orange-500">R:</span> tidyverse,
                      terra, sf, brms, shiny, R6, vegan, lme4, mgcv
                    </li>
                    <br></br>
                    <li className="text-xs">
                      <span className="text-orange-500">
                        Geospatial Software:
                      </span>{" "}
                      QGIS, ArcGIS
                    </li>
                  </ul>
                </div>
                <div className="p-5 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm hover:border-yellow-400/30 transition-colors">
                  <h3 className="font-mono text-[10px] text-orange-500 uppercase tracking-widest mb-2">
                    Software Engineering
                  </h3>
                  <ul>
                    <li className="text-xs">
                      <span className="text-yellow-300">Languages:</span>{" "}
                      Python, R, Java, C, C++, TypeScript, Rust
                    </li>
                    <br></br>
                    <li className="text-xs">
                      <span className="text-yellow-300">Web & Front End:</span>{" "}
                      React, HTML5, CSS3 (SASS, Tailwind)
                    </li>
                    <br></br>
                    <li className="text-xs">
                      <span className="text-yellow-300">Databases:</span>{" "}
                      PostgreSQL, MySQL, MongoDB, OracleDB
                    </li>
                  </ul>
                </div>
              </div>

              {/* OUTSTANDING CTA TO RESEARCH PAGE */}
              <div className="not-prose">
                <Link
                  href="/research"
                  className="group inline-flex items-center gap-4 px-6 py-4 bg-orange-500/10 border border-orange-500/30 rounded-sm hover:bg-orange-500/20 hover:border-yellow-400/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] transition-all duration-300 cursor-none"
                >
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-orange-500 group-hover:text-yellow-300 transition-colors">
                    View Research
                  </span>
                  <svg
                    className="w-4 h-4 text-orange-500 group-hover:text-yellow-300 group-hover:translate-x-1.5 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
          <ScrollIndicator />
        </section>

        {/* =========================================
            SNAP SECTION 03: SCROLLABLE RESUME
        ========================================= */}
        <section className="min-h-screen w-full snap-start flex flex-col justify-center px-6 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.3em] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-500 inline-block">
              03 // Career_Telemetry
            </h2>

            <div>
              <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-sm overflow-hidden h-[450px] md:h-[500px] relative flex flex-col shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="ml-2 text-[9px] font-mono text-white/40 uppercase tracking-widest">
                    cv_data_stream.log
                  </span>
                </div>

                <div className="p-6 md:p-8 overflow-y-auto resume-scroll flex-1">
                  <div className="text-[10px] font-mono text-indigo-400 tracking-widest ml-2 pl-6">
                    EMPLOYMENT
                  </div>
                  <br />
                  <div className="space-y-12 border-l border-white/10 ml-2 pl-6 md:pl-8 relative">
                    <div className="relative">
                      <div className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 rounded-full bg-[#050214] border-2 border-yellow-300 shadow-[0_0_10px_rgba(253,224,71,0.5)]" />
                      <div className="text-[10px] font-mono text-yellow-300 tracking-widest mb-1">
                        OCTOBER 2025 — PRESENT
                      </div>
                      <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mb-1">
                        PhD Researcher in Spatial Ecology
                      </h3>
                      <h4 className="text-sm font-light text-white/60 mb-4 italic">
                        Queen&apos;s University Belfast
                      </h4>
                      <ul className="space-y-2 text-xs md:text-sm text-white/50 leading-relaxed list-disc list-outside ml-4 marker:text-white/20">
                        <li>
                          Developed agent-based models to simulate realistic
                          movement of central place foragers.
                        </li>
                        <li>
                          Built a complete data analysis pipeline to compare
                          accuracy of Bayesian geographic profiling models in a
                          range of sampling scenarios.
                        </li>
                        <li>
                          Presented my research at Northern Ireland Science
                          Festival
                        </li>
                        <li>Technologies used: Python, R </li>
                      </ul>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 rounded-full bg-[#050214] border-2 border-white/30" />
                      <div className="text-[10px] font-mono text-yellow-300 tracking-widest mb-1">
                        SEPTEMBER 2023 — OCTOBER 2025
                      </div>
                      <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mb-1">
                        Software Engineer
                      </h3>
                      <h4 className="text-sm font-light text-white/60 mb-4 italic">
                        BT Group
                      </h4>
                      <ul className="space-y-2 text-xs md:text-sm text-white/50 leading-relaxed list-disc list-outside ml-4 marker:text-white/20">
                        <li>
                          Software Engineer within billing for BT Digital,
                          focussing on wholesale billing activity.
                        </li>
                        <li>
                          Responsible for design, development, and testing of
                          releases ranging from new application development,
                          legacy product EOSL and migration, and enhancing
                          functionality of existing systems.
                        </li>
                        <li>
                          Development is mainly done in Java and SQL utilising
                          Oracle DB. Releases are deployed using GitLab for
                          source control and Jenkins for build & deployment.
                        </li>
                        <li>
                          Involved in a large-scale migration of a product
                          library, during which I have been responsible for
                          development of additional features, refactoring and
                          optimising old functionality, and contributing ideas
                          to improvements in how future development on the
                          platform should be conducted.
                        </li>
                        <li>
                          Technologies used: Java, C, SQL, Oracle DB, GitLab,
                          Jenkins
                        </li>
                      </ul>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[29px] md:-left-[37px] top-1.5 w-3 h-3 rounded-full bg-[#050214] border-2 border-white/30" />
                      <div className="text-[10px] font-mono text-yellow-300 tracking-widest mb-1">
                        SEPTEMBER 2021 — SEPTEMBER 2023
                      </div>
                      <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mb-1">
                        Technology Recruitment Consultant
                      </h3>
                      <h4 className="text-sm font-light text-white/60 mb-4 italic">
                        Anson McCade
                      </h4>
                      <ul className="space-y-2 text-xs md:text-sm text-white/50 leading-relaxed list-disc list-outside ml-4 marker:text-white/20">
                        <li>
                          Technical recruitment consultant responsible for all
                          aspects of the hiring process
                        </li>
                        <li>
                          Client management responsibilities, regular meetings
                          with Senior stakeholders within the UK’s biggest name
                          in Defence and National Security.
                        </li>
                        <li>
                          Vetting candidates on both technical skillset and
                          discussing the procedure required for UK Security
                          Clearance (SC and DV)
                        </li>
                        <li>
                          Researching market behaviour, identifying client
                          competitors and headhunting suitable candidates
                        </li>
                        <li>
                          Mentoring junior consultants on engineering concepts
                          and terminology (containerisation, microservices etc)
                          to better equip them to identify suitable candidates
                        </li>
                      </ul>
                    </div>

                    <div className="text-[10px] font-mono text-indigo-400 tracking-widest mb-1">
                      EDUCATION
                    </div>
                    <div className="relative pt-3">
                      <div className="absolute -left-[29px] md:-left-[37px] top-4 w-3 h-3 rounded-full bg-[#050214] border-2 border-indigo-400" />
                      <div className="text-[10px] font-mono text-yellow-300 tracking-widest mb-1">
                        SEPTEMBER 2022 — JUNE 2024
                      </div>
                      <h3 className="text-base md:text-lg font-bold tracking-tight text-white mb-1">
                        Postgraduate Diploma in Software Development
                      </h3>
                      <h4 className="text-sm font-light text-orange-500">
                        Distinction
                      </h4>
                    </div>
                    <div className="relative pt-3">
                      <div className="absolute -left-[29px] md:-left-[37px] top-4 w-3 h-3 rounded-full bg-[#050214] border-2 border-indigo-400" />
                      <div className="text-[10px] font-mono text-yellow-300 tracking-widest mb-1">
                        SEPTEMBER 2022 — JUNE 2024
                      </div>
                      <h3 className="text-base md:text-lg font-bold tracking-tight text-white mb-1">
                        MSc (Hons) Zoology with Animal Behaviour
                      </h3>
                      <h4 className="text-sm font-light text-orange-500">
                        First Class Honours
                      </h4>
                      <h5 className="text-sm font-light text-white/60">
                        <em className="text-indigo-400">Thesis subjects :</em>
                        <br />
                        Social and Demographic Drivers of Male Elephant
                        Sociality. <br />
                        The Impact of Changing Human Behaviour During Covid-19
                        Lockdown on the Activity Patterns of Woodland Mammals.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <a
                  href="#"
                  className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white/40 hover:text-white transition-colors group cursor-none"
                >
                  <svg
                    className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download_Full_CV.pdf
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
