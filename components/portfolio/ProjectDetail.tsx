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
  const gallerySlotCount = Math.max(3, gallery.length);
  const heroImage = project.thumbnail ?? gallery[0];
  const sourceLinkIsReal = project.links.github.includes("github.com/khenshi/");
  const problem = project.caseStudy?.problem ?? project.caseStudy?.background;
  const solution = project.caseStudy?.solution ?? project.caseStudy?.approach;
  const outcomes = project.caseStudy?.outcomes ?? [];
  const learnings = project.caseStudy?.learnings ?? [];
  const caseStudyPath = `data/projects/${project.slug}.ts`;

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
        <div className="project-detail-meta-item project-detail-tech">
          <h2>Tech stack</h2>
          <ul className="tech-list" aria-label={`${project.title} technologies`}>
            {project.tech.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        </div>
      </section>

      <div className="project-detail-content page-section shell">
        <DetailSection number="01" title="Project Overview" id="project-overview-title">
          <p className="project-detail-copy">
            {project.caseStudy?.overview ?? project.description}
          </p>
        </DetailSection>

        <DetailSection number="02" title="Problem / Background" id="project-background-title">
          {problem ? (
            <p className="project-detail-copy">{problem}</p>
          ) : (
            <Placeholder>Add project context in <code>{caseStudyPath}</code>.</Placeholder>
          )}
        </DetailSection>

        <DetailSection number="03" title="Solution / Approach" id="project-approach-title">
          {solution ? (
            <p className="project-detail-copy">{solution}</p>
          ) : (
            <Placeholder>Add your approach in <code>{caseStudyPath}</code>.</Placeholder>
          )}
        </DetailSection>

        <DetailSection number="04" title="Key Features" id="project-features-title">
          {project.features.length > 0 ? (
            <ul className="project-detail-list">
              {project.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
          ) : (
            <Placeholder>Add key features in <code>{caseStudyPath}</code>.</Placeholder>
          )}
        </DetailSection>

        <DetailSection number="05" title="Technical Decisions" id="project-decisions-title">
          {project.caseStudy?.technicalDecisions?.length ? (
            <ul className="project-detail-list">
              {project.caseStudy.technicalDecisions.map((decision) => <li key={decision}>{decision}</li>)}
            </ul>
          ) : (
            <Placeholder>Add technical decisions in <code>{caseStudyPath}</code>.</Placeholder>
          )}
        </DetailSection>

        <DetailSection number="06" title="Challenges & Solutions" id="project-challenges-title">
          {project.caseStudy?.challengesAndSolutions?.length ? (
            <div className="project-challenge-list">
              {project.caseStudy.challengesAndSolutions.map(({ challenge, solution: resolution }) => (
                <article className="project-challenge" key={challenge}>
                  <div>
                    <h3>Challenge</h3>
                    <p>{challenge}</p>
                  </div>
                  <div>
                    <h3>Solution</h3>
                    <p>{resolution}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <Placeholder>Add challenge and solution pairs in <code>{caseStudyPath}</code>.</Placeholder>
          )}
        </DetailSection>

        <DetailSection number="07" title="Project Gallery" id="project-gallery-title">
          <div className="project-gallery-grid">
            {Array.from({ length: gallerySlotCount }, (_, index) => {
              const image = gallery[index];
              const label = `Screenshot ${String(index + 1).padStart(2, "0")}`;

              return (
                <figure className="project-gallery-card" key={image?.src ?? label}>
                  <ProjectMedia
                    image={image}
                    title={project.title}
                    placeholderLabel={image ? "Screenshot not added yet" : label}
                    variant="gallery"
                    sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                  {image?.caption && <figcaption>{image.caption}</figcaption>}
                </figure>
              );
            })}
          </div>
          {gallery.length === 0 && (
            <p className="project-gallery-guidance">
              Add screenshots under <code>public/projects/{project.slug}/</code> and list them in <code>{caseStudyPath}</code>.
            </p>
          )}
        </DetailSection>

        <DetailSection number="08" title="Outcomes & Learnings" id="project-outcomes-title">
          <div className="project-outcomes-grid">
            <div>
              <h3>Outcomes</h3>
              {outcomes.length > 0 ? (
                <ul className="project-detail-list">
                  {outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
                </ul>
              ) : (
                <Placeholder>Add verified outcomes in <code>{caseStudyPath}</code>.</Placeholder>
              )}
            </div>
            <div>
              <h3>Learnings</h3>
              {learnings.length > 0 ? (
                <ul className="project-detail-list">
                  {learnings.map((learning) => <li key={learning}>{learning}</li>)}
                </ul>
              ) : (
                <Placeholder>Add learnings in <code>{caseStudyPath}</code>.</Placeholder>
              )}
            </div>
          </div>
        </DetailSection>

        <DetailSection number="09" title="Future Improvements" id="project-future-title">
          {project.caseStudy?.futureImprovements?.length ? (
            <ul className="project-detail-list">
              {project.caseStudy.futureImprovements.map((improvement) => <li key={improvement}>{improvement}</li>)}
            </ul>
          ) : (
            <Placeholder>Add future improvements in <code>{caseStudyPath}</code>.</Placeholder>
          )}
        </DetailSection>

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
