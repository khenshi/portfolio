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
      <section className="mx-auto grid w-full max-w-[1060px] gap-0 pb-16 pt-11 max-[760px]:pb-12 max-[760px]:pt-8" aria-label="Work and education history">
        {experience.map((item) => <ExperienceEntry key={item.role} item={item} />)}
      </section>
    </>
  );
}
