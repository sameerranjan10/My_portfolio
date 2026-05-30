import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaRocket,
} from "react-icons/fa";

export default function PortfolioV2ComingSoon() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute w-[900px] h-[900px] bg-yellow-500/10 blur-[180px] rounded-full" />
      <div className="absolute w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full top-0 right-0" />
      
      {/* Background Grid */}

      <motion.div
      animate={{
        backgroundPosition: ["0px 0px", "50px 50px"],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage: `
      linear-gradient(to right, white 1px, transparent 1px),
      linear-gradient(to bottom, white 1px, transparent 1px)
      `,
        backgroundSize: "40px 40px",
      }}
/>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl w-full"
      >
        <div className="backdrop-blur-xl border border-white/10 bg-white/[0.03] rounded-3xl p-10 md:p-16 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 text-sm mb-8">
            <FaRocket />
            Portfolio V2 Launching Soon
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Building Something
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              New
            </span>
          </h1>

          {/* Intro */}
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Hi, I'm <span className="text-white font-semibold">Sameer Ranjan Nayak</span>.
            I'm currently redesigning my portfolio with premium case studies,
            AI-powered applications, full-stack products, and freelance services.
          </p>

          {/* Availability */}
          <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400">
            ● Available for Freelance Projects
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href="mailto:sameerranjan499@gmail.com"
              className="px-6 py-3 rounded-xl bg-yellow-500 text-black font-semibold hover:scale-105 transition"
            >
              Hire Me
            </a>

            <a
              href="https://github.com/sameerranjan10"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition flex items-center gap-2"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/sameer-ranjan-nayak-963657328"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition flex items-center gap-2"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>

          {/* Launch Text */}
          <div className="mt-12">
            <p className="text-zinc-500 text-sm uppercase tracking-[0.3em]">
              Expected Launch
            </p>

            <h3 className="text-2xl font-semibold mt-2">
              July 2026
            </h3>
          </div>

          {/* Footer */}
          <div className="mt-12 text-zinc-600 text-sm">
            © 2026 Sameer Ranjan Nayak · Full-Stack Developer · AI Engineer
          </div>
        </div>
      </motion.div>
    </div>
  );
}