import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Linkedin, Mail } from "lucide-react";

import { certificates, experience, skills } from "@/data/portfolio";
import { projects } from "@/data/projects";
import { GithubSection } from "@/components/portfolio/GithubSection";
import { CertificationCard } from "@/components/portfolio/CertificationCard";
import { ExperienceEntry } from "@/components/portfolio/ExperienceEntry";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ProjectCarousel } from "@/components/portfolio/ProjectCarousel";

const featuredCertificates = certificates
  .slice(0, 5)
  .filter((certificate) => certificate.title !== "Learn React");

export default function OverviewPage() {
  return (
    <>
      <section id="top" className="mx-auto grid w-full max-w-[1060px] grid-cols-[minmax(0,1.35fr)_minmax(0,.65fr)] items-center gap-[8vw] py-20 max-[1080px]:gap-[5vw] max-[760px]:flex max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-7 max-[760px]:pb-28 max-[760px]:pt-20">
        <div className="min-w-0">
          <p className="m-0 text-[.72rem] font-bold uppercase tracking-[.13em] text-muted"><span className="mr-[.65rem] inline-block h-[7px] w-[7px] rounded-full bg-[#4d8063]" />Based in Davao City, Philippines</p>
          <h1 className="m-0 max-w-[760px] text-[clamp(3.25rem,6.4vw,6.3rem)] font-medium leading-[.91] tracking-[-.072em] max-[1080px]:text-[clamp(3.15rem,6.3vw,4.75rem)] max-[760px]:text-[clamp(2.8rem,13.6vw,4.25rem)] max-[480px]:text-[clamp(2.2rem,9.35vw,2.85rem)] max-[350px]:text-[2rem]">Khenyshi Hinlog</h1>
          <p className="mt-9 max-w-[610px] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-[1.65] text-muted max-[760px]:mt-7">
            Computer science student and full-stack developer focused on clear interfaces and useful software.
          </p>
          <div className="mt-9 flex items-center gap-6 text-[.86rem] font-bold max-[760px]:mt-5 max-[760px]:flex-wrap max-[760px]:gap-y-5 max-[480px]:w-full max-[480px]:flex-col max-[480px]:items-start">
            <Link className="inline-flex min-h-11 items-center justify-center gap-[.55rem] bg-ink px-[1.15rem] py-[.9rem] text-[.82rem] font-bold !text-white transition-transform duration-200 hover:-translate-y-0.5" href="/projects">See my work <ArrowDownRight size={16} aria-hidden="true" /></Link>
            <a className="inline-flex min-h-10 items-center gap-[.35rem]" href="mailto:hinlogkhenyshi@gmail.com">Get in touch <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </div>
        <figure className="relative order-none m-0 aspect-[4/5] w-full self-center bg-paper max-[760px]:order-[-1] max-[760px]:aspect-square max-[760px]:w-[clamp(180px,50vw,320px)] max-[760px]:self-start">
          <Image
            src="/pfp.svg"
            alt="Portrait of Khenyshi Hinlog"
            fill
            priority
            sizes="(max-width: 760px) 50vw, 30vw"
            className="object-cover saturate-[.7] contrast-[.96]"
          />
          <figcaption className="absolute bottom-[-2rem] left-0 right-0 text-[.7rem] uppercase tracking-[.1em] text-muted max-[760px]:hidden">Full-stack developer</figcaption>
        </figure>
      </section>

      <section className="mx-auto w-full max-w-[1060px] border-t border-line py-14 max-[760px]:py-10" aria-labelledby="projects-title">
        <div className="mb-6 grid grid-cols-1 max-[760px]:mb-5">
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
            <div>
              <p className="mb-[.55rem] mt-0 text-[.72rem] font-bold uppercase tracking-[.13em] text-muted">Selected work</p>
              <h2 id="projects-title" className="m-0 text-[clamp(1.8rem,3.8vw,3.1rem)] font-medium leading-none tracking-[-.055em] max-[760px]:text-[clamp(1.8rem,8vw,2.75rem)]">Featured projects</h2>
            </div>
            <Link className="inline-flex min-h-[2.4rem] items-center gap-[.35rem] !mt-0 mb-[.15rem] text-[.78rem] font-bold hover:text-accent" href="/projects">View All Projects <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </div>
        </div>
        <ProjectCarousel label="Project showcase">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="overview" />
          ))}
        </ProjectCarousel>
      </section>

      <section className="mx-auto grid w-full max-w-[1060px] grid-cols-[minmax(0,.7fr)_minmax(0,1.3fr)] gap-[5vw] border-t border-line py-20 max-[1080px]:grid-cols-[minmax(220px,.7fr)_minmax(0,1.3fr)] max-[760px]:grid-cols-1 max-[760px]:gap-8 max-[760px]:py-14" aria-labelledby="experience-title">
        <div>
          <p className="mb-[1.4rem] mt-0 text-[.72rem] font-bold uppercase tracking-[.13em] text-muted">Background</p>
          <h2 id="experience-title" className="m-0 max-w-[360px] text-[clamp(2rem,3vw,3rem)] font-medium leading-[1.05] tracking-[-.045em]">Experience &amp; education</h2>
          <Link className="mt-[1.4rem] inline-flex min-h-[2.4rem] items-center gap-[.35rem] text-[.78rem] font-bold hover:text-accent" href="/experience">Full experience <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
        <div className="grid">
          {experience.map((item) => <ExperienceEntry key={item.role} item={item} compact />)}
        </div>
        <div className="col-span-full min-w-0 mt-1" aria-labelledby="skills-title">
          <div className="mb-4 grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
            <h3 id="skills-title" className="m-0 text-[.68rem] font-bold uppercase tracking-[.12em] text-muted">Tech stack</h3>
            <span className="h-px bg-line" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-4 gap-[.85rem] max-[1080px]:grid-cols-2 max-[760px]:grid-cols-1">
            {skills.map((group) => (
              <article className="min-w-0 pt-[.7rem]" key={group.title}>
                <h4 className="m-0 mb-[.65rem] text-[.82rem] font-bold leading-[1.45]">{group.title}</h4>
                <ul className="m-0 flex flex-wrap gap-[.35rem] p-0 [list-style:none]" aria-label={group.title}>
                  {group.items.map((item) => <li className="max-w-full border border-line bg-paper px-2 py-[.35rem] text-[.66rem] leading-[1.35] text-muted [overflow-wrap:anywhere]" key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1060px] border-t border-line py-20 max-[760px]:py-14" aria-labelledby="certifications-title">
        <div className="mb-8 flex items-end justify-between gap-6 max-[760px]:items-start max-[760px]:flex-col max-[760px]:gap-[.7rem]">
          <div>
            <p className="mb-[.55rem] mt-0 text-[.72rem] font-bold uppercase tracking-[.13em] text-muted">Continued learning</p>
            <h2 id="certifications-title" className="m-0 max-w-[720px] text-[clamp(2rem,3vw,3rem)] font-medium leading-[1.05] tracking-[-.045em]">Certifications</h2>
          </div>
          <Link className="inline-flex min-h-[2.4rem] items-center gap-[.35rem] !mt-0 mb-[.2rem] text-[.78rem] font-bold hover:text-accent" href="/certifications">All certifications <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
        <div className="grid grid-cols-4 gap-4 max-[1080px]:grid-cols-2 max-[760px]:grid-cols-1">
          {featuredCertificates.map((certificate) => (
            <CertificationCard key={certificate.title} certificate={certificate} compact />
          ))}
        </div>
      </section>

      <GithubSection />

      <section className="mx-auto w-full max-w-[1060px] border-t border-line py-24 text-center max-[760px]:py-28" aria-labelledby="contact-title">
        <p className="mb-[1.4rem] mt-0 text-[.72rem] font-bold uppercase tracking-[.13em] text-muted">Contact</p>
        <h2 id="contact-title" className="m-0 text-[clamp(2rem,4.2vw,3.75rem)] font-medium leading-none tracking-[-.055em] max-[760px]:text-[clamp(2.4rem,12vw,4rem)]">Let&apos;s build something<br />useful.</h2>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 max-[760px]:mt-5 max-[480px]:flex-col">
          <a className="inline-flex min-h-[2.8rem] items-center justify-center gap-[.55rem] bg-ink px-[1.15rem] py-[.9rem] text-[.82rem] font-bold !text-white transition-transform duration-200 hover:-translate-y-0.5 max-[480px]:w-full" href="mailto:hinlogkhenyshi@gmail.com"><Mail size={16} aria-hidden="true" /> Email me</a>
          <a
            className="inline-flex min-h-[2.8rem] items-center justify-center gap-[.55rem] border border-line bg-paper px-[1.15rem] py-[.9rem] text-[.82rem] font-bold text-ink hover:border-accent hover:text-accent max-[480px]:w-full"
            href="https://www.linkedin.com/in/khenyshi-hinlog-27269539b/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={16} aria-hidden="true" /> LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
