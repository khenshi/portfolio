import type { Project } from "./types";

export const truthLayer: Project = {
  slug: "truthlayer",
  title: "TruthLayer",

  cardSummary:
    "Analyze online content and surface supporting context with an AI-assisted misinformation detection tool.",

  status: "Completed",
  timeline: "2025",

  description:
    "An AI-assisted misinformation detection platform that analyzes online content and provides credibility estimates with supporting context using machine learning, natural language processing, and retrieval-based verification.",

  tech: [
    "TypeScript",
    "Python",
    "FastAPI",
    "scikit-learn",
    "OpenAI",
    "Pinecone",
    "Tailwind CSS",
    "Docker",
  ],

  features: [
    "AI-assisted credibility analysis for online content",
    "Chrome extension for analyzing Facebook posts while browsing",
    "Machine learning classification for misinformation detection",
    "Retrieval-augmented verification using vector search",
    "Supporting context and references alongside credibility estimates",
  ],

  links: {
    github: "https://github.com/khenshi/MJKTeam1-TruthLayer",
    demo: "",
    album:
      "",
  },

  note:
    "Top 6 hackathon project",

  role: "Full-Stack & AI Developer",

  caseStudy: {
    overview:
      "TruthLayer is an AI-assisted misinformation detection platform built during a hackathon to help users evaluate questionable online content. Through a browser extension, users can analyze posts while browsing and receive credibility estimates supported by retrieved reference material and contextual information.",

    problem:
      "Misleading information spreads quickly through social platforms, while verifying claims often requires users to manually search for reliable sources and compare information across multiple websites.",

    background:
      "TruthLayer was developed during a hackathon exploring how AI and machine learning could make credibility checking more accessible within a user's normal browsing experience. The project advanced to the Top 6.",

    solution:
      "We built a browser-based workflow that captures online content and sends it to an analysis service that combines machine learning, AI, and retrieved reference material to provide additional context for evaluating a claim.",

    approach:
      "A Chrome extension handles content capture while a FastAPI backend performs the analysis. Machine learning and AI components process the content, while Pinecone vector search retrieves relevant reference material that can support the resulting credibility assessment.",

    technicalDecisions: [
      "Separate the Chrome extension from the AI analysis service through a FastAPI backend.",
      "Use machine learning and NLP to analyze textual content.",
      "Use vector search to retrieve contextual reference material.",
      "Present credibility as an estimate rather than a definitive truth label.",
      "Containerize application services with Docker for consistent deployment.",
    ],

    gallery: [],
  },

  thumbnail: {
    src: "/images/truthlayer.webp",
    alt: "TruthLayer AI-assisted misinformation detection interface",
    caption: "AI-assisted credibility analysis for online content",
  },
};
