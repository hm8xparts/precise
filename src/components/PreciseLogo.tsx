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
 *
 * Horizontal lockup so the wordmark stays legible at navbar/footer
 * sizes (~48px tall). The stacked composition from the master PNG is
 * reserved for hero/large-format placements where size isn't a
 * constraint — set `showWordmark={false}` to render the crosshair P
 * mark on its own.
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

  if (!showWordmark) {
    return (
      <svg
        role="img"
        aria-label={ariaLabel}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("select-none", className)}
      >
        <CrosshairMark navy={navy} blue={blue} gray={gray} cx={100} cy={100} />
      </svg>
    );
  }

  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      viewBox="0 0 600 180"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("select-none", className)}
    >
      {/* Crosshair mark on the left, vertically centered */}
      <CrosshairMark navy={navy} blue={blue} gray={gray} cx={90} cy={90} />

      {/* PRECISE wordmark — italic, bold, geometric */}
      <text
        x={195}
        y={92}
        dominantBaseline="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight={900}
        fontStyle="italic"
        fontSize={108}
        letterSpacing={2}
        fill={navy}
      >
        PRECISE
      </text>

      {/* Divider rule */}
      <line
        x1={195}
        y1={132}
        x2={585}
        y2={132}
        stroke={divider}
        strokeWidth={3}
      />

      {/* Tagline */}
      <text
        x={195}
        y={159}
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight={600}
        fontSize={22}
        letterSpacing={5.5}
        fill={tagline}
      >
        COMPONENTS &amp; TOOL DESIGN
      </text>
    </svg>
  );
}

function CrosshairMark({
  navy,
  blue,
  gray,
  cx,
  cy,
}: {
  navy: string;
  blue: string;
  gray: string;
  cx: number;
  cy: number;
}) {
  return (
    <g>
      {/* Outer crosshair circle */}
      <circle cx={cx} cy={cy} r={78} fill="none" stroke={gray} strokeWidth={5} />
      {/* Tick marks */}
      <line x1={cx - 96} y1={cy} x2={cx - 70} y2={cy} stroke={gray} strokeWidth={5} strokeLinecap="round" />
      <line x1={cx + 70} y1={cy} x2={cx + 96} y2={cy} stroke={gray} strokeWidth={5} strokeLinecap="round" />
      <line x1={cx} y1={cy - 96} x2={cx} y2={cy - 70} stroke={gray} strokeWidth={5} strokeLinecap="round" />
      <line x1={cx} y1={cy + 70} x2={cx} y2={cy + 96} stroke={gray} strokeWidth={5} strokeLinecap="round" />

      {/* Letter P — italic, with overlapping blue accent */}
      <g transform={`translate(${cx - 38}, ${cy - 50})`}>
        {/* Blue overlap shape (italic slash on the left) */}
        <path d="M 4 100 L 30 0 L 46 0 L 20 100 Z" fill={blue} />
        {/* Main P body */}
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
