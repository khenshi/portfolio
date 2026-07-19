"use client";

import Link from "next/link";
import Image from "next/image";

import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

export function ContactSection() {
  return (
    <ScrollAnimate>
      <section
        id="contact"
        className="mt-16 rounded-3xl border border-white/10 bg-[#0c0f16]/70 p-6 sm:p-8 shadow-2xl shadow-black/40"
      >
        <div className="flex flex-col gap-8 items-center">
          
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
            <div className="flex flex-col justify-center h-full">
              <p className="text-sm uppercase tracking-[0.24em] text-zinc-300">Contact</p>
              <h3 className="mt-3 text-2xl font-semibold text-white sm:mt-2">
                Let&apos;s build something high-impact together.
              </h3>
              <p className="mt-3 max-w-xl text-sm text-zinc-300">
                I&apos;m open to part-time roles, freelance engagements, and internships. Reach out with a
                brief note about the problem you&apos;re solving and I&apos;ll respond quickly.
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
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-black transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20 sm:w-auto sm:py-2"
            >
              View portfolio
            </a>
          </div>

        </div>
      </section>
    </ScrollAnimate>
  );
}