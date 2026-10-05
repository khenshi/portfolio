import type { Project } from "./types";

export const dates: Project = {
  slug: "dates",
  title: "Dates",

  cardSummary:
    "Discover date destinations through interactive maps and curated local recommendations.",

  status: "In Development",
  timeline: "2026 – Present",

  description:
    "A location-based discovery platform that helps users find date destinations through interactive maps, curated recommendations, and detailed place information.",

  tech: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Maps API",
    "PostgreSQL",
  ],

  features: [
    "Interactive map for exploring date destinations",
    "Location-based discovery of nearby places",
    "Curated recommendations across different date categories",
    "Place previews with useful destination information",
    "Detailed destination pages connected to map locations",
  ],

  links: {
    github: "https://github.com/yourusername/date-spots",
    demo: "https://davaodates.vercel.app",
    album: "",
  },

  note:
    "",

  role: "Full-Stack Developer & UI/UX Designer",

  caseStudy: {
    overview:
      "Dates is a location-based discovery platform designed to make finding places for dates easier and more engaging. It combines interactive map exploration with curated recommendations and destination information, allowing users to discover nearby places and compare options without jumping between multiple platforms.",

    problem:
      "Finding a good place for a date often involves searching across maps, social media, and recommendation posts, making it difficult to quickly discover suitable options in one place.",

    background:
      "Dates started from the idea of creating a dedicated discovery experience for local date destinations instead of relying on general-purpose mapping and search platforms.",

    solution:
      "I built a map-centered platform where users can explore curated date destinations, view useful place information, and discover options based on location and category.",

    approach:
      "The experience is centered around an interactive map connected to structured destination data. Place previews and detailed views provide additional context while keeping location at the center of the discovery process.",

    technicalDecisions: [
      "Use map-based exploration as the primary discovery experience.",
      "Organize destinations into structured categories for easier browsing.",
      "Connect map markers with place previews and detailed destination information.",
      "Store destination data in PostgreSQL for structured and scalable management.",
      "Keep discovery and place information within the same flow to reduce unnecessary navigation.",
    ],

    gallery: [],
  },

  thumbnail: {
    src: "/images/dates.webp",
    alt: "Dates map showing recommended date destinations",
    caption: "Map-based discovery of local date destinations",
  },
};
