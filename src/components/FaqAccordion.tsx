import { ChevronDown } from "lucide-react";
import type { FaqSection } from "@/content/faq";

/**
 * Accessible accordion built on native <details>/<summary>.
 *
 *  - Each item opens/closes independently — multiple can be open at once.
 *  - Native keyboard navigation, screen-reader semantics, and search-engine
 *    discoverability come for free.
 *  - Closed by default. Chevron rotates via group-open utility.
 */
export function FaqAccordion({ section }: { section: FaqSection }) {
  return (
    <section
      id={section.slug}
      aria-labelledby={`${section.slug}-heading`}
      className="scroll-mt-24"
    >
      <h2
        id={`${section.slug}-heading`}
        className="text-2xl font-black uppercase tracking-tight text-precise-navy sm:text-3xl"
      >
        {section.title}
      </h2>
      <div className="mt-6 divide-y divide-precise-line overflow-hidden rounded-lg border border-precise-line bg-white shadow-card">
        {section.items.map((item, idx) => (
          <details key={idx} className="group">
            <summary
              className="flex cursor-pointer list-none items-start justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-precise-navy outline-none transition-colors marker:hidden hover:bg-precise-off-white focus-visible:bg-precise-off-white [&::-webkit-details-marker]:hidden"
            >
              <span className="flex-1">{item.q}</span>
              <ChevronDown
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-precise-navy transition-transform duration-200 group-open:rotate-180"
              />
            </summary>
            <div className="border-t border-precise-line bg-precise-off-white px-6 py-5 text-sm leading-relaxed text-precise-gray">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
