import Image from "next/image";
import { ArrowUpRight, Building2 } from "lucide-react";

import type { Certificate } from "@/data/portfolio";

type CertificationCardProps = {
  certificate: Certificate;
  compact?: boolean;
};

export function CertificationCard({ certificate, compact = false }: CertificationCardProps) {
  return (
    <article className={`flex min-w-0 flex-col border border-line bg-[color-mix(in_srgb,var(--white)_34%,var(--paper))] p-[1.1rem] transition-[border-color,transform] duration-200 ease-in-out ${compact ? "min-h-[11.5rem] gap-[.7rem] hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--accent)_45%,var(--line))] focus-within:-translate-y-0.5 focus-within:border-[color-mix(in_srgb,var(--accent)_45%,var(--line))]" : ""}`}>
      {compact && (
        <span className="grid h-10 w-10 flex-none place-items-center border border-line bg-[color-mix(in_srgb,var(--white)_34%,var(--paper))] text-accent" aria-hidden="true">
          {certificate.icon ? (
            <Image src={certificate.icon} alt="" width={18} height={18} />
          ) : (
            <Building2 size={18} />
          )}
        </span>
      )}
      <div className={compact ? "block" : "flex items-start justify-between gap-3"}>
        <div>
          <h2 className={`m-0 font-[650] leading-[1.4] ${compact ? "text-[.96rem]" : "text-[.98rem]"}`}>{certificate.title}</h2>
          <p className="mt-[.3rem] text-[.78rem] text-muted">{certificate.issuer}</p>
        </div>
        {!compact && <span className="flex-none text-[.72rem] tabular-nums text-muted">{certificate.date}</span>}
      </div>
      {!compact && certificate.credentialId && (
        <p className="mt-[.9rem] text-[.7rem] text-muted [overflow-wrap:anywhere]">Credential ID: {certificate.credentialId}</p>
      )}
      {certificate.credentialUrl && (
        <a className={`mt-auto inline-flex min-h-[2.4rem] items-center gap-[.35rem] self-start text-[.75rem] font-bold hover:text-accent ${compact ? "pt-0 text-ink" : "pt-4"}`} href={certificate.credentialUrl} target="_blank" rel="noreferrer">
          View certificate <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      )}
    </article>
  );
}
