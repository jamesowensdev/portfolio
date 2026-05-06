"use client";

import { motion } from "framer-motion";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import MovementComparison from "@/components/simulations/MovementComparison";
import GeographicProfiling from "@/components/simulations/GeographicProfiling";

export default function ResearchPage() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory text-[#ECF0F1] relative selection:bg-orange-500/30 scroll-smooth">
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        {/* =========================================
            SNAP SECTION 01: HEADER & OVERVIEW
        ========================================= */}
        <section className="min-h-screen w-full snap-start flex flex-col justify-center px-6 py-24 relative">
          <header className="mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-px w-8 md:w-12 bg-orange-500" />
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] md:tracking-[0.4em] text-orange-500">
                Research_Logs // Index_02
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter"
            >
              GEOGRAPHIC PROFILING
            </motion.h1>
          </header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl prose prose-invert"
          >
            <p className="text-lg md:text-xl leading-relaxed text-yellow-300 font-light mb-6">
              My core research investigates using geographic profiling (GP)
              methods to identify wildlife breeding sites from sighting data and
              assessing their efficacy across species and landscapes.
            </p>
            <p className="text-sm md:text-base text-white/60 leading-relaxed mb-8">
              By assessing the performance of current Bayesian GP models using
              simulated data, my aim is to find the breaking point at which the
              models&apos; accuracy fails when applied to real-world ecological
              data. This analysis will then act as a springboard for further
              research into developing GP models specially for ecological data
              analysis.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-indigo-400 font-light mb-6">
              SPATIAL MODELS → ECOLOGICAL MODELS
            </p>
          </motion.div>
          <ScrollIndicator />
        </section>

        {/* =========================================
            SNAP SECTION 02: GP INTRODUCTION
        ========================================= */}
        <section className="min-h-screen w-full snap-start flex flex-col justify-center px-6 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl prose prose-invert"
          >
            <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.3em] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 inline-block">
              01 // What is Geographic Profiling?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-orange-400 font-light mb-6">
              Theoretical Background
            </p>
            <p className="text-sm md:text-base text-white/60 leading-relaxed mb-4">
              Geographic profiling is a technique developed in Criminology by Dr
              Kim Rossmo to help deal with the information overload associated
              with serial crimes. It allows law enforcement to more accurately
              focus investigation efforts by estimating a criminal&apos;s anchor
              point (home, workplace, etc.).<br></br>
              <br></br>
              The method is based on a few key concepts:
            </p>
            <ul className="text-sm md:text-base text-white/60 leading-relaxed mb-4">
              <li>
                <em className="text-yellow-300">Principle of Least Effort </em>-
                Excluding other external variables, an individual will choose to
                commit an act at the minimum distance required to reach a target
              </li>
              <br />
              <li>
                <em className="text-yellow-300">Buffer Zone</em> - The area
                immediately surrounding the anchor point has a low probability
                of incident due to the avoidance of “fouling the nest”, rather
                than a lack of ability or opportunity.
              </li>
              <br />
              <li>
                <em className="text-yellow-300">Decay Distance</em>- The
                probability of an incident decreases with distance from the
                anchor point.
              </li>
            </ul>
            <p className="text-sm md:text-base text-white/60 leading-relaxed">
              Ultimately, these three principles intersect to form a predictive
              mathematical surface that transforms scattered incident data into
              a highly targeted search area.
            </p>
          </motion.div>
          <ScrollIndicator />
        </section>
        {/* =========================================
            SNAP SECTION 03: GEO PROFILING WIDGET
        ========================================= */}
        <section className="min-h-screen w-full snap-start flex flex-col justify-center px-6 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.3em] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 inline-block">
              02 // Geographic Profiling Showcase
            </h2>

            <GeographicProfiling />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/60 font-light border-t border-white/10 pt-8">
              <div>
                <h4 className="text-[10px] font-mono tracking-widest uppercase text-indigo-400 mb-2">
                  The Buffer Zone (B)
                </h4>
                <p className="leading-relaxed text-[12px]">
                  Notice the hollow &quot;donut hole&quot; at the centre of the
                  probability cluster. This represents the biological buffer
                  zone. Central place foragers rarely hunt immediately outside
                  their dens to avoid attracting predators to their vulnerable
                  young.
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-mono tracking-widest uppercase text-orange-400 mb-2">
                  Distance Decay (f & g)
                </h4>
                <p className="leading-relaxed text-[12px]">
                  These parameters dictate the steepness of the probability
                  drop-off. Parameter{" "}
                  <span className="font-mono text-orange-300">f</span> controls
                  how quickly probability fades outside the buffer, while{" "}
                  <span className="font-mono text-red-400">g</span> controls the
                  sharp decline inside the buffer zone.
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-mono tracking-widest uppercase text-yellow-300 mb-2">
                  Spatial Certainty
                </h4>
                <p className="leading-relaxed text-[12px]">
                  Rather than a simple sample size metric, certainty is
                  calculated using the inverse spatial variance (Hit Score
                  Area). If the high-probability &quot;hotzone&quot; is smeared
                  across the entire map, confidence is low. A sharp, dense
                  mathematical peak results in high confidence.
                </p>
              </div>
            </div>
          </motion.div>
          <ScrollIndicator />
        </section>

        {/* =========================================
            SNAP SECTION 04: ECOLOGICAL GP APPLICATION
        ========================================= */}
        <section className="min-h-screen w-full snap-start flex flex-col justify-center px-6 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl prose prose-invert"
          >
            <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.3em] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 inline-block">
              03 // Bridging the ecological gap
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-orange-400 font-light mb-6">
              Turning crime fighting methods into conservation tools
            </p>
            <p className="text-sm md:text-base text-white/60 leading-relaxed mb-4">
              The same principles which make GP such a powerful tool for spatial
              analysis in criminology can also be applied to ecology. Most
              obviously, in the case of central place foragers (CPF). These CPF
              are species which are tethered to a specific anchor point to which
              it must return. Most commonly, these anchor points are the
              locations of roosts or nest sites, but they can also be linked to
              breeding sites and food caches.
            </p>
            <p className="text-sm md:text-base text-white/60 leading-relaxed">
              The spatial ecology of CPF species is altered due to the
              constraint of being tethered to a specific anchor point, and as
              such their foraging patterns can be considered comparatively with
              Rossmo&apos;s original concepts.<br></br>
              <br></br>
            </p>
            <ul className="text-sm md:text-base text-white/60 leading-relaxed mb-4">
              <li>
                <em className="text-yellow-300">Principle of Least Effort </em>-
                Excluding other external variables, an animal will choose to
                forage at the minimum distance required to reach a suitable
                habitat
              </li>
              <br />
              <li>
                <em className="text-yellow-300">Buffer Zone</em> - The area
                immediately surrounding the anchor point has a lower probability
                of foraging due to the avoidance alerting predators as to their
                nest location. Particularly poignant in the case of mothers with
                young offspring.
              </li>
              <br />
              <li>
                <em className="text-yellow-300">Decay Distance</em>- The
                probability of foraging decreases with distance from the anchor
                point. In an ecological context, Marginal Value Theorem states
                that an individual must balance the energetic cost of travel
                with the resource density of a foraging patch. In the case of
                single-load foragers such as raptors, this dictates that as
                distance from the nest increases, the quality of the prey must
                increase to justify the return journey.
              </li>
            </ul>
          </motion.div>
          <ScrollIndicator />
        </section>

        {/* =========================================
            SNAP SECTION 05: AGENT BASED MODELING
        ========================================= */}
        <section className="min-h-screen w-full snap-start flex flex-col justify-center px-6 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl prose prose-invert"
          >
            <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.3em] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 inline-block">
              04 // Agent_Based_Modeling
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-orange-400 font-light mb-6">
              HOW CAN WE TEST THE BREAKING POINT OF GP MODELS?
            </p>
            <p className="text-sm md:text-base text-white/60 leading-relaxed mb-4">
              While GP models are powerful, and have been used successfully in
              ecological applications, current methods have their limitations,
              they are strictly spatial tools which do not see the ecological
              big picture.
            </p>
            <p className="text-sm md:text-base text-white/60 leading-relaxed">
              Animals do not move arbitrarily through their landscape, rather
              there are a multitude of factors which impact their behavior.
              These can vary from avoidance of anthropogenic factors, to being
              drawn to specific habitats types to feed. Therefore, where current
              GP models may predict an anchor point may be skewed as a result of
              sighting density in favoured habitats, rather than considering the
              spatial distribution of resources in their priors.
            </p>
            <br></br>
            <p className="text-sm md:text-base text-white/60 leading-relaxed">
              In order to test the robustness of these models, we must first
              have sightings data across multiple species, landscapes and
              sampling methods. This will allow us to evaluate how well the
              models generalize to unseen data. However, in reality such
              datasets are often limited by the availability of data and the
              cost of collecting it. In order to overcome these limitations, and
              to allow us to replicate movement consistently, we are using an
              agent-based modelling approach to generate synthetic movement
              tracks from which we can take our samples.
            </p>
          </motion.div>
        </section>

        {/* =========================================
            SNAP SECTION 06: MOVEMENT WIDGET
        ========================================= */}
        <section className="min-h-screen w-full snap-start flex flex-col justify-center px-6 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.3em] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 inline-block">
              05 // SIMULATING MOVEMENT
            </h2>

            <MovementComparison />
            {/* Explanatory Footer: CRW vs Brownian Motion */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-white/60 font-light border-t border-white/10 pt-8">
              <div>
                <h4 className="text-[10px] font-mono tracking-widest uppercase text-indigo-400 mb-2">
                  The Brownian Baseline
                </h4>
                <p className="leading-relaxed text-[12px]">
                  Pure Brownian motion assumes each step is entirely
                  independent. This results in erratic, highly localised
                  thrashing with zero directional persistence. It fails to
                  replicate the intentional, forward-moving nature of a living
                  organism navigating its environment.
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-mono tracking-widest uppercase text-orange-400 mb-2">
                  Correlated Trajectories (CRW)
                </h4>
                <p className="leading-relaxed text-[12px]">
                  A Correlated Random Walk (CRW) introduces mathematical memory.
                  By constraining turning angles relative to the agent&apos;s
                  current heading, the simulation produces the natural, sweeping
                  trajectories and persistent momentum characteristic of actual
                  movement behaviour.
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-mono tracking-widest uppercase text-yellow-300 mb-2">
                  Ecological Accuracy
                </h4>
                <p className="leading-relaxed text-[12px]">
                  This mathematical framework allows for complex, real-world
                  modelling. By dynamically altering the movement correlation
                  based on underlying raster data, the agent seamlessly
                  transitions from rapid, straight-line travel into intense,
                  area-restricted search (ARS) when entering high-quality
                  habitat.
                </p>
              </div>
            </div>
          </motion.div>
          <ScrollIndicator />
        </section>

        {/* =========================================
            SNAP SECTION 07: ABM EXPLORATION
        ========================================= */}
        <section className="min-h-screen w-full snap-start flex flex-col justify-center px-6 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl prose prose-invert"
          >
            <h2 className="text-sm md:text-base font-mono uppercase tracking-[0.3em] mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 inline-block">
              06 // expanding the movement model
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-orange-400 font-light mb-6">
              A movement mechanism alone is not sufficient to generate realistic
              tracks for animals, we must consider what ecological factors
              influence movement.
            </p>
            <p className="text-sm md:text-base text-white/60 leading-relaxed mb-4">
              Utilising the Levy flight model to simulate realistic movement
              paths provides us with a great foundation off which to define
              movement models via a step selection function. By altering the
              persistence degree of the agent based on its current state we can
              change how it moves when hunting vs returning to its anchor point
              vs exploring new areas.
            </p>
            <p className="text-sm md:text-base text-white/60 leading-relaxed">
              The step selection function implementation also allows us to
              determine when and how the agent should change its movement
              strategy, this leads into a dynamic movement model wherein the
              agent interacts with a stack of environment rasters to determine
              its next step.
            </p>
            <br />
            <p className="text-sm md:text-base text-yellow-300 leading-relaxed">
              My current work is focussed around adding integrating these
              ecological rasters with the agent&apos;s movement model, allowing
              for avoidance of ecological obstacles, and a greater affinity for
              suitable habitat when in a foraging state.
            </p>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
