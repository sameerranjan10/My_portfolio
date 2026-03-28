import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about",    label: "About"    },
  { href: "#skills",   label: "Skills"   },
  { href: "#projects", label: "Projects" },
  { href: "#journey",  label: "Journey"  },
  { href: "#contact",  label: "Contact"  },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#080807]/90 backdrop-blur-xl border-b border-black/5 dark:border-white/5"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand */}
          <motion.a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black font-bold text-sm font-display">S</div>
            <span className="font-display font-bold text-[15px] tracking-wide text-gray-600 dark:text-white/90 group-hover:text-gray-900 dark:text-white transition-colors">
              SAMEER
              <span className="text-yellow-400">.</span>
            </span>
          </motion.a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`relative px-4 py-2 text-[13px] font-medium tracking-wide transition-colors rounded-lg ${
                  active === link.href
                    ? "text-yellow-400"
                    : "text-gray-500 dark:text-white/50 hover:text-gray-600 dark:text-white/90"
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-black/05 dark:bg-white/05"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-xl bg-black/05 dark:bg-white/05 border border-black/08 dark:border-white/08 flex items-center justify-center text-base transition-colors hover:bg-black/08 dark:bg-white/08"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </motion.button>

            <motion.a
              href="/Sameer_Ranjan_Nayak_Elite_Internship_CV_With_Certifications.pdf"
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="hidden md:flex btn-primary text-sm py-2.5 px-5"
            >
              Resume ↓
            </motion.a>

            {/* Hamburger */}
            <button
              className="md:hidden w-9 h-9 rounded-xl bg-black/05 dark:bg-white/05 border border-black/08 dark:border-white/08 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setOpen(o => !o)}
              aria-label="Menu"
            >
              <span className={`block w-4 h-px bg-black/70 dark:bg-white/70 transition-all ${open ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`block w-4 h-px bg-black/70 dark:bg-white/70 transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`block w-4 h-px bg-black/70 dark:bg-white/70 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-4 z-40 rounded-2xl bg-[#111010]/95 backdrop-blur-xl border border-black/08 dark:border-white/08 p-4 md:hidden"
          >
            {links.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNav(link.href)}
                className="w-full text-left px-4 py-3 text-sm text-gray-600 dark:text-white/70 hover:text-gray-900 dark:text-white hover:bg-black/05 dark:bg-white/05 rounded-xl transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <div className="mt-3 pt-3 border-t border-black/08 dark:border-white/08 flex gap-2">
              <a
                href="/Sameer_Ranjan_Nayak_Elite_Internship_CV_With_Certifications.pdf"
                download
                className="btn-primary flex-1 text-center text-sm py-3"
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
