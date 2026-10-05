export type ProjectGalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export type ProjectCaseStudy = {
  overview: string;
  problem: string;
  background: string;
  solution: string;
  approach: string;
  technicalDecisions: string[];
  gallery: ProjectGalleryImage[];
};

export type Project = {
  slug: string;
  title: string;
  cardSummary: string;
  description: string;
  tech: string[];
  features: string[];
  links: {
    github: string;
    demo: string;
    album: string;
  };
  status: string;
  timeline: string;
  thumbnail: ProjectGalleryImage;
  note: string;
  role: string;
  caseStudy: ProjectCaseStudy;
};
