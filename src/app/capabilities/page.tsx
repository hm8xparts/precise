import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { CapabilityCard } from "@/components/CapabilityCard";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { CtaPanel } from "@/components/CtaPanel";
import { StructuredData } from "@/components/StructuredData";
import {
  coreCapabilities,
  secondaryProcesses,
  extendedCapabilities,
  keyDifferentiators,
} from "@/content/capabilities";
import { buildMetadata } from "@/lib/seo";

const title = "CNC & EDM Capabilities | Medical Device Manufacturing";
const description =
  "5-axis CNC milling, dual-spindle turning, Wire EDM, Sinker EDM, plus mirror polishing, laser marking, heat treating, 3D printing, and injection molding — all under ISO 13485:2016.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/capabilities",
  keywords: [
    "5-axis CNC milling",
    "wire EDM medical",
    "sinker EDM",
    "live tooling turning",
    "medical device CNC",
    "injection molding medical",
    "vacuum casting medical",
  ],
});

export default function CapabilitiesPage() {
  return (
    <>
      <StructuredData
        pageTitle={title}
        pageDescription={description}
        pagePath="/capabilities"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Capabilities", href: "/capabilities" },
        ]}
      />

      <PageHeader
        eyebrow="Core Capabilities"
        title="Advanced Machining for Surgical-Grade Components."
        subtitle={`Multi-axis CNC and EDM under one quality system. Tolerances to ±0.0004" across milling, turning, and EDM platforms — supported by in-house finishing, inspection, and design.`}
      />

      {/* Core Capabilities */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {coreCapabilities.map((c) => (
              <CapabilityCard
                key={c.slug}
                icon={c.icon}
                name={c.name}
                short={c.short}
                description={c.description}
                highlights={c.highlights}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Secondary Processes */}
      <section className="border-t border-precise-line bg-precise-off-white py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>End-to-End Manufacturing</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-precise-navy sm:text-4xl">
              Secondary Processes & Finishing
            </h2>
            <p className="mt-4 text-base text-precise-gray">
              Six in-house finishing services keep your parts on one floor —
              eliminating supply-chain delays between machining and ship.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {secondaryProcesses.map((c) => (
              <CapabilityCard
                key={c.slug}
                icon={c.icon}
                name={c.name}
                short={c.short}
                description={c.description}
                accent="green"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Extended Capabilities */}
      <section className="border-t border-precise-line bg-white py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>Extended Capabilities</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-precise-navy sm:text-4xl">
              Beyond Machining — Full-Spectrum Medical Manufacturing.
            </h2>
            <p className="mt-4 text-base text-precise-gray">
              Ultra-precise components, cleanroom-ready finishes, biocompatible
              materials — manufactured to global medical-device standards.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {extendedCapabilities.map((c) => (
              <CapabilityCard
                key={c.slug}
                icon={c.icon}
                name={c.name}
                short={c.short}
                description={c.description}
                highlights={c.highlights}
              />
            ))}
          </div>

          <div className="mt-16 grid gap-4 rounded-lg border border-precise-line bg-precise-off-white p-6 sm:grid-cols-2 lg:grid-cols-4">
            {keyDifferentiators.map((k) => (
              <div key={k.label} className="px-2">
                <div className="text-xs font-semibold uppercase tracking-eyebrow text-precise-green">
                  Differentiator
                </div>
                <div className="mt-1.5 text-base font-bold text-precise-navy">
                  {k.label}
                </div>
                <div className="mt-1 text-sm text-precise-gray">{k.detail}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaPanel
        title="Have a complex part the standard shop can't quote?"
        description="Send your STEP files and tolerance stack — we'll respond with a manufacturable quote and DFM feedback."
      />
    </>
  );
}
