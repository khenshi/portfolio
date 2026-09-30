import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";

import type { Project } from "@/data/projects/types";
import { ProjectMedia } from "@/components/portfolio/ProjectMedia";

type ProjectDetailProps = {
  project: Project;
  previousProject?: Project;
  nextProject?: Project;
};

type DetailSectionProps = {
  number: string;
  title: string;
  id: string;
  children: React.ReactNode;
};

function DetailSection({ number, title, id, children }: DetailSectionProps) {
  return (
    <section className="min-w-0" aria-labelledby={id}>
      <header className="mb-4 grid grid-cols-[3rem_minmax(0,1fr)] items-baseline gap-4">
        <span className="text-[.72rem] tabular-nums text-muted">{number}</span>
        <h2 id={id} className="m-0 text-[clamp(1.55rem,3vw,2.2rem)] font-medium leading-[1.1] tracking-[-.045em]">{title}</h2>
      </header>
      {children}
    </section>
  );
}

function ProjectLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="inline-flex min-h-[2.6rem] items-center gap-[.35rem] text-[.78rem] font-bold hover:text-accent" href={href} target="_blank" rel="noreferrer">
      {children} <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}

export function ProjectDetail({ project, previousProject, nextProject }: ProjectDetailProps) {
  const gallery = project.caseStudy?.gallery ?? [];
  const heroImage = project.thumbnail ?? gallery[0];
  const sourceLinkIsReal = project.links.github.includes("github.com/khenshi/");
  const caseStudy = project.caseStudy;
  const overview = caseStudy?.overview ?? [
    caseStudy?.problem ?? caseStudy?.background,
    project.description,
    caseStudy?.solution ?? caseStudy?.approach,
  ].filter(Boolean).join(" ");
  const technicalOverview = caseStudy?.approach ?? caseStudy?.solution;
  const technicalDecisions = caseStudy?.technicalDecisions?.slice(0, 3) ?? [];

  return (
    <article>
      <header className="mx-auto grid w-full max-w-[1060px] grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] items-center gap-[clamp(1.75rem,4vw,3.5rem)] border-b border-line pb-10 pt-5 max-[760px]:grid-cols-1 max-[760px]:gap-6 max-[760px]:pb-8 max-[760px]:pt-2">
        <div className="min-w-0">
          <Link href="/projects" className="mb-4 inline-flex min-h-10 items-center gap-[.45rem] text-[.78rem] font-semibold text-muted hover:text-accent">
            <ArrowLeft size={15} aria-hidden="true" /> All projects
          </Link>
          <p className="mb-[.8rem] mt-0 text-[.72rem] font-bold uppercase tracking-[.13em] text-muted">Project case study</p>
          <h1 className="m-0 max-w-full text-[clamp(2.6rem,5vw,5.1rem)] font-medium leading-[.98] tracking-[-.065em] [overflow-wrap:anywhere] max-[760px]:text-[clamp(2.4rem,11vw,4rem)]">{project.title}</h1>
          <p className="mt-[.9rem] max-w-[520px] text-[.96rem] leading-[1.55] text-muted">{project.cardSummary}</p>
          {project.note && <p className="mt-[.9rem] max-w-[560px] text-[.78rem] leading-[1.55] text-muted">{project.note}</p>}
          <div className="mt-[1.2rem] flex flex-wrap items-center gap-x-4 gap-y-[.3rem]" aria-label="Project links">
            {project.links.demo && <ProjectLink href={project.links.demo}>Live Demo</ProjectLink>}
            {sourceLinkIsReal && <ProjectLink href={project.links.github}>GitHub</ProjectLink>}
            {project.links.album && <ProjectLink href={project.links.album}>Project Album</ProjectLink>}
          </div>
        </div>
        <ProjectMedia
          image={heroImage}
          title={project.title}
          placeholderLabel="Project preview"
          variant="hero"
          sizes="(max-width: 760px) 100vw, 50vw"
        />
      </header>

      <section className="mx-auto grid w-full max-w-[1060px] grid-cols-3 gap-x-6 gap-y-5 border-b border-line pb-9 pt-8 max-[760px]:grid-cols-2 max-[760px]:gap-4 max-[760px]:py-6 max-[420px]:grid-cols-1" aria-label="Project facts">
        <div>
          <h2 className="m-0 text-[.68rem] font-bold uppercase tracking-[.12em] text-muted">Project status</h2>
          <p className={`mt-[.6rem] text-[.84rem] leading-[1.55] ${project.status ? "text-ink" : "italic text-muted"}`}>
            {project.status ?? "Not provided"}
          </p>
        </div>
        <div>
          <h2 className="m-0 text-[.68rem] font-bold uppercase tracking-[.12em] text-muted">My role</h2>
          <p className={`mt-[.6rem] text-[.84rem] leading-[1.55] ${project.role ? "text-ink" : "italic text-muted"}`}>
            {project.role ?? "Not provided"}
          </p>
        </div>
        <div>
          <h2 className="m-0 text-[.68rem] font-bold uppercase tracking-[.12em] text-muted">Timeline / Year</h2>
          <p className={`mt-[.6rem] text-[.84rem] leading-[1.55] ${project.timeline ? "text-ink" : "italic text-muted"}`}>
            {project.timeline ?? "Not provided"}
          </p>
        </div>
      </section>

      <div className="mx-auto grid w-full max-w-[1060px] gap-9 pb-16 pt-10 max-[760px]:gap-8 max-[760px]:pt-7">
        <div className="grid grid-cols-2 gap-9 max-[760px]:grid-cols-1 max-[760px]:gap-8">
          <DetailSection number="01" title="Project Overview" id="project-overview-title">
            <p className="m-0 max-w-[740px] text-[.92rem] leading-[1.7] text-muted">{overview}</p>
          </DetailSection>

          {project.features.length > 0 && (
            <DetailSection number="02" title="Key Features" id="project-features-title">
              <ul className="m-0 grid list-disc gap-[.45rem] pl-[1.15rem] text-[.92rem] leading-[1.6] text-muted">
                {project.features.slice(0, 6).map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </DetailSection>
          )}
        </div>

        <DetailSection number="03" title="Technical Overview" id="project-technical-title">
          <div className="mt-[1.6rem] grid grid-cols-2 items-start gap-8 max-[760px]:grid-cols-1 max-[760px]:gap-[1.4rem]">
            <div className="col-start-1 row-start-1 min-w-0 max-[760px]:col-auto max-[760px]:row-auto">
              <h3 className="m-0 text-[.86rem] font-bold">Tech stack</h3>
              <ul className="mt-[.65rem] flex flex-wrap gap-[.35rem] p-0 [list-style:none]" aria-label={`${project.title} technologies`}>
                {project.tech.map((technology) => <li className="border border-line px-[.48rem] py-[.32rem] text-[.65rem] leading-[1.2] text-muted" key={technology}>{technology}</li>)}
              </ul>
            </div>
            {technicalDecisions.length > 0 && (
              <div className="col-start-2 row-span-2 row-start-1 min-w-0 max-[760px]:col-auto max-[760px]:row-auto">
                <h3 className="m-0 mb-[.7rem] text-[.86rem] font-bold">Key decisions</h3>
                <ul className="m-0 grid list-disc gap-[.45rem] pl-[1.15rem] text-[.92rem] leading-[1.6] text-muted">
                  {technicalDecisions.map((decision) => <li key={decision}>{decision}</li>)}
                </ul>
              </div>
            )}
            <div className="col-start-1 row-start-2 min-w-0 max-[760px]:col-auto max-[760px]:row-auto">
              <h3 className="m-0 mb-[.7rem] text-[.86rem] font-bold">Architecture &amp; approach</h3>
              {technicalOverview && <p className="m-0 max-w-[740px] text-[.86rem] leading-[1.65] text-muted">{technicalOverview}</p>}
            </div>
          </div>
        </DetailSection>

        <nav className="grid grid-cols-2 gap-4 border-t border-line pt-8 max-[760px]:grid-cols-1" aria-label="Project navigation">
          {previousProject ? (
            <Link href={`/projects/${previousProject.slug}`} className="grid min-h-[4.5rem] content-center gap-[.4rem] border border-line p-[.8rem] hover:border-[color-mix(in_srgb,var(--accent)_45%,var(--line))] hover:text-accent">
              <span className="inline-flex items-center gap-[.4rem] text-[.68rem] font-bold uppercase tracking-[.08em] text-muted"><ArrowLeft size={14} aria-hidden="true" /> Previous Project</span>
              <strong className="text-[.9rem] font-semibold">{previousProject.title}</strong>
            </Link>
          ) : (
            <span className="grid min-h-[4.5rem] content-center gap-[.4rem] border border-line p-[.8rem] text-[.72rem] italic text-muted">
              <span className="text-[.68rem] font-bold uppercase tracking-[.08em] not-italic">Previous Project</span>
              <small className="text-[.9rem]">First project</small>
            </span>
          )}
          {nextProject ? (
            <Link href={`/projects/${nextProject.slug}`} className="grid min-h-[4.5rem] content-center justify-items-end gap-[.4rem] border border-line p-[.8rem] text-right hover:border-[color-mix(in_srgb,var(--accent)_45%,var(--line))] hover:text-accent">
              <span className="inline-flex items-center gap-[.4rem] text-[.68rem] font-bold uppercase tracking-[.08em] text-muted">Next Project <ArrowRight size={14} aria-hidden="true" /></span>
              <strong className="text-[.9rem] font-semibold">{nextProject.title}</strong>
            </Link>
          ) : (
            <span className="grid min-h-[4.5rem] content-center justify-items-end gap-[.4rem] border border-line p-[.8rem] text-right text-[.72rem] italic text-muted">
              <span className="text-[.68rem] font-bold uppercase tracking-[.08em] not-italic">Next Project</span>
              <small className="text-[.9rem]">Last project</small>
            </span>
          )}
        </nav>
      </div>
    </article>
  );
}
