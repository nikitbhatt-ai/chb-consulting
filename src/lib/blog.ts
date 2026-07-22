import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  title: string;
  description: string;
  date: string; // ISO string, e.g. "2026-07-20"
  slug: string;
}

export interface Post extends PostMeta {
  html: string;
}

function readPostFile(file: string): { meta: PostMeta; body: string } {
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const slug = String(data.slug ?? file.replace(/\.md$/, ""));
  return {
    meta: {
      title: String(data.title ?? slug),
      description: String(data.description ?? ""),
      date: String(data.date ?? ""),
      slug,
    },
    body: content,
  };
}

export function getAllPostMeta(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => readPostFile(f).meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllSlugs(): string[] {
  return getAllPostMeta().map((p) => p.slug);
}

export function getPostBySlug(slug: string): Post | null {
  if (!fs.existsSync(BLOG_DIR)) return null;
  const file = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .find((f) => readPostFile(f).meta.slug === slug);
  if (!file) return null;
  const { meta, body } = readPostFile(file);
  const html = marked.parse(body, { async: false }) as string;
  return { ...meta, html };
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** Format an ISO date string (YYYY-MM-DD) without locale surprises. */
export function formatDate(iso: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso);
  if (!match) return iso;
  const [, y, m, d] = match;
  return `${MONTHS[Number(m) - 1]} ${Number(d)}, ${y}`;
}
