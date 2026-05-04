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
      className="fixed top-0 left-0 w-full z-1000 px-10 py-10 flex justify-between items-center pointer-events-none"
    >
      {/* Name / Logo */}
      <div className="pointer-events-auto">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-white cursor-none group"
        >
          JO
          <span className="text-orange-500 group-hover:text-yellow-300 transition-colors duration-500">
            .
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-10 pointer-events-auto">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`text-[11px] font-mono uppercase tracking-[0.4em] text-white/40 transition-all duration-300 cursor-none ${item.hoverColor} hover:opacity-100 hover:scale-105`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
