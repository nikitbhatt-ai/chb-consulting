import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AccentRule } from "@/components/ui/accent-rule";
import { DarkBand } from "@/components/ui/dark-band";
import { CalendlyPopupButton } from "@/components/calendly/calendly-popup-button";

export const metadata: Metadata = {
  title: "Multi-Unit Restaurant Food Safety Consulting | CHB",
  description:
    "Food safety systems for restaurant, convenience, and grocery brands with multiple locations. SOPs, self-inspection programs, audits, and manager training.",
  alternates: { canonical: "/multi-unit-food-safety" },
  openGraph: {
    title: "Multi-Unit Restaurant Food Safety Consulting | CHB",
    description:
      "Food safety systems for restaurant, convenience, and grocery brands with multiple locations. SOPs, self-inspection programs, audits, and manager training.",
    url: "/multi-unit-food-safety",
  },
  twitter: {
    title: "Multi-Unit Restaurant Food Safety Consulting | CHB",
    description:
      "Food safety systems for restaurant, convenience, and grocery brands with multiple locations. SOPs, self-inspection programs, audits, and manager training.",
  },
};

const builds = [
  {
    title: "Food Safety Management Systems",
    body: "A documented program built on Active Managerial Control principles, designed around your menu, your equipment, and your actual staffing model. Not a binder that sits on a shelf.",
  },
  {
    title: "Custom Standard Operating Procedures",
    body: "Most operator SOPs are inherited, outdated, and written by someone in HR rather than a food safety professional. HR documents do not address foodborne illness risk factors. These do.",
  },
  {
    title: "Self-Inspection Programs",
    body: "The highest-return work he does. Managers learn to inspect their own shift against the same criteria a health inspector uses. Done properly, the official inspection stops producing surprises.",
  },
  {
    title: "Food Safety Audits",
    body: "Different from a health inspection. Built around your SOPs and your known critical violations, so it drives the specific behaviors your operation needs rather than a generic checklist.",
  },
  {
    title: "Manager and Staff Training",
    body: "Delivered on site, anywhere in the US. Food safety is culture, and culture does not transfer through a PDF. Teach and coach, in person, in your kitchen.",
  },
  {
    title: "New Openings and Menu Review",
    body: "Regulatory-focused review of new locations and menu changes before they create a compliance problem you have to unwind later.",
  },
];

export default function MultiUnitPage() {
  return (
    <>
      {/* Hero */}
      <DarkBand>
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <AccentRule />
          <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            Food safety systems for multi-unit operators
          </h1>
          <p className="mt-6 text-lg text-on-ink/85 sm:text-xl">
            Consistency across every location, every shift, and every
            jurisdiction.
          </p>
        </div>
      </DarkBand>

      {/* The problem */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <AccentRule />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            The problem
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground sm:text-lg">
            <p>
              Food safety is not a certificate someone carries. It is what your
              team practices when nobody is watching.
            </p>
            <p>
              At one location you can manage that with a good general manager. At
              forty, you cannot. What you get instead is a range: three locations
              that are excellent, thirty that are acceptable, and seven that are
              one inspection away from a headline. The seven are not a training
              problem. They are a system problem.
            </p>
          </div>
        </div>
      </section>

      {/* What he builds */}
      <section className="border-b border-border bg-muted">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <AccentRule />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What he builds
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {builds.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-card p-7 shadow-sm"
              >
                <h3 className="text-lg font-semibold leading-snug text-heading">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Short AI block */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-border bg-muted p-8">
            <p className="text-base leading-relaxed text-foreground sm:text-lg">
              CHB can also automate your self-inspection checklists and SOP
              maintenance, and build custom AI tooling around how your operation
              actually runs. Scoped per project.
            </p>
            <Link
              href="/health-department-czar"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-amber-ink underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              See the full AI systems section
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-b border-border bg-muted">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <figure>
            <blockquote className="font-serif text-2xl font-medium leading-snug text-heading sm:text-3xl">
              &ldquo;Chirag considers all the facts and doesn&rsquo;t overlook a
              single detail while at the same time he thoroughly grasps the big
              picture, business, and the current food safety issues.&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">
              &mdash; [NAME], [TITLE], [COMPANY]
            </figcaption>
          </figure>
        </div>
      </section>

      {/* CTA */}
      <DarkBand>
        <div className="mx-auto flex max-w-3xl justify-center px-4 py-16 sm:px-6 lg:px-8">
          <CalendlyPopupButton size="lg">
            Book a 30-minute call
          </CalendlyPopupButton>
        </div>
      </DarkBand>
    </>
  );
}
