import type { ExperienceItem } from "@/data/portfolio";

type ExperienceEntryProps = {
  item: ExperienceItem;
  compact?: boolean;
};

export function ExperienceEntry({ item, compact = false }: ExperienceEntryProps) {
  const bullets = compact ? item.bullets.slice(0, 1) : item.bullets;

  return (
    <article className={`experience-entry${compact ? " is-compact" : ""}`}>
      <p className="experience-period">{item.period}</p>
      <div>
        <h2>{item.role}</h2>
        <p className="experience-company">{item.company}</p>
        {!compact && (
          <ul className="experience-bullets">
            {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
        )}
        {compact && <p className="experience-summary">{bullets[0]}</p>}
      </div>
    </article>
  );
}
