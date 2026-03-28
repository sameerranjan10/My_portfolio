export const skillCategories = [
  {
    id: "languages",
    icon: "💻",
    label: "Languages",
    narrative: "The foundation — languages I think in",
    skills: [
      { name: "Python",     level: 70 },
      { name: "JavaScript", level: 50 , learning: true},
      { name: "Java",       level: 60 },
      { name: "SQL",        level: 80 },
      { name: "HTML / CSS", level: 88 },
    ],
  },
  {
    id: "web",
    icon: "🌐",
    label: "Web Dev",
    narrative: "From backend APIs to responsive UIs",
    skills: [
      { name: "React.js",          level: 50 ,learning: true},
      { name: "Node.js",           level: 50 ,learning: true},
      { name: "REST APIs",         level: 50 ,learning: true},
      { name: "Servlets & JSP",    level: 50 ,learning: true},
      { name: "Responsive Design", level: 50 ,learning: true},
    ],
  },
  {
    id: "ml",
    icon: "🤖",
    label: "ML / AI",
    narrative: "Turning raw data into meaningful insight",
    skills: [
      { name: "Machine Learning", level: 50 ,learning: true},
      { name: "Scikit-learn",     level: 50 ,learning: true},
      { name: "Pandas",           level: 50 ,learning: true},
      { name: "NumPy",            level: 50 ,learning: true},
      { name: "OCR / NLP",        level: 50 ,learning: true},
      { name: "Gen AI",           level: 55, learning: true },
      { name: "LLMs",             level: 50, learning: true },
      { name: "RAG",              level: 48, learning: true },
    ],
  },
  {
    id: "tools",
    icon: "🛠",
    label: "Tools",
    narrative: "The instruments that keep workflows sharp",
    skills: [
      { name: "Git & GitHub",        level: 85 },
      { name: "MySQL",               level: 78 },
      { name: "Apache Tomcat",       level: 70 },
      { name: "Postman",             level: 80 },
      { name: "Prompt Engineering",  level: 75 },
    ],
  },
];

export const techMarquee = [
  "Python", "React", "FastAPI", "Machine Learning", "JavaScript", "Java",
  "SQL", "Node.js", "Git", "Scikit-learn", "Pandas", "LLMs", "RAG",
  "REST APIs", "Streamlit", "MySQL", "NumPy", "OCR", "Tailwind", "Gen AI",
];
