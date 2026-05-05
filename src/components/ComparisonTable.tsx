import { Check, X } from "lucide-react";
import { comparisonRows } from "@/content/capabilities";

export function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-lg border border-precise-line bg-white shadow-card">
      {/* Desktop */}
      <table className="hidden w-full border-collapse text-left lg:table">
        <thead>
          <tr className="bg-precise-off-white text-xs uppercase tracking-eyebrow text-precise-gray">
            <th className="w-1/4 px-6 py-4 font-semibold">Requirement</th>
            <th className="w-1/3 px-6 py-4 font-semibold">Traditional Vendors</th>
            <th className="px-6 py-4 font-semibold text-precise-navy">
              The Precise Edge
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((r) => (
            <tr key={r.requirement} className="border-t border-precise-line">
              <td className="px-6 py-5 align-top text-sm font-semibold text-precise-navy">
                {r.requirement}
              </td>
              <td className="px-6 py-5 align-top">
                <div className="flex items-start gap-2 text-sm text-precise-gray">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
                  {r.traditional}
                </div>
              </td>
              <td className="px-6 py-5 align-top">
                <div className="flex items-start gap-2 text-sm text-precise-navy">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-precise-green" aria-hidden="true" />
                  <div>
                    <div className="font-semibold">{r.precise}</div>
                    <div className="mt-0.5 text-xs text-precise-gray">
                      {r.preciseDetail}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile */}
      <ul className="divide-y divide-precise-line lg:hidden">
        {comparisonRows.map((r) => (
          <li key={r.requirement} className="px-6 py-5">
            <div className="text-xs font-semibold uppercase tracking-eyebrow text-precise-gray">
              {r.requirement}
            </div>
            <div className="mt-3 flex items-start gap-2 text-sm text-precise-gray">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
              {r.traditional}
            </div>
            <div className="mt-2 flex items-start gap-2 text-sm text-precise-navy">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-precise-green" aria-hidden="true" />
              <div>
                <div className="font-semibold">{r.precise}</div>
                <div className="mt-0.5 text-xs text-precise-gray">
                  {r.preciseDetail}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
