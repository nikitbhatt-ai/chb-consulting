"use client";

import Script from "next/script";

import { calendlyConfigured } from "@/lib/site";

/**
 * Loads the Calendly widget assets once for the whole site.
 * Rendered a single time in the root layout. Skipped entirely until a
 * real Calendly link is configured, so we never load a third-party
 * script we cannot use yet.
 */
export function CalendlyProvider() {
  if (!calendlyConfigured) return null;

  return (
    <>
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
