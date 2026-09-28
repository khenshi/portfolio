type PageHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageHeading({ eyebrow, title, description }: PageHeadingProps) {
  return (
    <header className="page-heading shell">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {description && <p className="page-description">{description}</p>}
    </header>
  );
}
