import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CtaPanel } from "@/components/CtaPanel";
import { StructuredData } from "@/components/StructuredData";
import { faqSections } from "@/content/faq";
import { buildMetadata } from "@/lib/seo";

const title = "FAQ";
const description =
  "Answers for medical OEM buyers and engineers — NDAs, ISO 13485, lead times, tolerances, materials, traceability. ISO 13485:2016 certified CNC machining for medical devices.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/faq",
  keywords: [
    "ISO 13485 FAQ",
    "medical CNC machining FAQ",
    "RFQ file formats",
    "medical device lead time",
    "first article inspection",
    "material traceability medical",
    "tightest CNC tolerance",
    "porous titanium machining",
  ],
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSections.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  ),
};

export default function FaqPage() {
  return (
    <>
      <StructuredData
        pageTitle={title}
        pageDescription={description}
        pagePath="/faq"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHeader
        eyebrow="Frequently Asked Questions"
        title="Answers for medical OEM buyers and engineers."
        subtitle="Quick answers to the questions our quoting team hears most. Don't see yours? Email sales@precisecomponent.com or use the RFQ form."
      />

      {/* Section nav (anchors) */}
      <section className="border-b border-precise-line bg-white">
        <Container className="flex flex-wrap gap-3 py-4">
          {faqSections.map((s) => (
            <Link
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-precise-line bg-precise-off-white px-4 py-1.5 text-xs font-semibold uppercase tracking-eyebrow text-precise-navy transition-colors hover:border-precise-navy hover:bg-precise-navy hover:text-white"
            >
              {s.title}
            </Link>
          ))}
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container className="max-w-4xl space-y-14">
          {faqSections.map((section) => (
            <FaqAccordion key={section.slug} section={section} />
          ))}
        </Container>
      </section>

      <CtaPanel
        title="Still have questions?"
        description="Send us your drawings and a brief project description. Our quoting team typically responds within one business day."
      />
    </>
  );
}
