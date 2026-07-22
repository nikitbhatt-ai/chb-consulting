import type { Metadata } from "next";
import Image from "next/image";

import { CalendlyPopupButton } from "@/components/calendly/calendly-popup-button";
import { DarkBand } from "@/components/ui/dark-band";
import { ImageSlot } from "@/components/ui/image-slot";
import { Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "About Chirag Bhatt | CHB Food Safety Consulting",
  description:
    "Nearly four decades in food safety across regulatory agencies, multi-unit restaurant brands, and food manufacturing. Former health inspector and Health Department Program Chief.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Chirag Bhatt | CHB Food Safety Consulting",
    description:
      "Nearly four decades in food safety across regulatory agencies, multi-unit restaurant brands, and food manufacturing.",
    url: "/about",
  },
  twitter: {
    title: "About Chirag Bhatt | CHB Food Safety Consulting",
    description:
      "Nearly four decades in food safety across regulatory agencies, multi-unit restaurant brands, and food manufacturing.",
  },
};

function AccentRule() {
  return <div className="mb-6 h-1 w-12 rounded-full bg-amber" aria-hidden="true" />;
}

const career = [
  {
    label: "As a senior regulator",
    body: "with the City of Houston, where I led with an “Education First” approach for 26 years.",
  },
  {
    label: "As Global Regulatory Compliance Manager",
    body: "for Bloomin’ Brands, a publicly traded restaurant company with more than 1,700 locations.",
  },
  {
    label: "As Director of Food Safety & QA",
    body: "for Buc-ee’s and for Sysco, a top-tier national food distribution company.",
  },
  {
    label: "As a trusted advisor",
    body: "helping public health agencies in Washington D.C., Chicago, San Antonio, and beyond modernize their systems.",
  },
];

const reasons = [
  {
    label: "Proven results across the supply chain",
    body: "From manufacturing and distribution to multi-unit restaurants and high-volume convenience operations.",
  },
  {
    label: "Practical, not punitive",
    body: "I build systems that work in real kitchens, with real teams, under real pressure.",
  },
  {
    label: "Regulatory insight others lack",
    body: "Deep understanding of the FDA Food Code, local, state, and federal expectations, and how to influence positive outcomes with inspectors.",
  },
  {
    label: "End-to-end expertise",
    body: "Risk assessments, program development, audit preparation, corrective action plans, SOPs, technology implementation, training, and executive reporting.",
  },
];

const services = [
  "Comprehensive food safety program development and gap assessments",
  "Audit readiness: internal, third-party, and regulatory",
  "Corrective action planning and sustained compliance",
  "Team training and culture transformation",
  "Regulatory interpretation and agency liaison support",
  "SOP development and operational excellence initiatives",
  "Keynote speaking and leadership presentations",
];

