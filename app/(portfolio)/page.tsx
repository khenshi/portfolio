import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";

import { certificates, experience, projects, skills } from "@/data/portfolio";
import { GithubSection } from "@/components/portfolio/GithubSection";
import { CertificationCard } from "@/components/portfolio/CertificationCard";
import { ExperienceEntry } from "@/components/portfolio/ExperienceEntry";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

export default function OverviewPage() {
  return (
    <>
      <section id="top" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" />Based in Davao City, Philippines</p>
          <h1>Khenyshi Hinlog</h1>
          <p className="hero-intro">
            I&apos;m a computer science student and full-stack developer. I care about clear interfaces,
            dependable systems, and technology that solves a real problem.
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

      <section className="section shell" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="section-number">01</p>
          <div><p className="eyebrow">Selected work</p><h2 id="projects-title">Projects with a purpose.</h2></div>
        </div>
        <div className="project-grid project-grid-compact">
          {projects.filter((project) => project.featured).map((project) => (
            <ProjectCard key={project.slug} project={project} variant="overview" />
          ))}
        </div>
        <Link className="section-more-link" href="/projects">View All Projects <ArrowUpRight size={15} /></Link>
      </section>

      <section className="section shell about-grid" aria-labelledby="about-title">
        <div className="section-heading about-heading">
          <p className="section-number">02</p>
          <div><p className="eyebrow">About</p><h2 id="about-title">Curious by default.<br />Practical by choice.</h2></div>
        </div>
        <div className="about-copy">
          <p className="lead">I enjoy taking a product from a rough idea to something people can actually use.</p>
          <p>My work spans web applications, testing, databases, and applied AI. I&apos;m currently studying Computer Science at Ateneo de Davao University while building independent and team projects.</p>
          <p>I value straightforward communication, maintainable code, and being honest about what a product can—and cannot—do.</p>
        </div>
      </section>

      <section className="section shell split-section" aria-labelledby="experience-title">
        <div>
          <p className="eyebrow">Experience & education</p>
          <h2 id="experience-title" className="subheading">Where I&apos;ve been learning.</h2>
          <Link className="section-more-link" href="/experience">Full experience <ArrowUpRight size={15} /></Link>
        </div>
        <div className="experience-list">
          {experience.map((item) => <ExperienceEntry key={item.role} item={item} compact />)}
        </div>
      </section>

      <section className="section shell split-section" aria-labelledby="skills-title">
        <div><p className="eyebrow">Capabilities</p><h2 id="skills-title" className="subheading">Tools I work with.</h2></div>
        <div className="skills-list">
          {skills.map((group) => (
            <div key={group.title}><h3>{group.title}</h3><p>{group.items.join(", ")}</p></div>
          ))}
        </div>
      </section>

      <section className="section shell split-section certificates" aria-labelledby="certifications-title">
        <div>
          <p className="eyebrow">Continued learning</p>
          <h2 id="certifications-title" className="subheading">Recent credentials.</h2>
          <Link className="section-more-link" href="/certifications">All certifications <ArrowUpRight size={15} /></Link>
        </div>
        <div className="overview-certification-list">
          {certificates.slice(0, 5).map((certificate) => (
            <CertificationCard key={certificate.title} certificate={certificate} compact />
          ))}
        </div>
      </section>

      <GithubSection />

      <section className="contact shell" aria-labelledby="contact-title">
        <p className="eyebrow">Have a project in mind?</p>
        <h2 id="contact-title">Let&apos;s make something<br />clear and useful.</h2>
        <a className="button button-primary" href="mailto:hinlogkhenyshi@gmail.com"><Mail size={16} /> Email me</a>
      </section>
    </>
  );
}
