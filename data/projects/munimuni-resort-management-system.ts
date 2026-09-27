import type { Project } from "./types";

export const munimuniResortManagementSystem: Project = {
  slug: "munimuni-resort-management-system",
  title: "MuniMuni Resort Management System",
  cardSummary: "Manage resort reservations, guests, and resources from a centralized dashboard.",
  featured: true,
  status: "In Development",
  description: "A full-stack resort management platform designed to streamline reservations, guest management, and administrative operations. The system provides tools for managing accommodations, bookings, front desk workflows, and resort resources through a centralized dashboard.",
  tech: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Prisma",
    "PostgreSQL",
    "Express.js"
  ],
  features: [
    "Online booking and reservation management for guests",
    "Admin dashboard for accommodations, guests, and operational management",
    "Centralized management of rooms, cottages, packages, inventory, and transactions",
    // Draft feature entries inferred from the existing description and feature set.
    "Coordinate guest and front desk workflows from a central dashboard",
    "Manage resort resources alongside reservation records",
  ],
  links: {
    github: "https://github.com/yourusername/munimuni-resort",
    demo: "https://munimuni-resort.vercel.app",
    album: "",
  },
  note: "ongoing",
  // Editable draft inferred from the existing project description, features, and tech stack.
  caseStudy: {
    overview:
      "MuniMuni Resort Management System brings guest reservations, accommodation management, and resort administration into a centralized platform. It is intended to help guests book stays while giving staff one place to manage bookings and resort resources.",
    approach:
      "The platform pairs a Next.js and TypeScript application with an Express.js service and a PostgreSQL data model managed through Prisma. Guest booking and administrative workflows share the resort's accommodation and reservation records.",
    technicalDecisions: [
      "Keep guest booking and staff administration as distinct workflows over shared reservation data.",
      "Use a relational database model for reservations, guests, accommodations, and resort resources.",
      "Centralize operational views so staff can manage bookings and resources from the dashboard.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Reservations and accommodation availability depend on the same underlying information.",
        solution: "Connect booking and administration workflows to shared reservation and resource records.",
      },
      {
        challenge: "Front desk tasks span guests, accommodations, packages, and transactions.",
        solution: "Bring these operational records together through a centralized management dashboard.",
      },
    ],
  },
  thumbnail: {
    src: "/images/munimuni.webp",
    alt: "Screenshot of the MuniMuni Resort Management System application interface",
  },
};
