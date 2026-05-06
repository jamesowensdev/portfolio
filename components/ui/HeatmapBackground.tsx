"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function HeatmapBackground() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);

    // Initial center position
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const checkMobile = () => {
      // eslint-disable-next-line
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

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
        {isMobile ? (
          /* =========================================
             MOBILE AUTO-FLOAT ANIMATION
          ========================================= */
          <>
            {/* Outer Purple */}
            <motion.div
              animate={{ x: ["10%", "50%", "10%"], y: ["10%", "40%", "10%"] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-[80vw] h-[80vw] rounded-full bg-purple-900 opacity-20 blur-[100px]"
            />
            {/* Mid Orange */}
            <motion.div
              animate={{ x: ["50%", "10%", "50%"], y: ["40%", "80%", "40%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[60vw] h-[60vw] rounded-full bg-orange-600 opacity-20 blur-[80px]"
            />
            {/* Hot Yellow/Orange Core */}
            <motion.div
              animate={{ x: ["30%", "70%", "30%"], y: ["60%", "20%", "60%"] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute w-[40vw] h-[40vw] rounded-full bg-yellow-500 opacity-30 blur-[60px]"
            />
          </>
        ) : (
          /* =========================================
             DESKTOP MOUSE-TRACKING
          ========================================= */
          <>
            {/* Outer Purple */}
            <motion.div
              className="absolute top-0 left-0 w-[45vw] h-[45vw] rounded-full bg-purple-900 opacity-30 blur-[120px]"
              style={{
                x: smoothX,
                y: smoothY,
                translateX: "-50%",
                translateY: "-50%",
              }}
            />
            {/* Mid Orange */}
            <motion.div
              className="absolute top-0 left-0 w-[25vw] h-[25vw] rounded-full bg-orange-600 opacity-50 blur-[80px]"
              style={{
                x: smoothX,
                y: smoothY,
                translateX: "-50%",
                translateY: "-50%",
              }}
            />
            {/* Hot Yellow Core */}
            <motion.div
              className="absolute top-0 left-0 w-[10vw] h-[10vw] rounded-full bg-yellow-400 opacity-70 blur-[40px]"
              style={{
                x: smoothX,
                y: smoothY,
                translateX: "-50%",
                translateY: "-50%",
              }}
            />
          </>
        )}
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
