import type { Project } from "./types";

export const adduQpiSimulator: Project = {
  slug: "addu-qpi-simulator",
  title: "AdDU QPI Simulator",
  cardSummary: "Calculate QPI, track academic progress, and plan grades with curriculum presets.",
  description: "A web application that helps Ateneo de Davao University students calculate, track, and simulate their Quality Point Index (QPI). It features curriculum presets, academic progress tracking, and grade planning tools to help students achieve their target QPI.",
  tech: [
    "Next.js",
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
    "Compare projected grades against a target QPI",
    "Organize course plans around a selected curriculum",
  ],
  links: {
    github: "https://github.com/yourusername/addu-qpi-calculator",
    demo: "https://addu-qpi.vercel.app",
    album: "",
  },
  timeline: "",
  note: "",
  role: "",
  // Editable draft inferred from the existing project description, features, and tech stack.
  caseStudy: {
    overview:
      "AdDU QPI Simulator helps Ateneo de Davao University students understand their academic standing and plan toward a target QPI. It brings grade calculations, curriculum-based course planning, and what-if scenarios into one place.",
    approach:
      "The application combines a Next.js and TypeScript interface with persisted academic plans and client-side state for interactive grade scenarios. Curriculum and course data provide structure for calculations that follow the university's grading rules.",
    problem: "",
    background: "",
    solution: "",
    technicalDecisions: [
      "Keep QPI calculations tied to the stated AdDU grading rules so forecasts use a consistent basis.",
      "Represent curricula and courses as structured data to support presets and custom plans.",
      "Separate what-if grade changes from a student's saved plan so scenarios can be explored safely.",
    ],
    gallery: [],
  },
  thumbnail: {
    src: "/images/addu-qpi.webp",
    alt: "Screenshot of the AdDU QPI Simulator application interface",
    caption: "",
  },
  status: "Active development",
};
