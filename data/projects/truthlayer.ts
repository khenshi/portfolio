import type { Project } from "./types";

export const truthLayer: Project = {
  slug: "truthlayer",
  title: "TruthLayer",
  cardSummary: "Analyze online content for credibility with an AI-powered misinformation detector.",
  featured: true,
  description: "An AI-powered misinformation detection platform that analyzes online content and estimates its credibility using natural language processing and machine learning. Built during a hackathon to help users identify potentially misleading information.",
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
    // Draft feature entries inferred from the existing description and feature set.
    "Analyze online content through a browser extension workflow",
    "Use retrieved reference material to provide context for credibility estimates",
  ],
  links: {
    github: "https://github.com/khenshi/MJKTeam1-TruthLayer",
    demo: "",
    album: "https://drive.google.com/file/d/184efcM5xcEJGrqbDCaqBONFXMAxTZQ4x/view?fbclid=IwY2xjawTLNMZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeE_E7pYmCIubWL8P03DvGXLFpL_UdlgTH_axH49G3Ni1PPAP3DGVp5fdbuaM_aem_rACZhjlmrulMdkSnbqMhCQ&pli=1",
  },
  note: "hackathon top 6",
  // Editable draft inferred from the existing project description, features, and tech stack.
  caseStudy: {
    overview:
      "TruthLayer explores how AI can help people assess online claims. Built during a hackathon, it analyzes articles and social posts, then uses retrieved reference material to provide a credibility estimate with additional context.",
    approach:
      "A Chrome extension sends content for analysis to a Python API built with FastAPI. The analysis combines machine-learning and OpenAI capabilities with Pinecone vector search to retrieve relevant reference material.",
    technicalDecisions: [
      "Keep browser capture separate from the Python analysis service through an API boundary.",
      "Use vector search to retrieve contextual reference material for an analyzed claim.",
      "Present credibility as an estimate to support review rather than a definitive truth label.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Online content needs analysis without interrupting the browsing workflow.",
        solution: "Connect the browser extension to a separate service for content analysis.",
      },
      {
        challenge: "A credibility estimate is more useful when readers can inspect supporting context.",
        solution: "Use retrieval-augmented verification to surface related trusted knowledge sources.",
      },
    ],
  },
};
