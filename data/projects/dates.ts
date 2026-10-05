import type { Project } from "./types";

export const dates: Project = {
  slug: "dates",
  title: "Dates",
  cardSummary: "Discover date destinations through interactive maps and curated recommendations.",
  status: "In Development",
  timeline: "",
  description: "A location-based discovery platform that helps users find and explore recommended date destinations through interactive maps, curated place information, and location-based browsing.",
  tech: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Maps API",
    "PostgreSQL",
  ],
  features: [
    "Interactive map interface with location markers for date destinations",
    "Place preview cards with details, categories, and recommendations",
    "Location-based discovery experience for exploring nearby spots",
    "Browse destination details alongside their map locations",
    "Use curated recommendations to narrow down places to explore",
  ],
  links: {
    github: "https://github.com/yourusername/date-spots",
    demo: "https://davaodates.vercel.app",
    album: "",
  },
  note: "ongoing",
  role: "",
  // Editable draft inferred from the existing project description, features, and tech stack.
  caseStudy: {
    overview:
      "Dates helps people discover places for a date through a map and curated destination information. It brings nearby browsing and place recommendations together so users can explore options in context.",
    approach:
      "The Next.js interface pairs map-based browsing with place previews, while location and destination data support discovery. PostgreSQL provides a structured place to organize destinations and their categories.",
    problem: "",
    background: "",
    solution: "",
    technicalDecisions: [
      "Keep destination details available in place previews so users can assess options without losing map context.",
      "Use location as the primary way to explore nearby recommendations.",
      "Store destination information in a structured format that can support categories and recommendations.",
    ],
    gallery: [],
  },
  thumbnail: {
    src: "/images/dates.webp",
    alt: "Screenshot of the Dates application interface",
    caption: "",
  },
};
