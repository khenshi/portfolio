import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";

import { certificates, experience, projects, skills } from "@/data/home";
import { GithubSection } from "@/components/home/GithubSection";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/khenshi" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/khenyshi-hinlog-27269539b/" },
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header shell">
        <a className="wordmark" href="#top" aria-label="Khenyshi Hinlog, home">KH<span className="wordmark-dot">.</span></a>
        <nav aria-label="Primary navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
      </header>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" />Based in Davao City, Philippines</p>
          <h1>Khenyshi Hinlog</h1>
          <p className="hero-intro">I&apos;m a computer science student and full-stack developer. I care about clear interfaces, dependable systems, and technology that solves a real problem.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">See my work <ArrowDownRight size={16} /></a>
            <a className="text-link" href="mailto:hinlogkhenyshi@gmail.com">Get in touch <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <figure className="portrait-wrap">
          <Image src="/pfp.webp" alt="Portrait of Khenyshi Hinlog" fill priority sizes="(max-width: 760px) 50vw, (max-width: 1080px) 34vw, 360px" className="portrait" />
          <figcaption>Full-stack developer</figcaption>
        </figure>
      </section>

      <section id="work" className="section shell">
        <div className="section-heading"><p className="section-number">01</p><div><p className="eyebrow">Selected work</p><h2>Projects with a purpose.</h2></div></div>
        <div className="project-list">
          {projects.slice(0, 4).map((project, index) => {
            const githubIsReal = project.links.github.includes("github.com/khenshi/");
            return (
              <article className="project" key={project.title}>
                <div className="project-index">0{index + 1}</div>
                <div className="project-body">
                  <div className="project-title-row"><h3>{project.title}</h3>{project.note && <span className="project-note">{project.note}</span>}</div>
                  <p>{project.description}</p>
                  <p className="project-tech">{project.tech.slice(0, 5).join(" · ")}</p>
                </div>
                <div className="project-links">
                  {project.links.demo && <Link href={project.links.demo} target="_blank">Live site <ArrowUpRight size={14} /></Link>}
                  {githubIsReal && <Link href={project.links.github} target="_blank">Source <ArrowUpRight size={14} /></Link>}
                  {!project.links.demo && project.links.album && <Link href={project.links.album} target="_blank">Project album <ArrowUpRight size={14} /></Link>}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="about" className="section shell about-grid">
        <div className="section-heading about-heading"><p className="section-number">02</p><div><p className="eyebrow">About</p><h2>Curious by default.<br />Practical by choice.</h2></div></div>
        <div className="about-copy"><p className="lead">I enjoy taking a product from a rough idea to something people can actually use.</p><p>My work spans web applications, testing, databases, and applied AI. I&apos;m currently studying Computer Science at Ateneo de Davao University while building independent and team projects.</p><p>I value straightforward communication, maintainable code, and being honest about what a product can—and cannot—do.</p></div>
      </section>

      <section className="section shell split-section" aria-labelledby="experience-title">
        <div><p className="eyebrow">Experience & education</p><h2 id="experience-title" className="subheading">Where I&apos;ve been learning.</h2></div>
        <div className="timeline">{experience.map((item) => <article key={item.role} className="timeline-item"><p className="timeline-period">{item.period}</p><div><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p>{item.bullets[0]}</p></div></article>)}</div>
      </section>

      <section className="section shell split-section" aria-labelledby="tools-title">
        <div><p className="eyebrow">Capabilities</p><h2 id="tools-title" className="subheading">Tools I work with.</h2></div>
        <div className="skills-list">{skills.map((group) => <div key={group.title}><h3>{group.title}</h3><p>{group.items.join(", ")}</p></div>)}</div>
      </section>

      <section className="section shell split-section certificates" aria-labelledby="learning-title">
        <div><p className="eyebrow">Continued learning</p><h2 id="learning-title" className="subheading">Recent credentials.</h2></div>
        <div className="certificate-list">{certificates.slice(0, 5).map((certificate) => <a key={certificate.title} href={certificate.credentialUrl} target="_blank" rel="noreferrer"><span><strong>{certificate.title}</strong><small>{certificate.issuer}</small></span><span>{certificate.date} <ArrowUpRight size={14} /></span></a>)}</div>
      </section>

      <GithubSection />

      <section id="contact" className="contact shell"><p className="eyebrow">Have a project in mind?</p><h2>Let&apos;s make something<br />clear and useful.</h2><a className="button button-primary" href="mailto:hinlogkhenyshi@gmail.com"><Mail size={16} /> Email me</a></section>
      <footer className="footer shell"><p>© {new Date().getFullYear()} Khenyshi Hinlog</p><div>{socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}</div></footer>
    </main>
  );
}
