import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const values = [
  {
    icon: "🔥",
    title: "Build for Impact",
    quote: "Every line of code should solve a real problem for a real person.",
    color: "#f97316",
  },
  {
    icon: "🧠",
    title: "Learn Relentlessly",
    quote: "Gen AI, LLMs, RAG — curiosity is the best feature I ship.",
    color: "#eab308",
  },
  {
    icon: "🤝",
    title: "Collaborate Deeply",
    quote: "The best projects I've built were built with others, not alone.",
    color: "#2dd4bf",
  },
  {
    icon: "⚡",
    title: "Ship Fast, Iterate",
    quote: "A working MVP beats a perfect prototype that never launches.",
    color: "#818cf8",
  },
  {
    icon: "🎯",
    title: "Stay Precise",
    quote: "Attention to detail separates good work from memorable work.",
    color: "#4ade80",
  },
  {
    icon: "🌱",
    title: "Grow Through Challenges",
    quote: "Hackathons taught me more than classrooms ever could.",
    color: "#c084fc",
  },
];

const achievements = [
  {
    icon: "🏆",
    label: "GDG TechSprint",
    sub: "1st Place Winner",
    color: "#eab308",
  },
  {
    icon: "🇮🇳",
    label: "Smart India Hackathon",
    sub: "Selected in both the internals of 2024 & 2025",
    color: "#2dd4bf",
  },
  {
    icon: "💡",
    label: "Hacknovation 1.0 & 2.0",
    sub: "participated in both the hackathons",
    color: "#f97316",
  },
  
];

function ValueCard({ v, i }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative p-6 rounded-2xl border border-black/06 dark:border-white/06 bg-black/02 dark:bg-white/02 overflow-hidden cursor-default"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 20% 20%, ${v.color}08 0%, transparent 65%)` }}
      />
      <div className="relative">
        <div className="text-3xl mb-4">{v.icon}</div>
        <h3
          className="font-display font-bold text-base mb-2"
          style={{ color: v.color }}
        >
          {v.title}
        </h3>
        <p className="text-gray-500 dark:text-white/40 text-sm leading-relaxed italic">
          "{v.quote}"
        </p>
      </div>
    </motion.div>
  );
}

function AchievementBadge({ a, i }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: i * 0.1, type: "spring", bounce: 0.3 }}
      whileHover={{ scale: 1.04, y: -3 }}
      className="flex flex-col items-center text-center p-5 rounded-2xl border cursor-default transition-all"
      style={{ borderColor: `${a.color}25`, background: `${a.color}06` }}
    >
      <div className="text-3xl mb-3">{a.icon}</div>
      <div className="font-display font-bold text-gray-900 dark:text-white text-sm">{a.label}</div>
      <div className="text-xs mt-1 font-medium" style={{ color: a.color }}>
        {a.sub}
      </div>
    </motion.div>
  );
}

export default function Highlights() {
  return (
    <section id="highlights" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionWrapper>
          <SectionHeader
            label="// 05 — principles"
            title="What Drives Me"
            subtitle="Values I code by — because how you build matters as much as what you build."
          />
        </SectionWrapper>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {values.map((v, i) => (
            <ValueCard key={v.title} v={v} i={i} />
          ))}
        </div>

        {/* Achievements */}
        <SectionWrapper>
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-2">
              Recognition & Achievements
            </h3>
            <p className="text-gray-500 dark:text-white/40 text-sm">
              Where the work got noticed.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((a, i) => (
              <AchievementBadge key={a.label} a={a} i={i} />
            ))}
          </div>
        </SectionWrapper>

        {/* Quote banner */}
        <SectionWrapper>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="mt-16 relative p-8 sm:p-12 rounded-3xl border border-yellow-400/10 overflow-hidden text-center"
            style={{ background: "linear-gradient(135deg, rgba(234,179,8,0.04) 0%, rgba(45,212,191,0.03) 100%)" }}
          >
            <div className="absolute -top-6 -left-6 text-[120px] text-yellow-400/05 font-serif select-none leading-none">"</div>
            <div className="absolute -bottom-10 -right-6 text-[120px] text-yellow-400/05 font-serif select-none leading-none">"</div>
            <div className="relative">
              <p className="font-display font-semibold text-xl sm:text-2xl text-gray-600 dark:text-white/80 leading-relaxed max-w-2xl mx-auto">
                I don't just want to write code. I want to build things that{" "}
                <span className="gradient-text">leave a mark</span>.
              </p>
              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="w-8 h-px bg-yellow-400/40" />
                <span className="text-yellow-400/60 text-sm font-mono">Sameer Ranjan Nayak</span>
                <div className="w-8 h-px bg-yellow-400/40" />
              </div>
            </div>
          </motion.div>
        </SectionWrapper>
      </div>
    </section>
  );
}
