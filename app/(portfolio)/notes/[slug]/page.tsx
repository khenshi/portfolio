import type { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { getNoteBySlug, getNotes } from "@/lib/notes";

type NotePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getNotes().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) return { title: "Note not found" };

  return {
    title: `${note.title} — Khenyshi Hinlog`,
    description: note.excerpt || `Online note by Khenyshi Hinlog: ${note.title}`,
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) notFound();

  return (
    <>
      <header className="mx-auto w-full max-w-[1060px] py-4 pb-7">
        <Link href="/notes" className="mb-4 inline-flex min-h-10 items-center gap-[.45rem] text-[.78rem] font-semibold text-muted hover:text-accent">
          <ArrowLeft size={15} aria-hidden="true" /> All notes
        </Link>
        <p className="mb-[.7rem] mt-0 text-[.72rem] font-bold uppercase tracking-[.13em] text-muted">Online Notes</p>
        {!note.hasTitleHeading && <h1 className="m-0 border-b border-line pb-[1.4rem] text-[clamp(2.125rem,5.1vw,4.08rem)] font-medium leading-[1.02] tracking-[-.06em] [overflow-wrap:anywhere]">{note.title}</h1>}
      </header>
      <article className="mx-auto w-full max-w-[760px] pb-14 pt-3 text-[.94rem] leading-[1.7] text-ink [&_h1]:m-0 [&_h1]:border-b [&_h1]:border-line [&_h1]:pb-[1.4rem] [&_h1]:text-[clamp(2.125rem,5.1vw,4.08rem)] [&_h1]:font-medium [&_h1]:leading-[1.02] [&_h1]:tracking-[-.06em] [&_h1]:[overflow-wrap:anywhere] [&_h2]:mb-[.65rem] [&_h2]:mt-8 [&_h2]:text-[clamp(1.6rem,3vw,2.2rem)] [&_h2]:font-medium [&_h2]:leading-[1.15] [&_h2]:tracking-[-.04em] [&_h3]:mb-2 [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:leading-[1.25] [&_h3]:tracking-[-.02em] [&_h4]:mb-2 [&_h4]:mt-6 [&_h4]:font-semibold [&_h4]:leading-[1.25] [&_h4]:tracking-[-.02em] [&_h5]:mb-2 [&_h5]:mt-6 [&_h5]:font-semibold [&_h5]:leading-[1.25] [&_h5]:tracking-[-.02em] [&_h6]:mb-2 [&_h6]:mt-6 [&_h6]:font-semibold [&_h6]:leading-[1.25] [&_h6]:tracking-[-.02em] [&_p]:my-3 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_li+li]:mt-[.35rem] [&_a]:text-accent-dark [&_a]:underline [&_a]:decoration-accent/45 [&_a]:underline-offset-[.18em] [&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:py-[.15rem] [&_blockquote]:pl-[1.1rem] [&_blockquote]:text-muted [&_blockquote>p:first-child]:mt-0 [&_pre]:max-w-full [&_pre]:overflow-x-auto [&_pre]:border [&_pre]:border-line [&_pre]:bg-[color-mix(in_srgb,var(--ink)_4%,var(--paper))] [&_pre]:p-4 [&_pre]:text-[.82rem] [&_pre]:leading-[1.65] [&_:not(pre)>code]:bg-[color-mix(in_srgb,var(--ink)_6%,var(--paper))] [&_:not(pre)>code]:px-[.3rem] [&_:not(pre)>code]:py-[.12rem] [&_:not(pre)>code]:text-[.86em] [&_:not(pre)>code]:[overflow-wrap:anywhere] [&_table]:block [&_table]:max-w-full [&_table]:overflow-x-auto [&_table]:border-collapse [&_table]:text-[.85rem] [&_th]:min-w-28 [&_th]:border [&_th]:border-line [&_th]:bg-[color-mix(in_srgb,var(--ink)_4%,var(--paper))] [&_th]:p-[.55rem_.75rem] [&_th]:text-left [&_th]:font-semibold [&_th]:align-top [&_td]:min-w-28 [&_td]:border [&_td]:border-line [&_td]:p-[.55rem_.75rem] [&_td]:text-left [&_td]:align-top [&_hr]:my-8 [&_hr]:h-px [&_hr]:border-0 [&_hr]:bg-line [&_img]:h-auto [&_img]:max-w-full [&_input[type=checkbox]]:accent-accent">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{note.content}</ReactMarkdown>
      </article>
    </>
  );
}
