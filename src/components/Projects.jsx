import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import { projects, projectFilters } from "../data/projects";

const statusMap = {
  live:      { cls: "badge-live",     icon: "●" },
  completed: { cls: "badge-live",     icon: "✓" },
  progress:  { cls: "badge-progress", icon: "◐" },
  beta:      { cls: "badge-beta",     icon: "β" },
  soon:      { cls: "badge-soon",     icon: "◷" },
};

function ProjectCard({ project, i }) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  const status = statusMap[project.status] || statusMap.soon;

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={`group relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 ${
        project.highlight
          ? "border-yellow-400/20 bg-gradient-to-br from-black/04 dark:from-white/04 to-black/01 dark:to-white/01"
          : "border-black/06 dark:border-white/06 bg-black/02 dark:bg-white/02"
      } hover:border-black/15 dark:border-white/15 hover:shadow-card-hover`}
    >
      {/* Top gradient bar */}
      <div
        className="h-0.5 w-full transition-all duration-500 group-hover:h-1"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse at top left, ${project.color}08 0%, transparent 60%)` }}
      />

      <div className="relative p-6 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between mb-3 gap-3">
          <div>
            <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg leading-tight">{project.title}</h3>
            <p className="text-gray-500 dark:text-white/40 text-sm mt-0.5">{project.subtitle}</p>
          </div>
          <span className={`${status.cls} flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium font-mono flex-shrink-0`}>
            <span className="text-[8px]">{status.icon}</span>
            {project.statusLabel}
          </span>
        </div>

        {/* Badge */}
        {project.badge && (
          <div className="mb-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-400/08 border border-yellow-400/15 text-yellow-400/80 text-xs font-medium">
              ⚡ {project.badge}
            </span>
          </div>
        )}

        {/* Description */}
        <p className="text-gray-500 dark:text-white/45 text-sm leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map(t => (
            <span key={t} className="skill-chip text-[11px] py-1 px-2.5">{t}</span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-4 border-t border-black/06 dark:border-white/06">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-black/04 dark:bg-white/04 border border-black/08 dark:border-white/08 text-gray-600 dark:text-white/60 text-sm font-medium hover:bg-black/08 dark:bg-white/08 hover:text-gray-900 dark:text-white hover:border-black/15 dark:border-white/15 transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
          )}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={{ background: `${project.color}20`, color: project.color, border: `1px solid ${project.color}30` }}
            >
              <span>↗</span> Live Demo
            </a>
          ) : project.status === "progress" || project.status === "soon" ? (
            <span className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-black/02 dark:bg-white/02 border border-black/05 dark:border-white/05 text-gray-400 dark:text-white/20 text-sm cursor-default">
              🔧 Coming Soon
            </span>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all"
    ? projects
    : projects.filter(p => p.category.includes(filter));

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionWrapper>
          <SectionHeader
            label="// 03 — work"
            title="Projects"
            subtitle="Things I've built that I'm proud of — from hackathon winners to AI experiments."
          />
        </SectionWrapper>

        {/* Filters */}
        <SectionWrapper>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {projectFilters.map(f => (
              <motion.button
                key={f.id}
                onClick={() => setFilter(f.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f.id
                    ? "bg-yellow-400 text-black"
                    : "bg-black/04 dark:bg-white/04 border border-black/08 dark:border-white/08 text-gray-500 dark:text-white/50 hover:text-gray-600 dark:text-white/80 hover:border-black/15 dark:border-white/15"
                }`}
              >
                {f.label}
                {filter === f.id && (
                  <motion.span
                    layoutId="filter-indicator"
                    className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-black"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </SectionWrapper>

        {/* Grid */}
        <LayoutGroup>
          <motion.div layout className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} i={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {/* CTA */}
        <SectionWrapper>
          <div className="text-center mt-12">
            <a
              href="https://github.com/sameerranjan10"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              View All on GitHub
            </a>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
