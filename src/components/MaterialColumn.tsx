import type { MaterialColumn as MaterialColumnType } from "@/content/materials";
import { MaterialCard } from "./MaterialCard";

export function MaterialColumn({ column }: { column: MaterialColumnType }) {
  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-2xl font-black uppercase tracking-tight text-precise-navy sm:text-3xl">
          {column.heading}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-precise-gray">
          {column.description}
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {column.items.map((card) => (
          <MaterialCard key={card.name} card={card} />
        ))}
      </div>
    </section>
  );
}
