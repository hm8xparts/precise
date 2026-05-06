import { cn } from "@/lib/cn";

type Variant = "dark" | "light";

type Props = {
  variant?: Variant;
  showWordmark?: boolean;
  className?: string;
  ariaLabel?: string;
};

/**
 * Precise crosshair + horizontal wordmark.
 *
 * Sizing: the lockup scales off the wrapper's font-size. The "PRECISE"
 * wordmark renders at 1em, the tagline at 0.32em, and the crosshair
 * mark at 1.6em square — so a 1.875rem font-size (= 30px) produces a
 * lockup that's ~48px tall (which is what the navbar and footer use).
 *
 * Why HTML text instead of SVG <text>: SVG italic glyph metrics differ
 * across rendering engines, which made the previous SVG-only lockup
 * clip the right edge of "PRECISE" inside its viewBox. HTML text picks
 * up the loaded Inter font and never clips.
 */
export function PreciseLogo({
  variant = "dark",
  showWordmark = true,
  className,
  ariaLabel = "Precise Components & Tool Design",
}: Props) {
  if (!showWordmark) {
    return (
      <CrosshairSvg
        variant={variant}
        ariaLabel={ariaLabel}
        className={cn("aspect-square", className)}
      />
    );
  }

  const navyClass =
    variant === "dark" ? "text-precise-navy" : "text-white";
  const taglineClass =
    variant === "dark" ? "text-precise-gray" : "text-white/80";
  const dividerClass =
    variant === "dark" ? "bg-precise-navy" : "bg-white/80";

  return (
    <span
      role="img"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center gap-[0.35em] whitespace-nowrap leading-none",
        className,
      )}
    >
      {/* Crosshair mark — square, ~1.6× the wordmark's font-size */}
      <CrosshairSvg
        variant={variant}
        ariaLabel=""
        className="h-[1.6em] w-[1.6em] shrink-0"
      />

      {/* HTML wordmark + tagline; sizes are em-based off the wrapper */}
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-black italic tracking-[0.01em]",
            navyClass,
          )}
          style={{ fontSize: "1em" }}
        >
          PRECISE
        </span>
        <span
          aria-hidden="true"
          className={cn("my-[0.12em] h-[0.06em] w-full", dividerClass)}
        />
        <span
          className={cn(
            "font-semibold uppercase tracking-[0.22em]",
            taglineClass,
          )}
          style={{ fontSize: "0.32em" }}
        >
          Components &amp; Tool Design
        </span>
      </span>
    </span>
  );
}

function CrosshairSvg({
  variant,
  ariaLabel,
  className,
}: {
  variant: Variant;
  ariaLabel: string;
  className?: string;
}) {
  const navy = variant === "dark" ? "#1B2C5C" : "#FFFFFF";
  const blue = variant === "dark" ? "#3F5891" : "rgba(255,255,255,0.65)";
  const gray = variant === "dark" ? "#6B6E72" : "rgba(255,255,255,0.85)";

  return (
    <svg
      role="img"
      aria-label={ariaLabel || undefined}
      aria-hidden={ariaLabel ? undefined : true}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("select-none", className)}
    >
      {/* Outer crosshair circle */}
      <circle cx={100} cy={100} r={78} fill="none" stroke={gray} strokeWidth={6} />
      {/* Tick marks */}
      <line x1={4} y1={100} x2={30} y2={100} stroke={gray} strokeWidth={6} strokeLinecap="round" />
      <line x1={170} y1={100} x2={196} y2={100} stroke={gray} strokeWidth={6} strokeLinecap="round" />
      <line x1={100} y1={4} x2={100} y2={30} stroke={gray} strokeWidth={6} strokeLinecap="round" />
      <line x1={100} y1={170} x2={100} y2={196} stroke={gray} strokeWidth={6} strokeLinecap="round" />

      {/* Letter P — italic, with overlapping blue accent */}
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
