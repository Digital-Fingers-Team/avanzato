import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Avanzato premium web design and development agency";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05060a",
          color: "#f8fafc",
          padding: 72,
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 42, fontWeight: 800 }}>Avanzato.</div>
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 999,
              padding: "12px 22px",
              color: "#bfdbfe",
              fontSize: 24,
            }}
          >
            Premium Digital Agency
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 88,
              lineHeight: 0.98,
              fontWeight: 900,
              maxWidth: 980,
              letterSpacing: -2,
            }}
          >
            Fast websites and apps for ambitious startups
          </div>
          <div
            style={{
              width: 760,
              height: 8,
              borderRadius: 999,
              background: "linear-gradient(90deg, #8b5cf6, #38bdf8)",
            }}
          />
        </div>
        <div style={{ color: "#94a3b8", fontSize: 28 }}>
          Design, Next.js development, full-stack engineering, Core Web Vitals
        </div>
      </div>
    ),
    size,
  );
}
