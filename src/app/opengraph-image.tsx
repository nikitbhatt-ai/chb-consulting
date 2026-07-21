import { ImageResponse } from "next/og";

export const alt =
  "CHB Food Safety Consulting — food safety consulting for multi-unit operators";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Default social share image (1200x630) used across the site.
 * Generated at build time so shares never render blank.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0f1e2e",
          padding: "80px",
          color: "#ffffff",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 40, letterSpacing: 8, color: "#9fb4c7" }}>
            CHB FOOD SAFETY CONSULTING
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 68,
            lineHeight: 1.15,
            fontWeight: 600,
            maxWidth: 960,
          }}
        >
          One bad inspection becomes a brand problem across every location.
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#9fb4c7" }}>
          Inspection readiness for multi-unit restaurant, convenience, and
          grocery operators.
        </div>
      </div>
    ),
    { ...size }
  );
}
