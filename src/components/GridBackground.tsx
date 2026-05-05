import { cn } from "@/lib/cn";

type Props = {
  variant?: "light" | "dark";
  className?: string;
  fade?: boolean;
};

export function GridBackground({ variant = "light", className, fade = true }: Props) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10",
        variant === "light"
          ? "bg-precise-grid bg-grid"
          : "bg-precise-grid-dark bg-grid",
        fade &&
          "[mask-image:radial-gradient(ellipse_at_center,_black_55%,_transparent_100%)]",
        className,
      )}
    />
  );
}
