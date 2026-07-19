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
  title: "Smart Study App",
  description:
    "An AI-powered study management web app that helps students focus, retain information, and study efficiently through active recall and behavior-driven planning.",
  tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Vercel"],
  features: [
    "AI-driven study scheduling with spaced repetition",
    "Built-in focus mode for deep, distraction-free sessions",
    "Learning analytics to track mastery and weak areas",
  ],
  links: {
    github: "https://github.com/khenisawsomeza/smart-app",
    demo: "https://smart-study25.vercel.app",
  },
},
  {
    title: "Word Guessing Game",
    description: "A word guessing game inspired by Wordle, where players have ten attempts to guess a hidden five-letter word with feedback provided after each guess.",
    tech: ["React", "CSS"],
    features: [
      "Dynamic feedback on letter accuracy and positioning",
      "Keyboard input support for seamless gameplay",
      "Responsive design for optimal experience across devices",
    ],
    links: {
      github: "https://github.com/khenisawsomeza/guessing-game",
      demo: "https://guessing-game-hinlog.vercel.app/",
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
