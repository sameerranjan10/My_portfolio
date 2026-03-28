import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionWrapper({ children, className = "", id }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 mb-4">
        <div className="h-px w-8 bg-yellow-400/40" />
        <span className="text-yellow-400 text-xs font-mono tracking-[0.2em] uppercase">{label}</span>
        <div className="h-px w-8 bg-yellow-400/40" />
      </div>
      <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-gray-900 dark:text-white tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 dark:text-white/40 text-lg font-light max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
