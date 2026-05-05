import { ShieldCheck, Flag, MapPin } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "ISO 13485:2016 · ISO 9001:2015 Certified" },
  { icon: Flag, label: "Made in USA" },
  { icon: MapPin, label: "Clifton, NJ" },
];

export function TrustBar({ tone = "light" }: { tone?: "light" | "dark" }) {
  const text = tone === "dark" ? "text-white/80" : "text-precise-gray";
  const accent = "text-precise-green";

  return (
    <ul className={`flex flex-wrap items-center gap-x-6 gap-y-3 text-sm ${text}`}>
      {items.map((it) => (
        <li key={it.label} className="flex items-center gap-2">
          <it.icon className={`h-4 w-4 ${accent}`} aria-hidden="true" />
          <span className="font-medium">{it.label}</span>
        </li>
      ))}
    </ul>
  );
}
