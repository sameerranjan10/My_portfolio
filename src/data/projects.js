export const projects = [
  {
    id: 1,
    title: "GIETVisionSearch",
    subtitle: "OCR Semantic Search Engine",
    category: ["ai", "fullstack"],
    status: "live",
    statusLabel: "🏆 Live",
    badge: "1st Place — GDG TechSprint",
    description:
      "An OCR-powered semantic search engine for university notices that responds to natural language queries. Built for thousands of students on campus, solving a real information-access problem with AI.",
    tech: ["Python", "OCR", "NLP", "Semantic Search", "Streamlit", "Full-Stack"],
    github: "https://github.com/niteshnemalpuri08/techsprint-tech-four",
    demo: "https://gietu-nexus.streamlit.app",
    color: "#facc15",
    highlight: true,
    image: "/gietuvisionsearch.png",
    features: [
      "OCR Notice Digitsation & Semantic Vector Search using Natural Language queries.",
      "Custom NLP preprocessing pipeline to accurately parse complex formatting.",
      "Deployed and optimized Streamlit application handling concurrent query streams."
    ],
    architecture: "Python semantic vector model coupled with Streamlit UI & SQLite document index."
  },
  {
    id: 2,
    title: "Back2Roots",
    subtitle: "AI Alumni Engagement Platform",
    category: ["fullstack"],
    status: "live",
    statusLabel: "Live",
    description:
      "An AI-driven platform that connects students with alumni through recommendation-based matching — bridging the gap between campus and the real world. Selected at Smart India Hackathon 2024 and 2025.",
    tech: ["Python", "FastAPI", "JWT", "Recommendation Systems", "React.js", "AI"],
    github: "https://github.com/sameerranjan10/Back2Roots",
    demo: "https://back2-roots.vercel.app/",
    color: "#2dd4bf",
    highlight: true,
    image: "/back2rootsfull.png",
    features: [
      "Personalized recommendation engine utilizing profile matching algorithms.",
      "Secure authentication using JWT tokens and cryptographic password hashing.",
      "Dual-layered student and alumni dashboards with real-time feedback loops."
    ],
    architecture: "FastAPI REST backend with PostgreSQL database and a responsive React.js frontend."
  },
  {
    id: 3,
    title: "MedAssist-V2",
    subtitle: "Medical Report Analysis",
    category: ["ai"],
    status: "live",
    statusLabel: "Live",
    description:
      "ML-powered medical report analyzer applying data science techniques to surface meaningful health patterns from raw reports. Demonstrated how AI can contribute to better healthcare outcomes.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "ML"],
    github: "https://github.com/sameerranjan10/MedAssist-V2",
    demo: "https://med-assist-v2.vercel.app/",
    color: "#0ce655",
    highlight: true,
    image: "/medassistv2full.png",
    features: [
      "Text feature classification pipeline predicting clinical parameters from reports.",
      "Exploratory Data Analysis visualizations plotting core patient biomarkers.",
      "High accuracy classification metrics utilizing optimized tree-based classifiers."
    ],
    architecture: "Python Scikit-Learn data science pipeline integrated with a client-side visualization layer."
  },
  {
    id: 4,
    title: "AgroConnect",
    subtitle: "AI Crop Recommendation System and Marketplace",
    category: ["ml", "ai"],
    status: "live",
    statusLabel: "Live",
    badge: "Hacknovation 1.0",
    description:
      "AI-based crop recommendation engine and full-stack agriculture platform that connects farmers and buyers through a modern digital marketplace, helping farmers make smarter, data-driven agricultural decisions and improving livelihoods through technology.",
    tech: ["Python", "Machine Learning", "Data Analysis", "AI", "Agriculture Tech"],
    github: "https://github.com/sameerranjan10/Agroconnect",
    demo: "https://agroconnect-phi.vercel.app/",
    color: "#4ade80",
    highlight: true,
    image: "/agroconnectfull.png",
    features: [
      "Machine Learning model analyzing soil and weather parameters for crop compatibility.",
      "Integrated secure peer-to-peer bidding marketplace for direct trading.",
      "Mobile-friendly user layout focused on accessibility and simple navigation."
    ],
    architecture: "Python ML prediction endpoints combined with a React client interface and Firebase storage."
  }
];

export const projectFilters = [
  { id: "all",      label: "All Projects" },
  { id: "ai",       label: "AI / ML" },
  { id: "fullstack",label: "Full Stack" },
];
