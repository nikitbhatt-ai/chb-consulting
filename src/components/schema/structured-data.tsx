import { siteConfig } from "@/lib/site";

/**
 * LocalBusiness + Person structured data (JSON-LD).
 * Placeholder facts (phone/email marked with brackets) are omitted so
 * we never emit invalid schema. Fill them in via site.ts and they will
 * appear automatically.
 */
export function StructuredData() {
  const hasPhone = !siteConfig.contact.phone.includes("[");
  const hasEmail = !siteConfig.contact.email.includes("[");

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Houston" },
      { "@type": "State", name: "Texas" },
      { "@type": "Country", name: "United States" },
    ],
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    ...(hasPhone ? { telephone: siteConfig.contact.phone } : {}),
    ...(hasEmail ? { email: siteConfig.contact.email } : {}),
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#chirag-bhatt`,
    name: siteConfig.founder,
    jobTitle: "Food Safety Consultant",
    description:
      "Former City of Houston health inspector and Health Department Program Chief, and former Food Safety and QA Director for a 1,700-location restaurant brand.",
    worksFor: { "@id": `${siteConfig.url}/#business` },
    knowsAbout: [
      "Food safety",
      "Health department inspections",
      "HACCP",
      "Food safety plans",
      "Multi-unit restaurant compliance",
      "Regulatory readiness",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </>
  );
}
