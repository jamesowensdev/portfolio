"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for touch capability or screen width
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia("(max-width: 768px)").matches ||
          "ontouchstart" in window,
      );
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Single set of mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // High-frequency spring for an "instant but organic" feel
  const sX = useSpring(mouseX, { stiffness: 1000, damping: 40 });
  const sY = useSpring(mouseY, { stiffness: 1000, damping: 40 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const hover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Detect links, buttons, or any clickable elements
      setIsHovering(
        !!(
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") ||
          target.closest("button")
        ),
      );
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", hover);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", hover);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-9999 border border-white flex items-center justify-center mix-blend-difference"
      style={{ x: sX, y: sY }}
      animate={{
        // Morph from a small target square to a large UI ring
        width: isHovering ? 60 : 12,
        height: isHovering ? 60 : 12,
        backgroundColor: isHovering
          ? "rgba(255, 255, 255, 0.15)"
          : "rgba(255, 255, 255, 0)",
        translateX: "-50%",
        translateY: "-50%",
        borderRadius: isHovering ? "50%" : "0%",
        rotate: isHovering ? 0 : 45, // Diamond shape when idle
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Tiny high-intensity "Data Point" in the center */}
      <motion.div
        className="w-1 h-1 bg-white"
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
      />
    </motion.div>
  );
}
