"use client";

import { useEffect, useRef, useState } from "react";

import { certificates, experience, navItems, projects, skills } from "@/data/home";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import ScrollContext from "@/components/ui/ScrollContext";

import { CertificatesSection } from "@/components/home/CertificatesSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { FloatingNav } from "@/components/home/FloatingNav";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { GithubSection } from "@/components/home/GithubSection";
// import { Chatbot } from "@/components/chatbot/Chatbot";

export default function HomePage() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [showNav, setShowNav] = useState(false);

  useSmoothScroll();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setShowNav(!entry.isIntersecting), {
      threshold: 0.35,
    });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0 " />

      <FloatingNav items={navItems} show={showNav} />

      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-20 pt-12 sm:px-10 gap-15">
        <ScrollContext>
          <HeroSection heroRef={heroRef} />
          <SkillsSection skills={skills} />
          <ProjectsSection projects={projects} />
          <ExperienceSection experience={experience} />
          <CertificatesSection certificates={certificates} />
          <GithubSection />
        </ScrollContext>
      </main>

      {/* <Chatbot /> */}
    </div>
  );
}
