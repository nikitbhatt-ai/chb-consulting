/** Short amber rule used above section headings across the site. */
export function AccentRule({ className }: { className?: string }) {
  return (
    <div
      className={`mb-6 h-1 w-12 rounded-full bg-amber ${className ?? ""}`}
      aria-hidden="true"
    />
  );
}
