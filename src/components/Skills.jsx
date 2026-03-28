import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import { skillCategories, techMarquee } from "../data/skills";

function SkillBar({ name, level, learning, delay }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-gray-600 dark:text-white/70 text-sm font-medium">{name}</span>
          {learning && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-400/10 border border-purple-400/20 text-purple-400 font-mono">
              learning
            </span>
          )}
        </div>
        <span className="text-gray-400 dark:text-white/30 text-xs font-mono">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-black/05 dark:bg-white/05 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full"
          style={{
            background: learning
              ? "linear-gradient(90deg, #a78bfa, #c084fc)"
              : "linear-gradient(90deg, #eab308, #f97316)",
          }}
        />
      </div>
    </div>
  );
}

function CategoryCard({ cat, i }) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ borderColor: "rgba(234,179,8,0.2)" }}
      className="p-6 rounded-2xl border border-black/06 dark:border-white/06 bg-black/02 dark:bg-white/02 transition-colors"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-yellow-400/10 flex items-center justify-center text-xl">
          {cat.icon}
        </div>
        <div>
          <div className="font-display font-bold text-gray-900 dark:text-white text-[15px]">{cat.label}</div>
          <div className="text-gray-400 dark:text-white/30 text-xs">{cat.narrative}</div>
        </div>
      </div>
      <div className="space-y-4">
        {cat.skills.map((s, si) => (
          <SkillBar key={s.name} {...s} delay={i * 4 + si} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionWrapper>
          <SectionHeader
            label="// 02 — skills"
            title="My Stack"
            subtitle="Technologies I build with, sorted by how deep I've gone."
          />
        </SectionWrapper>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-16">
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.id} cat={cat} i={i} />
          ))}
        </div>

        {/* Marquee strip */}
        <SectionWrapper>
          <div className="relative overflow-hidden py-5 rounded-2xl border border-black/05 dark:border-white/05 bg-black/02 dark:bg-white/02">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080807] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080807] to-transparent z-10" />
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex gap-6 whitespace-nowrap"
            >
              {[...techMarquee, ...techMarquee].map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/04 dark:bg-white/04 border border-black/06 dark:border-white/06 text-gray-500 dark:text-white/40 text-sm font-mono"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
