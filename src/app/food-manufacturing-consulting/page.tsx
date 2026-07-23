import type { Metadata } from "next";

import { AccentRule } from "@/components/ui/accent-rule";
import { DarkBand } from "@/components/ui/dark-band";
import { CalendlyPopupButton } from "@/components/calendly/calendly-popup-button";

export const metadata: Metadata = {
  title: "HACCP and Food Safety Plan Consulting | CHB",
  description:
    "HACCP plans, food safety plans, SOPs, and FDA and USDA regulatory readiness for food manufacturers and processors. HACCP certified consultant.",
  alternates: { canonical: "/food-manufacturing-consulting" },
  openGraph: {
    title: "HACCP and Food Safety Plan Consulting | CHB",
    description:
      "HACCP plans, food safety plans, SOPs, and FDA and USDA regulatory readiness for food manufacturers and processors. HACCP certified consultant.",
    url: "/food-manufacturing-consulting",
  },
  twitter: {
    title: "HACCP and Food Safety Plan Consulting | CHB",
    description:
      "HACCP plans, food safety plans, SOPs, and FDA and USDA regulatory readiness for food manufacturers and processors. HACCP certified consultant.",
  },
};

const scope = [
  "HACCP plan development, validation, and revision",
  "Food safety plans and hazard analysis",
  "Standard operating procedures and corrective action planning",
  "FDA, USDA, and state regulatory inspection readiness",
  "Mock inspections and gap assessments",
  "Executive-level reporting and updates",
  "Custom training for QA and production teams",
];

export default function FoodManufacturingPage() {
  return (
    <>
      {/* Hero */}
      <DarkBand>
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <AccentRule />
          <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            HACCP and regulatory consulting for food manufacturers
          </h1>
          <p className="mt-6 text-lg text-on-ink/85 sm:text-xl">
            Plans that hold up to inspection, written by someone who used to run
            the inspections.
          </p>
        </div>
      </DarkBand>

      {/* Scope */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <AccentRule />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Scope
          </h2>
          <p className="mt-8 text-base leading-relaxed text-foreground sm:text-lg">
            Chirag and his team work with food manufacturers and processors,
            large and small,
            on:
          </p>
          <ul className="mt-6 space-y-4">
            {scope.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-base leading-relaxed text-foreground sm:text-lg"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base leading-relaxed text-foreground sm:text-lg">
            Chirag Bhatt is HACCP certified and has consulted for manufacturing
            operations at both ends of the size range, in addition to nearly
            four decades in regulatory and multi-unit food safety leadership.
          </p>
        </div>
      </section>

      {/* What he does not do */}
      <section className="border-b border-border bg-muted">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <AccentRule />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What he does not do
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground sm:text-lg">
            <p>
              He does not prepare facilities for GFSI certification schemes such
              as SQF, BRCGS, or FSSC 22000. If certification is your objective,
              you want a certified practitioner in that specific scheme, and he
              will tell you that in the first conversation rather than the third
              month.
            </p>
            <p>
              What he does bring is the regulatory side: what an inspector will
              look for, how a finding gets documented, and how to close it out
              cleanly.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <figure>
            <blockquote className="font-serif text-2xl font-medium leading-snug text-heading sm:text-3xl">
              &ldquo;In addition to Food Safety, he also has vast experience with
              creating standard operating procedures and corrective action
              planning, as well as providing executive updates.&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">
              &mdash; Former Supply Chain SVP
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