const testimonials = [
  {
    quote:
      "Chirag has a superb background in food safety, regulatory laws, audit schemes, and compliance. He is extremely friendly and uses a collaborative approach to problem solving.",
    attribution: "Former Manager",
  },
  {
    quote:
      "He related very well to operators and health department officials across the country.",
    attribution: "Former Concept President",
  },
  {
    quote:
      "Chirag is a consummate professional, always willing to volunteer his time to help others improve their food safety programs, sharing best practices and leading new ideas for regulatory improvements.",
    attribution: "Public Health Expert and Industry Leader",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <DarkBand>
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-8">
          <div>
            <AccentRule />
            <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
              About Chirag Bhatt
            </h1>
            <p className="mt-6 text-lg font-medium text-amber-bright sm:text-xl">
              Forty years bridging the gap between regulators and operators.
            </p>
            <p className="mt-6 text-base leading-relaxed text-on-ink/85 sm:text-lg">
              In the food industry, regulations aren&rsquo;t just checkboxes
              &mdash; they are your shield against costly fines, shutdowns, brand
              damage, and lawsuits. CHB Food Safety Consulting helps restaurant
              groups, convenience store chains, distributors, and foodservice
              operators achieve best-in-class food safety without the usual
              friction, fear, or operational disruption.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-xl border border-[color:var(--on-ink-border)] shadow-xl">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/chirag-headshot.jpg"
                alt="Chirag Bhatt, founder of CHB Food Safety Consulting"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </DarkBand>

      {/* Both sides of the table */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <AccentRule />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            I have spent my career on both sides of the table.
          </h2>
          <ul className="mt-8 space-y-5">
            {career.map((item) => (
              <li
                key={item.label}
                className="border-l-2 border-amber/60 pl-5 text-base leading-relaxed text-foreground sm:text-lg"
              >
                <span className="font-semibold text-heading">{item.label}</span>{" "}
                {item.body}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base leading-relaxed text-foreground sm:text-lg">
            That rare perspective lets me translate complex &ldquo;Health
            Departmanese&rdquo; into practical, actionable steps your teams
            actually understand and follow.
          </p>
        </div>
      </section>

      {/* The Rainman of the Food Code */}
      <DarkBand glow={false}>
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <AccentRule />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            The Rainman of the Food Code
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-on-ink/85 sm:text-lg">
            <p>
              My teams nicknamed me the &ldquo;Rainman of the Food Code&rdquo;
              for my deep regulatory knowledge. Operators called me the person
              who speaks Health Departmanese &mdash; and, more importantly,
              translates it so everyone gets on board.
            </p>
            <p>
              I do not show up as the &ldquo;food safety cop.&rdquo; I show up as
              your partner, and I believe: if you can see it, you can fix it. My
              goal is to replace resentment with collaboration, turning
              compliance into a culture that protects your customers, your
              brand, and your bottom line.
            </p>
          </div>
        </div>
      </DarkBand>

      {/* Why partner */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <AccentRule />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Why partner with CHB Food Safety Consulting
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason.label}
                className="rounded-lg border border-border bg-card p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-heading">
                  {reason.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  {reason.body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-foreground sm:text-lg">
            Whether you are a growing regional chain facing scaling challenges, a
            large operator preparing for aggressive growth, or a company
            recovering from a compliance issue, I deliver solutions tailored to
            your operation.
          </p>
        </div>
      </section>

      {/* Credentials, services, and speaking */}
      <section className="border-b border-border bg-muted">
        <div className="mx-auto grid max-w-5xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <AccentRule />
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Credentials and services
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground sm:text-lg">
              HACCP certified. [ADD ANY OTHER CERTIFICATIONS]
            </p>
            <ul className="mt-6 space-y-2 text-sm leading-relaxed text-foreground">
              {services.map((service) => (
                <li key={service} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" aria-hidden="true" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-heading">Speaking</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground">
              I present on food safety topics at industry and regulatory forums.
              [ADD SPEAKING ENGAGEMENTS]
            </p>
            <div className="mt-5">
              <ImageSlot
                tone="light"
                label="Speaking photos"
                note="Add speaking photos from the media library"
                icon={<Camera className="h-5 w-5" />}
                className="aspect-[3/2]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <DarkBand glow={false}>
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <AccentRule />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What clients say
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.attribution} className="flex flex-col">
                <blockquote className="flex-1 text-base leading-relaxed text-on-ink/90">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm text-amber-bright">
                  &mdash; {item.attribution}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-10 text-sm text-on-ink-muted">
            Additional clients include executives from leading hospitality and
            retail food brands.
          </p>
        </div>
      </DarkBand>

      {/* Closing CTA */}
      <DarkBand>
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Let&rsquo;s build a safer, stronger operation together.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-on-ink/85 sm:text-lg">
            If you are ready to move beyond passing inspections to building a
            truly robust food safety culture that supports growth, I would love
            to speak with you.
          </p>
          <div className="mt-10 flex justify-center">
            <CalendlyPopupButton size="lg">
              Book a 30-minute call
            </CalendlyPopupButton>
          </div>
        </div>
      </DarkBand>
    </>
  );
}
