"use client";

import { ScrollAnimate } from "@/components/ui/ScrollAnimate";

export function AboutSection() {
  return (
    <section id="about" className="space-y-4 pt-12">
      <ScrollAnimate>
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-10 bg-gradient-to-r from-transparent via-[var(--muted)]/40 to-transparent" />
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">What I bring</p>
        </div>
      </ScrollAnimate>
      <div>
        {/* <ScrollAnimate delay={0}>
          <div className="space-y-4 text-lg leading-relaxed text-[var(--muted)]">
            <p>
              End-to-End Architecture: Crafting seamless frontend UI/UX, robust backend services, and modern AI integrations.
            </p>`
            <p>
              Cross-Functional Teamwork: Partnering closely with design and product teams to ship features users genuinely love.
            </p>
            <p>
              Engineering Excellence: Championing system observability, Developer Experience (DX), and leaving codebases better than I found them.
            </p>
          </div>
        </ScrollAnimate> */}
        <ScrollAnimate delay={100}>
          <div className="rounded-3xl border border-white/10 bg-[#0c0f16]/70 p-9 text-sm text-[var(--muted)] shadow-lg shadow-black/30">
            <ul className="space-y-5 text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
                <span><strong className="text-[var(--foreground)]">End-to-End & AI Architecture:</strong> Building complete, scalable systems; from polished frontend UI/UX and robust backend services to modern AI integrations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                <span><strong className="text-[var(--foreground)]">Rapid Delivery & Engineering Quality:</strong> Balancing fast feature deployment with long-term maintainability, system observability, and excellent Developer Experience (DX).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
                <span><strong className="text-[var(--foreground)]" >Cross-Functional Collaboration:</strong> Partnering directly with product managers, designers, and fellow engineers to seamlessly translate business goals into user-centric features.</span>
              </li>
            </ul>            
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
