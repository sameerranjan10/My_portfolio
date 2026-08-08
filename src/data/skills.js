import React from 'react';
import { FaPython, FaJava, FaReact, FaNodeJs, FaDatabase, FaRobot, FaServer, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiJavascript, SiScikitlearn, SiNumpy, SiPostgresql, SiFastapi, SiC } from "react-icons/si";

export const skillCategories = [
  {
    id: "languages",
    icon: "💻",
    label: "Languages",
    narrative: "Core programming languages",
    skills: [
      { name: "C",            icon: <SiC className="text-[#A8B9CC]" /> },
      { name: "Java",         icon: <FaJava className="text-[#ED8B00]" /> },
      { name: "Python",       icon: <FaPython className="text-[#3776AB]" /> },
      { name: "JavaScript",   icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "HTML",         icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS",          icon: <FaCss3Alt className="text-[#1572B6]" /> },
      { name: "SQL",          icon: <FaDatabase className="text-[#00758F]" /> },
    ],
  },
  {
    id: "web",
    icon: "🌐",
    label: "Web Dev & APIs",
    narrative: "Frontend & backend frameworks",
    skills: [
      { name: "React",        icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Node.js",      icon: <FaNodeJs className="text-[#339933]" /> },
      { name: "FastAPI",      icon: <SiFastapi className="text-[#009688]" /> },
      { name: "Servlets",     icon: <FaServer className="text-[#0096D6]" /> },
      { name: "JSP",          icon: <FaJava className="text-[#E76F51]" /> },
    ],
  },
  {
    id: "ai_db",
    icon: "🤖",
    label: "AI, ML & Databases",
    narrative: "Machine learning, LLMs & data persistence",
    skills: [
      { name: "NumPy",        icon: <SiNumpy className="text-[#013243] dark:text-[#4DABCF]" /> },
      { name: "Scikit-Learn", icon: <SiScikitlearn className="text-[#F7931E]" /> },
      { name: "RAG",          icon: <FaDatabase className="text-[#9C27B0]" /> },
      { name: "LLM",          icon: <FaRobot className="text-[#4CAF50]" /> },
      { name: "PostgreSQL",   icon: <SiPostgresql className="text-[#4169E1]" /> },
    ],
  },
];

export const techMarquee = [
  "C", "Java", "Python", "NumPy", "Scikit-Learn", "HTML", "CSS", "JavaScript",
  "React", "RAG", "LLM", "FastAPI", "JSP", "Servlets", "SQL", "PostgreSQL", "Node.js"
];
