"use client";

import { RefObject } from "react";
import { ScrollAnimate } from "../ui/ScrollAnimate";
import Image from "next/image";
import Link from "next/link";

type HeroSectionProps = {
  heroRef: RefObject<HTMLElement | null>;
};

export function HeroSection({ heroRef }: HeroSectionProps) {
  return (
    // <section
    //   ref={heroRef}
    //   id="hero"
    //   className="flex min-h-[90vh] flex-col items-center justify-center gap-12 pb-10 pt-10 text-center lg:flex-row"
    // >
    //   <ScrollAnimate>
    //   <div className="max-w-2xl space-y-6">
    //     <div className="relative h-32 w-32 shrink-0 rounded-2xl border border-white/10 bg-white/5 p-1 shadow-inner sm:h-70 sm:w-70">
    //                   <div className="relative h-full w-full overflow-hidden rounded-xl bg-zinc-900">
    //                     <Image
    //                       src="/pfp.webp"
    //                       alt="Khenyshi Hinlog"
    //                       fill
    //                       priority
    //                       className="object-cover"
    //                     />
    //                   </div>
    //                 </div>
    //     <div className="space-y-4">
    //       <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl">
    //         Khenyshi Hinlog
    //       </h1>
    //       <p className="text-lg leading-relaxed text-[var(--muted)]">
    //         I design and ship products with clean architecture, performance focused, and with the integration of AI for faster and smarter solutions.
    //       </p>
    //     </div>
    //     <div className="flex flex-wrap items-center justify-center gap-3">
    //       <a
    //         href="#projects"
    //         className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--foreground2)] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    //       >
    //         View projects
    //       </a>
    //       <a
    //         href="#contact"
    //         className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[var(--foreground)]/5 px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:-translate-y-0.5 hover:bg-[var(--foreground)]/10 hover:shadow-lg hover:shadow-purple-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
    //       >
    //         Let&apos;s collaborate
    //       </a>
    //     </div>
    //   </div>  
    //   </ScrollAnimate> 
    // </section>
    <section
        ref={heroRef}
        id="hero"
        className="rounded-3xl p-6 sm:p-8 min-h-[90vh] flex flex-col items-center justify-center gap-12 pb-10 pt-10 text-center lg:flex-row"
      >
        <ScrollAnimate>
        <div className="flex flex-col gap-12 items-center">
          
          {/* Top: Profile Picture + Text Intro */}
          <div className="flex flex-col items-center gap-15 text-center sm:flex-row sm:items-center sm:text-left">
            
            {/* Modern Image Frame */}
            <div className="relative h-32 w-32 shrink-0 rounded-2xl border border-white/10 bg-white/5 p-1 shadow-inner sm:h-70 sm:w-70">
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-zinc-900">
                <Image
                  src="/pfp.webp"
                  alt="Khenyshi Hinlog"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center h-full gap-4">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-5xl">
           Khenyshi Hinlog
         </h1>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            I'm a full-stack developer passionate about building modern web applications and AI-powered products. Currently, I'm focused on creating scalable software, experimenting with generative AI, and turning ambitious ideas into real-world applications.
           </p>
            </div>
          </div>

          {/* Subtle Divider to separate content from links */}
          <div className="h-px w-full bg-white/10" />

          {/* Bottom: Action Links */}
          <div className="flex flex-col gap-3 text-sm font-semibold text-white sm:flex-row sm:flex-wrap">
            <a
              href="mailto:hinlogkhenyshi@gmail.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 transition hover:border-white/30 hover:bg-white/10 sm:w-auto sm:py-2"
            >
              Email
            </a>
            <Link
              href="https://github.com/khenshi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 transition hover:border-white/30 hover:bg-white/10 sm:w-auto sm:py-2"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/khenyshi-hinlog-27269539b/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 transition hover:border-white/30 hover:bg-white/10 sm:w-auto sm:py-2"
            >
              LinkedIn
            </Link>
          </div>

        </div>
        </ScrollAnimate>
      </section>
  );
}
