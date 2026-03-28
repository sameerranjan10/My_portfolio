import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import useTheme from "./hooks/useTheme";
import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import About       from "./components/About";
import Skills      from "./components/Skills";
import Projects    from "./components/Projects";
import Timeline    from "./components/Timeline";
import Highlights  from "./components/Highlights";
import Resume      from "./components/Resume";
import Contact     from "./components/Contact";
import Footer      from "./components/Footer";

// Divider
const Divider = () => (
  <div className="max-w-7xl mx-auto px-6">
    <div className="h-px bg-gradient-to-r from-transparent via-white/06 to-transparent" />
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
      style={{ background: "var(--bg-primary)", color: "var(--text)" }}
    >
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Timeline />
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
