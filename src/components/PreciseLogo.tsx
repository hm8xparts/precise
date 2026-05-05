import { cn } from "@/lib/cn";

type Variant = "dark" | "light";

type Props = {
  variant?: Variant;
  showWordmark?: boolean;
  className?: string;
  ariaLabel?: string;
};

/**
 * Precise crosshair + wordmark, rebuilt as inline SVG.
 * Visual reference: /public/logo/precise-logo-master.png.
 */
export function PreciseLogo({
  variant = "dark",
  showWordmark = true,
  className,
  ariaLabel = "Precise Components & Tool Design",
}: Props) {
  const navy = variant === "dark" ? "#1B2C5C" : "#FFFFFF";
  const blue = variant === "dark" ? "#3F5891" : "rgba(255,255,255,0.65)";
  const gray = variant === "dark" ? "#6B6E72" : "rgba(255,255,255,0.85)";
  const tagline = variant === "dark" ? "#6B6E72" : "rgba(255,255,255,0.75)";
  const divider = variant === "dark" ? "#1B2C5C" : "rgba(255,255,255,0.85)";
  const viewBox = showWordmark ? "0 0 480 540" : "0 0 200 200";

  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("select-none", className)}
    >
      <CrosshairMark navy={navy} blue={blue} gray={gray} offsetX={showWordmark ? 140 : 0} offsetY={0} />
      {showWordmark ? (
        <Wordmark navy={navy} divider={divider} tagline={tagline} />
      ) : null}
    </svg>
  );
}

function CrosshairMark({
  navy,
  blue,
  gray,
  offsetX,
  offsetY,
}: {
  navy: string;
  blue: string;
  gray: string;
  offsetX: number;
  offsetY: number;
}) {
  // Crosshair circle centered in a 200×200 box
  const cx = 100 + offsetX;
  const cy = 100 + offsetY;
  return (
    <g>
      {/* Outer crosshair circle */}
      <circle
        cx={cx}
        cy={cy}
        r={86}
        fill="none"
        stroke={gray}
        strokeWidth={5}
      />
      {/* Tick marks */}
      <line x1={cx - 105} y1={cy} x2={cx - 78} y2={cy} stroke={gray} strokeWidth={5} strokeLinecap="round" />
      <line x1={cx + 78} y1={cy} x2={cx + 105} y2={cy} stroke={gray} strokeWidth={5} strokeLinecap="round" />
      <line x1={cx} y1={cy - 105} x2={cx} y2={cy - 78} stroke={gray} strokeWidth={5} strokeLinecap="round" />
      <line x1={cx} y1={cy + 78} x2={cx} y2={cy + 105} stroke={gray} strokeWidth={5} strokeLinecap="round" />

      {/* Letter P — geometric, italicized, with overlapping blue accent */}
      <g transform={`translate(${cx - 42}, ${cy - 54})`}>
        {/* Blue overlap shape (left side of P, italic slash) */}
        <path
          d="M 4 108 L 32 0 L 50 0 L 22 108 Z"
          fill={blue}
        />
        {/* Main P body — italic */}
        <path
          d="M 18 0
             L 60 0
             C 80 0 92 14 92 32
             C 92 50 80 64 60 64
             L 38 64
             L 28 108
             L 6 108
             L 18 0 Z
             M 42 18
             L 36 46
             L 56 46
             C 64 46 68 40 68 32
             C 68 24 64 18 56 18
             Z"
          fill={navy}
        />
      </g>
    </g>
  );
}

function Wordmark({
  navy,
  divider,
  tagline,
}: {
  navy: string;
  divider: string;
  tagline: string;
}) {
  return (
    <g>
      {/* PRECISE wordmark, italic bold geometric */}
      <text
        x="240"
        y="320"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight={900}
        fontStyle="italic"
        fontSize="92"
        letterSpacing="2"
        fill={navy}
      >
        PRECISE
      </text>
      {/* Divider line */}
      <line
        x1="60"
        y1="358"
        x2="420"
        y2="358"
        stroke={divider}
        strokeWidth={3}
      />
      {/* Tagline */}
      <text
        x="240"
        y="400"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight={600}
        fontSize="26"
        letterSpacing="6"
        fill={tagline}
      >
        COMPONENTS &amp; TOOL DESIGN
      </text>
    </g>
  );
}

/** Just the crosshair P — for favicons, watermarks, compact spaces. */
export function PreciseMark({
  variant = "dark",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  return <PreciseLogo variant={variant} showWordmark={false} className={className} />;
}
