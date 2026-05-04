"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function HeatmapBackground() {
  const [mounted, setMounted] = useState(false);

  // Motion values for smooth tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs create the "fluid/magma" feel
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  useEffect(() => {
    setMounted(true);

    // Initial center position
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="fixed inset-0 bg-[#050214] z-0" />;
  }

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-[#050214] z-0">
      {/* 1. TOPOGRAPHY LAYER */}
      <div
        className="absolute inset-0 opacity-[0.15] z-0 bg-[url('/topography.svg')] invert transition-opacity duration-1000"
        style={{ backgroundSize: "800px 800px" }}
      />

      {/* 2. THE MAGMA STACK */}
      <div className="absolute inset-0 z-10 mix-blend-screen">
        {/* Large Ambient Purple Glow */}
        <motion.div
          className="absolute top-0 left-0 w-[45vw] h-[45vw] rounded-full bg-purple-900 opacity-30 blur-[120px]"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />

        {/* Mid-sized Orange Intensity */}
        <motion.div
          className="absolute top-0 left-0 w-[25vw] h-[25vw] rounded-full bg-orange-600 opacity-50 blur-[80px]"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />

        {/* Hot Core Yellow */}
        <motion.div
          className="absolute top-0 left-0 w-[10vw] h-[10vw] rounded-full bg-yellow-400 opacity-70 blur-[40px]"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      </div>

      {/* 3. NOISE OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-20 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />
    </div>
  );
}
