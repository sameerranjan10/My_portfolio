import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  const navigateLinks = [
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Journey", href: "#timeline" },
    { title: "Contact", href: "#contact" },
  ];

  const connectLinks = [
    { title: "GitHub", href: "https://github.com/sameerranjan10", external: true },
    { title: "LinkedIn", href: "https://linkedin.com/in/sameer-ranjan-nayak-963657328", external: true },
    { title: "Email", href: "mailto:sameerranjan499@gmail.com", external: false },
    { title: "Resume", href: "/Sameer_Ranjan_Nayak_Elite_Internship_CV_With_Certifications.pdf", external: true },
  ];

  const socialLinks = [
    {
      icon: <FiGithub className="w-4 h-4" />,
      link: "https://github.com/sameerranjan10",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin className="w-4 h-4" />,
      link: "https://linkedin.com/in/sameer-ranjan-nayak-963657328",
      label: "LinkedIn",
    },
    {
      icon: <FiMail className="w-4 h-4" />,
      link: "mailto:sameerranjan499@gmail.com",
      label: "Email",
    },
  ];

  const scrollTo = (href, e) => {
    if (e && href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-black/[0.08] dark:border-white/[0.08] bg-[#f8f8f5] dark:bg-[#0a0a0b] overflow-hidden text-gray-800 dark:text-gray-200">
      {/* Top Border Accent Line */}
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 pb-10">
          {/* Brand & Social (col-span-4) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="flex items-center gap-2.5 w-max group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-black font-extrabold text-base shadow-md group-hover:scale-105 transition-transform">
                S
              </div>
              <span className="font-display font-black text-xl text-gray-900 dark:text-white tracking-wider">
                SAMEER<span className="text-yellow-400">.</span>
              </span>
            </a>

            <p className="text-gray-600 dark:text-white/60 max-w-sm font-sans text-sm leading-relaxed">
              Full-Stack Developer crafting intelligent, scalable, and high-impact web applications powered by modern technologies and AI.

            </p>

            {/* Social Link Icon Buttons */}
            <div className="flex items-center gap-2.5 mt-2">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  className="p-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] text-gray-700 dark:text-white/70 hover:text-yellow-500 dark:hover:text-yellow-400 hover:border-yellow-400/40 dark:hover:border-yellow-400/40 hover:bg-yellow-400/10 transition-all shadow-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.link}
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column (col-span-1) */}
          <div className="md:col-span-1 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-gray-400 dark:text-white/40 mb-1">
              Navigation
            </span>
            <div className="flex flex-col gap-1.5">
              {navigateLinks.map(({ href, title }, i) => (
                <a
                  key={i}
                  className="w-max py-0.5 text-sm text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors hover:underline"
                  href={href}
                  onClick={(e) => scrollTo(href, e)}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Column (col-span-1) */}
          <div className="md:col-span-1 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-gray-400 dark:text-white/40 mb-1">
              Connect
            </span>
            <div className="flex flex-col gap-1.5">
              {connectLinks.map(({ href, title, external }, i) => (
                <a
                  key={i}
                  className="w-max py-0.5 text-sm text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors hover:underline"
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-px w-full bg-black/[0.08] dark:bg-white/[0.08] mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-white/40">
          <p className="text-center sm:text-left font-sans">
            © {year} <span className="font-semibold text-gray-800 dark:text-white/80">Sameer Ranjan Nayak</span>. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-gray-600 dark:text-white/60 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors cursor-pointer group"
          >
            <span>Back to Top</span>
            <FiArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
