import React from 'react';
import { FaPython, FaJava, FaHtml5, FaReact, FaNodeJs, FaDatabase, FaRobot, FaBrain, FaGithub, FaServer, FaMobileAlt } from "react-icons/fa";
import { SiJavascript, SiMysql, SiScikitlearn, SiPandas, SiNumpy, SiApachetomcat, SiPostman } from "react-icons/si";
import { BiMicrochip } from "react-icons/bi";

export const skillCategories = [
  {
    id: "languages",
    icon: "💻",
    label: "Languages",
    narrative: "The foundation — languages I think in",
    skills: [
      { name: "Python",     icon: <FaPython className="text-[#3776AB]" />,     learning: false },
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, learning: true },
      { name: "Java",       icon: <FaJava className="text-[#ED8B00]" />,       learning: false },
      { name: "SQL",        icon: <FaDatabase className="text-[#00758F]" />,   learning: false },
      { name: "HTML / CSS", icon: <FaHtml5 className="text-[#E34F26]" />,      learning: false },
    ],
  },
  {
    id: "web",
    icon: "🌐",
    label: "Web Dev",
    narrative: "From backend APIs to responsive UIs",
    skills: [
      { name: "React.js",          icon: <FaReact className="text-[#61DAFB]" />,     learning: true },
      { name: "Node.js",           icon: <FaNodeJs className="text-[#339933]" />,    learning: true },
      { name: "REST APIs",         icon: <FaServer className="text-[#0096D6]" />,    learning: true },
      { name: "Servlets & JSP",    icon: <FaJava className="text-[#EA2D2E]" />,      learning: true },
      { name: "Responsive Design", icon: <FaMobileAlt className="text-[#4285F4]" />, learning: true },
    ],
  },
  {
    id: "ml",
    icon: "🤖",
    label: "ML / AI",
    narrative: "Turning raw data into meaningful insight",
    skills: [
      { name: "Machine Learning", icon: <FaRobot className="text-[#FF6F00]" />,       learning: true },
      { name: "Scikit-learn",     icon: <SiScikitlearn className="text-[#F7931E]" />, learning: true },
      { name: "Pandas",           icon: <SiPandas className="text-[#150458] dark:text-blue-400" />, learning: true },
      { name: "NumPy",            icon: <SiNumpy className="text-[#013243] dark:text-blue-400" />,  learning: true },
      { name: "OCR / NLP",        icon: <FaBrain className="text-[#FF4081]" />,       learning: true },
      { name: "Gen AI",           icon: <BiMicrochip className="text-[#00B4AB]" />,   learning: true },
      { name: "LLMs",             icon: <FaRobot className="text-[#4CAF50]" />,       learning: true },
      { name: "RAG",              icon: <FaDatabase className="text-[#9C27B0]" />,    learning: true },
    ],
  },
  {
    id: "tools",
    icon: "🛠",
    label: "Tools",
    narrative: "The instruments that keep workflows sharp",
    skills: [
      { name: "Git & GitHub",        icon: <FaGithub className="text-gray-900 dark:text-white" />, learning: false },
      { name: "MySQL",               icon: <SiMysql className="text-[#4479A1]" />,        learning: false },
      { name: "Apache Tomcat",       icon: <SiApachetomcat className="text-[#F8DC75]" />, learning: false },
      { name: "Postman",             icon: <SiPostman className="text-[#FF6C37]" />,      learning: false },
      { name: "Prompt Engineering",  icon: <FaBrain className="text-[#E91E63]" />,        learning: false },
    ],
  },
];

export const techMarquee = [
  "Python", "React", "FastAPI", "Machine Learning", "JavaScript", "Java",
  "SQL", "Node.js", "Git", "Scikit-learn", "Pandas", "LLMs", "RAG",
  "REST APIs", "Streamlit", "MySQL", "NumPy", "OCR", "Tailwind", "Gen AI",
];
