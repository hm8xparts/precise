import { Check } from "lucide-react";
import type { MaterialColumn as MaterialColumnType } from "@/content/materials";

export function MaterialColumn({ column }: { column: MaterialColumnType }) {
  return (
    <div className="rounded-lg border border-precise-line bg-white p-6 shadow-card">
      <h3 className="text-lg font-bold uppercase tracking-wide text-precise-navy">
        {column.heading}
      </h3>
      <p className="mt-2 text-sm text-precise-gray">{column.description}</p>
      <ul className="mt-6 divide-y divide-precise-line">
        {column.items.map((m) => (
          <li key={m.name} className="flex items-start gap-3 py-3">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-precise-green" aria-hidden="true" />
            <div className="flex-1">
              <div className="flex items-baseline justify-between gap-3">
                <div className="font-semibold text-precise-navy">{m.name}</div>
                <div className="text-xs text-precise-gray">{m.spec}</div>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-precise-gray">
                {m.note}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
