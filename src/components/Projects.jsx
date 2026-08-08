import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import { projects, projectFilters } from "../data/projects";
import { FiChevronLeft, FiChevronRight, FiX, FiGithub, FiExternalLink } from "react-icons/fi";
import { cn } from "../lib/utils";

// Sleek Image Loader with Blur Effect
const BlurImage = ({ src, className, alt, ...rest }) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "h-full w-full transition duration-500 ease-out",
        isLoading ? "blur-md scale-105" : "blur-0 scale-100",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      loading="lazy"
      alt={alt || "Project preview"}
      {...rest}
    />
  );
};

// Premium Browser Mockup Wrapper
const BrowserMockup = ({ project, children, isModal = false }) => {
  return (
    <div className={cn(
      "flex flex-col w-full overflow-hidden border border-black/10 dark:border-white/10 rounded-xl bg-neutral-100 dark:bg-[#18181b] shadow-xl",
      isModal ? "h-auto max-h-[520px] my-auto" : "h-36 sm:h-44 md:h-56"
    )}>
      {/* Header bar with controls */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-[#e8e8e2] dark:bg-[#1e1d1b] border-b border-black/[0.06] dark:border-white/[0.08] flex-shrink-0">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-1 text-[10px] sm:text-[11px] font-mono text-center text-gray-500 dark:text-white/35 truncate mx-2 sm:mx-4 bg-black/[0.04] dark:bg-white/[0.04] rounded py-0.5 max-w-[180px] sm:max-w-[220px] md:max-w-[320px]">
          {project.demo || project.github}
        </div>
        <div className="w-8 sm:w-12" /> {/* spacer for center alignment */}
      </div>
      
      {/* Browser Body */}
      <div className="relative flex-1 overflow-hidden bg-black/20">
        {children}
      </div>
    </div>
  );
};

// Redesigned Premium Card Component
const Card = ({ project, onClick, isDuplicate }) => {
  return (
    <motion.div
      layoutId={isDuplicate ? undefined : `card-${project.id}`}
      whileHover={{ y: -8, transition: { duration: 0.25, ease: "easeOut" } }}
      onClick={onClick}
      className={cn(
        "relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#fafafa] dark:bg-[#0f0f10] border border-black/[0.06] dark:border-white/[0.06] shadow-sm hover:shadow-2xl cursor-pointer select-none group text-left transition-colors duration-300 mx-auto",
        "w-[calc(100vw-40px)] max-w-[360px] md:w-[26rem] h-[330px] sm:h-[350px] md:h-[24rem] p-3.5 sm:p-4",
        "hover:border-yellow-400/40 dark:hover:border-yellow-400/40"
      )}
    >
      {/* Glowing background spotlight on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl z-0"
        style={{ background: `radial-gradient(ellipse 70% 70% at 50% 0%, ${project.color}0c, transparent 65%)` }}
      />

      {/* Main card mockup */}
      <div className="relative z-10 w-full flex-1 mb-2.5 sm:mb-4 overflow-hidden">
        <BrowserMockup project={project}>
          <motion.div 
            className="w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <BlurImage
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top scale-105 origin-top transition-transform duration-500"
            />
          </motion.div>

          {/* Reveal Indicator on Hover */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none z-30">
            <span className="px-4 py-2 rounded-full bg-white text-black font-display font-bold text-xs shadow-lg tracking-wide hover:scale-105 transition-transform">
              View Project →
            </span>
          </div>
        </BrowserMockup>
      </div>

      {/* Minimal Footer title and subtitle */}
      <div className="relative z-10 px-1 py-0.5">
        <span className="text-[9px] sm:text-[10px] uppercase font-mono font-bold tracking-widest text-yellow-400/90 dark:text-yellow-400 bg-yellow-400/10 dark:bg-yellow-400/[0.08] px-2 py-0.5 rounded border border-yellow-400/15">
          {project.category[0]}
        </span>
        <h4 className="mt-2 sm:mt-3 font-display font-bold text-base sm:text-lg md:text-xl text-gray-900 dark:text-white leading-tight truncate">
          {project.title}
        </h4>
        <p className="text-gray-500 dark:text-white/40 font-display text-xs sm:text-sm mt-0.5 truncate">
          {project.subtitle}
        </p>
      </div>
    </motion.div>
  );
};

// Premium Redesigned Infinite Carousel Component
const Carousel = ({ items, filter, initialScroll = 0, autoplay = true, autoplaySpeed = 0.5, onSelectCard }) => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const dragDistanceRef = useRef(0);
  const animationRef = useRef(null);

  // Duplicating items dynamically to ensure continuous loop
  const loopedItems = [
    ...items.map(item => React.cloneElement(item, { isDuplicate: false })),
    ...items.map((item, idx) =>
      React.cloneElement(item, {
        key: `${item.key || idx}-dup-1`,
        isDuplicate: true,
      })
    ),
    ...items.map((item, idx) =>
      React.cloneElement(item, {
        key: `${item.key || idx}-dup-2`,
        isDuplicate: true,
      })
    ),
  ];

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      const cardEl = carouselRef.current.querySelector(".flex-shrink-0");
      const gap = window.innerWidth < 768 ? 16 : 32;
      const cardWidth = cardEl ? cardEl.offsetWidth + gap : (window.innerWidth < 768 ? Math.min(window.innerWidth - 40, 360) + gap : 448);
      // Initial Scroll position to the middle loop
      carouselRef.current.scrollLeft = cardWidth * items.length;
      checkScrollability();
    }
  }, [items.length, filter]);

  // Auto Scroll Engine
  useEffect(() => {
    if (!autoplay || isHovered || isDragging) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      return;
    }

    const scroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += autoplaySpeed;
        const { scrollLeft, scrollWidth } = carouselRef.current;
        const middleSection = scrollWidth / 3;

        // Infinite loop wrap boundaries
        if (scrollLeft >= middleSection * 2) {
          carouselRef.current.scrollLeft = scrollLeft - middleSection;
        } else if (scrollLeft <= 0) {
          carouselRef.current.scrollLeft = middleSection;
        }

        checkScrollability();
        animationRef.current = requestAnimationFrame(scroll);
      }
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [autoplay, autoplaySpeed, isHovered, isDragging]);

  const scrollLeft = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (carouselRef.current) {
      const cardEl = carouselRef.current.querySelector(".flex-shrink-0");
      const gap = window.innerWidth < 768 ? 16 : 32;
      const cardWidth = cardEl ? cardEl.offsetWidth + gap : 320;
      const currentScroll = carouselRef.current.scrollLeft;
      carouselRef.current.scrollTo({
        left: currentScroll - cardWidth,
        behavior: "smooth"
      });
    }
  };

  const scrollRight = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (carouselRef.current) {
      const cardEl = carouselRef.current.querySelector(".flex-shrink-0");
      const gap = window.innerWidth < 768 ? 16 : 32;
      const cardWidth = cardEl ? cardEl.offsetWidth + gap : 320;
      const currentScroll = carouselRef.current.scrollLeft;
      carouselRef.current.scrollTo({
        left: currentScroll + cardWidth,
        behavior: "smooth"
      });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragDistanceRef.current = 0;
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeftState(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    dragDistanceRef.current = Math.abs(walk);
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeftState - walk;
    }
  };

  const handleCardClick = (project) => {
    if (dragDistanceRef.current < 6) {
      onSelectCard(project);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Outer wrapper to prevent layout clipping left & right */}
      <div
        className={cn(
          "flex w-full overflow-x-auto overscroll-x-contain scroll-smooth py-3 sm:py-6 [scrollbar-width:none] cursor-grab active:cursor-grabbing px-4 sm:px-8 md:px-16 justify-start",
          isDragging && "cursor-grabbing scroll-auto"
        )}
        ref={carouselRef}
        onScroll={checkScrollability}
        onMouseDown={handleMouseDown}
        onMouseLeave={() => setIsDragging(false)}
        onMouseUp={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
      >
        <div className="flex flex-row justify-start gap-4 md:gap-8 pr-4 sm:pr-8 md:pr-32">
          {loopedItems.map((item, index) => (
            <div
              key={`looped-${index}`}
              className="flex-shrink-0"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => handleCardClick(item.props.project)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons: Centered and Closer */}
      <div className="flex justify-center gap-3 mt-3 sm:mt-4">
        <button
          type="button"
          className="relative z-40 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#f2f2ed] dark:bg-[#151516] border border-black/[0.08] dark:border-white/[0.08] hover:bg-[#e8e8e2] dark:hover:bg-[#1e1d1f] hover:border-yellow-500/40 active:scale-95 shadow-sm touch-manipulation cursor-pointer select-none"
          onClick={scrollLeft}
          onTouchEnd={scrollLeft}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Scroll left"
        >
          <FiChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-300 pointer-events-none" />
        </button>
        <button
          type="button"
          className="relative z-40 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#f2f2ed] dark:bg-[#151516] border border-black/[0.08] dark:border-white/[0.08] hover:bg-[#e8e8e2] dark:hover:bg-[#1e1d1f] hover:border-black/15 dark:hover:border-white/15 disabled:opacity-30 transition-all hover:scale-105 active:scale-95 shadow-sm touch-manipulation cursor-pointer select-none"
          onClick={scrollRight}
          onTouchEnd={scrollRight}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Scroll right"
        >
          <FiChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-300 pointer-events-none" />
        </button>
      </div>
    </div>
  );
};

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [activeProject, setActiveProject] = useState(null);

  const filtered = filter === "all"
    ? projects
    : projects.filter(p => p.category.includes(filter));

  // Close modal via Escape keyboard key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };
    if (activeProject) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject]);

  return (
    <section id="projects" className="py-12 sm:py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none">
        <div className="w-full h-full rounded-full bg-yellow-400/[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 space-y-6 sm:space-y-10">
        {/* Section Header */}
        <SectionWrapper>
          <SectionHeader
            eyebrow="Portfolio"
            title="Featured Projects"
            subtitle="Explore real-world software solutions spanning machine learning, full-stack web platforms, and developer tooling."
          />

          {/* Horizontally Scrollable Filter Pills on Mobile */}
          <div className="flex overflow-x-auto [scrollbar-width:none] justify-start sm:justify-center gap-2 mt-6 sm:mt-8 px-1 py-1 whitespace-nowrap w-full max-w-full">
            {projectFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-mono rounded-full border transition-all duration-200 min-h-[36px] sm:min-h-[40px] flex items-center justify-center touch-manipulation shrink-0",
                  filter === f.id
                    ? "bg-yellow-400 text-black font-bold border-yellow-400 shadow-md shadow-yellow-400/20"
                    : "border-black/10 dark:border-white/10 text-gray-600 dark:text-white/60 hover:border-yellow-400/40 hover:text-gray-900 dark:hover:text-white bg-black/[0.02] dark:bg-white/[0.03]"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </SectionWrapper>

        {/* Carousel */}
        <SectionWrapper>
          <Carousel
            filter={filter}
            items={filtered.map((project) => (
              <Card
                key={project.id}
                project={project}
              />
            ))}
            onSelectCard={(project) => setActiveProject(project)}
          />
        </SectionWrapper>

        {/* Call To Action */}
        <SectionWrapper>
          <div className="text-center mt-6 sm:mt-10">
            <a
              href="https://github.com/sameerranjan10"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex gap-2 items-center px-5 sm:px-6 py-3 sm:py-3.5 rounded-full hover:scale-105 active:scale-95 transition-transform min-h-[44px] sm:min-h-[48px] text-xs sm:text-sm font-semibold shadow-sm"
            >
              <FiGithub className="w-4 h-4" />
              View All on GitHub
            </a>
          </div>
        </SectionWrapper>
      </div>

      {/* Expanded Modal Layout Details */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 cursor-pointer"
            />

            {/* Modal Card Box */}
            <motion.div
              layoutId={`card-${activeProject.id}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl bg-[#f5f5f0] dark:bg-[#0c0c0d] rounded-3xl overflow-hidden shadow-2xl z-50 border border-black/10 dark:border-white/10 flex flex-col md:flex-row h-auto max-h-[92vh] md:max-h-[85vh] select-none my-auto"
            >
              {/* Close Button (Min 44px touch size) */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-3.5 right-3.5 z-50 p-2.5 rounded-full bg-black/60 dark:bg-white/15 hover:bg-black/80 dark:hover:bg-white/25 text-white backdrop-blur-md transition-all active:scale-95 touch-manipulation flex items-center justify-center w-10 h-10 shadow-lg"
                aria-label="Close case study"
              >
                <FiX className="w-5 h-5" />
              </button>

              {/* Left Side Panel: Screenshot Mockup */}
              <div className="w-full md:w-1/2 p-4 sm:p-6 flex flex-col justify-center items-center bg-black/[0.05] dark:bg-black/20 border-b md:border-b-0 md:border-r border-black/[0.08] dark:border-white/[0.06] flex-shrink-0">
                <BrowserMockup project={activeProject} isModal={true}>
                  <div className="w-full h-auto max-h-[220px] sm:max-h-[320px] md:max-h-[460px] overflow-y-auto [scrollbar-width:none]">
                    <BlurImage
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-auto block object-cover"
                    />
                  </div>
                </BrowserMockup>
              </div>

              {/* Right Side Panel: Text details (Scrollable) */}
              <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-10 flex flex-col overflow-y-auto justify-between bg-transparent flex-1">
                <div className="space-y-6">
                  {/* Badges row */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-1 rounded">
                      {activeProject.category[0]}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-gray-700 dark:text-white/80 bg-black/[0.05] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 px-2.5 py-1 rounded">
                      {activeProject.statusLabel}
                    </span>
                    {activeProject.badge && (
                      <span className="text-[10px] font-mono font-bold text-yellow-500 bg-yellow-500/[0.05] border border-yellow-500/15 px-2.5 py-1 rounded">
                        ★ {activeProject.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Role */}
                  <div>
                    <h3 className="font-display font-extrabold text-3xl md:text-4xl text-gray-900 dark:text-white tracking-tight leading-none">
                      {activeProject.title}
                    </h3>
                    <p className="text-gray-500 dark:text-white/35 font-display text-xs md:text-sm font-semibold uppercase tracking-wider mt-1.5">
                      {activeProject.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-white/70 text-sm md:text-base leading-relaxed">
                    {activeProject.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-gray-400 dark:text-white/30 mb-2.5">
                      Key Highlights & Features
                    </h4>
                    <ul className="space-y-2">
                      {activeProject.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-600 dark:text-white/75">
                          <span className="text-yellow-400 font-bold flex-shrink-0 mt-0.5">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architecture & Tech Stack */}
                  <div className="space-y-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                    {activeProject.architecture && (
                      <div>
                        <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400 dark:text-white/30">System Architecture</p>
                        <p className="text-xs font-semibold text-gray-600 dark:text-white/70 mt-1">{activeProject.architecture}</p>
                      </div>
                    )}

                    <div>
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-gray-400 dark:text-white/30 mb-2">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-[11px] font-medium font-mono text-gray-600 dark:text-white/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="flex gap-3 pt-6 border-t border-black/[0.06] dark:border-white/[0.06] mt-8">
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#e8e8e2] dark:bg-[#18181a] border border-black/[0.08] dark:border-white/[0.08] text-gray-700 dark:text-white/75 text-sm font-semibold hover:bg-black/[0.08] dark:hover:bg-white/[0.08] hover:text-gray-900 dark:hover:text-white hover:border-black/15 dark:hover:border-white/15 transition-all hover:scale-[1.02]"
                    >
                      <FiGithub className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {activeProject.demo ? (
                    <a
                      href={activeProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-bold transition-all hover:scale-[1.02] shadow-sm"
                      style={{
                        background: `${activeProject.color}18`,
                        color: activeProject.color,
                        border: `1px solid ${activeProject.color}35`,
                      }}
                    >
                      <FiExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  ) : activeProject.status === "progress" || activeProject.status === "soon" ? (
                    <span className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-black/[0.05] dark:bg-white/[0.05] border border-black/[0.05] dark:border-white/[0.05] text-gray-400 dark:text-white/30 text-sm font-medium cursor-default">
                      Under Development
                    </span>
                  ) : null}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
