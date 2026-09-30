export type SkillGroup = {
  title: string;
  items: string[];
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
  icon?: string;
  credentialId?: string;
  credentialUrl?: string;
};

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
];

export const experience: ExperienceItem[] = [
  {
    role: "Full-stack Developer",
    company: "SAMAHAN Systems Development",
    period: "2026 — Present",
    bullets: [
      "Contributing to the development and maintenance of digital systems for the university's student organization.",
      "Building dependable web features while collaborating with other student developers and organization stakeholders.",
    ],
  },
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
    icon: "/icons/scrimba.svg",
    credentialUrl: "https://scrimba.com/@khenisawsomeza:certs;cert24zAwPPowNTBxVhVdUuEzeUS1mCGoygZykct8",
  },
  {
    title: "Advance React",
    issuer: "Scrimba",
    date: "2026",
    icon: "/icons/scrimba.svg",
    credentialUrl: "https://scrimba.com/@khenisawsomeza:certs;cert2JbLs3qgAygbMwfjN2BCt3xPK9bHLMQDw2LCeq",
  },
  {
    title: "Learn Node.js",
    issuer: "Scrimba",
    date: "2026",
    icon: "/icons/scrimba.svg",
    credentialUrl: "https://scrimba.com/@khenisawsomeza:certs;cert2ffentAFMakffWbgTExAkCbShGmN1sc2x24icYUZttaz3r"
  },
  {
    title: "Associate AI Engineer for Developeres",
    issuer: "DataCamp",
    date: "2026",
    icon: "/icons/datacamp.svg",
    credentialUrl: "https://www.datacamp.com/completed/statement-of-accomplishment/track/638d5e6c3357fe105aaf4f9652295a52b81f4c77?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa",
  },
  {
    title: "Model Context Protocol: Advanced Topics",
    issuer: "DataCamp",
    date: "2026",
    icon: "/icons/datacamp.svg",
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
    icon: "/icons/freecodecamp.svg",
    credentialUrl: "https://freecodecamp.org/certification/khenshi/responsive-web-design",
  },
  {
    title: "JavaScript",
    issuer: "freeCodeCamp",
    date: "2026",
    icon: "/icons/freecodecamp.svg",
    credentialUrl: "https://www.freecodecamp.org/certification/khenshi/javascript-v9"
  }
];
