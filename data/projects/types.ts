export type ProjectGalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectChallenge = {
  challenge: string;
  solution: string;
};

export type ProjectCaseStudy = {
  overview?: string;
  problem?: string;
  background?: string;
  solution?: string;
  approach?: string;
  technicalDecisions?: string[];
  challengesAndSolutions?: ProjectChallenge[];
  outcomes?: string[];
  learnings?: string[];
  futureImprovements?: string[];
  gallery?: ProjectGalleryImage[];
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
  featured?: boolean;
  status?: string;
  timeline?: string;
  thumbnail?: ProjectGalleryImage;
  note?: string;
  role?: string;
  caseStudy?: ProjectCaseStudy;
};
