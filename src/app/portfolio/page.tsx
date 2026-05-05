import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { PartCard } from "@/components/PartCard";
import { StatRow } from "@/components/StatBlock";
import { CtaPanel } from "@/components/CtaPanel";
import { StructuredData } from "@/components/StructuredData";
import { portfolioParts, portfolioStats } from "@/content/portfolio";
import { buildMetadata } from "@/lib/seo";

const title = "Precision Parts Portfolio — Medical Components";
const description =
  "Real medical components manufactured by Precise Components & Tool Design — surgical drill housings, bone screws, titanium pins, PEEK implants, knee assemblies, porous titanium, and more.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/portfolio",
  keywords: [
    "medical CNC parts portfolio",
    "orthopedic implant samples",
    "surgical instrument components",
    "titanium pins medical",
    "PEEK implant blocks",
    "porous titanium pucks",
  ],
});

export default function PortfolioPage() {
  return (
    <>
      <StructuredData
        pageTitle={title}
        pageDescription={description}
        pagePath="/portfolio"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Portfolio", href: "/portfolio" },
        ]}
      />

      <PageHeader
        eyebrow="Precision Parts Portfolio"
        title="Real medical parts. Real tolerances."
        subtitle="A representative selection of components from our orthopedic, surgical, diagnostic, and test-specimen programs — across eight-plus material classes."
      />

      <section className="bg-white py-16">
        <Container>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {portfolioParts.map((p, i) => (
              <PartCard key={p.src} part={p} priority={i < 4} />
            ))}
          </div>

          <div className="mt-16">
            <StatRow stats={portfolioStats} />
          </div>
        </Container>
      </section>

      <CtaPanel
        title="See a part that resembles yours?"
        description="Send us your drawings — we'll respond with feasibility, tooling considerations, and a target lead time."
      />
    </>
  );
}
