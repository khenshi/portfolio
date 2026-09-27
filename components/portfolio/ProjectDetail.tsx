import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";

import type { Project } from "@/data/portfolio";
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
    <section className="project-detail-section" aria-labelledby={id}>
      <header className="project-detail-section-heading">
        <span>{number}</span>
        <h2 id={id}>{title}</h2>
      </header>
      {children}
    </section>
  );
}

function Placeholder({ children }: { children: React.ReactNode }) {
  return <p className="project-detail-placeholder">{children}</p>;
}

function ProjectLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children} <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}

export function ProjectDetail({ project, previousProject, nextProject }: ProjectDetailProps) {
  const gallery = project.caseStudy?.gallery ?? [];
  const heroImage = project.thumbnail ?? gallery[0];
  const sourceLinkIsReal = project.links.github.includes("github.com/khenshi/");
  const caseStudyPath = `data/projects/${project.slug}.ts`;
  const caseStudy = project.caseStudy;
  const overview = caseStudy?.overview ?? [
    caseStudy?.problem ?? caseStudy?.background,
    project.description,
    caseStudy?.solution ?? caseStudy?.approach,
  ].filter(Boolean).join(" ");
  const technicalOverview = caseStudy?.approach ?? caseStudy?.solution;
  const technicalDecisions = caseStudy?.technicalDecisions?.slice(0, 3) ?? [];
  const challengesAndLearnings = [
    ...(caseStudy?.challengesAndSolutions ?? []).map(({ challenge, solution: resolution }) => `${challenge} — ${resolution}`),
    ...(caseStudy?.learnings ?? []),
  ].slice(0, 4);

  return (
    <article className="project-detail">
      <header className="project-detail-hero shell">
        <div className="project-detail-hero-copy">
          <Link href="/projects" className="note-back-link">
            <ArrowLeft size={15} aria-hidden="true" /> All projects
          </Link>
          <p className="eyebrow">Project case study</p>
          <h1>{project.title}</h1>
          <p className="project-detail-summary">{project.cardSummary}</p>
          {project.note && <p className="project-detail-note">{project.note}</p>}
          <div className="project-detail-hero-links" aria-label="Project links">
            {project.links.demo && <ProjectLink href={project.links.demo}>Live Demo</ProjectLink>}
            {sourceLinkIsReal && <ProjectLink href={project.links.github}>GitHub</ProjectLink>}
            {project.links.album && <ProjectLink href={project.links.album}>Project Album</ProjectLink>}
            {!project.links.demo && !sourceLinkIsReal && !project.links.album && (
              <Placeholder>Add project links in <code>{caseStudyPath}</code>.</Placeholder>
            )}
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

      <section className="project-detail-meta shell" aria-label="Project facts">
        <div className="project-detail-meta-item">
          <h2>Project status</h2>
          <p className={project.status ? undefined : "is-unspecified"}>
            {project.status ?? "Not provided"}
          </p>
        </div>
        <div className="project-detail-meta-item">
          <h2>My role</h2>
          <p className={project.role ? undefined : "is-unspecified"}>
            {project.role ?? "Not provided"}
          </p>
        </div>
        <div className="project-detail-meta-item">
          <h2>Timeline / Year</h2>
          <p className={project.timeline ? undefined : "is-unspecified"}>
            {project.timeline ?? "Not provided"}
          </p>
        </div>
      </section>

      <div className="project-detail-content page-section shell">
        <DetailSection number="01" title="Project Overview" id="project-overview-title">
          <p className="project-detail-copy">{overview}</p>
        </DetailSection>

        {project.features.length > 0 && (
          <DetailSection number="02" title="Key Features" id="project-features-title">
            <ul className="project-detail-list">
              {project.features.slice(0, 6).map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          </DetailSection>
        )}

        <DetailSection number="03" title="Technical Overview" id="project-technical-title">
          <h3 className="project-detail-stack-label">Tech stack</h3>
          <ul className="tech-list project-detail-stack" aria-label={`${project.title} technologies`}>
            {project.tech.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
          <div className="project-technical-grid">
            <div>
              <h3>Architecture &amp; approach</h3>
              {technicalOverview && <p className="project-detail-copy">{technicalOverview}</p>}
            </div>
            {technicalDecisions.length > 0 && (
              <div>
                <h3>Key decisions</h3>
                <ul className="project-detail-list">
                  {technicalDecisions.map((decision) => <li key={decision}>{decision}</li>)}
                </ul>
              </div>
            )}
          </div>
        </DetailSection>

        {challengesAndLearnings.length > 0 && (
          <DetailSection number="04" title="Challenges & Learnings" id="project-challenges-title">
            <ul className="project-detail-list">
              {challengesAndLearnings.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </DetailSection>
        )}

        <nav className="project-pagination" aria-label="Project navigation">
          {previousProject ? (
            <Link href={`/projects/${previousProject.slug}`} className="project-pagination-link is-previous">
              <span><ArrowLeft size={14} aria-hidden="true" /> Previous Project</span>
              <strong>{previousProject.title}</strong>
            </Link>
          ) : (
            <span className="project-pagination-boundary">
              <span>Previous Project</span>
              <small>First project</small>
            </span>
          )}
          {nextProject ? (
            <Link href={`/projects/${nextProject.slug}`} className="project-pagination-link is-next">
              <span>Next Project <ArrowRight size={14} aria-hidden="true" /></span>
              <strong>{nextProject.title}</strong>
            </Link>
          ) : (
            <span className="project-pagination-boundary is-next">
              <span>Next Project</span>
              <small>Last project</small>
            </span>
          )}
        </nav>
      </div>
    </article>
  );
}
