import type { Project } from "./types";

export const conceptStoreManagementSystem: Project = {
  slug: "concept-store-management-system",
  title: "Kapwesto — Concept Store Management System",

  cardSummary:
    "Manage merchants, inventory, sales, spaces, and finances across concept store branches.",

  status: "In Development",
  timeline: "2026 – Present",

  description:
    "A multi-tenant SaaS platform built for concept stores to manage merchants, retail spaces, inventory, sales, agreements, and financial operations across multiple branches.",

  tech: [
    "Next.js",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "Prisma",
  ],

  features: [
    "Multi-tenant organizations, branches, and role-based access",
    "Merchant, retail space, and business agreement management",
    "Branch-level inventory with auditable stock movement tracking",
    "Point-of-sale, sales history, and performance reporting",
    "Merchant settlements, payouts, commissions, and rent tracking",
  ],

  links: {
    github: "",
    demo: "",
    album: "",
  },

  note:
    "",

  role: "Full-Stack Developer & System Designer",

  caseStudy: {
    overview:
      "Kapwesto is a multi-tenant management platform designed for concept stores where multiple independent merchants operate within shared retail locations. It centralizes merchant management, spaces, inventory, sales, reporting, and financial operations while supporting multiple branches and different staff roles.",

    problem:
      "Concept stores have more complex operations than traditional retail stores because multiple merchants share the same store, sales infrastructure, and inventory processes. Managing merchant agreements, stock, sales attribution, rent, commissions, and payouts across these merchants can quickly become difficult to track.",

    background:
      "Kapwesto was created to explore a centralized system specifically designed around the operating model of concept stores rather than adapting a traditional retail or POS system to fit their workflows.",

    solution:
      "I designed Kapwesto as an integrated platform where store owners and staff can manage merchants, spaces, agreements, inventory, sales, and financial settlements while keeping records organized by organization and branch.",

    approach:
      "The system is structured around organizations and branches, with connected modules for merchants, agreements, products, inventory, POS, reporting, and finance. The backend enforces business rules and data isolation while the frontend provides role-specific workflows for daily store operations.",

    technicalDecisions: [
      "Use organization and branch scoping to support multi-tenancy and isolate business data.",
      "Record inventory changes as immutable movements for traceability and auditing.",
      "Connect sales to merchants and products to support accurate reporting and settlements.",
      "Separate operational sales data from settlement workflows for clearer financial reconciliation.",
      "Design modules independently while keeping shared business relationships consistent across the system.",
    ],

    gallery: [],
  },

  thumbnail: {
    src: "/images/kapwesto.webp",
    alt: "Kapwesto concept store management dashboard",
    caption: "Multi-branch concept store management dashboard",
  },
};
