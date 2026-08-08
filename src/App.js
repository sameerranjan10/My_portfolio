import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import useTheme from "./hooks/useTheme";
import Navbar      from "./components/Navbar";
import About       from "./components/About";
import Skills      from "./components/Skills";
import Projects    from "./components/Projects";
import Highlights  from "./components/Highlights";
import Resume      from "./components/Resume";
import Contact     from "./components/Contact";
import Footer      from "./components/Footer";

// Divider
const Divider = () => (
  <div className="max-w-7xl mx-auto px-6">
    <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
  </div>
);

// Scroll-to-top button
function ScrollTop() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-6 z-50 w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold text-sm shadow-lg hover:bg-yellow-300 transition-colors"
          aria-label="Scroll to top"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === "light" ? "light" : "dark"}`}
      style={{ backgroundColor: "var(--bg-primary)", color: "var(--text)" }}
    >
      {/* Ambient macOS/iOS background aura orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{
            x: [0, 30, -15, 0],
            y: [0, -20, 15, 0],
            scale: [1, 1.05, 0.96, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-yellow-400/[0.04] dark:bg-yellow-500/[0.025] blur-[120px] mix-blend-multiply dark:mix-blend-normal"
        />
        <motion.div
          animate={{
            x: [0, -25, 25, 0],
            y: [0, 30, -15, 0],
            scale: [1, 0.94, 1.05, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-teal-400/[0.04] dark:bg-teal-500/[0.025] blur-[120px] mix-blend-multiply dark:mix-blend-normal"
        />
        <motion.div
          animate={{
            x: [0, 20, -20, 0],
            y: [0, -20, 20, 0],
            scale: [1, 1.04, 0.96, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[50%] left-[25%] w-[40vw] h-[40vw] rounded-full bg-purple-400/[0.03] dark:bg-purple-500/[0.02] blur-[130px] mix-blend-multiply dark:mix-blend-normal"
        />
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="relative z-10">
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Highlights />
        <Divider />
        <Resume />
        <Divider />
        <Contact />
      </main>

      <Footer />
      <ScrollTop />
    </div>
  );
}
