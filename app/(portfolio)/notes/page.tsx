import { FileText } from "lucide-react";

import { PageHeading } from "@/components/portfolio/PageHeading";

export default function NotesPage() {
  return (
    <>
      <PageHeading
        eyebrow="Writing & references"
        title="Online Notes"
        description="Short notes, ideas, and references from the things I build and learn."
      />
      <section className="page-section shell">
        <div className="notes-empty-state">
          <FileText size={24} strokeWidth={1.5} aria-hidden="true" />
          <h2>No notes published yet</h2>
          <p>Notes will appear here as they are added to the portfolio.</p>
        </div>
      </section>
    </>
  );
}
