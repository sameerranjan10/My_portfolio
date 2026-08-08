import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import { FaTrophy } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight, FiX, FiMaximize2 } from "react-icons/fi";

const achievements = [
  {
    id: 1,
    icon: <FaTrophy className="text-yellow-500" />,
    title: "GDG TechSprint",
    role: "1st Place Winner",
    description: "Secured first place in the Google Developer Groups TechSprint by building an innovative and scalable solution under intense time pressure.",
    color: "#eab308",
    date: "Feb 2026",
    images: [
      { src: "/gdg_winnner_photo.jpeg", label: "Winner Photo" },
      { src: "/gdg_certificate.png", label: "Certificate" }
    ],
  }
];

function AchievementCard({ a, i, onOpenModal }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const images = a.images || (a.image ? [{ src: a.image, label: "Photo" }] : []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 80 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative overflow-hidden group rounded-3xl bg-[#f2f2ed] dark:bg-[#111010] border border-black/[0.05] dark:border-white/[0.05] p-6 md:p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-8 transition-all shadow-sm hover:shadow-xl cursor-default z-10"
    >
      {/* Background Glow */}
      <div 
        className="absolute -inset-20 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-3xl rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${a.color} 0%, transparent 70%)` }}
      />
      
      {/* Image Container */}
      {images.length > 0 ? (
        <div 
          onClick={() => onOpenModal(images, currentImageIndex)}
          className="relative shrink-0 w-full md:w-72 aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-black/10 dark:border-white/10 group-hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] transition-all cursor-pointer group/img select-none"
          title="Click to view full photo"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex].src}
              alt={a.title}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full h-full object-cover absolute inset-0"
            />
          </AnimatePresence>

          {/* Hover Overlay with Expand Hint */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none z-10">
            <span className="px-3 py-1.5 rounded-full bg-black/60 text-white text-xs font-mono font-medium flex items-center gap-1.5 backdrop-blur-md border border-white/20">
              <FiMaximize2 className="w-3.5 h-3.5" /> Full Photo
            </span>
          </div>

          {/* Trophy Badge */}
          <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-lg shadow-md border border-white/10 z-20">
            {a.icon}
          </div>

          {/* Switch Options: Arrow Controls & Pill Options */}
          {images.length > 1 && (
            <>
              {/* Prev Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md z-20 border border-white/15 transition-all opacity-80 hover:opacity-100 hover:scale-110 active:scale-95"
                title="Previous photo"
                aria-label="Previous photo"
              >
                <FiChevronLeft className="w-4 h-4" />
              </button>

              {/* Next Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md z-20 border border-white/15 transition-all opacity-80 hover:opacity-100 hover:scale-110 active:scale-95"
                title="Next photo"
                aria-label="Next photo"
              >
                <FiChevronRight className="w-4 h-4" />
              </button>

              {/* Switch Option Dots */}
              <div 
                onClick={(e) => e.stopPropagation()} 
                className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md z-20 border border-white/15 shadow-md"
              >
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex
                        ? "bg-yellow-400 w-4"
                        : "bg-white/40 hover:bg-white/70 w-1.5"
                    }`}
                    aria-label={`Go to photo ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="relative shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 flex items-center justify-center text-4xl border border-yellow-500/20 shadow-[0_0_30px_rgba(234,179,8,0.15)] group-hover:shadow-[0_0_50px_rgba(234,179,8,0.3)] transition-shadow">
          {a.icon}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 text-center md:text-left relative z-10 w-full">
        <div className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-400 text-xs font-mono font-semibold mb-3 tracking-wider">
          {a.role} • {a.date}
        </div>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-3">
          {a.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
          {a.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Highlights() {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = (images, initialIndex) => {
    setActiveModal({ images, currentIndex: initialIndex });
  };

  const handleModalPrev = () => {
    if (!activeModal) return;
    setActiveModal((prev) => ({
      ...prev,
      currentIndex: prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1
    }));
  };

  const handleModalNext = () => {
    if (!activeModal) return;
    setActiveModal((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  return (
    <section id="highlights" className="py-24 relative overflow-hidden">
      {/* Animated subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-900/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionWrapper>
          <SectionHeader
            label="// 04 — achievements"
            title="Recognition & Awards"
            subtitle="Milestones that validate the hustle and the late-night coding sessions."
          />
        </SectionWrapper>

        {/* Achievements list */}
        <div className="mt-16 flex flex-col gap-6">
          {achievements.map((a, i) => (
            <AchievementCard key={a.id} a={a} i={i} onOpenModal={handleOpenModal} />
          ))}
        </div>
      </div>

      {/* Full Photo Modal / Lightbox */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center"
            >
              {/* Close button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute -top-12 right-0 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all"
                aria-label="Close photo preview"
              >
                <FiX className="w-5 h-5" />
              </button>

              {/* Full Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                <img
                  src={activeModal.images[activeModal.currentIndex].src}
                  alt={activeModal.images[activeModal.currentIndex].label}
                  className="max-h-[80vh] w-auto max-w-full object-contain"
                />

                {/* Modal Photo Label */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-mono border border-white/15">
                  {activeModal.images[activeModal.currentIndex].label} ({activeModal.currentIndex + 1}/{activeModal.images.length})
                </div>
              </div>

              {/* Modal Prev / Next Navigation */}
              {activeModal.images.length > 1 && (
                <>
                  <button
                    onClick={handleModalPrev}
                    className="absolute -left-14 md:-left-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all"
                    aria-label="Previous photo"
                  >
                    <FiChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={handleModalNext}
                    className="absolute -right-14 md:-right-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all"
                    aria-label="Next photo"
                  >
                    <FiChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
