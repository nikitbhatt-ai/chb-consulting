import type { Metadata } from "next";
import Link from "next/link";

import { AccentRule } from "@/components/ui/accent-rule";
import { DarkBand } from "@/components/ui/dark-band";
import { getAllPostMeta, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Food Safety Blog for Operators | CHB",
  description:
    "Practical food safety commentary for multi-unit operators and food manufacturers, from a former health inspector and food safety director.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Food Safety Blog for Operators | CHB",
    description:
      "Practical food safety commentary for multi-unit operators and food manufacturers, from a former health inspector and food safety director.",
    url: "/blog",
  },
  twitter: {
    title: "Food Safety Blog for Operators | CHB",
    description:
      "Practical food safety commentary for multi-unit operators and food manufacturers, from a former health inspector and food safety director.",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPostMeta();

  return (
    <>
      {/* Hero */}
      <DarkBand>
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <AccentRule />
          <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            Food safety blog
          </h1>
          <p className="mt-6 text-lg text-on-ink/85 sm:text-xl">
            Commentary that bridges regulatory theory and daily operations.
          </p>
        </div>
      </DarkBand>

      {/* Post list */}
      <section>
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <ul className="divide-y divide-border border-y border-border">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block py-7 focus-visible:outline-none"
                >
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {formatDate(post.date)}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-heading group-hover:text-amber-ink">
                    {post.title}
                  </h2>
                  {post.description ? (
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground">
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
