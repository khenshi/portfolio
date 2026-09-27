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
  ],
  links: {
    github: "https://github.com/khenshi/POS_ENHANCED",
    demo: "",
    album: "https://drive.google.com/drive/folders/1Sg7kPdaU29_zzIm1pgSXAYxPA6RYsxlv?usp=share_link",
  },
};
