import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const runtime = "edge";

/**
 * iOS / iPadOS Apple-touch home-screen icon.
 *
 * White background to give the navy P + gray crosshair definition on
 * any wallpaper. Artwork fills ~80% of the canvas with even padding to
 * match the master logo proportions.
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PreciseMarkSvg size={144} />
      </div>
    ),
    { ...size },
  );
}

function PreciseMarkSvg({ size }: { size: number }) {
  const navy = "#1B2C5C";
  const blue = "#3F5891";
  const gray = "#6B6E72";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={100} cy={100} r={78} fill="none" stroke={gray} strokeWidth={6} />
      <line x1={4} y1={100} x2={30} y2={100} stroke={gray} strokeWidth={6} strokeLinecap="round" />
      <line x1={170} y1={100} x2={196} y2={100} stroke={gray} strokeWidth={6} strokeLinecap="round" />
      <line x1={100} y1={4} x2={100} y2={30} stroke={gray} strokeWidth={6} strokeLinecap="round" />
      <line x1={100} y1={170} x2={100} y2={196} stroke={gray} strokeWidth={6} strokeLinecap="round" />
      <g transform="translate(62, 50)">
        <path d="M 4 100 L 30 0 L 46 0 L 20 100 Z" fill={blue} />
        <path
          d="M 16 0
             L 56 0
             C 74 0 86 13 86 30
             C 86 46 74 60 56 60
             L 36 60
             L 26 100
             L 6 100
             L 16 0 Z
             M 38 16
             L 32 44
             L 52 44
             C 60 44 64 38 64 30
             C 64 22 60 16 52 16
             Z"
          fill={navy}
        />
      </g>
    </svg>
  );
}
