import type { Project } from "./types";

export const pointOfSaleSystem: Project = {
  slug: "point-of-sale-system",
  title: "Point of Sale (POS) System",

  cardSummary:
    "Process sales and manage products, inventory, and users through a Java desktop application.",

  description:
    "A Java desktop point-of-sale system developed as a school project for managing sales transactions, products, inventory, and user accounts through dedicated cashier and administrator workflows.",

  tech: [
    "Java",
    "Java Swing",
    "SQLite",
    "JDBC",
  ],

  features: [
    "Role-based authentication for cashiers and administrators",
    "Product and inventory management with CRUD operations",
    "Sales processing with automatic transaction recording",
    "Receipt generation for completed purchases",
    "Transaction history for reviewing previous sales",
  ],

  links: {
    github: "https://github.com/khenshi/POS_ENHANCED",
    demo: "",
    album:
      "",
  },

  status: "Completed",
  timeline: "2025",

  note:
    "",

  role: "Developer",

  caseStudy: {
    overview:
      "The Point of Sale System is a Java desktop application built to simulate common retail operations such as processing purchases, managing products and inventory, generating receipts, and reviewing sales records. It provides separate workflows for cashiers and administrators within a single application.",

    problem:
      "Retail transactions require an organized way to process purchases while keeping product, inventory, user, and transaction records consistent.",

    background:
      "The system was developed as a school project to apply object-oriented programming, desktop interface development, and relational database concepts to a practical application.",

    solution:
      "I developed a desktop POS application that combines sales processing, inventory management, user accounts, receipts, and transaction history into one system.",

    approach:
      "The application uses Java Swing for the desktop interface and JDBC to connect application logic with a SQLite database containing users, products, inventory, and transaction records.",

    technicalDecisions: [
      "Use Java Swing to build the desktop user interface.",
      "Use SQLite for lightweight local data persistence.",
      "Connect application logic and database operations through JDBC.",
      "Separate cashier and administrator capabilities using role-based access.",
      "Store completed sales for receipt generation and transaction history.",
    ],

    gallery: [],
  },

  thumbnail: {
    src: "/images/POS.webp",
    alt: "Java Point of Sale System desktop interface",
    caption: "Sales and inventory management desktop application",
  },
};