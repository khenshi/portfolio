import type { ExperienceItem } from "@/data/portfolio";

type ExperienceEntryProps = {
  item: ExperienceItem;
  compact?: boolean;
};

export function ExperienceEntry({ item, compact = false }: ExperienceEntryProps) {
  return (
    <article className={`grid min-w-0 gap-[.4rem] border-b border-line pb-6 mb-6 last:mb-0 ${compact ? "min-[961px]:grid-cols-[105px_minmax(0,1fr)] min-[961px]:gap-4 min-[961px]:pb-[1.1rem] min-[961px]:mb-[1.1rem]" : "md:grid-cols-[130px_minmax(0,1fr)] md:gap-6"}`}>
      <p className="m-0 mt-[.2rem] text-[.73rem] tabular-nums text-muted">{item.period}</p>
      <div className="min-w-0">
        <h2 className={`m-0 font-semibold tracking-[-.03em] ${compact ? "text-base" : "text-[1.3rem]"}`}>{item.role}</h2>
        <p className="mt-[.35rem] text-[.82rem] text-muted">{item.company}</p>
        {!compact && (
          <ul className="mt-3 grid list-disc gap-2 pl-[1.15rem] text-[.9rem] leading-[1.55] text-muted">
            {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
        )}
      </div>
    </article>
  );
}
