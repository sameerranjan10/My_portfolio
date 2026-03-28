import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Orb = ({ x, y, size, color, delay = 0 }) => (
  <motion.div
    animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
    transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }}
    className="absolute rounded-full pointer-events-none"
    style={{
      left: x, top: y, width: size, height: size,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      filter: "blur(60px)",
    }}
  />
);

const STATS = [
  { value: "5+",   label: "Projects Built"   },
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 200 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handler = e => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.015);
      mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.015);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Background orbs */}
      <Orb x="60%" y="-10%" size="600px" color="rgba(234,179,8,0.12)" delay={0} />
      <Orb x="-10%" y="40%" size="500px" color="rgba(45,212,191,0.08)" delay={2} />
      <Orb x="80%" y="60%" size="400px" color="rgba(249,115,22,0.07)" delay={1} />

      {/* Particle dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3 + (i % 4), delay: i * 0.3, repeat: Infinity }}
            className="absolute w-1 h-1 rounded-full bg-yellow-400/30"
            style={{
              left: `${(i * 37) % 100}%`,
              top:  `${(i * 53) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left text block */}
          <div className="flex-1 text-center lg:text-left">
            {/* Eyebrow */}
            <motion.div {...fadeUp(0.1)} className="mb-6 inline-flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-mono tracking-wider">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2 animate-pulse" />
                Open to Internships
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 {...fadeUp(0.2)}
              className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.02] mb-4 text-gray-900 dark:text-white"
            >
              Hi, I'm{" "}
              <span className="gradient-text">Sameer</span>
              <span className="text-gray-400 dark:text-white/20">.</span>
            </motion.h1>

            {/* Type animation */}
            <motion.div {...fadeUp(0.3)} className="mb-6">
              <span className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-600 dark:text-white/70">
                <TypeAnimation
                  sequence={[
                    "CS Student",     2000,
                    "Full-Stack Dev",  2000,
                    "ML Enthusiast",   2000,
                    "Hackathon Winner",2000,
                    "AI Explorer",     2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </motion.div>

            {/* Sub */}
            <motion.p {...fadeUp(0.4)}
              className="text-gray-500 dark:text-white/50 text-lg font-light leading-relaxed mb-10 max-w-lg lg:max-w-full"
            >
              Building at the intersection of{" "}
              <span className="text-yellow-400/80">web dev</span> and{" "}
              <span className="text-teal-400/80">artificial intelligence</span>.
              Currently exploring Gen AI, LLMs, and RAG — one chapter at a time.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="btn-primary"
                onClick={e => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                View Projects →
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="btn-secondary"
                onClick={e => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Stats row & GitHub Activity */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 flex flex-col gap-8 max-w-lg lg:max-w-none"
            >
              <div className="flex items-center gap-6">
                {STATS.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                    className="text-center lg:text-left"
                  >
                    <div className="font-display font-extrabold text-2xl text-yellow-400">{s.value}</div>
                    <div className="text-gray-500 dark:text-white/40 text-xs mt-0.5 font-medium">{s.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* GitHub Activity Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="w-full"
              >
                <div className="text-gray-600 dark:text-white/50 text-sm font-medium mb-3 tracking-wide">GitHub Activity</div>
                <div className="w-full rounded-2xl overflow-hidden card-glass p-2">
                  <img 
                    src="https://github-readme-activity-graph.vercel.app/graph?username=sameerranjan10&theme=react-dark&hide_border=true" 
                    alt="GitHub Activity Graph"
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right — Avatar card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative flex-shrink-0"
            style={{ perspective: 1000, rotateX: smoothY, rotateY: smoothX }}
          >
            {/* Glow behind card */}
            <div className="absolute inset-0 rounded-3xl bg-yellow-400/15 blur-2xl scale-90" />

            {/* Card */}
            <div className="relative w-72 rounded-3xl card-glass overflow-hidden">
              {/* Top accent */}
              <div className="h-1 w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-teal-400" />

              {/* Avatar placeholder */}
              <div className="aspect-[3/4] w-full bg-gradient-to-br from-yellow-900/20 via-ink-800/50 to-teal-900/20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-40" />
              <img
              src="/me.jpg"
              alt="Sameer"
              className="relative w-full h-full object-cover"
              />
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="font-display font-bold text-lg text-gray-900 dark:text-white">Sameer R. Nayak</div>
                <div className="text-gray-500 dark:text-white/50 text-sm mt-0.5 mb-4">CS Student · Web Dev · ML</div>
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "React", "ML", "AI"].map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-black/05 dark:bg-white/05 border border-black/08 dark:border-white/08 text-gray-500 dark:text-white/50 text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-black/08 dark:border-white/08 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-medium">Available</span>
                  </div>
                  <span className="text-gray-400 dark:text-white/30 text-xs">📍 Gunupur, Odisha, IN</span>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-8 px-3 py-2 rounded-xl bg-yellow-400/10 border border-yellow-400/20 backdrop-blur-sm"
            >
              <span className="text-yellow-400 text-sm font-mono">🏆 1st Place</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-8 px-3 py-2 rounded-xl bg-teal-400/10 border border-teal-400/20 backdrop-blur-sm"
            >
              <span className="text-teal-400 text-sm font-mono">🤖 AI Builder</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-400 dark:text-white/25 text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-black/20 dark:from-white/20 to-transparent"
        />
      </motion.div>
    </section>
  );
}
