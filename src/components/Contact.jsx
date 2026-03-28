import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/sameerranjan10",
    color: "#ffffff",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sameer-ranjan-nayak-963657328",
    color: "#0A66C2",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/unisam_10/",
    color: "#E1306C",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:sameerranjan499@gmail.com",
    color: "#eab308",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("loading");

    emailjs.sendForm(
      "service_seqkuby",
      "template_d5n64wt",
      formRef.current,
      "QYpq4oex76d75SJA-"
    ).then(
      () => {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      },
      (error) => {
        console.log(error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 6000);
      }
    );
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none">
        <div className="w-full h-full rounded-full bg-yellow-400/05 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionWrapper>
          <SectionHeader
            label="// 06 — contact"
            title="Let's Connect"
            subtitle="Open to internships, collaborations, and conversations about AI & web dev."
          />
        </SectionWrapper>

        <div className="grid lg:grid-cols-5 gap-10 items-start max-w-6xl mx-auto">
          {/* Left info panel */}
          <div className="lg:col-span-2 space-y-6">
            <SectionWrapper>
              <div className="p-6 rounded-2xl border border-black/06 dark:border-white/06 bg-black/02 dark:bg-white/02 space-y-5">
                <div>
                  <div className="text-xs font-mono text-yellow-400/70 tracking-wider mb-1">CURRENTLY</div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-gray-900 dark:text-white font-medium text-sm">Open to Opportunities</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/06 dark:border-white/06">
                  <div className="text-xs font-mono text-gray-400 dark:text-white/30 tracking-wider mb-3">REACH OUT VIA</div>
                  <div className="space-y-3">
                    {socials.map(s => (
                      <motion.a
                        key={s.label}
                        href={s.href}
                        target={s.label !== "Email" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-3 text-gray-500 dark:text-white/50 hover:text-gray-900 dark:text-white text-sm font-medium transition-colors group"
                      >
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                          style={{ background: `${s.color}15`, color: s.color }}
                        >
                          {s.icon}
                        </div>
                        <span>{s.label}</span>
                        <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 dark:text-white/30 text-xs">↗</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-black/06 dark:border-white/06">
                  <div className="text-xs font-mono text-gray-400 dark:text-white/30 tracking-wider mb-2">LOCATION</div>
                  <div className="text-gray-600 dark:text-white/60 text-sm flex items-center gap-2">
                    <span>📍</span> Gunupur, Odisha, India
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* Resume download card */}
            <SectionWrapper>
              <motion.a
                href="/Sameer_Ranjan_Nayak_Elite_Internship_CV_With_Certifications.pdf"
                download
                whileHover={{ y: -3, borderColor: "rgba(234,179,8,0.3)" }}
                className="block p-5 rounded-2xl border border-black/06 dark:border-white/06 bg-black/02 dark:bg-white/02 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-2xl flex-shrink-0">
                    📄
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display font-bold text-gray-900 dark:text-white text-sm">Download Resume</div>
                    <div className="text-gray-500 dark:text-white/40 text-xs mt-0.5">PDF · 2 pages · Updated 2026</div>
                  </div>
                  <div className="text-yellow-400 text-lg group-hover:translate-y-0.5 transition-transform">⬇</div>
                </div>
              </motion.a>
            </SectionWrapper>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            <SectionWrapper>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="p-7 rounded-2xl border border-black/06 dark:border-white/06 bg-black/02 dark:bg-white/02 space-y-5"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-500 dark:text-white/50 text-xs font-medium mb-2 tracking-wide">
                      Name <span className="text-yellow-400">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`form-input ${errors.name ? "border-red-500/40" : ""}`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-500 dark:text-white/50 text-xs font-medium mb-2 tracking-wide">
                      Email <span className="text-yellow-400">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`form-input ${errors.email ? "border-red-500/40" : ""}`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-500 dark:text-white/50 text-xs font-medium mb-2 tracking-wide">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-gray-500 dark:text-white/50 text-xs font-medium mb-2 tracking-wide">
                    Message <span className="text-yellow-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me what you're working on, or just say hi..."
                    className={`form-input resize-none ${errors.message ? "border-red-500/40" : ""}`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={status !== "loading" ? { scale: 1.02, y: -1 } : {}}
                  whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                  className="w-full py-3.5 rounded-xl font-display font-bold text-sm transition-all relative overflow-hidden"
                  style={{
                    background:
                      status === "success"
                        ? "linear-gradient(135deg, #4ade80, #22c55e)"
                        : status === "error"
                        ? "linear-gradient(135deg, #f87171, #ef4444)"
                        : "linear-gradient(135deg, #eab308, #f97316)",
                    color: "#000",
                    opacity: status === "loading" ? 0.7 : 1,
                  }}
                >
                  <AnimatePresence mode="wait">
                    {status === "idle" && (
                      <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        Send Message →
                      </motion.span>
                    )}
                    {status === "loading" && (
                      <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                        </svg>
                        Sending...
                      </motion.span>
                    )}
                    {status === "success" && (
                      <motion.span key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        ✓ Message sent! I'll get back soon.
                      </motion.span>
                    )}
                    {status === "error" && (
                      <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        ✗ Something went wrong. Try again.
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                <p className="text-gray-400 dark:text-white/20 text-xs text-center">
                  Or email directly at{" "}
                  <a href="mailto:sameerranjan499@gmail.com" className="text-yellow-400/60 hover:text-yellow-400 transition-colors">
                    sameerranjan499@gmail.com
                  </a>
                </p>
              </form>
            </SectionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
