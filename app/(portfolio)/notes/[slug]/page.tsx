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
      <header className="note-detail-heading shell">
        <Link href="/notes" className="note-back-link">
          <ArrowLeft size={15} aria-hidden="true" /> All notes
        </Link>
        <p className="eyebrow">Online Notes</p>
        {!note.hasTitleHeading && <h1>{note.title}</h1>}
      </header>
      <article className="markdown-content shell">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{note.content}</ReactMarkdown>
      </article>
    </>
  );
}
