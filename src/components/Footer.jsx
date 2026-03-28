import React from "react";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "About",    href: "#about"    },
  { label: "Skills",   href: "#skills"   },
  { label: "Projects", href: "#projects" },
  { label: "Journey",  href: "#journey"  },
  { label: "Contact",  href: "#contact"  },
];

export default function Footer() {
  const scrollTo = (href, e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-black/05 dark:border-white/05 bg-[#080807]">
      {/* Top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-black font-bold text-xs">S</div>
              <span className="font-display font-bold text-base text-gray-600 dark:text-white/80 tracking-wide">
                SAMEER<span className="text-yellow-400">.</span>
              </span>
            </div>
            <p className="text-gray-400 dark:text-white/25 text-xs max-w-xs">
              CS Student · Full-Stack Dev · ML Enthusiast
              <br />
              Building meaningful things from Gunupur, Odisha, India.
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {quickLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={e => scrollTo(l.href, e)}
                className="text-gray-400 dark:text-white/30 hover:text-gray-600 dark:text-white/70 text-sm transition-colors underline-anim"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/sameerranjan10", label: "GH", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> },
              { href: "https://linkedin.com/in/sameer-ranjan-nayak-963657328", label: "LI", icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              { href: "mailto:sameerranjan499@gmail.com", label: "EM", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
            ].map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.label !== "EM" ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-xl bg-black/04 dark:bg-white/04 border border-black/06 dark:border-white/06 flex items-center justify-center text-gray-500 dark:text-white/40 hover:text-gray-900 dark:text-white hover:bg-black/08 dark:bg-white/08 hover:border-black/12 dark:border-white/12 transition-all"
                aria-label={s.label}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 pt-6 border-t border-black/04 dark:border-white/04 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 dark:text-white/20 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Sameer Ranjan Nayak · UNISAM. All rights reserved.
          </p>
          <p className="text-gray-400 dark:text-white/15 text-xs flex items-center gap-1.5">
            Built with React · Tailwind · Framer Motion
            <span className="text-yellow-400/40">✦</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
