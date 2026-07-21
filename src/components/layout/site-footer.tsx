import Link from "next/link";

import { footerNav, siteConfig, socialLinks } from "@/lib/site";

/** Inline brand icons so we do not depend on an icon library keeping them. */
const socialIcons: Record<string, React.ReactNode> = {
  facebook: (
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.8 8.44-4.94 8.44-9.94Z" />
  ),
  x: (
    <path d="M17.53 3H20.5l-6.5 7.43L21.75 21h-5.98l-4.68-6.12L5.7 21H2.73l6.96-7.95L2.5 3h6.13l4.23 5.6L17.53 3Zm-1.05 16.2h1.65L7.6 4.71H5.83L16.48 19.2Z" />
  ),
  linkedin: (
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
  ),
  instagram: (
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9c-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.19.41-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.17.42-.36 1.04-.41 2.19-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.41 2.19.21.55.47.94.88 1.35.41.41.8.67 1.35.88.42.17 1.04.36 2.19.41 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.19-.41.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.17-.42.36-1.04.41-2.19.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.41-2.19a3.63 3.63 0 0 0-.88-1.35 3.63 3.63 0 0 0-1.35-.88c-.42-.17-1.04-.36-2.19-.41-1.24-.06-1.61-.07-4.76-.07Zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 8.74a3.44 3.44 0 1 0 0-6.88 3.44 3.44 0 0 0 0 6.88Zm6.75-8.94a1.24 1.24 0 1 1-2.48 0 1.24 1.24 0 0 1 2.48 0Z" />
  ),
};

export function SiteFooter() {
  return (
    <footer className="on-dark mt-auto bg-ink text-on-ink">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Business identity */}
          <div>
            <p className="font-serif text-lg font-semibold text-on-ink">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm text-on-ink-muted">
              {siteConfig.city}, {siteConfig.state}
            </p>
            <dl className="mt-4 space-y-1 text-sm">
              <div className="flex gap-2">
                <dt className="text-on-ink-muted">Phone</dt>
                <dd className="text-on-ink">{siteConfig.contact.phone}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-on-ink-muted">Email</dt>
                <dd className="text-on-ink">{siteConfig.contact.email}</dd>
              </div>
            </dl>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" className="md:justify-self-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-on-ink-muted">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {footerNav.map((item) => (
                <li key={item.href + item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-on-ink/80 transition-colors hover:text-amber-bright"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="md:justify-self-end">
            <p className="text-xs font-semibold uppercase tracking-wide text-on-ink-muted">
              Follow
            </p>
            <ul className="mt-4 flex gap-3">
              {socialLinks.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.href}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-[color:var(--on-ink-border)] text-on-ink transition-colors hover:bg-white/10 hover:text-amber-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={`${siteConfig.name} on ${social.label}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      {socialIcons[social.platform]}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[color:var(--on-ink-border)] pt-6">
          <p className="text-xs text-on-ink-muted">
            &copy; {siteConfig.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
