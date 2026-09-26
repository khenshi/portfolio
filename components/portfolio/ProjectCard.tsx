import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
  index: number;
  showFeatures?: boolean;
};

export function ProjectCard({ project, index, showFeatures = true }: ProjectCardProps) {
  const githubIsReal = project.links.github.includes("github.com/khenshi/");

  return (
    <article className="project-card">
      <div className="project-card-topline">
        <span className="project-card-index">{String(index + 1).padStart(2, "0")}</span>
        {project.note && <span className="project-note">{project.note}</span>}
      </div>
      <div className="project-card-body">
        <h2>{project.title}</h2>
        <p className="project-card-description">{project.description}</p>
        {project.role && <p className="project-card-role">{project.role}</p>}
        {showFeatures && project.features.length > 0 && (
          <ul className="project-feature-list">
            {project.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        )}
        <ul className="tech-list" aria-label={`${project.title} technologies`}>
          {project.tech.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </div>
      <div className="project-card-links" aria-label={`${project.title} links`}>
        {project.links.demo && (
          <Link href={project.links.demo} target="_blank" rel="noreferrer">
            Live site <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        )}
        {githubIsReal && (
          <Link href={project.links.github} target="_blank" rel="noreferrer">
            Source <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        )}
        {!project.links.demo && project.links.album && (
          <Link href={project.links.album} target="_blank" rel="noreferrer">
            Project album <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}
