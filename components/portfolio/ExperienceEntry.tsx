import type { ExperienceItem } from "@/data/portfolio";

type ExperienceEntryProps = {
  item: ExperienceItem;
  compact?: boolean;
};

export function ExperienceEntry({ item, compact = false }: ExperienceEntryProps) {
  return (
    <article className={`experience-entry${compact ? " is-compact" : ""}`}>
      <p className="experience-period">{item.period}</p>
      <div>
        <h2>{item.role}</h2>
        <p className="experience-company">{item.company}</p>
        {!compact && (
          <ul className="experience-bullets">
            {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
        )}
      </div>
    </article>
  );
}
