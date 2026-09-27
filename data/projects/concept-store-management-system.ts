import type { Project } from "./types";

export const conceptStoreManagementSystem: Project =
{
  slug: "concept-store-management-system",
  title: "Kapwesto — Concept Store Management System",
  cardSummary: "Manage merchants, retail spaces, inventory, and sales across store branches.",
  status: "In Development",
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
    background:
      "Concept stores operate differently from traditional retail stores because multiple independent merchants share the same store, spaces, inventory operations, and sales infrastructure. Kapwesto was created to centralize these workflows and give store owners a structured way to manage their operations.",

    approach:
      "I designed Kapwesto as a multi-tenant SaaS where each concept store is represented by an isolated organization. The system is structured around branches, members, merchants, spaces, agreements, products, inventory, sales, and financial records. Development follows a milestone-based approach, allowing each operational workflow to be designed and validated before expanding the platform.",

    outcomes: [
      "Built a multi-tenant architecture with organization-level data isolation.",
      "Developed merchant, branch, space, agreement, and inventory management workflows.",
      "Implemented auditable stock receiving, adjustment, and movement tracking.",
      "Designed POS and sales history workflows for multi-merchant transactions.",
      "Developed sales reporting for products, merchants, payment methods, and sales trends.",
      "Designed settlement, payout, and rent workflows for merchant financial management.",
    ],

    gallery: [
      {
        src: "/projects/kapwesto/dashboard.png",
        alt: "Kapwesto concept store management dashboard",
        caption: "Centralized overview of store operations",
      },
      {
        src: "/projects/kapwesto/merchants.png",
        alt: "Kapwesto merchant management page",
        caption: "Merchant, space, and agreement management",
      },
      {
        src: "/projects/kapwesto/inventory.png",
        alt: "Kapwesto inventory management page",
        caption: "Branch inventory and stock movement tracking",
      },
      {
        src: "/projects/kapwesto/pos.png",
        alt: "Kapwesto point-of-sale interface",
        caption: "Point-of-sale workflow for concept store transactions",
      },
      {
        src: "/projects/kapwesto/reports.png",
        alt: "Kapwesto sales reports dashboard",
        caption: "Sales trends and merchant performance reporting",
      },
    ],
  },
}
