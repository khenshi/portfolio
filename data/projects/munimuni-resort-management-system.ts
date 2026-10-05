import type { Project } from "./types";

export const munimuniResortManagementSystem: Project = {
  slug: "munimuni-resort-management-system",
  title: "MuniMuni Resort Management System",

  cardSummary:
    "Manage resort bookings, payments, guests, and front desk operations through a centralized platform.",

  status: "In Development",
  timeline: "2025 – Present",

  description:
    "A full-stack resort management platform that streamlines reservations, payments, front desk operations, accommodations, and resort resources through dedicated guest and staff applications.",

  tech: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "NestJS",
    "Prisma",
    "PostgreSQL",
  ],

  features: [
    "Online reservations with full-payment and downpayment options",
    "Payment submission, verification, and payment history tracking",
    "Front desk workflows for reservations, walk-ins, and check-ins",
    "Accommodation, packages, extras, and resort resource management",
    "Equipment rental management integrated with guest payments",
  ],

  links: {
    github: "https://github.com/yourusername/munimuni-resort",
    demo: "https://munimuni-resort.vercel.app",
    album: "",
  },

  note:
    "",

  role: "Full-Stack Developer",

  caseStudy: {
    overview:
      "MuniMuni Resort Management System is a full-stack platform that connects online guest booking with day-to-day resort operations. It uses separate guest and staff applications powered by a shared backend, supporting reservations, payments, front desk workflows, accommodations, extras, and equipment rentals.",

    problem:
      "Managing reservations, payments, guest information, and resort resources across separate processes can make front desk operations difficult and lead to inconsistent records.",

    background:
      "The project was developed as a team-based system focused on digitizing both the guest reservation experience and the internal workflows required to operate a resort.",

    solution:
      "The system provides guests with a dedicated booking and payment experience while giving resort staff a separate application for managing reservations, payments, walk-ins, check-ins, and resort resources.",

    approach:
      "The architecture consists of two Next.js frontends: one for guests and another for staff and administrators. Both communicate with a shared NestJS backend that centralizes business rules, authentication, reservations, payments, availability, and resource management.",

    technicalDecisions: [
      "Separate guest and staff experiences into independent Next.js applications.",
      "Use a shared NestJS backend for APIs and centralized business logic.",
      "Connect reservation availability with payment verification and booking status.",
      "Maintain payment history for downpayments, balances, and additional charges.",
      "Use PostgreSQL and Prisma for shared relational operational data.",
    ],

    gallery: [],
  },

  thumbnail: {
    src: "/images/munimuni.webp",
    alt: "MuniMuni Resort Management System dashboard",
    caption: "Centralized resort reservation and operations management",
  },
};
