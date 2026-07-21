"use client";

import { SkillGroup } from "@/data/home";

import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

type SkillsSectionProps = {
  skills: SkillGroup[];
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="mt-16 space-y-6">
      <ScrollAnimate>
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-10 bg-gradient-to-r from-transparent via-[var(--muted)]/40 to-transparent" />
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">Tech Stack</p>
        </div>
      </ScrollAnimate>
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group, index) => (
          <ScrollAnimate key={group.title} delay={index * 100}>
            <div className="rounded-3xl border border-white/10 bg-[#0c0f16]/70 p-6 shadow-lg shadow-black/30">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimate>
        ))}
      </div>
    </section>
  );
}
