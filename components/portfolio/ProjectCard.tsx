import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/projects/types";
import { ProjectMedia } from "@/components/portfolio/ProjectMedia";

type ProjectCardProps = {
  project: Project;
  variant: "overview" | "directory";
};

export function ProjectCard({ project, variant }: ProjectCardProps) {
  const technologyLimit = variant === "overview" ? 4 : 5;
  const preview = project.thumbnail.src ? project.thumbnail : project.caseStudy.gallery[0];
  const imageSizes = variant === "overview"
    ? "(max-width: 760px) 82vw, (max-width: 1100px) 36vw, 24rem"
    : "(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw";

  return (
    <Link
      className={`group flex min-h-full min-w-0 flex-col border border-line bg-paper text-ink transition-[border-color,transform] duration-200 ease-in-out hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--accent)_45%,var(--line))] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-3 ${variant === "overview" ? "p-[.9rem]" : "p-[1.15rem]"}`}
      href={`/projects/${project.slug}`}
      aria-label={`View ${project.title} project`}
    >
      <ProjectMedia
        image={preview}
        title={project.title}
        variant="card"
        sizes={imageSizes}
      />

      <div className="min-w-0">
        <h2 className="m-[.15rem_0_0] text-[1.2rem] font-semibold leading-[1.2] tracking-[-.03em]">{project.title}</h2>
        <p className={`mt-2 overflow-hidden text-[.84rem] leading-[1.55] text-muted [display:-webkit-box] [-webkit-box-orient:vertical] ${variant === "overview" ? "[-webkit-line-clamp:1]" : "[-webkit-line-clamp:2]"}`}>{project.cardSummary}</p>
      </div>

      {variant === "directory" && (
        <dl className="mt-3 grid grid-cols-[minmax(0,1fr)_minmax(0,auto)] gap-[.6rem_.8rem] border-t border-line pt-3">
          <div className="min-w-0">
            <dt className="text-[.62rem] font-bold uppercase tracking-[.1em] text-muted">My role</dt>
            <dd className="mt-[.28rem] text-[.76rem] leading-[1.45]">{project.role || "Not provided"}</dd>
          </div>
          <div className="min-w-0">
            <dt className="text-[.62rem] font-bold uppercase tracking-[.1em] text-muted">Project status</dt>
            <dd className={`mt-[.28rem] text-[.76rem] leading-[1.45] ${project.status ? "" : "italic text-muted"}`}>
              {project.status || "Not provided"}
            </dd>
          </div>
        </dl>
      )}

      <ul className={`mt-[.6rem] flex flex-wrap gap-[.35rem] p-0 ${variant === "directory" ? "mt-3" : ""}`} aria-label={`${project.title} primary technologies`}>
        {project.tech.slice(0, technologyLimit).map((technology) => (
          <li className="border border-line px-[.48rem] py-[.32rem] text-[.63rem] leading-[1.2] text-muted" key={technology}>{technology}</li>
        ))}
      </ul>

      <span className="mt-auto flex items-center justify-between gap-[.6rem] pt-[.9rem] text-[.76rem] font-bold transition-colors group-hover:text-accent group-focus-visible:text-accent">
        View Project <ArrowUpRight size={15} aria-hidden="true" />
      </span>
    </Link>
  );
}
