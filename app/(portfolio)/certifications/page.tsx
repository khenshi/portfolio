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
      <section className="mx-auto grid w-full max-w-[1060px] grid-cols-[repeat(auto-fit,minmax(min(100%,265px),1fr))] gap-4 pb-16 pt-11 max-[760px]:grid-cols-1 max-[760px]:pb-12 max-[760px]:pt-8" aria-label="All certifications">
        {certificates.map((certificate) => (
          <CertificationCard key={certificate.title} certificate={certificate} />
        ))}
      </section>
    </>
  );
}
