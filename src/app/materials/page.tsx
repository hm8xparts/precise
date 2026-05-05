import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { MaterialColumn } from "@/components/MaterialColumn";
import { MaterialMarquee } from "@/components/MaterialMarquee";
import { CtaPanel } from "@/components/CtaPanel";
import { StructuredData } from "@/components/StructuredData";
import { materialColumns } from "@/content/materials";
import { buildMetadata } from "@/lib/seo";

const title = "Medical Materials — Titanium, PEEK, CoCr, Inconel";
const description =
  "Implantable, autoclavable, and engineering materials for medical devices: Titanium Grade 2/5/23, PEEK, UHMWPE, CoCr, Inconel, Tantalum, ULTEM, and more. Validated processing for Class VI polymers.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/materials",
  keywords: [
    "titanium grade 5 machining",
    "PEEK CNC machining",
    "UHMWPE machining",
    "cobalt chrome machining",
    "Inconel machining medical",
    "tantalum machining",
    "Class VI medical polymers",
  ],
});

export default function MaterialsPage() {
  return (
    <>
      <StructuredData
        pageTitle={title}
        pageDescription={description}
        pagePath="/materials"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Materials", href: "/materials" },
        ]}
      />

      <PageHeader
        eyebrow="Material Expertise"
        title="Biocompatible & Exotic Materials, Mastered."
        subtitle="Eight-plus material classes machined under one roof — implantable polymers, refractory alloys, and the orthopedic workhorses your devices depend on."
      />

      <MaterialMarquee />

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {materialColumns.map((col) => (
              <MaterialColumn key={col.heading} column={col} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-precise-line bg-precise-off-white py-16">
        <Container className="grid gap-8 lg:grid-cols-3">
          <div>
            <h3 className="text-base font-bold uppercase tracking-wide text-precise-navy">
              Material Traceability
            </h3>
            <p className="mt-2 text-sm text-precise-gray">
              Complete documentation and revision control ensure 100% lot
              traceability from raw stock to finished medical part.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold uppercase tracking-wide text-precise-navy">
              Class VI Validation
            </h3>
            <p className="mt-2 text-sm text-precise-gray">
              Validated processing for USP Class VI medical-grade polymers,
              including PEEK, UHMWPE, and ULTEM.
            </p>
          </div>
          <div>
            <h3 className="text-base font-bold uppercase tracking-wide text-precise-navy">
              Material Not Listed?
            </h3>
            <p className="mt-2 text-sm text-precise-gray">
              We routinely qualify new alloys and polymers for customer-specific
              programs. Contact us to discuss your application.
            </p>
          </div>
        </Container>
      </section>

      <CtaPanel
        title="Have a tough material in mind?"
        description="Tantalum, tungsten, hardened tool steel, porous titanium — send us your spec and we'll quote it."
      />
    </>
  );
}
