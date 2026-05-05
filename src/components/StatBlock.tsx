import { cn } from "@/lib/cn";

type Stat = { value: string; label: string };

type Props = {
  stats: Stat[];
  className?: string;
  variant?: "navy" | "white";
};

export function StatRow({ stats, className, variant = "white" }: Props) {
  return (
    <div
      className={cn(
        "grid divide-y rounded-lg border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4",
        variant === "navy"
          ? "border-white/10 divide-white/10 bg-precise-navy text-white"
          : "border-precise-line divide-precise-line bg-white text-precise-navy",
        className,
      )}
    >
      {stats.map((s) => (
        <div key={s.label} className="px-6 py-8 text-center">
          <div className="text-4xl font-black tracking-tight md:text-5xl">
            {s.value}
          </div>
          <div
            className={cn(
              "mt-2 text-xs font-semibold uppercase tracking-eyebrow",
              variant === "navy" ? "text-white/70" : "text-precise-gray",
            )}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
