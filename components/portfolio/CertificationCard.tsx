import { ArrowUpRight } from "lucide-react";

import type { Certificate } from "@/data/portfolio";

type CertificationCardProps = {
  certificate: Certificate;
  compact?: boolean;
};

export function CertificationCard({ certificate, compact = false }: CertificationCardProps) {
  return (
    <article className={`certification-card${compact ? " is-compact" : ""}`}>
      <div className="certification-card-heading">
        <div>
          <h2>{certificate.title}</h2>
          <p>{certificate.issuer}</p>
        </div>
        <span className="certification-date">{certificate.date}</span>
      </div>
      {!compact && certificate.credentialId && (
        <p className="credential-id">Credential ID: {certificate.credentialId}</p>
      )}
      {certificate.credentialUrl && (
        <a href={certificate.credentialUrl} target="_blank" rel="noreferrer">
          View certificate <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      )}
    </article>
  );
}
