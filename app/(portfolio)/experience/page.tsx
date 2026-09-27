import { ExperienceEntry } from "@/components/portfolio/ExperienceEntry";
import { PageHeading } from "@/components/portfolio/PageHeading";
import { experience } from "@/data/portfolio";

export default function ExperiencePage() {
  return (
    <>
      <PageHeading
        eyebrow="Work & education"
        title="Experience"
        description="Work and education history."
      />
      <section className="page-section shell experience-page-list" aria-label="Work and education history">
        {experience.map((item) => <ExperienceEntry key={item.role} item={item} />)}
      </section>
    </>
  );
}
