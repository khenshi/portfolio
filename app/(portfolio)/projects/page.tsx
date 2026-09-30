import { PageHeading } from "@/components/portfolio/PageHeading";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <PageHeading
        eyebrow="Selected work"
        title="Projects"
        description="Web, AI, and desktop projects."
      />
      <section className="mx-auto w-full max-w-[1060px] pb-16 pt-11 max-[760px]:pb-12 max-[760px]:pt-8" aria-label="All projects">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,290px),1fr))] gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="directory" />
          ))}
        </div>
      </section>
    </>
  );
}
