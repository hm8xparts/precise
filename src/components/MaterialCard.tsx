import type { MaterialCard as MaterialCardType } from "@/content/materials";

export function MaterialCard({ card }: { card: MaterialCardType }) {
  const Icon = card.icon;
  return (
    <article className="flex h-full flex-col rounded-lg border border-precise-line bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover">
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-precise-off-white text-precise-navy">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="rounded-full bg-precise-off-white px-3 py-1 text-[10px] font-semibold uppercase tracking-eyebrow text-precise-gray">
          {card.spec}
        </span>
      </div>
      <h3 className="mt-4 text-xl font-bold uppercase tracking-tight text-precise-navy">
        {card.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-precise-gray">
        {card.description}
      </p>
    </article>
  );
}
