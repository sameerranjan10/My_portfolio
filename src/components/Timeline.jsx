import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import { timelineItems } from "../data/timeline";

function TimelineItem({ item, i, isLeft }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const delay = i * 0.12;

  return (
    <div ref={ref} className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row-reverse" : ""}`}>
      {/* Desktop: invisible spacer on one side */}
      <div className="hidden md:block md:w-1/2" />

      {/* Center dot (desktop) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center" style={{ top: 20 }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay }}
          className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg z-10 bg-[#080807]"
          style={{ borderColor: item.color }}
        >
          {item.icon}
        </motion.div>
        <div className="w-px flex-1 bg-black/05 dark:bg-white/05 mt-2" />
      </div>

      {/* Mobile dot */}
      <div className="md:hidden flex-shrink-0 mt-1">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay }}
          className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-base bg-[#080807]"
          style={{ borderColor: item.color }}
        >
          {item.icon}
        </motion.div>
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 30 : -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, delay: delay + 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={`md:w-1/2 ${isLeft ? "md:pr-14" : "md:pl-14"} flex-1 pb-10`}
      >
        <div
          className="group relative p-5 rounded-2xl border bg-black/02 dark:bg-white/02 hover:bg-black/03 dark:bg-white/03 transition-all duration-300 overflow-hidden"
          style={{ borderColor: `${item.color}20` }}
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at top left, ${item.color}06 0%, transparent 70%)` }}
          />
          <div className="relative">
            {/* Year */}
            <div className="text-xs font-mono tracking-wider mb-2" style={{ color: item.color }}>
              {item.year}
            </div>
            <h3 className="font-display font-bold text-gray-900 dark:text-white text-base mb-0.5">{item.title}</h3>
            <p className="text-gray-500 dark:text-white/40 text-sm mb-2 font-medium">{item.subtitle}</p>
            <p className="text-gray-500 dark:text-white/45 text-sm leading-relaxed">{item.description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="journey" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-950/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative">
        <SectionWrapper>
          <SectionHeader
            label="// 04 — journey"
            title="My Story"
            subtitle="From first line of code to hackathon winner — a timeline of milestones."
          />
        </SectionWrapper>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/08 dark:via-white/08 to-transparent" />

          <div className="space-y-0">
            {timelineItems.map((item, i) => (
              <TimelineItem key={item.year + item.title} item={item} i={i} isLeft={i % 2 === 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
