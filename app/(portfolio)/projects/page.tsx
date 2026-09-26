import { PageHeading } from "@/components/portfolio/PageHeading";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <>
      <PageHeading
        eyebrow="Selected work"
        title="Projects"
        description="A collection of products, experiments, and team projects built to solve practical problems."
      />
      <section className="page-section shell" aria-label="All projects">
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
