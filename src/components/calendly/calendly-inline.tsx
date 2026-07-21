"use client";

import { useEffect, useRef } from "react";

import { calendlyConfigured, siteConfig } from "@/lib/site";

interface CalendlyInlineProps {
  url?: string;
}

/**
 * Inline Calendly scheduling widget. Waits for the Calendly script to
 * load, then mounts the calendar into this container. Until a real
 * Calendly link is configured, it shows a labelled placeholder instead
 * of a broken embed.
 */
export function CalendlyInline({ url = siteConfig.calendlyUrl }: CalendlyInlineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!calendlyConfigured) return;

    let cancelled = false;
    const container = containerRef.current;

    function init() {
      if (cancelled || !container) return;
      const calendly = (
        window as unknown as {
          Calendly?: {
            initInlineWidget: (o: { url: string; parentElement: HTMLElement }) => void;
          };
        }
      ).Calendly;

      if (calendly) {
        container.innerHTML = "";
        calendly.initInlineWidget({ url, parentElement: container });
      } else {
        window.setTimeout(init, 300);
      }
    }

    init();
    return () => {
      cancelled = true;
    };
  }, [url]);

  if (!calendlyConfigured) {
    return (
      <div
        className="flex min-h-[420px] w-full flex-col items-center justify-center rounded-lg border border-dashed border-border bg-muted px-6 text-center"
        role="note"
      >
        <p className="text-sm font-medium text-heading">
          Scheduling calendar appears here
        </p>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Add your Calendly link in{" "}
          <code className="rounded bg-background px-1 py-0.5 text-xs">
            src/lib/site.ts
          </code>{" "}
          and the 20-minute booking calendar will load in this spot.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget min-h-[700px] w-full overflow-hidden rounded-lg border border-border"
      aria-label="Book a 20-minute inspection readiness call"
    />
  );
}
