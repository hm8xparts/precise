import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title =
    searchParams.get("title") ?? "Precision Manufacturing for Medical Devices";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#1B2C5C",
          color: "#FFFFFF",
          padding: "72px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.7,
          }}
        />

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 9999,
                border: "3px solid rgba(255,255,255,0.85)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 38,
                fontWeight: 900,
                fontStyle: "italic",
              }}
            >
              P
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 900,
                  fontStyle: "italic",
                  letterSpacing: "0.02em",
                }}
              >
                PRECISE
              </span>
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Components &amp; Tool Design
              </span>
            </div>
          </div>
          <span
            style={{
              fontSize: 14,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#22C55E",
            }}
          >
            Medical Grade Manufacturing
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            position: "relative",
          }}
        >
          <h1
            style={{
              fontSize: 76,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              maxWidth: 1000,
            }}
          >
            {title}
          </h1>
        </div>

        {/* Footer trust line */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            fontSize: 18,
            color: "rgba(255,255,255,0.8)",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: 24,
            position: "relative",
          }}
        >
          <span>ISO 13485:2016 · ISO 9001:2015</span>
          <span>·</span>
          <span>±0.0004&quot; tolerance</span>
          <span>·</span>
          <span>Made in USA · Clifton, NJ</span>
          <span style={{ marginLeft: "auto", color: "rgba(255,255,255,0.6)" }}>
            {site.domain}
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
