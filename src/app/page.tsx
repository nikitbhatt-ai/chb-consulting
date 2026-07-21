import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Quote, Utensils } from "lucide-react";

import { CalendlyPopupButton } from "@/components/calendly/calendly-popup-button";
import { CalendlyInline } from "@/components/calendly/calendly-inline";
import { StructuredData } from "@/components/schema/structured-data";
import { DarkBand } from "@/components/ui/dark-band";
import { ImageSlot } from "@/components/ui/image-slot";

export const metadata: Metadata = {
  title: "Food Safety Consultant for Multi-Unit Operators | CHB",
  description:
    "Former health inspector and food safety director for a 1,700-location chain. CHB keeps multi-unit restaurant and retail brands inspection-ready. Book a 20-minute call.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Food Safety Consultant for Multi-Unit Operators | CHB",
    description:
      "Former health inspector and food safety director for a 1,700-location chain. CHB keeps multi-unit restaurant and retail brands inspection-ready.",
    url: "/",
  },
  twitter: {
    title: "Food Safety Consultant for Multi-Unit Operators | CHB",
    description:
      "Former health inspector and food safety director for a 1,700-location chain. CHB keeps multi-unit restaurant and retail brands inspection-ready.",
  },
};

const services = [
  {
    title: "Health Department Czar",
    href: "/health-department-czar",
    body: "A retained relationship. He handles your health department directly: interpreting findings, negotiating reasonable remedies, and heading off the inspection that ends up on the local news.",
  },
  {
    title: "Food Safety Audits and Self-Inspection Systems",
    href: "/multi-unit-food-safety",
    body: "A custom audit built around your SOPs and your real violation history, plus the training that teaches your managers to run it themselves between visits.",
  },
  {
    title: "Pre-Opening Consultation",
    href: "/multi-unit-food-safety",
    body: "A walkthrough before you sign. The same idea as a home inspection before a mortgage, applied to the space you are about to commit to.",
  },
];

/** Small amber accent rule used above section headings. */
function AccentRule() {
  return <div className="mb-6 h-1 w-12 rounded-full bg-amber" aria-hidden="true" />;
}

export default function HomePage() {
  return (
    <>
      <StructuredData />

      {/* Hero */}
      <DarkBand>
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:px-8">
          <div className="max-w-2xl">
            <AccentRule />
            <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              One bad inspection becomes a brand problem across every location.
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-on-ink/85 sm:text-xl">
              CHB Food Safety Consulting keeps multi-unit restaurant,
              convenience, and grocery operators inspection-ready. Founded by
              Chirag Bhatt, a former city health inspector, Health Department
              Program Chief, and food safety director for a 1,700-location
              restaurant brand.
            </p>
            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <CalendlyPopupButton size="lg">
                Book a 20-minute inspection readiness call
              </CalendlyPopupButton>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-amber-bright underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                Or send a note
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-xl border border-[color:var(--on-ink-border)] shadow-xl lg:min-h-[440px]">
            <Image
              src="/images/food-tray.jpg"
              alt="Fresh vegetables, sliced proteins, cheeses, and prepared toppings arranged across a multi-unit foodservice salad bar"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </DarkBand>

      {/* The credential */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.6fr_1fr] lg:gap-16 lg:px-8">
          <div className="max-w-2xl">
            <AccentRule />
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              He has sat on both sides of the inspection table.
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground sm:text-lg">
              <p>
                Most food safety consultants have worked in operations. A few
                have worked in regulation. Chirag Bhatt has spent nearly four
                decades doing both.
              </p>
              <p>
                He began as a health inspector with the City of Houston public
                health agency and advanced to Health Department Program Chief.
                He then implemented inspection technology for public health
                agencies in Washington DC, Chicago, San Antonio, and Tulsa. He
                went on to serve as Regulatory Affairs Manager, Technical
                Services Director, and Food Safety and QA Director for a
                publicly traded restaurant company with 1,700 locations, a
                national distribution company, and one of the largest
                convenience store chains in the country.
              </p>
              <p>
                A manager at that restaurant company introduced him as the
                person who speaks Health Departmanese.
              </p>
              <p>
                That is the whole value. He knows what the inspector is looking
                for, because he used to be the one looking. And he knows what it
                costs to fix it, because he has carried that budget.
              </p>
            </div>
          </div>
          <div className="lg:pt-2">
            <ImageSlot
              tone="light"
              label="Chirag Bhatt"
              note="Professional headshot (portrait)"
              icon={<Camera className="h-5 w-5" />}
              className="aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      {/* Three ways he works */}
      <section className="border-b border-border bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <AccentRule />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Three ways he works
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col rounded-lg border border-border bg-card p-7 shadow-sm transition-colors hover:border-amber/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <h3 className="text-lg font-semibold leading-snug text-heading">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
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

      {/* Who he works with */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div>
            <AccentRule />
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Built for operators with more than one location.
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground sm:text-lg">
              <p>
                Single-location problems are usually training problems.
                Multi-location problems are system problems, and they compound.
                CHB builds the systems: standard operating procedures,
                self-inspection programs, and Active Managerial Control
                practices that hold up across every shift, every store, and
                every inspector in every jurisdiction you operate in.
              </p>
              <p>
                He also works with food manufacturers on HACCP plans, food
                safety plans, and regulatory readiness.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-8">
              <Link
                href="/multi-unit-food-safety"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-ink underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                For multi-unit operators
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/food-manufacturing-consulting"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-ink underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                For food manufacturers
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ImageSlot
            tone="light"
            label="Food image"
            note="Multi-unit kitchen or retail foodservice"
            icon={<Utensils className="h-5 w-5" />}
            className="aspect-[5/4]"
          />
        </div>
      </section>

      {/* Proof */}
      <DarkBand glow={false}>
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <figure>
            <Quote className="h-9 w-9 text-amber" aria-hidden="true" />
            <blockquote className="mt-6 font-serif text-2xl font-medium leading-snug sm:text-3xl">
              &ldquo;He has a superb background in food safety, regulatory laws,
              audit schemes, and compliance.&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm text-on-ink-muted">
              &mdash; [NAME], [TITLE], [COMPANY]
            </figcaption>
          </figure>
        </div>
      </DarkBand>

      {/* Closing CTA */}
      <DarkBand>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <AccentRule />
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Twenty minutes will tell you whether this is worth a longer
              conversation.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-on-ink/85 sm:text-lg">
              No pitch deck and no obligation. Bring your last three inspection
              reports and he will tell you what he sees.
            </p>
          </div>
          <div className="mt-10 rounded-xl bg-background p-2 shadow-lg">
            <CalendlyInline />
          </div>
        </div>
      </DarkBand>
    </>
  );
}
