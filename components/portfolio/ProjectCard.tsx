import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/portfolio";
import { ProjectMedia } from "@/components/portfolio/ProjectMedia";

type ProjectCardProps = {
  project: Project;
  variant: "overview" | "directory";
};

export function ProjectCard({ project, variant }: ProjectCardProps) {
  const technologyLimit = variant === "overview" ? 4 : 5;
  const preview = project.thumbnail ?? project.caseStudy?.gallery?.[0];

  return (
    <Link
      className={`project-card project-card-${variant}`}
      href={`/projects/${project.slug}`}
      aria-label={`View ${project.title} project`}
    >
      <ProjectMedia
        image={preview}
        title={project.title}
        variant="card"
        sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
      />

      <div className="project-card-body">
        <h2>{project.title}</h2>
        <p className="project-card-description">{project.cardSummary}</p>
      </div>

      {variant === "directory" && (
        <dl className="project-card-meta">
          <div>
            <dt>My role</dt>
            <dd>{project.role ?? "Not provided"}</dd>
          </div>
          <div>
            <dt>Project status</dt>
            <dd className={project.status ? undefined : "is-unspecified"}>
              {project.status ?? "Not provided"}
            </dd>
          </div>
        </dl>
      )}

      <ul className="tech-list" aria-label={`${project.title} primary technologies`}>
        {project.tech.slice(0, technologyLimit).map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <span className="project-card-action">
        View Project <ArrowUpRight size={15} aria-hidden="true" />
      </span>
    </Link>
  );
}
