import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const highlights = [
  { icon: "🎓", title: "B.Tech CSE", desc: "GIET University, Odisha · SGPA 8.09 | 8.17 | 7.60" },
  { icon: "🏆", title: "Hackathon Winner", desc: "1st Place at GDG TechSprint · Multiple top finishes" },
  { icon: "🤝", title: "SIH Selected(internals)", desc: "Smart India Hackathon 2025 — Back2Roots" },
  { icon: "🤖", title: "AI Explorer", desc: "Diving into Gen AI, LLMs, and RAG pipelines" },
  { icon: "📍", title: "Based In", desc: "Gunupur, Odisha, India · Open to remote & relocation" },
];

function HighlightCard({ item, i }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, borderColor: "rgba(234,179,8,0.25)" }}
      className="relative p-5 rounded-2xl border border-black/06 dark:border-white/06 bg-black/02 dark:bg-white/02 group cursor-default overflow-hidden transition-colors"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 group-hover:from-yellow-400/05 to-transparent transition-all duration-300" />
      <div className="relative">
        <div className="text-2xl mb-3">{item.icon}</div>
        <div className="font-display font-bold text-gray-900 dark:text-white text-[15px] mb-1">{item.title}</div>
        <div className="text-gray-500 dark:text-white/40 text-sm leading-relaxed">{item.desc}</div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionWrapper>
          <SectionHeader
            label="// 01 — about"
            title="Who I Am"
            subtitle="A story of curiosity, code, and constant learning."
          />
        </SectionWrapper>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left bio */}
          <SectionWrapper>
            <div className="space-y-5 text-gray-600 dark:text-white/60 text-[16px] font-light leading-[1.85]">
              <p>
                I'm <strong className="text-gray-900 dark:text-white font-semibold">Sameer Ranjan Nayak</strong> — a Computer Science student at GIET University with a deep passion for building things that matter. My world sits at the intersection of{" "}
                <span className="text-yellow-400/90">full-stack web development</span> and{" "}
                <span className="text-teal-400/90">machine learning</span>.
              </p>
              <p>
                Over the past years, I've competed in and won a hackathon, been selected twice at the Smart India Hackathon(Internals), and built AI-powered platforms used by real students. Every project is a chance to solve a real problem — not just write code.
              </p>
              <p>
                Right now, I'm fascinated by the possibilities of <strong className="text-gray-900 dark:text-white font-medium">Generative AI, LLMs, and RAG pipelines</strong> — and how they can transform the way software understands and interacts with the world.
              </p>
              <p>
                When I'm not coding, I'm reading, thinking, and planning the next project that pushes my limits a little further.
              </p>
            </div>

            {/* Mini tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["Full-Stack Dev", "ML Enthusiast", "Hackathon Winner", "AI Curious", "Open Source"].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-full bg-black/04 dark:bg-white/04 border border-black/08 dark:border-white/08 text-gray-500 dark:text-white/50 text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-3">
              <a href="https://github.com/sameerranjan10" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/04 dark:bg-white/04 border border-black/08 dark:border-white/08 text-gray-600 dark:text-white/60 text-sm font-medium hover:border-black/20 dark:border-white/20 hover:text-gray-900 dark:text-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="https://linkedin.com/in/sameer-ranjan-nayak-963657328" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/04 dark:bg-white/04 border border-black/08 dark:border-white/08 text-gray-600 dark:text-white/60 text-sm font-medium hover:border-black/20 dark:border-white/20 hover:text-gray-900 dark:text-white transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>
          </SectionWrapper>

          {/* Right grid */}
          <div className="grid grid-cols-2 gap-3">
            {highlights.map((item, i) => (
              <HighlightCard key={item.title} item={item} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
