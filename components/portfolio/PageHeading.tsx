type PageHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHeading({ eyebrow, title, description }: PageHeadingProps) {
  return (
    <header className="mx-auto w-full max-w-[1060px] border-b border-line py-6 pb-10 max-[760px]:py-5 max-[760px]:pb-8">
      <p className="mb-[.65rem] mt-0 text-[.72rem] font-bold uppercase tracking-[.13em] text-muted">{eyebrow}</p>
      <h1 className="m-0 max-w-[780px] text-[clamp(2.55rem,5.95vw,5.27rem)] font-medium leading-[.98] tracking-[-.065em] max-[760px]:text-[clamp(2.3rem,10.2vw,3.825rem)]">
        {title}
      </h1>
      {description && <p className="mt-[.9rem] max-w-[600px] text-base leading-[1.55] text-muted">{description}</p>}
    </header>
  );
}
