"use client";

import Link from "next/link";

import { Project } from "@/data/home";

import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="mt-16 space-y-6">
      <ScrollAnimate>
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-10 bg-gradient-to-r from-transparent via-[var(--muted)]/40 to-transparent" />
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">Projects</p>
        </div>
      </ScrollAnimate>
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ScrollAnimate key={project.title} delay={index * 100}>
            <div className="group relative flex h-full flex-col rounded-3xl border border-white/10 bg-[#0c0f16]/70 p-6 shadow-lg shadow-black/30 transition duration-200">
              <h2 className="text-lg font-semibold text-white">{project.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-3 pt-6 text-sm font-semibold text-white">
                {project.links.demo && (
                  <Link
                    href={project.links.demo}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition hover:border-white/30 hover:bg-white/10"
                    target="_blank"
                    rel="noreferrer"
                  >
                  Live demo
                </Link>)}
                {project.links.album && (
                  <Link
                    href={project.links.album}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition hover:border-white/30 hover:bg-white/10"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Album
                  </Link>
                )}
                <Link
                  href={project.links.github}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition hover:border-white/30 hover:bg-white/10"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </ScrollAnimate>
        ))}
      </div>
    </section>
  );
}

