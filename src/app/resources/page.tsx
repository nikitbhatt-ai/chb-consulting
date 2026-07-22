import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AccentRule } from "@/components/ui/accent-rule";
import { DarkBand } from "@/components/ui/dark-band";
import { LeadForm } from "@/components/resources/lead-form";
import { getAllPostMeta, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Food Safety Resources for Operators | CHB",
  description:
    "Practical food safety tools, guides, and commentary for multi-unit operators and food manufacturers. Free self-inspection checklist.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Food Safety Resources for Operators | CHB",
    description:
      "Practical food safety tools, guides, and commentary for multi-unit operators and food manufacturers. Free self-inspection checklist.",
    url: "/resources",
  },
  twitter: {
    title: "Food Safety Resources for Operators | CHB",
    description:
      "Practical food safety tools, guides, and commentary for multi-unit operators and food manufacturers. Free self-inspection checklist.",
  },
};

export default function ResourcesPage() {
  const posts = getAllPostMeta().slice(0, 5);

  return (
    <>
      {/* Hero */}
      <DarkBand>
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <AccentRule />
          <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            Food safety resources
          </h1>
          <p className="mt-6 text-lg text-on-ink/85 sm:text-xl">
            Practical tools that bridge regulatory theory and daily operations.
          </p>
        </div>
      </DarkBand>

      {/* Lead magnet */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-muted p-8 sm:p-10">
            <AccentRule />
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              The Pre-Inspection Self-Audit Checklist
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground sm:text-lg">
              A one-page checklist your managers can run before every shift,
              built from the violations that actually shut restaurants down.
              Free.
            </p>
            <div className="mt-8 max-w-2xl">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* From the blog */}
      <section>
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <AccentRule />
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                From the blog
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-amber-ink underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              All posts
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block py-6 focus-visible:outline-none"
                >
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {formatDate(post.date)}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-heading group-hover:text-amber-ink">
                    {post.title}
                  </h3>
                  {post.description ? (
                    <p className="mt-2 text-sm leading-relaxed text-foreground">
                      {post.description}
                    </p>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
