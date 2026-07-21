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
          backgroundColor: "#101216",
          backgroundImage:
            "radial-gradient(60% 70% at 85% 10%, rgba(200,162,76,0.22), transparent 60%)",
          padding: "80px",
          color: "#ecebe4",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 34, letterSpacing: 8, color: "#c8a24c" }}>
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
        <div style={{ display: "flex", fontSize: 30, color: "#a8a49a" }}>
          Inspection readiness for multi-unit restaurant, convenience, and
          grocery operators.
        </div>
      </div>
    ),
    { ...size }
  );
}
