import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #8b5cf6, #38bdf8)",
          color: "white",
          display: "flex",
          fontFamily: "Inter, Arial, sans-serif",
          fontSize: 108,
          fontWeight: 900,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        A
      </div>
    ),
    size,
  );
}
