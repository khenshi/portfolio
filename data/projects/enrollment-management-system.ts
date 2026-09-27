import type { Project } from "./types";

export const enrollmentManagementSystem: Project = {
  slug: "enrollment-management-system",
  title: "Enrollment Management System",
  cardSummary: "Manage student records and enrollment workflows with a MySQL backend.",
  description: "A desktop-based enrollment management system developed in Java that streamlines student record management and enrollment workflows while demonstrating core database operations through a MySQL backend.",
  tech: [
    "Java",
    "Java Swing",
    "MySQL",
    "JDBC"
  ],
  features: [
    "Student enrollment and record management with full CRUD functionality",
    "Course and section management with MySQL database integration",
    "Search, filter, and update student information through a user-friendly interface",
    // Draft feature entries inferred from the existing description and feature set.
    "Review enrollment records from a desktop interface",
    "Persist student and course data in a MySQL database",
  ],
  links: {
    github: "https://github.com/khenshi/HinlogESystem7/settings",
    demo: "",
    album: "",
  },
  // Editable draft inferred from the existing project description, features, and tech stack.
  caseStudy: {
    overview:
      "The Enrollment Management System is a Java desktop application for organizing student records and enrollment workflows. It brings student, course, and section management together with database-backed search and updates.",
    approach:
      "The application uses Java Swing for its desktop interface and JDBC to connect the enrollment workflows to MySQL. Student, course, and section operations are presented through a shared interface for maintaining and finding records.",
    technicalDecisions: [
      "Use MySQL as the persistent source for student, course, and section records.",
      "Keep database access behind JDBC so the Swing interface can issue database operations through a consistent connection layer.",
      "Provide search and filtering alongside record updates to make stored information easier to find.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Enrollment work spans student records as well as courses and sections.",
        solution: "Bring those related management tasks into one desktop workflow backed by MySQL.",
      },
      {
        challenge: "Users need to locate existing student information before changing it.",
        solution: "Include search and filtering with the record management actions.",
      },
    ],
  },
};
