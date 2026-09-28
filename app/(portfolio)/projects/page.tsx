import { PageHeading } from "@/components/portfolio/PageHeading";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <>
      <PageHeading
        eyebrow="Selected work"
        title="Projects"
        description="Web, AI, and desktop projects."
      />
      <section className="page-section shell" aria-label="All projects">
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="directory" />
          ))}
        </div>
      </section>
    </>
  );
}
