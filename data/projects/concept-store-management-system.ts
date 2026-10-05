import type { Project } from "./types";

export const conceptStoreManagementSystem: Project =
{
  slug: "concept-store-management-system",
  title: "Kapwesto — Concept Store Management System",
  cardSummary: "Manage merchants, retail spaces, inventory, and sales across store branches.",
  status: "In Development",
  timeline: "",
  description:
    "A multi-tenant SaaS platform designed to help concept stores manage merchants, retail spaces, inventory, sales, agreements, and financial operations across multiple branches.",

  tech: [
    "Next.js",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "Prisma",
  ],

  features: [
    "Multi-tenant organization and branch management with isolated business data",
    "Role-based access for owners, managers, and cashiers",
    "Merchant, retail space, and agreement management",
    "Branch-level product inventory with stock receiving and adjustments",
    "Auditable inventory movement history",
    "Point-of-sale and sales history workflows",
    "Sales reports with product, merchant, and payment method insights",
    "Merchant settlements, payouts, and rent tracking",
  ],

  links: {
    github: "",
    demo: "",
    album: "",
  },

  note:
    "Actively developed as a SaaS platform for multi-merchant concept stores.",

  role: "Full-Stack Developer & System Designer",

  caseStudy: {
    // Draft overview, approach, decisions, and challenges below are inferred from the existing description and features.
    overview:
      "Kapwesto is a multi-tenant platform for concept stores where independent merchants share branches, retail spaces, and store operations. It brings merchant agreements, inventory, point of sale, reporting, and financial workflows together for store teams.",

    background:
      "Concept stores operate differently from traditional retail stores because multiple independent merchants share the same store, spaces, inventory operations, and sales infrastructure. Kapwesto was created to centralize these workflows and give store owners a structured way to manage their operations.",

    approach:
      "Kapwesto is structured as a multi-tenant SaaS, with organizations containing branches, members, merchants, spaces, agreements, products, inventory, sales, and financial records. The Next.js and NestJS application uses PostgreSQL through Prisma to support those connected operational workflows.",
    problem: "",
    solution: "",

    technicalDecisions: [
      "Use organization and branch scope to keep each store's operational data separated.",
      "Track inventory movements as records so stock changes can be reviewed over time.",
      "Keep merchant, sales, and settlement records connected to support store reporting and reconciliation.",
    ],

    gallery: [],
  },
  thumbnail: {
    src: "/images/kapwesto.webp",
    alt: "Screenshot of the Kapwesto Concept Store Management System application interface",
    caption: "",
  },
};
