"use client";

import { useEffect, useRef, useState } from "react";

import { calendlyConfigured, siteConfig } from "@/lib/site";
import { CalendlyPopupButton } from "./calendly-popup-button";

interface CalendlyInlineProps {
  url?: string;
  /** Visual context: dark bands (home) vs light sections (contact). */
  tone?: "dark" | "light";
}

/**
 * Inline Calendly scheduling widget with a graceful fallback.
 *
 * Two-step mount so Calendly measures a *visible* container:
 *   1. Poll until the Calendly script is available -> set `scriptReady`.
 *   2. That render swaps the fallback out for a visible, sized host div.
 *      A follow-up effect then initializes the widget into it.
 *
 * Initializing while the host is still hidden makes Calendly build a
 * zero-height (cut-off) calendar, so the ordering matters. The container
 * also avoids Calendly's `calendly-inline-widget` class to prevent the
 * auto-initializer from injecting a second, blank iframe.
 */
export function CalendlyInline({
  url = siteConfig.calendlyUrl,
  tone = "dark",
}: CalendlyInlineProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const [scriptReady, setScriptReady] = useState(false);

  // Step 1: wait for the Calendly script.
  useEffect(() => {
    if (!calendlyConfigured) return;
    let cancelled = false;
    let tries = 0;
    function check() {
      if (cancelled) return;
      const hasCalendly = Boolean(
        (window as unknown as { Calendly?: unknown }).Calendly
      );
      if (hasCalendly) {
        setScriptReady(true);
        return;
      }
      if (tries++ < 40) window.setTimeout(check, 300); // ~12s
    }
    check();
    return () => {
      cancelled = true;
    };
  }, []);

  // Step 2: once the host is rendered and visible, mount the widget into it.
  useEffect(() => {
    if (!scriptReady || initialized.current) return;
    const host = hostRef.current;
    const calendly = (
      window as unknown as {
        Calendly?: {
          initInlineWidget: (o: { url: string; parentElement: HTMLElement }) => void;
        };
      }
    ).Calendly;
    if (host && calendly) {
      host.innerHTML = "";
      calendly.initInlineWidget({ url, parentElement: host });
      initialized.current = true;
    }
  }, [scriptReady, url]);

  const fallbackClasses =
    tone === "dark"
      ? "border-[color:var(--on-ink-border)] bg-white/[0.03]"
      : "border-border bg-muted";

  if (scriptReady) {
    return (
      <div
        ref={hostRef}
        aria-label="Book a 30-minute inspection readiness call"
        className="h-[700px] min-h-[700px] w-full overflow-hidden rounded-xl bg-white shadow-lg"
      />
    );
  }

  return (
    <div
      className={`flex min-h-[220px] flex-col items-center justify-center gap-5 rounded-xl border px-6 py-12 text-center ${fallbackClasses}`}
    >
      {calendlyConfigured ? (
        <CalendlyPopupButton size="lg">
          Book a 30-minute inspection readiness call
        </CalendlyPopupButton>
      ) : (
        <p className="text-sm text-muted-foreground">
          Add your Calendly link in{" "}
          <code className="rounded bg-background px-1 py-0.5 text-xs">
            src/lib/site.ts
          </code>{" "}
          to load the booking calendar here.
        </p>
      )}
    </div>
  );
}
