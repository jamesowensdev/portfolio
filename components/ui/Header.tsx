"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const navItems = [
    { name: "About", href: "/about", hoverColor: "hover:text-indigo-400" },
    {
      name: "Research",
      href: "/research",
      hoverColor: "hover:text-orange-500",
    },
    {
      name: "Projects",
      href: "/projects",
      hoverColor: "hover:text-yellow-300",
    },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      // Responsive padding: smaller on mobile, larger on desktop
      className="fixed top-0 left-0 w-full z-1000 px-6 py-6 md:px-10 md:py-10 flex justify-between items-center pointer-events-none"
    >
      <div className="pointer-events-auto">
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold tracking-tighter text-white cursor-none group"
        >
          JO
          <span className="text-orange-500 group-hover:text-yellow-300 transition-colors duration-500">
            .
          </span>
        </Link>
      </div>

      {/* Responsive gap and font sizing for the nav */}
      <nav className="flex items-center gap-4 md:gap-10 pointer-events-auto">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            // Text is slightly smaller on mobile, tracking is tighter
            className={`text-[9px] md:text-[11px] font-mono uppercase tracking-[0.2em] md:tracking-[0.4em] text-white/40 transition-all duration-300 cursor-none ${item.hoverColor} hover:opacity-100 hover:scale-105`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
