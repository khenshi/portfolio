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
      <section id="top" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" />Based in Davao City, Philippines</p>
          <h1>Khenyshi Hinlog</h1>
          <p className="hero-intro">
            Computer science student and full-stack developer focused on clear interfaces and useful software.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/projects">See my work <ArrowDownRight size={16} /></Link>
            <a className="text-link" href="mailto:hinlogkhenyshi@gmail.com">Get in touch <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <figure className="portrait-wrap">
          <Image
            src="/pfp.svg"
            alt="Portrait of Khenyshi Hinlog"
            fill
            priority
            sizes="(max-width: 760px) 50vw, 30vw"
            className="portrait"
          />
          <figcaption>Full-stack developer</figcaption>
        </figure>
      </section>

      <section className="section shell overview-projects-section" aria-labelledby="projects-title">
        <div className="section-heading">
          <div className="overview-projects-heading-row">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 id="projects-title">Featured projects</h2>
            </div>
            <Link className="section-more-link" href="/projects">View All Projects <ArrowUpRight size={15} /></Link>
          </div>
        </div>
        <ProjectCarousel label="Project showcase">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} variant="overview" />
          ))}
        </ProjectCarousel>
      </section>

      <section className="section shell split-section" aria-labelledby="experience-title">
        <div>
          <p className="eyebrow">Background</p>
          <h2 id="experience-title" className="subheading">Experience &amp; education</h2>
          <Link className="section-more-link" href="/experience">Full experience <ArrowUpRight size={15} /></Link>
        </div>
        <div className="experience-list">
          {experience.map((item) => <ExperienceEntry key={item.role} item={item} compact />)}
        </div>
        <div className="overview-tech-stack" aria-labelledby="skills-title">
          <div className="overview-tech-divider">
            <h3 id="skills-title">Tech stack</h3>
          </div>
          <div className="capability-grid">
            {skills.map((group) => (
              <article className="capability-group" key={group.title}>
                <h4>{group.title}</h4>
                <ul className="capability-tags" aria-label={group.title}>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell overview-certifications" aria-labelledby="certifications-title">
        <div className="overview-section-heading overview-section-heading-actions">
          <div>
            <p className="eyebrow">Continued learning</p>
            <h2 id="certifications-title" className="subheading">Certifications</h2>
          </div>
          <Link className="section-more-link" href="/certifications">All certifications <ArrowUpRight size={15} /></Link>
        </div>
        <div className="overview-certification-grid">
          {featuredCertificates.map((certificate) => (
            <CertificationCard key={certificate.title} certificate={certificate} compact />
          ))}
        </div>
      </section>

      <GithubSection />

      <section className="contact shell" aria-labelledby="contact-title">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">Let&apos;s build something<br />useful.</h2>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:hinlogkhenyshi@gmail.com"><Mail size={16} /> Email me</a>
          <a
            className="button button-secondary"
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
