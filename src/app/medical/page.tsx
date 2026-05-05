import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { CtaPanel } from "@/components/CtaPanel";
import { StructuredData } from "@/components/StructuredData";
import { medicalAreas, medicalCallouts } from "@/content/medical";
import { buildMetadata } from "@/lib/seo";

const title = "Medical Device Manufacturing — Orthopedic, Surgical & Diagnostic";
const description =
  "Ultra-precise components for medical innovators — cleanroom-ready finishes, biocompatible materials, ISO 13485 from day one. Orthopedic implants, surgical instruments, robotic navigation, and test specimens.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/medical",
  keywords: [
    "orthopedic implant machining",
    "surgical instrument manufacturing",
    "robotic surgery components",
    "porous titanium machining",
    "PEEK implant machining",
    "ISO 13485 medical manufacturing",
    "medical device contract manufacturer NJ",
  ],
});

export default function MedicalPage() {
  return (
    <>
      <StructuredData
        pageTitle={title}
        pageDescription={description}
        pagePath="/medical"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Medical", href: "/medical" },
        ]}
      />

      <PageHeader
        eyebrow="Medical Specialization"
        title="Engineered for Life-Critical Applications."
        subtitle="Ultra-precise components for medical innovators — cleanroom-ready finishes, biocompatible materials, ISO 13485 from day one."
      />

      {/* Callouts */}
      <section className="border-b border-precise-line bg-precise-off-white py-12">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {medicalCallouts.map((c) => (
              <div
                key={c.label}
                className="rounded-lg border border-precise-line bg-white p-5 shadow-card"
              >
                <c.icon className="h-6 w-6 text-precise-green" aria-hidden="true" />
                <div className="mt-3 text-sm font-bold text-precise-navy">
                  {c.label}
                </div>
                <div className="mt-1 text-xs text-precise-gray">{c.detail}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Medical areas */}
      <section className="bg-white">
        {medicalAreas.map((area, idx) => {
          const reverse = idx % 2 === 1;
          return (
            <div
              key={area.slug}
              className={`border-b border-precise-line py-16 lg:py-20 ${
                idx % 2 === 1 ? "bg-precise-off-white" : "bg-white"
              }`}
            >
              <Container>
                <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
                  <div
                    className={`lg:col-span-6 ${
                      reverse ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <SectionEyebrow>0{idx + 1}</SectionEyebrow>
                    <h2 className="mt-3 flex items-center gap-3 text-3xl font-black uppercase leading-tight text-precise-navy sm:text-4xl">
                      <area.icon className="h-7 w-7 text-precise-green" aria-hidden="true" />
                      {area.name}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-precise-gray">
                      {area.summary}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {area.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-sm text-precise-navy"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-precise-green"
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className={`lg:col-span-6 ${
                      reverse ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-precise-line bg-white shadow-card">
                      <Image
                        src={area.partImage}
                        alt={area.partAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          );
        })}
      </section>

      <CtaPanel
        title="Building the next generation of medical devices?"
        description="From early prototypes through validated production, our team works as a quality-system extension of your engineering group."
      />
    </>
  );
}
