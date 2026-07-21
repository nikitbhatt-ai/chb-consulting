import { cn } from "@/lib/utils";

/**
 * A full-width dark section with a subtle gradient wash, a warm amber
 * glow, and a fine film-grain texture. Used for the hero, testimonial,
 * and call-to-action bands. Overlays sit behind the content (negative
 * z-index inside an isolated stacking context), so children render on top
 * without extra wrappers.
 */
export function DarkBand({
  children,
  className,
  glow = true,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <section
      className={cn(
        "on-dark relative isolate overflow-hidden bg-ink text-on-ink",
        className
      )}
    >
      {/* Gradient wash + optional amber glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage: glow
            ? "radial-gradient(120% 120% at 18% 0%, #1c212b 0%, #12141a 55%, #0b0c10 100%), radial-gradient(50% 55% at 88% 12%, rgba(200,162,76,0.18), transparent 60%)"
            : "radial-gradient(120% 120% at 50% 0%, #1a1d24 0%, #101216 60%, #0b0c10 100%)",
        }}
      />
      {/* Fine grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.10] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {children}
    </section>
  );
}
