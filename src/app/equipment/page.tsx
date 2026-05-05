import type { Metadata } from "next";
import { Building2, Snowflake, Microscope } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { EquipmentItem } from "@/components/EquipmentItem";
import { CtaPanel } from "@/components/CtaPanel";
import { StructuredData } from "@/components/StructuredData";
import { cncAndEdm, finishingQualityDesign } from "@/content/equipment";
import { buildMetadata } from "@/lib/seo";

const title = "Equipment Roster — 13,695 sq ft Facility in Clifton, NJ";
const description =
  "State-of-the-art equipment roster — Okuma 5-axis milling, Bridgeport 4-axis, HAAS dual-spindle turning, Mitsubishi Wire EDM, sinker EDM, Mitsui grinding, Mitutoyo Crysta-Apex CMMs, and Trumpf laser marking.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/equipment",
  keywords: [
    "Okuma Genos M560V",
    "HAAS DS30 SSY",
    "Mitsubishi MV1200S",
    "Mitutoyo Crysta-Apex",
    "Trumpf Vectormark",
    "Bridgeport Conquest 480V",
  ],
});

export default function EquipmentPage() {
  return (
    <>
      <StructuredData
        pageTitle={title}
        pageDescription={description}
        pagePath="/equipment"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Equipment", href: "/equipment" },
        ]}
      />

      <PageHeader
        eyebrow="Infrastructure"
        title="State-of-the-Art Equipment Roster."
        subtitle="A 13,695 sq ft air-conditioned facility in Clifton, NJ — purpose-built for tight-tolerance medical-device manufacturing, from raw stock through validated production."
      />

      {/* Facility callout */}
      <section className="bg-precise-navy py-10 text-white">
        <Container className="grid gap-6 sm:grid-cols-3">
          <Stat icon={Building2} value="13,695" label="Sq Ft Facility" />
          <Stat icon={Snowflake} value="100%" label="Air-Conditioned" />
          <Stat icon={Microscope} value="Controlled" label="Inspection Room" />
        </Container>
      </section>

      {/* Equipment lists */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionEyebrow>CNC Machining & EDM</SectionEyebrow>
              <h2 className="mt-3 text-2xl font-black uppercase leading-tight text-precise-navy sm:text-3xl">
                Multi-axis cutting & spark erosion.
              </h2>
              <ul className="mt-8 space-y-8">
                {cncAndEdm.map((e) => (
                  <li key={e.name}>
                    <EquipmentItem item={e} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionEyebrow>Finishing, Quality & Design</SectionEyebrow>
              <h2 className="mt-3 text-2xl font-black uppercase leading-tight text-precise-navy sm:text-3xl">
                Inspection, finishing & engineering.
              </h2>
              <ul className="mt-8 space-y-8">
                {finishingQualityDesign.map((e) => (
                  <li key={e.name}>
                    <EquipmentItem item={e} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CtaPanel
        title="Need to verify a specific machine for your program?"
        description="Tell us the part envelope, tolerance, and material — we'll match the right machine and operator team."
      />
    </>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Building2;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <Icon className="h-8 w-8 text-precise-green" aria-hidden="true" />
      <div>
        <div className="text-3xl font-black tracking-tight">{value}</div>
        <div className="text-xs font-semibold uppercase tracking-eyebrow text-white/70">
          {label}
        </div>
      </div>
    </div>
  );
}
