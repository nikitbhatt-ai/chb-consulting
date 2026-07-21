/**
 * Central site configuration.
 * Edit business details, the Calendly link, navigation, and social handles
 * here — nothing else needs to change.
 */

export const siteConfig = {
  name: "CHB Food Safety Consulting",
  legalName: "CHB Food Safety Consulting LLC",
  // Update to the production domain once confirmed (see COPY.md Part 4, item 1).
  url: "https://chbconsulting.us",
  description:
    "Former health inspector and food safety director for a 1,700-location chain. CHB keeps multi-unit restaurant and retail brands inspection-ready.",
  founder: "Chirag Bhatt",
  city: "Houston",
  state: "TX",

  // Unconfirmed facts — shown as visible placeholders per COPY.md.
  contact: {
    phone: "[PHONE]",
    email: "[EMAIL]",
  },

  // ---------------------------------------------------------------------------
  // ▼▼▼  PASTE YOUR CALENDLY LINK HERE  ▼▼▼
  // Replace the placeholder below with your real Calendly scheduling URL,
  // e.g. "https://calendly.com/chirag-bhatt/20min".
  // This single value powers the header "Book a call" button and every
  // Calendly embed on the site.
  calendlyUrl: "https://calendly.com/chiraghouston",
  // ▲▲▲  PASTE YOUR CALENDLY LINK ABOVE  ▲▲▲
  // ---------------------------------------------------------------------------
} as const;

/** Whether a real Calendly link has been supplied yet. */
export const calendlyConfigured =
  !siteConfig.calendlyUrl.includes("PLACEHOLDER");

/** Services dropdown in the header. */
export const servicesNav = [
  { label: "Health Department Czar", href: "/health-department-czar" },
  { label: "Food Safety Audits", href: "/multi-unit-food-safety" },
  { label: "Pre-Opening Consultation", href: "/multi-unit-food-safety" },
  { label: "Training", href: "/multi-unit-food-safety" },
] as const;

export type NavItem = {
  label: string;
  href?: string;
  children?: readonly { label: string; href: string }[];
};

/** Primary navigation. "Services" is rendered as a dropdown of servicesNav. */
export const mainNav: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", children: servicesNav },
  { label: "Multi-Unit", href: "/multi-unit-food-safety" },
  { label: "Manufacturing", href: "/food-manufacturing-consulting" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Footer navigation columns. */
export const footerNav = [
  { label: "Health Department Czar", href: "/health-department-czar" },
  { label: "Multi-Unit Food Safety", href: "/multi-unit-food-safety" },
  { label: "Food Manufacturing", href: "/food-manufacturing-consulting" },
  { label: "Houston Consultant", href: "/houston-food-safety-consultant" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/**
 * Social profiles. Handles are pending cleanup (COPY.md Part 4, item 7),
 * so these point to "#" for now. Replace href values when the accounts
 * are renamed to CHB Food Safety Consulting.
 */
export const socialLinks = [
  { label: "Facebook", href: "#", platform: "facebook" },
  { label: "X", href: "#", platform: "x" },
  { label: "LinkedIn", href: "#", platform: "linkedin" },
  { label: "Instagram", href: "#", platform: "instagram" },
] as const;
