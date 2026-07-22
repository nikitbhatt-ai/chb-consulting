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
 * The container deliberately does NOT use Calendly's `calendly-inline-widget`
 * class: that class triggers Calendly's auto-initializer, which injects a blank
 * iframe when it finds no data-url. Instead we mount the widget manually once
 * the Calendly script is ready. Until then (or if Calendly is blocked/slow) we
 * show an on-brand booking button so the section never looks empty.
 */
export function CalendlyInline({
  url = siteConfig.calendlyUrl,
  tone = "dark",
}: CalendlyInlineProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!calendlyConfigured) return;

    let cancelled = false;
    let tries = 0;

    function init() {
      if (cancelled) return;
      const host = hostRef.current;
      const calendly = (
        window as unknown as {
          Calendly?: {
            initInlineWidget: (o: { url: string; parentElement: HTMLElement }) => void;
          };
        }
      ).Calendly;

      if (calendly && host) {
        host.innerHTML = "";
        calendly.initInlineWidget({ url, parentElement: host });
        setReady(true);
        return;
      }
      if (tries++ < 40) window.setTimeout(init, 300); // give it ~12s
    }

    init();
    return () => {
      cancelled = true;
    };
  }, [url]);

  const fallbackClasses =
    tone === "dark"
      ? "border-[color:var(--on-ink-border)] bg-white/[0.03]"
      : "border-border bg-muted";

  return (
    <div>
      {/* The Calendly calendar mounts here once the script is ready. */}
      <div
        ref={hostRef}
        aria-label="Book a 20-minute inspection readiness call"
        className={
          ready
            ? "min-h-[700px] w-full overflow-hidden rounded-xl bg-white shadow-lg"
            : "hidden"
        }
      />

      {/* Fallback: a real booking button, shown until the calendar loads. */}
      {!ready && (
        <div
          className={`flex min-h-[220px] flex-col items-center justify-center gap-5 rounded-xl border px-6 py-12 text-center ${fallbackClasses}`}
        >
          {calendlyConfigured ? (
            <CalendlyPopupButton size="lg">
              Book a 20-minute inspection readiness call
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
      )}
    </div>
  );
}
