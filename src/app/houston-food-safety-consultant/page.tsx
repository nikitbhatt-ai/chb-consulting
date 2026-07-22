import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { AccentRule } from "@/components/ui/accent-rule";
import { DarkBand } from "@/components/ui/dark-band";
import { CalendlyPopupButton } from "@/components/calendly/calendly-popup-button";

export const metadata: Metadata = {
  title: "Houston Food Safety Consultant | Restaurants and Retail",
  description:
    "Houston-based food safety consulting for restaurants, convenience stores, grocery, and food manufacturers. Former City of Houston health inspector. On-site across Texas.",
  alternates: { canonical: "/houston-food-safety-consultant" },
  openGraph: {
    title: "Houston Food Safety Consultant | Restaurants and Retail",
    description:
      "Houston-based food safety consulting for restaurants, convenience stores, grocery, and food manufacturers. Former City of Houston health inspector. On-site across Texas.",
    url: "/houston-food-safety-consultant",
  },
  twitter: {
    title: "Houston Food Safety Consultant | Restaurants and Retail",
    description:
      "Houston-based food safety consulting for restaurants, convenience stores, grocery, and food manufacturers. Former City of Houston health inspector. On-site across Texas.",
  },
};

const localServices = [
  {
    title: "Health Department Czar",
    href: "/health-department-czar",
    body: "Retained representation with the Houston Health Department, Harris County, and surrounding jurisdictions.",
  },
  {
    title: "Multi-Unit Food Safety",
    href: "/multi-unit-food-safety",
    body: "SOPs, self-inspection programs, audits, and manager training for operators with locations across Houston and Texas.",
  },
  {
    title: "Food Manufacturing",
    href: "/food-manufacturing-consulting",
    body: "HACCP plans, food safety plans, and FDA and USDA readiness for Houston-area manufacturers and processors.",
  },
];

export default function HoustonPage() {
  return (
    <>
      {/* Hero */}
      <DarkBand>
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <AccentRule />
          <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            Houston food safety consultant
          </h1>
          <p className="mt-6 text-lg text-on-ink/85 sm:text-xl">
            Based in Houston. On site anywhere in the US.
          </p>
        </div>
      </DarkBand>

      {/* Body */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="space-y-6 text-base leading-relaxed text-foreground sm:text-lg">
            <p>
              CHB Food Safety Consulting is based in Houston, Texas, where Chirag
              Bhatt began his career as a health inspector with the City of
              Houston public health agency and advanced to Health Department
              Program Chief.
            </p>
            <p>
              That matters locally in a way it does not anywhere else. He knows
              how Houston Health Department inspections are conducted, how
              findings are documented, and who to talk to when something needs to
              be resolved rather than escalated. He has the same working
              knowledge of Harris County and surrounding jurisdictions.
            </p>
            <p>
              CHB serves operators throughout the Houston metro, including Katy,
              Sugar Land, The Woodlands, Pearland, Cypress, Spring, Baytown, and
              the Heights, as well as brands operating across Texas in Dallas,
              Austin, San Antonio, and Fort Worth.
            </p>
            <p>For multi-unit clients, on-site work is available anywhere in the US.</p>
          </div>
        </div>
      </section>

      {/* Local services */}
      <section className="border-b border-border bg-muted">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <AccentRule />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            How CHB helps Houston operators
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {localServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col rounded-lg border border-border bg-card p-7 shadow-sm transition-colors hover:border-amber/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <h3 className="text-lg font-semibold leading-snug text-heading">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
                  {service.body}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-amber-ink">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
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
