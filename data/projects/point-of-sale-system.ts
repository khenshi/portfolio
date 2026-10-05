import type { Project } from "./types";

export const pointOfSaleSystem: Project = {
  slug: "point-of-sale-system",
  title: "Point of Sale (POS) System",
  cardSummary: "Manage sales, inventory, and user accounts in a Java desktop app.",
  description: "A desktop-based point-of-sale system developed in Java for a school project, designed to manage sales transactions, inventory, and user accounts through an intuitive interface for cashiers and administrators.",
  tech: [
    "Java",
    "Java Swing",
    "SQLite",
    "JDBC"
  ],
  features: [
    "Role-based user authentication and account management",
    "Product and inventory management with CRUD operations",
    "Sales processing with receipt generation and transaction history",
    // Draft feature entries inferred from the existing description and feature set.
    "Review completed transactions through sales history",
    "Manage cashier and administrator accounts with role-based access",
  ],
  links: {
    github: "https://github.com/khenshi/POS_ENHANCED",
    demo: "",
    album: "https://drive.google.com/drive/folders/1Sg7kPdaU29_zzIm1pgSXAYxPA6RYsxlv?usp=share_link",
  },
  status: "",
  timeline: "",
  note: "",
  role: "",
  // Editable draft inferred from the existing project description, features, and tech stack.
  caseStudy: {
    overview:
      "The Point of Sale System is a Java desktop application for processing sales and managing products, inventory, and user accounts. It supports cashier and administrator workflows with receipts and a searchable transaction history.",
    approach:
      "A Java Swing interface connects through JDBC to a SQLite database for account, product, inventory, and sales records. The desktop workflow brings transaction processing and record management into a single application.",
    problem: "",
    background: "",
    solution: "",
    technicalDecisions: [
      "Use SQLite for persistent application records in the desktop project.",
      "Separate cashier and administrator access through role-based accounts.",
      "Keep receipt generation and transaction history connected to sales processing for later review.",
    ],
    gallery: [],
  },
  thumbnail: {
    src: "/images/POS.webp",
    alt: "Screenshot of the Point of Sale System application interface",
    caption: "",
  },
};
