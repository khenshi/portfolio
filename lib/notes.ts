import "server-only";

import { readdirSync, readFileSync } from "node:fs";
import { resolve, sep } from "node:path";

export type NoteSummary = {
  slug: string;
  title: string;
  excerpt: string;
};

export type Note = NoteSummary & {
  content: string;
  hasTitleHeading: boolean;
};

const notesDirectory = resolve(process.cwd(), "content", "notes");

function listMarkdownFiles() {
  try {
    return readdirSync(notesDirectory, { withFileTypes: true })
      .filter((entry) => entry.isFile() && entry.name.endsWith(".md"))
      .map((entry) => entry.name);
  } catch {
    return [];
  }
}

function stripInlineMarkdown(value: string) {
  return value
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/<[^>]*>/g, "")
    .replace(/[*_~]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function titleFromMarkdown(slug: string, content: string) {
  let activeFence = "";

  for (const line of content.split(/\r?\n/)) {
    const fence = line.match(/^\s*(`{3,}|~{3,})/);
    if (fence) {
      const marker = fence[1][0];
      activeFence = activeFence ? (activeFence === marker ? "" : activeFence) : marker;
      continue;
    }
    if (activeFence) continue;

    const heading = line.match(/^\s*#\s+(.+?)\s*#*\s*$/);
    if (heading) {
      return { title: stripInlineMarkdown(heading[1]), hasTitleHeading: true };
    }
  }

  const filenameTitle = slug
    .split(/[-_]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  return { title: filenameTitle || "Untitled note", hasTitleHeading: false };
}

function excerptFromMarkdown(content: string) {
  const paragraph: string[] = [];
  let activeFence = "";

  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    const fence = trimmed.match(/^(`{3,}|~{3,})/);
    if (fence) {
      const marker = fence[1][0];
      activeFence = activeFence ? (activeFence === marker ? "" : activeFence) : marker;
      continue;
    }
    if (activeFence) continue;

    if (!trimmed) {
      if (paragraph.length > 0) break;
      continue;
    }

    const isBlockStart = /^(#{1,6}\s|>|[-*+]\s|\d+\.\s|---\s*$|\[[^\]]+\]:)/.test(trimmed);
    if (isBlockStart) {
      if (paragraph.length > 0) break;
      continue;
    }

    paragraph.push(trimmed);
  }

  const excerpt = stripInlineMarkdown(paragraph.join(" "));
  return excerpt.length > 180 ? `${excerpt.slice(0, 177).trimEnd()}…` : excerpt;
}

function readNoteFile(filename: string): Note | null {
  const slug = filename.slice(0, -".md".length);
  const filePath = resolve(notesDirectory, filename);
  if (!filePath.startsWith(`${notesDirectory}${sep}`)) return null;

  try {
    const content = readFileSync(filePath, "utf8");
    const titleMetadata = titleFromMarkdown(slug, content);
    return {
      slug,
      ...titleMetadata,
      excerpt: excerptFromMarkdown(content),
      content,
    };
  } catch {
    return null;
  }
}

export function getNotes(): NoteSummary[] {
  return listMarkdownFiles()
    .map(readNoteFile)
    .filter((note): note is Note => note !== null)
    .map(({ slug, title, excerpt }) => ({ slug, title, excerpt }))
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getNoteBySlug(slug: string): Note | null {
  const filename = listMarkdownFiles().find((entry) => entry.slice(0, -".md".length) === slug);
  return filename ? readNoteFile(filename) : null;
}
