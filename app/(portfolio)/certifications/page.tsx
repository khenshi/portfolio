import { CertificationCard } from "@/components/portfolio/CertificationCard";
import { PageHeading } from "@/components/portfolio/PageHeading";
import { certificates } from "@/data/portfolio";

export default function CertificationsPage() {
  return (
    <>
      <PageHeading
        eyebrow="Continued learning"
        title="Certifications"
        description="Software, AI, and web credentials."
      />
      <section className="page-section shell certification-grid" aria-label="All certifications">
        {certificates.map((certificate) => (
          <CertificationCard key={certificate.title} certificate={certificate} />
        ))}
      </section>
    </>
  );
}
