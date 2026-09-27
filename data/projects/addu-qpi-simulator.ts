import type { Project } from "./types";

export const adduQpiSimulator: Project = {
  slug: "addu-qpi-simulator",
  title: "AdDU QPI Simulator",
  cardSummary: "Calculate QPI, track academic progress, and plan grades with curriculum presets.",
  featured: true,
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
  ],
  links: {
    github: "https://github.com/yourusername/addu-qpi-calculator",
    demo: "https://addu-qpi.vercel.app",
    album: "",
  },
};
