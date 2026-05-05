import type { EquipmentItem as EquipmentItemType } from "@/content/equipment";

export function EquipmentItem({ item }: { item: EquipmentItemType }) {
  return (
    <div className="flex items-start gap-4">
      <span
        aria-hidden="true"
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-precise-navy text-sm font-bold text-white"
      >
        {item.count}
      </span>
      <div>
        <h4 className="text-base font-bold text-precise-navy">{item.name}</h4>
        <p className="mt-1 text-sm leading-relaxed text-precise-gray">
          {item.description}
        </p>
      </div>
    </div>
  );
}
