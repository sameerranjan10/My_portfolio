import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiLinkedin, FiMail, FiCode, FiDownload, FiArrowRight, FiChevronDown } from "react-icons/fi";

const STATS = [
  { value: "05+", label: "Projects Built" },
  { value: "01", label: "Hackathon Winner" },
];

const SOCIALS = [
  {
    href: "https://github.com/sameerranjan10",
    icon: FiGithub,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/sameer-ranjan-nayak-963657328",
    icon: FiLinkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:sameerranjan499@gmail.com",
    icon: FiMail,
    label: "Email",
  },
  {
    href: "https://leetcode.com/sameerranjan10",
    icon: FiCode,
    label: "LeetCode",
  },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const fadeSlideUp = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const portraitReveal = {
    hidden: { opacity: 0, scale: 0.92, x: -30 },
    show: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const lineReveal = (delay = 0) => ({
    hidden: { y: "115%", opacity: 0, rotateX: -25 },
    show: {
      y: "0%",
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] },
    },
  });

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-32 lg:pt-32 lg:pb-36">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-yellow-400/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-teal-400/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <motion.div
        ref={ref}
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto flex flex-col items-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ─── Left Column: Compact Mobile Profile Card ─── */}
          <motion.div variants={portraitReveal} className="relative w-full flex items-center justify-center">
            {/* Glow behind card */}
            <div className="absolute -inset-3 rounded-[32px] bg-yellow-400/[0.08] blur-2xl pointer-events-none" />

            <div className="relative w-full max-w-[260px] sm:max-w-md lg:max-w-lg aspect-[4/3] sm:aspect-[3/4] lg:aspect-auto min-h-[200px] sm:min-h-[380px] lg:min-h-[520px] mx-auto">
              {/* Glassmorphic card */}
              <div className="relative w-full h-full min-h-[200px] sm:min-h-[380px] lg:min-h-[520px] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-black/[0.08] dark:border-white/[0.08] bg-[#f2f2ed] dark:bg-[#111111] shadow-xl shadow-black/40 group flex flex-col justify-end">
                {/* Full-fit cover image */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src="/me.jpg"
                    alt="Sameer Ranjan Nayak"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                </div>

                {/* Direct Text Overlay */}
                <div className="relative z-10 p-4 sm:p-6 md:p-8 pt-10 text-center sm:text-left">
                  <div className="font-mono text-[10px] sm:text-xs font-medium text-yellow-400 mb-1">
                    📍 Gunupur, Odisha, India
                  </div>
                  <div className="font-display font-extrabold text-xl sm:text-3xl text-white tracking-tight leading-none">
                    Sameer Ranjan Nayak
                  </div>
                </div>

                {/* Inner border highlight */}
                <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] border border-black/[0.05] dark:border-white/[0.05] pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* ─── Right Column: Editorial Landing Content ─── */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start w-full px-0 sm:px-4">
            {/* Section label */}
            <motion.div variants={fadeSlideUp} className="inline-flex items-center gap-2 mb-3 md:mb-6 justify-center lg:justify-start">
              <motion.div initial={{ width: 0 }} animate={{ width: 32 }} transition={{ duration: 0.6, delay: 0.2 }} className="h-px bg-yellow-400/40" />
              <span className="text-yellow-400 text-xs font-mono tracking-[0.2em] uppercase">
                // 01 About
              </span>
              <motion.div initial={{ width: 0 }} animate={{ width: 32 }} transition={{ duration: 0.6, delay: 0.2 }} className="h-px bg-yellow-400/40" />
            </motion.div>

            {/* Typography Headline: 'Sameer Ranjan' on line 1, 'Nayak' in yellow on line 2 */}
            <div className="mb-4 sm:mb-8 overflow-hidden w-full text-center lg:text-left">
              <h1 className="font-display font-black text-[clamp(2rem,6vw,4.8rem)] sm:text-[clamp(3rem,7vw,5.5rem)] leading-[1.02] sm:leading-[0.9] tracking-tighter text-gray-900 dark:text-white">
                <span className="block overflow-hidden py-0.5">
                  <motion.span
                    variants={lineReveal(0.08)}
                    className="block transform-gpu whitespace-nowrap"
                  >
                    Sameer Ranjan
                  </motion.span>
                </span>
                <span className="block overflow-hidden py-0.5">
                  <motion.span
                    variants={lineReveal(0.25)}
                    className="block text-yellow-400 transform-gpu"
                  >
                    Nayak
                  </motion.span>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <motion.div variants={fadeSlideUp} className="mb-4 sm:mb-6 text-center lg:text-left">
              <p className="font-display text-base sm:text-xl font-semibold text-gray-700 dark:text-white/80 tracking-tight">
                Computer Science Student
              </p>
              <p className="text-gray-500 dark:text-white/40 text-xs sm:text-sm font-mono mt-0.5">
                Full Stack Developer
              </p>
            </motion.div>

            {/* Bio description */}
            <motion.p
              variants={fadeSlideUp}
              className="text-gray-600 dark:text-white/60 text-sm sm:text-base font-light leading-[1.65] sm:leading-[1.8] mb-6 sm:mb-8 w-full max-w-[340px] sm:max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
            >
              I'm a Computer Science student passionate about building intelligent web applications
              using Artificial Intelligence, Machine Learning, and modern web technologies. I enjoy
              turning ideas into products that solve real-world problems.
            </motion.p>

            {/* ─── Stats Grid (Comfortable Side-by-Side) ─── */}
            <motion.div
              variants={fadeSlideUp}
              className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 w-full max-w-[340px] sm:max-w-md mx-auto lg:mx-0"
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-[#f2f2ed] dark:bg-[#111111] p-3 sm:p-4 text-center group hover:border-yellow-400/20 transition-colors duration-300 flex flex-col justify-center min-h-[76px] sm:min-h-[88px]"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-yellow-400/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative">
                    <div className="font-display font-black text-xl sm:text-3xl text-yellow-400 tracking-tight leading-none">
                      {stat.value}
                    </div>
                    <div className="text-gray-500 dark:text-white/40 text-[10px] sm:text-[11px] font-mono mt-1 uppercase tracking-wider leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* ─── Action Buttons (With Resume Spacing) ─── */}
            <motion.div
              variants={fadeSlideUp}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6 sm:mb-8 w-full max-w-[340px] sm:max-w-none mx-auto lg:mx-0"
            >
              <motion.a
                href="/Sameer_Ranjan_Nayak_Elite_Internship_CV_With_Certifications.pdf"
                download
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="btn-primary inline-flex items-center justify-center gap-2 min-h-[46px] sm:min-h-[48px] px-6 text-sm font-bold rounded-full w-full sm:w-auto text-center shadow-md touch-manipulation"
              >
                <FiDownload className="w-4 h-4" />
                Download Resume
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="btn-secondary inline-flex items-center justify-center gap-2 min-h-[46px] sm:min-h-[48px] px-6 text-sm font-bold rounded-full w-full sm:w-auto text-center shadow-sm touch-manipulation"
                onClick={e => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
                <FiArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* ─── Social Icons ─── */}
            <motion.div
              variants={fadeSlideUp}
              className="flex items-center justify-center lg:justify-start w-full"
            >
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                {SOCIALS.map((soc) => {
                  const Icon = soc.icon;
                  return (
                    <a
                      key={soc.label}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-2xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 text-gray-700 dark:text-white/80 hover:text-yellow-500 dark:hover:text-yellow-400 hover:border-yellow-400/40 transition-all flex items-center justify-center min-w-[48px] min-h-[48px] touch-manipulation shadow-sm"
                      aria-label={soc.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator hint at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 cursor-pointer"
        onClick={() => document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-gray-400 dark:text-white/25 text-[10px] font-mono tracking-widest uppercase">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiChevronDown className="w-4 h-4 text-yellow-400/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
