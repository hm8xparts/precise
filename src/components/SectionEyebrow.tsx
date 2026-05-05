import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  tone?: "green" | "navy" | "white";
};

export function SectionEyebrow({ children, className, tone = "green" }: Props) {
  const colors = {
    green: "text-precise-green",
    navy: "text-precise-navy",
    white: "text-white/80",
  } as const;

  return (
    <span
      className={cn(
        "inline-block text-xs font-semibold uppercase tracking-eyebrow",
        colors[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
