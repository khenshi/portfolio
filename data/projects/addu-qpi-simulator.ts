import type { Project } from "./types";

export const adduQpiSimulator: Project = {
  slug: "addu-qpi-simulator",
  title: "AdDU QPI Simulator",

  cardSummary:
    "Calculate QPI, track academic progress, and simulate future grades using curriculum-based planning.",

  description:
    "An academic planning tool for Ateneo de Davao University students to calculate their QPI, track completed courses, and simulate future grades to plan toward academic goals.",

  tech: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
    "NextAuth",
    "Zustand",
  ],

  features: [
    "Calculate semester and cumulative QPI",
    "Track completed courses and overall academic progress",
    "Use curriculum presets or create custom study plans",
    "Simulate future grades with an interactive What-If QPI calculator",
    "Determine the grades needed to reach a target QPI",
  ],

  links: {
    github: "https://github.com/yourusername/addu-qpi-calculator",
    demo: "https://addu-qpi.vercel.app",
    album: "",
  },

  timeline: "2025 – Present",

  note:
    "",

  role: "Full-Stack Developer",

  caseStudy: {
    overview:
      "AdDU QPI Simulator is an academic planning tool designed for Ateneo de Davao University students to calculate and understand their QPI. It combines academic progress tracking, curriculum-based course planning, and What-If grade simulations in one place. Students can explore how future grades may affect their QPI and determine what they need to reach their academic goals.",
    
      problem:
      "Students often calculate their QPI manually and have limited ways to see how future grades could affect their academic standing or what grades they need to reach a target QPI.",

    background:
      "The project started as a personal QPI calculator and evolved into a broader academic planning tool that combines grade tracking, curriculum data, and QPI forecasting.",

    solution:
      "I built a centralized tool where students can record academic progress, organize courses by curriculum, calculate their current QPI, and experiment with future grade scenarios before committing them to their academic plan.",

    approach:
      "I structured the application around curricula, courses, academic records, and grade scenarios. Interactive simulations are handled separately from saved academic data so students can freely experiment without affecting their actual records.",

    technicalDecisions: [
      "Model curricula and courses as structured data to support different programs and study plans.",
      "Separate temporary What-If scenarios from persisted academic records.",
      "Use Zustand for responsive client-side simulation state.",
      "Use Prisma and PostgreSQL for persistent academic and curriculum data.",
      "Centralize QPI calculation logic to keep calculations consistent across the application.",
    ],

    gallery: [],
  },

  thumbnail: {
    src: "/images/addu-qpi.webp",
    alt: "AdDU QPI Simulator dashboard showing academic progress and QPI planning",
    caption: "QPI tracking and academic planning dashboard",
  },

  status: "Active development",
};
