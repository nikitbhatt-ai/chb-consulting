import type { Metadata } from "next";

import { AccentRule } from "@/components/ui/accent-rule";
import { DarkBand } from "@/components/ui/dark-band";
import { CalendlyInline } from "@/components/calendly/calendly-inline";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact CHB Food Safety Consulting",
  description:
    "Book a 30-minute inspection readiness call, or send a note. Houston-based food safety consulting for multi-unit operators and manufacturers.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact CHB Food Safety Consulting",
    description:
      "Book a 30-minute inspection readiness call, or send a note. Houston-based food safety consulting for multi-unit operators and manufacturers.",
    url: "/contact",
  },
  twitter: {
    title: "Contact CHB Food Safety Consulting",
    description:
      "Book a 30-minute inspection readiness call, or send a note. Houston-based food safety consulting for multi-unit operators and manufacturers.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <DarkBand>
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <AccentRule />
          <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            Let&rsquo;s talk
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-on-ink/85 sm:text-xl">
            Thirty minutes is usually enough to tell whether this is worth
            pursuing. Bring your last few inspection reports if you have them.
          </p>
        </div>
      </DarkBand>

      {/* Two paths */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {/* Book a call */}
          <div>
            <AccentRule />
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Book a call
            </h2>
            <div className="mt-6">
              <CalendlyInline tone="light" />
            </div>
          </div>

          {/* Send a note */}
          <div>
            <AccentRule />
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Send a note
            </h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
