import type { Metadata } from "next";
import { ShieldCheck, Microscope, Scan, ClipboardCheck, FileCheck2, Thermometer } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { CtaPanel } from "@/components/CtaPanel";
import { StructuredData } from "@/components/StructuredData";
import { buildMetadata } from "@/lib/seo";

const title = "Quality Systems — ISO 13485:2016 & ISO 9001:2015";
const description =
  "ISO 13485:2016 and ISO 9001:2015 certified quality management. Automated CMM inspection, AS9102 First Article protocols, 100% lot traceability, and a controlled inspection environment.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/quality",
  keywords: [
    "ISO 13485:2016 certified",
    "ISO 9001:2015",
    "AS9102 FAI",
    "CMM inspection medical",
    "lot traceability medical",
    "validated production",
  ],
});

const inspectionEquipment = [
  {
    icon: Scan,
    title: "Automated CMMs",
    detail:
      "Two fully automated Mitutoyo Crysta-Apex Coordinate Measuring Machines, capable of inspecting directly to blueprints and/or solid CAD models.",
  },
  {
    icon: Microscope,
    title: "Optical Comparators",
    detail:
      "Mitutoyo Optical Comparator for precise non-contact measurement of complex profiles and micro-features.",
  },
  {
    icon: Thermometer,
    title: "Controlled Environment",
    detail:
      "Fully environmentally controlled inspection room ensures absolute dimensional stability when measuring critical medical components.",
  },
];

const processes = [
  {
    icon: ClipboardCheck,
    title: "Full Material Traceability",
    detail:
      "Complete documentation and revision control systems ensure 100% traceability from raw stock to finished medical part.",
  },
  {
    icon: FileCheck2,
    title: "Validated Production",
    detail:
      "Documented validation of all processes prior to production, supported by comprehensive operator training and work instructions.",
  },
  {
    icon: ShieldCheck,
    title: "First Article Inspection",
    detail:
      "Rigorous AS9102-compliant FAI protocols verify that all engineering, design, and specification requirements are met before serial production begins.",
  },
];

export default function QualityPage() {
  return (
    <>
      <StructuredData
        pageTitle={title}
        pageDescription={description}
        pagePath="/quality"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Quality", href: "/quality" },
        ]}
      />

      <PageHeader
        eyebrow="Quality Assurance & Compliance"
        title="Uncompromising Quality at Every Step."
        subtitle="Dedicated medical-device quality management — every component manufactured with rigorous traceability, validated processes, and inspection in a controlled environment."
      />

      {/* ISO badge strip */}
      <section className="border-b border-precise-line bg-white py-12">
        <Container className="grid gap-6 lg:grid-cols-3">
          <CertCard
            heading="ISO 13485:2016"
            sub="Medical Device Certified"
            detail="Dedicated medical-device quality management system covering design, manufacturing, and post-production controls."
          />
          <CertCard
            heading="ISO 9001:2015"
            sub="Quality Management Systems"
            detail="Foundational quality management certification ensuring consistency, continuous improvement, and customer focus."
          />
          <CertCard
            heading="AS9102 FAI"
            sub="First Article Compliant"
            detail="Aerospace-grade First Article Inspection protocols applied to every medical-device program."
          />
        </Container>
      </section>

      {/* Inspection equipment */}
      <section className="bg-precise-off-white py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>Advanced Inspection Equipment</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-precise-navy sm:text-4xl">
              Measuring to a higher standard.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {inspectionEquipment.map((e) => (
              <div
                key={e.title}
                className="rounded-lg border border-precise-line bg-white p-6 shadow-card"
              >
                <e.icon className="h-7 w-7 text-precise-green" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-precise-navy">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm text-precise-gray">{e.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quality processes */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>Rigorous Quality Processes</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-precise-navy sm:text-4xl">
              Documentation, validation, traceability.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {processes.map((p) => (
              <article
                key={p.title}
                className="rounded-lg border border-precise-line bg-white p-6 shadow-card"
              >
                <p.icon className="h-7 w-7 text-precise-navy" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-precise-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-precise-gray">{p.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaPanel
        title="Auditing a new medical-device supplier?"
        description="Request our quality manual, FAI samples, and certification documentation."
      />
    </>
  );
}

function CertCard({
  heading,
  sub,
  detail,
}: {
  heading: string;
  sub: string;
  detail: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-precise-navy p-6 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-precise-grid-dark bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,_black_50%,_transparent_100%)]"
      />
      <div className="relative">
        <ShieldCheck className="h-9 w-9 text-precise-green" aria-hidden="true" />
        <div className="mt-4 text-2xl font-black tracking-tight">{heading}</div>
        <div className="mt-1 text-xs font-semibold uppercase tracking-eyebrow text-white/70">
          {sub}
        </div>
        <p className="mt-4 text-sm text-white/80">{detail}</p>
      </div>
    </div>
  );
}
