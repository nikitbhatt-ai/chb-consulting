import type { Metadata } from "next";

import { AccentRule } from "@/components/ui/accent-rule";
import { DarkBand } from "@/components/ui/dark-band";
import { CalendlyPopupButton } from "@/components/calendly/calendly-popup-button";

export const metadata: Metadata = {
  title: "Health Department Consulting for Restaurant Groups | CHB",
  description:
    "Retained health department representation for multi-unit operators. A former inspector and program chief handles your regulatory relationships and protects your brand.",
  alternates: { canonical: "/health-department-czar" },
  openGraph: {
    title: "Health Department Consulting for Restaurant Groups | CHB",
    description:
      "Retained health department representation for multi-unit operators. A former inspector and program chief handles your regulatory relationships and protects your brand.",
    url: "/health-department-czar",
  },
  twitter: {
    title: "Health Department Consulting for Restaurant Groups | CHB",
    description:
      "Retained health department representation for multi-unit operators. A former inspector and program chief handles your regulatory relationships and protects your brand.",
  },
};

const whatHeDoes = [
  "Reviews inspection reports across your portfolio and identifies the patterns your internal team is too close to see",
  "Speaks directly with health departments on your behalf, in their language and within their process",
  "Translates findings into remedies your operators can actually execute",
  "Prepares your team for reinspections and complaint-driven visits",
  "Advises on jurisdictional differences when you operate across city, county, and state lines",
  "Serves as your on-call subject matter expert when something goes wrong at 9pm on a Friday",
];

const aiCapabilities = [
  "Digital self-inspection checklists managers complete on a phone, with photo capture and automatic escalation when something fails",
  "SOPs and corrective action plans that generate from your program and stay current as menus, equipment, and procedures change",
  "Pattern detection across locations that flags recurring risk before it appears in an official inspection",
  "Custom AI-native tools built around how your operation actually runs, instead of bending your process to fit off-the-shelf software",
];

export default function HealthDepartmentCzarPage() {
  return (
    <>
      {/* Hero */}
      <DarkBand>
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <AccentRule />
          <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
            Health Department Czar
          </h1>
          <p className="mt-6 text-lg text-on-ink/85 sm:text-xl">
            Retained regulatory representation for multi-unit brands.
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
              You have seen the segment. A local news team runs an inspection
              report from one of your locations, the violations sound worse than
              they were, and by the evening the story is attached to your brand
              and not to that one store.
            </p>
            <p>
              Most of those stories were preventable. Not by scoring better, but
              by understanding what the inspector was actually documenting and
              resolving it before it became a public record.
            </p>
            <p>
              That requires someone who can talk to both sides. Very few people
              can.
            </p>
          </div>
        </div>
      </section>

      {/* What he does */}
      <section className="border-b border-border bg-muted">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <AccentRule />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What he does
          </h2>
          <ul className="mt-8 space-y-4">
            {whatHeDoes.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-base leading-relaxed text-foreground sm:text-lg"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why him */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <AccentRule />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Why him
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground sm:text-lg">
            <p>
              He was the inspector. Then he was the Program Chief who supervised
              inspectors. Then he was the food safety director on the receiving
              end of those inspections at 1,700 locations.
            </p>
            <p>
              He has never wanted to be a food safety cop. Operators he
              regulated used to say you would not get a favor from him, but you
              would get an explanation of exactly how to get your place into
              compliance. That approach is why health departments take his calls
              now.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement shape */}
      <section className="border-b border-border bg-muted">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <AccentRule />
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Engagement shape
          </h2>
          <p className="mt-8 text-base leading-relaxed text-foreground sm:text-lg">
            Retainers are scoped to the size of your portfolio and the depth of
            support you need. Most retained clients work with CHB on a monthly
            basis over a six to twelve month engagement.
          </p>
        </div>
      </section>

      {/* AI systems add-on */}
      <DarkBand glow={false}>
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <AccentRule />
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-bright">
            Add-on
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            AI systems for food safety operations
          </h2>
          <p className="mt-8 text-base leading-relaxed text-on-ink/85 sm:text-lg">
            Once the program is built, CHB can automate the parts of it your
            team currently runs on paper.
          </p>
          <ul className="mt-6 space-y-4">
            {aiCapabilities.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-base leading-relaxed text-on-ink/85"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base leading-relaxed text-on-ink/85 sm:text-lg">
            Every build is different. Scope and pricing are set per project based
            on the size of your operation and what you need built.
          </p>
          <div className="mt-8">
            <CalendlyPopupButton size="lg">
              Talk through what this would look like for your operation
            </CalendlyPopupButton>
          </div>
        </div>
      </DarkBand>

      {/* Testimonial */}
      <section className="border-b border-border bg-muted">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <figure>
            <blockquote className="font-serif text-2xl font-medium leading-snug text-heading sm:text-3xl">
              &ldquo;Chirag has been a leader in promoting a positive food safety
              culture and implementing sustainable food safety programs.&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm text-muted-foreground">
              &mdash; [NAME], [TITLE], [COMPANY]
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Page CTA */}
      <DarkBand>
        <div className="mx-auto flex max-w-3xl justify-center px-4 py-16 sm:px-6 lg:px-8">
          <CalendlyPopupButton size="lg">
            Book a 30-minute call to scope a retainer
          </CalendlyPopupButton>
        </div>
      </DarkBand>
    </>
  );
}
