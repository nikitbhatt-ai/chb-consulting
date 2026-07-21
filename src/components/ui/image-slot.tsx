import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * A labelled placeholder for imagery we do not have as files yet
 * (food photography, Chirag's headshot and speaking photos). Swap each
 * one for a real <Image> when the asset is added to /public.
 *
 * `note` is shown small below the label to say what the final image is.
 */
export function ImageSlot({
  label,
  note,
  icon,
  tone = "light",
  className,
}: {
  label: string;
  note?: string;
  icon: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}${note ? `. ${note}` : ""}`}
      className={cn(
        "flex flex-col items-center justify-center gap-2 overflow-hidden rounded-lg border border-dashed p-6 text-center",
        tone === "light"
          ? "border-border bg-muted text-muted-foreground"
          : "border-[color:var(--on-ink-border)] bg-white/[0.03] text-on-ink-muted",
        className
      )}
    >
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full",
          tone === "light" ? "bg-background text-amber-ink" : "bg-white/5 text-amber-bright"
        )}
        aria-hidden="true"
      >
        {icon}
      </span>
      <span className="text-xs font-semibold uppercase tracking-wide">
        {label}
      </span>
      {note ? <span className="max-w-[16rem] text-xs">{note}</span> : null}
    </div>
  );
}
