"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function HeatmapBackground() {
  const [mounted, setMounted] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  useEffect(() => {
    // Set initial position to center of screen to avoid jump
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // If not mounted, render a placeholder with just the background color
  // and the topography so the page doesn't look "broken" during load
  if (!mounted) {
    return (
      <div className="fixed inset-0 w-full h-full bg-[#050214] z-0">
        <div
          className="absolute inset-0 opacity-[0.2] z-0 bg-[url('/topography.svg')] invert"
          style={{ backgroundSize: "700px 700px" }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-[#050214] pointer-events-none z-[0]">
      {/* TOPOGRAPHY */}
      <div
        className="absolute inset-0 opacity-[0.2] z-0 bg-[url('/topography.svg')] invert"
        style={{ backgroundSize: "700px 700px" }}
      />

      <div className="absolute inset-0 z-10 mix-blend-screen">
        {/* STATIC AMBIENT ZONES */}
        <motion.div
          animate={{ x: ["-5%", "5%"], y: ["0%", "5%"] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
          className="absolute top-[10%] left-[10%] w-[80vw] h-[80vh] rounded-full bg-indigo-900 opacity-40 blur-[150px]"
        />

        {/* CONCENTRATED MOUSE HEATMAP STACK */}
        <motion.div
          className="absolute top-0 left-0 w-[40vw] h-[40vw] rounded-full bg-purple-700 opacity-40 blur-[100px]"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
        <motion.div
          className="absolute top-0 left-0 w-[20vw] h-[20vw] rounded-full bg-orange-600 opacity-60 blur-[60px]"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
        <motion.div
          className="absolute top-0 left-0 w-[8vw] h-[8vw] rounded-full bg-yellow-300 opacity-80 blur-[30px]"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      </div>

      {/* NOISE OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay z-20 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />
    </div>
  );
}
