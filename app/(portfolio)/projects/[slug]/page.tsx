import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetail } from "@/components/portfolio/ProjectDetail";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return { title: "Project not found" };

  return {
    title: `${project.title} — Khenyshi Hinlog`,
    description: project.cardSummary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const projectIndex = projects.findIndex((item) => item.slug === slug);

  return (
    <ProjectDetail
      project={project}
      previousProject={projects[projectIndex - 1]}
      nextProject={projects[projectIndex + 1]}
    />
  );
}
