import { marqueeMaterials } from "@/content/materials";

export function MaterialMarquee() {
  const items = [...marqueeMaterials, ...marqueeMaterials];
  return (
    <div className="relative overflow-hidden border-y border-precise-line bg-precise-off-white py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-precise-off-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-precise-off-white to-transparent" />
      <ul
        className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap will-change-transform"
        aria-label="Materials we machine"
      >
        {items.map((label, i) => (
          <li key={`${label}-${i}`} className="flex items-center gap-12">
            <span className="text-2xl font-black uppercase tracking-tight text-precise-navy/60">
              {label}
            </span>
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-precise-green" />
          </li>
        ))}
      </ul>
    </div>
  );
}
