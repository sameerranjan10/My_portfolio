import React from "react";
import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

export default function Resume() {
  return (
    <section id="resume" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-950/[0.04] to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <SectionWrapper>
          <SectionHeader
            label="// 05 — cv"
            title="Resume"
            subtitle="The full picture — two pages that tell my story."
          />
        </SectionWrapper>

        <SectionWrapper>
          <div className="relative rounded-3xl border border-yellow-400/15 overflow-hidden bg-[#f2f2ed] dark:bg-[#111010] shadow-xl">
            {/* Top accent */}
            <div className="h-0.5 bg-gradient-to-r from-yellow-400 via-orange-400 to-teal-400" />

            <div className="p-8 sm:p-12">
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
                <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-3xl flex-shrink-0">
                  📄
                </div>
                <div className="flex-1">
                  <div className="font-mono text-xs text-yellow-400/60 tracking-widest mb-1">CURRICULUM VITAE</div>
                  <h3 className="font-display font-extrabold text-2xl text-gray-900 dark:text-white">Sameer Ranjan Nayak</h3>
                  <p className="text-gray-500 dark:text-white/40 text-sm mt-1">CSE Student · Web Developer · ML Enthusiast · Gunupur, Odisha, India</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-400/10 border border-green-400/20">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">Updated 2026</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  href="/Sameer_Ranjan_Nayak_Elite_Internship_CV_With_Certifications.pdf"
                  download
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 flex items-center justify-center gap-3 py-4 rounded-xl font-display font-bold text-sm text-black transition-all"
                  style={{ background: "linear-gradient(135deg, #eab308, #f97316)" }}
                >
                  <span className="text-lg">⬇</span>
                  Download Resume (PDF)
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/sameer-ranjan-nayak-963657328"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 flex items-center justify-center gap-3 py-4 rounded-xl font-display font-bold text-sm border border-black/10 dark:border-white/10 text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:border-black/20 dark:hover:border-white/20 transition-all bg-[#e8e8e2] dark:bg-[#1a1917]"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  View LinkedIn Profile ↗
                </motion.a>
              </div>

              {/* Note */}
              <p className="mt-5 text-gray-400 dark:text-white/25 text-xs text-center">
                💡 Open to internships in <span className="text-yellow-400/60">AI/ML</span>, <span className="text-teal-400/60">Full-Stack</span>, and <span className="text-purple-400/60">Research</span> roles.
                Reach out at{" "}
                <a href="mailto:sameerranjan499@gmail.com" className="text-yellow-400/50 hover:text-yellow-400 transition-colors">
                  sameerranjan499@gmail.com
                </a>
              </p>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
