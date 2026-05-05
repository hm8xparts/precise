import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const runtime = "edge";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1B2C5C",
          color: "#FFFFFF",
          fontSize: 130,
          fontWeight: 900,
          fontStyle: "italic",
          letterSpacing: "-0.05em",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        P
      </div>
    ),
    { ...size },
  );
}
