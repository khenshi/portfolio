import { ArrowUpRight, FileText } from "lucide-react";
import Link from "next/link";

import { PageHeading } from "@/components/portfolio/PageHeading";
import { getNotes } from "@/lib/notes";

export default function NotesPage() {
  const notes = getNotes();

  return (
    <>
      <PageHeading
        eyebrow="Writing & references"
        title="Online Notes"
        description="Notes from projects and learning."
      />
      <section className="mx-auto w-full max-w-[1060px] pb-16 pt-11 max-[760px]:pb-12 max-[760px]:pt-8" aria-label="Published notes">
        {notes.length === 0 ? (
          <div className="grid min-h-[200px] place-content-center justify-items-center border border-dashed border-line p-6 text-center text-muted [&_svg]:text-accent [&_h2]:m-0 [&_h2]:mt-3 [&_h2]:text-[1.15rem] [&_h2]:font-semibold [&_h2]:text-ink [&_p]:m-0 [&_p]:mt-2 [&_p]:text-[.85rem] [&_p]:leading-[1.6]">
            <FileText size={24} strokeWidth={1.5} aria-hidden="true" />
            <h2>No notes yet</h2>
            <p>Add Markdown files to <code>content/notes/</code> to publish notes.</p>
          </div>
        ) : (
          <div className="border-t border-line">
            {notes.map((note) => (
              <article key={note.slug} className="border-b border-line">
                <Link href={`/notes/${encodeURIComponent(note.slug)}`} className="group grid grid-cols-[2.4rem_minmax(0,1fr)_1.25rem] items-start gap-[.85rem] px-[.15rem] py-4">
                  <span className="grid h-[2.3rem] w-[2.3rem] place-items-center border border-line text-accent"><FileText size={18} strokeWidth={1.6} aria-hidden="true" /></span>
                  <span className="grid gap-[.35rem]">
                    <span className="text-base font-[650] tracking-[-.015em] group-hover:text-accent">{note.title}</span>
                    {note.excerpt && <span className="text-[.82rem] leading-[1.6] text-muted">{note.excerpt}</span>}
                  </span>
                  <ArrowUpRight className="justify-self-end text-muted group-hover:text-accent" size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
