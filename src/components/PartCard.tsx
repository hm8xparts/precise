import Image from "next/image";
import type { PartPhoto } from "@/content/portfolio";

export function PartCard({ part, priority = false }: { part: PartPhoto; priority?: boolean }) {
  return (
    <figure className="group overflow-hidden rounded-lg border border-precise-line bg-white shadow-card transition-shadow hover:shadow-card-hover">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-precise-off-white">
        <Image
          src={part.src}
          alt={part.alt}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <figcaption className="space-y-1 p-4">
        <div className="text-sm font-semibold text-precise-navy">
          {part.caption}
        </div>
        <div className="flex items-center gap-2 text-xs text-precise-gray">
          <span>{part.material}</span>
          <span aria-hidden="true">·</span>
          <span>{part.process}</span>
        </div>
      </figcaption>
    </figure>
  );
}
