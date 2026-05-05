import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  icon: LucideIcon;
  name: string;
  short?: string;
  description: string;
  highlights?: string[];
  className?: string;
  accent?: "navy" | "green";
};

export function CapabilityCard({
  icon: Icon,
  name,
  short,
  description,
  highlights,
  className,
  accent = "navy",
}: Props) {
  const accentLine =
    accent === "green" ? "before:bg-precise-green" : "before:bg-precise-navy";
  return (
    <article
      className={cn(
        "group relative rounded-lg border border-precise-line bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover",
        "before:absolute before:left-0 before:top-0 before:h-1 before:w-full before:rounded-t-lg",
        accentLine,
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-precise-off-white text-precise-navy">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-base font-bold uppercase tracking-wide text-precise-navy">
            {name}
          </h3>
          {short ? (
            <p className="text-xs text-precise-gray">{short}</p>
          ) : null}
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-precise-gray">
        {description}
      </p>
      {highlights && highlights.length ? (
        <ul className="mt-4 space-y-1.5 text-sm text-precise-navy">
          {highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-precise-green" />
              {h}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
