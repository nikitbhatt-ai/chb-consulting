"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface CalendlyPopupButtonProps extends ButtonProps {
  url?: string;
}

/**
 * A button that opens the Calendly scheduling flow in a popup.
 * If the Calendly script has not loaded (or is blocked), it falls back
 * to opening the scheduling page in a new tab so the button always works.
 */
export function CalendlyPopupButton({
  url = siteConfig.calendlyUrl,
  children,
  ...props
}: CalendlyPopupButtonProps) {
  function openScheduler() {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url });
      return;
    }
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <Button type="button" onClick={openScheduler} {...props}>
      {children}
    </Button>
  );
}
