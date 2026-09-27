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
  ],
  links: {
    github: "https://github.com/khenshi/MJKTeam1-TruthLayer",
    demo: "",
    album: "https://drive.google.com/file/d/184efcM5xcEJGrqbDCaqBONFXMAxTZQ4x/view?fbclid=IwY2xjawTLNMZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeE_E7pYmCIubWL8P03DvGXLFpL_UdlgTH_axH49G3Ni1PPAP3DGVp5fdbuaM_aem_rACZhjlmrulMdkSnbqMhCQ&pli=1",
  },
  note: "hackathon top 6",
};
