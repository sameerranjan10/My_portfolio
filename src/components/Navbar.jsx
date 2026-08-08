import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

const links = [
  { href: "#about",    label: "About"    },
  { href: "#skills",   label: "Skills"   },
  { href: "#projects", label: "Projects" },
  { href: "#contact",  label: "Contact"  },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-3 md:top-4 inset-x-0 z-50 flex justify-center px-4 md:px-6 pointer-events-auto"
      >
        {/* Always Glassmorphic Floating Container */}
        <div
          className={`w-full backdrop-blur-2xl backdrop-saturate-180 bg-white/60 dark:bg-[#0c0c0e]/60 border border-black/10 dark:border-white/10 shadow-2xl shadow-black/20 rounded-full transition-all duration-500 ease-out flex items-center justify-between ${
            scrolled
              ? "max-w-4xl md:max-w-5xl px-4 py-2 md:py-2"
              : "max-w-6xl md:max-w-6xl px-6 py-3"
          }`}
        >
          {/* Brand Logo */}
          <motion.a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-amber-400 to-orange-500 flex items-center justify-center text-black font-extrabold text-sm font-display shadow-md shadow-yellow-400/20">
              S
            </div>
            <span className="font-display font-extrabold text-[15px] tracking-wide text-gray-900 dark:text-white transition-colors">
              SAMEER
              <span className="text-yellow-400">.</span>
            </span>
          </motion.a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-black/[0.03] dark:bg-white/[0.04] p-1 rounded-full border border-black/[0.04] dark:border-white/[0.06]">
            {links.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`relative px-4 py-1.5 text-xs font-semibold tracking-wider uppercase transition-colors duration-200 rounded-full ${
                  active === link.href
                    ? "text-yellow-500 dark:text-yellow-400"
                    : "text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white dark:bg-[#252427] shadow-sm border border-black/[0.06] dark:border-white/[0.08]"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Modern Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="w-9 h-9 rounded-full bg-black/[0.05] dark:bg-white/[0.08] border border-black/[0.08] dark:border-white/[0.1] flex items-center justify-center text-gray-700 dark:text-yellow-400 hover:border-yellow-400/40 transition-colors shadow-sm cursor-pointer overflow-hidden"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -12, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 12, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {theme === "dark" ? (
                    <FiSun className="w-4 h-4 text-yellow-400" />
                  ) : (
                    <FiMoon className="w-4 h-4 text-gray-700" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Resume Button */}
            <motion.a
              href="/Sameer_Ranjan_Nayak_Elite_Internship_CV_With_Certifications.pdf"
              download
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="hidden md:flex btn-primary text-xs font-bold py-2 px-4.5 rounded-full shadow-md"
            >
              Resume ↓
            </motion.a>

            {/* Mobile Hamburger Toggle */}
            <button
              className="md:hidden w-8 h-8 rounded-full bg-black/[0.05] dark:bg-white/[0.08] border border-black/[0.08] dark:border-white/[0.08] flex flex-col items-center justify-center gap-1"
              onClick={() => setOpen(o => !o)}
              aria-label="Menu"
            >
              <span className={`block w-3.5 h-px bg-black/80 dark:bg-white/80 transition-all duration-300 ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
              <span className={`block w-3.5 h-px bg-black/80 dark:bg-white/80 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block w-3.5 h-px bg-black/80 dark:bg-white/80 transition-all duration-300 ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Glass Floating Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-16 inset-x-4 z-50 rounded-3xl backdrop-blur-2xl bg-white/90 dark:bg-[#121214]/90 border border-black/10 dark:border-white/10 p-5 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-semibold tracking-wide text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] rounded-2xl transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-black/[0.08] dark:border-white/[0.08] flex gap-2">
              <a
                href="/Sameer_Ranjan_Nayak_Elite_Internship_CV_With_Certifications.pdf"
                download
                className="btn-primary flex-1 text-center text-xs font-bold py-3 rounded-full shadow-md"
                onClick={() => setOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
