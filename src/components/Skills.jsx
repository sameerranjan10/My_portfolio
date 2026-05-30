import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import { skillCategories } from "../data/skills";

function TechIcon({ icon, name, index }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05, type: "spring", stiffness: 100 }}
      className="relative group flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-black/02 dark:bg-white/02 border border-black/05 dark:border-white/05 hover:bg-black/05 dark:hover:bg-white/10 hover:border-yellow-500/30 transition-all cursor-pointer"
    >
      <div className="text-4xl sm:text-5xl transition-transform duration-300 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-md flex items-center justify-center w-full h-full">
        {icon}
      </div>
      
      {/* Tooltip on hover */}
      <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-lg pointer-events-none whitespace-nowrap shadow-xl z-10">
        {name}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-white rotate-45" />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const allSkills = skillCategories.flatMap((cat) => cat.skills);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-950/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <SectionWrapper>
          <SectionHeader
            label="// 02 — skills"
            title="My Tech Stack"
            subtitle="The tools and technologies I use to build things."
          />
        </SectionWrapper>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mt-12 mb-16">
          {allSkills.map((skill, i) => (
            <TechIcon key={skill.name} icon={skill.icon} name={skill.name} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
