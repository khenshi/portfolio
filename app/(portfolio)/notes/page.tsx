import { FileText } from "lucide-react";
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
        description="Short notes, ideas, and references from the things I build and learn."
      />
      <section className="page-section shell" aria-label="Published notes">
        {notes.length === 0 ? (
          <div className="notes-empty-state">
            <FileText size={24} strokeWidth={1.5} aria-hidden="true" />
            <h2>No notes published yet</h2>
            <p>Notes will appear here as they are added to the portfolio.</p>
          </div>
        ) : (
          <div className="notes-list">
            {notes.map((note) => (
              <article key={note.slug} className="note-card">
                <Link href={`/notes/${encodeURIComponent(note.slug)}`} className="note-card-link">
                  <span className="note-card-icon"><FileText size={18} strokeWidth={1.6} aria-hidden="true" /></span>
                  <span className="note-card-copy">
                    <span className="note-card-title">{note.title}</span>
                    {note.excerpt && <span className="note-card-excerpt">{note.excerpt}</span>}
                  </span>
                  <span className="note-card-arrow" aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
