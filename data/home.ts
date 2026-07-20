export type NavItem = {
  id: string;
  label: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  links: {
    github: string;
    demo: string;
    album: string;
  };
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
};

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Tech" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL",
      "PostgreSQL",
      "Java",
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "Next.js",
      "React",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Prisma ORM",
      "FastAPI",
    ],
  },
  {
    title: "AI & Data",
    items: [
      "OpenAI API",
      "Model Context Protocol (MCP)",
      "RAG",
      "Vector Databases",
      "Pinecone",
      "LangGraph",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "Railway",
      "Supabase",
      "Neon",
      "Hugging Face",
    ],
  },
  {
    title: "Practices",
    items: [
      "REST APIs",
      "Database Design",
      "Responsive Design",
      "Component-Based Architecture",
      "Git Workflow",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "AdDU QPI Calculator",
    description:
      "A web application that helps Ateneo de Davao University students calculate, track, and simulate their Quality Point Index (QPI). It features curriculum presets, academic progress tracking, and grade planning tools to help students achieve their target QPI.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Zustand"
    ],
    features: [
      "Calculate semester and cumulative QPI using official AdDU grading rules",
      "Track academic progress with curriculum presets and custom study plans",
      "What-If QPI simulator for forecasting grades and target academic outcomes",
    ],
    links: {
      github: "https://github.com/yourusername/addu-qpi-calculator",
      demo: "https://addu-qpi.vercel.app",
      album: "",
    },
  },
  {
    title: "Date Spots",
    description:
      "A location-based discovery platform that helps users find and explore recommended date destinations through interactive maps, curated place information, and location-based browsing.",
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Maps API"
    ],
    features: [
      "Interactive map interface with location markers for date destinations",
      "Place preview cards with details, categories, and recommendations",
      "Location-based discovery experience for exploring nearby spots",
    ],
    links: {
      github: "https://github.com/yourusername/date-spots",
      demo: "",
      album: "",
    },
  },
  {
    title: "MuniMuni Resort Management System",
    description:
      "A full-stack resort management platform designed to streamline reservations, guest management, and administrative operations. The system provides tools for managing accommodations, bookings, front desk workflows, and resort resources through a centralized dashboard.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Express.js"
    ],
    features: [
      "Online booking and reservation management for guests",
      "Admin dashboard for accommodations, guests, and operational management",
      "Centralized management of rooms, cottages, packages, inventory, and transactions",
    ],
    links: {
      github: "https://github.com/yourusername/munimuni-resort",
      demo: "",
      album: "",
    },
  },
  {
    title: "TruthLayer",
    description:
      "An AI-powered misinformation detection platform that analyzes online content and estimates its credibility using natural language processing and machine learning. Built during a hackathon to help users identify potentially misleading information.",
    tech: [
      "TypeScript",
      "Python",
      "FastAPI",
      "scikit-learn",
      "OpenAI",
      "Pinecone",
      "Tailwind CSS",
      "Docker"
    ],
    features: [
      "AI-powered credibility analysis for articles and social media content",
      "Chrome extension integration for real-time Facebook post analysis",
      "Retrieval-augmented verification using vector search and trusted knowledge sources",
    ],
    links: {
      github: "https://github.com/khenshi/MJKTeam1-TruthLayer",
      demo: "",
      album: "https://drive.google.com/file/d/184efcM5xcEJGrqbDCaqBONFXMAxTZQ4x/view?fbclid=IwY2xjawTLNMZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeE_E7pYmCIubWL8P03DvGXLFpL_UdlgTH_axH49G3Ni1PPAP3DGVp5fdbuaM_aem_rACZhjlmrulMdkSnbqMhCQ&pli=1",
    },
  },
  {
    title: "Point of Sale (POS) System",
    description:
      "A desktop-based point-of-sale system developed in Java for a school project, designed to manage sales transactions, inventory, and user accounts through an intuitive interface for cashiers and administrators.",
    tech: [
      "Java",
      "Java Swing",
      "SQLite",
      "JDBC"
    ],
    features: [
      "Role-based user authentication and account management",
      "Product and inventory management with CRUD operations",
      "Sales processing with receipt generation and transaction history",
    ],
    links: {
      github: "https://github.com/khenshi/POS_ENHANCED",
      demo: "",
      album: "https://drive.google.com/drive/folders/1Sg7kPdaU29_zzIm1pgSXAYxPA6RYsxlv?usp=share_link",
    },
  },
  {
  title: "Enrollment Management System",
  description:
    "A desktop-based enrollment management system developed in Java that streamlines student record management and enrollment workflows while demonstrating core database operations through a MySQL backend.",
  tech: [
    "Java",
    "Java Swing",
    "MySQL",
    "JDBC"
  ],
  features: [
    "Student enrollment and record management with full CRUD functionality",
    "Course and section management with MySQL database integration",
    "Search, filter, and update student information through a user-friendly interface",
  ],
  links: {
    github: "https://github.com/khenshi/HinlogESystem7/settings",
    demo: "",
    album: "",
  },
},
];

export const experience: ExperienceItem[] = [
  {
    role: "Software Tester",
    company: "Blackbox.ai",
    period: "2024 — 2025",
    bullets: [
      "Designed and executed manual and automated test cases for web applications to improve software quality and reduce regressions.",
      "Collaborated with engineers to identify, reproduce, and resolve bugs while validating new features before release.",
      "Documented test results and provided actionable feedback to improve product reliability and user experience.",
    ],
  },
  {
    role: "BS Computer Science",
    company: "Ateneo de Davao University",
    period: "2024 — Present",
    bullets: [
      "Studying core computer science topics including algorithms, data structures, software engineering, databases, and artificial intelligence.",
      "Building full-stack and AI-powered applications through academic projects and personal portfolio work.",
      "Collaborating on team projects while strengthening software design, problem-solving, and communication skills.",
    ],
  },
];

export const certificates: Certificate[] = [
  {
    title: "Learn React",
    issuer: "Scrimba",
    date: "2026",
    credentialUrl: "https://scrimba.com/@khenisawsomeza:certs;cert24zAwPPowNTBxVhVdUuEzeUS1mCGoygZykct8",
  },
  {
    title: "Advance React",
    issuer: "Scrimba",
    date: "2026",
    credentialUrl: "https://scrimba.com/@khenisawsomeza:certs;cert2JbLs3qgAygbMwfjN2BCt3xPK9bHLMQDw2LCeq",
  },
  {
    title: "Learn Node.js",
    issuer: "Scrimba",
    date: "2026",
    credentialUrl: "https://scrimba.com/@khenisawsomeza:certs;cert2ffentAFMakffWbgTExAkCbShGmN1sc2x24icYUZttaz3r"
  },
  {
    title: "Associate AI Engineer for Developeres",
    issuer: "DataCamp",
    date: "2026",
    credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/track/638d5e6c3357fe105aaf4f9652295a52b81f4c77?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa",
  },
  {
    title: "Model Context Protocol: Advanced Topics",
    issuer: "DataCamp",
    date: "2026",
    credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/course/c5ad3e3515454f44ac7b6564b72a2ebe9e3c47af"    
  },
  {
    title: "OpenxAI Coding Session",
    issuer: "OpenxAI",
    date: "2025",
    credentialUrl: "https://explorer.certifika.org/token/BASE-938",
  },
  {
    title: "Legacy Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2025",
    credentialUrl: "https://freecodecamp.org/certification/khenshi/responsive-web-design",
  },
  {
    title: "JavaScript",
    issuer: "freeCodeCamp",
    date: "2026",
    credentialUrl: "https://www.freecodecamp.org/certification/khenshi/javascript-v9"
  }
];
