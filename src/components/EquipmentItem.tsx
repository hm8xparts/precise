import type { EquipmentItem as EquipmentItemType } from "@/content/equipment";

export function EquipmentItem({ item }: { item: EquipmentItemType }) {
  return (
    <div className="border-l-2 border-precise-green/70 pl-4">
      <h4 className="text-base font-bold uppercase tracking-wide text-precise-navy">
        {item.name}
      </h4>
      <p className="mt-1.5 text-sm leading-relaxed text-precise-gray">
        {item.description}
      </p>
    </div>
  );
}
