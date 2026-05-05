import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, ShieldCheck, FileDown } from "lucide-react";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { RFQForm } from "@/components/RFQForm";
import { StructuredData } from "@/components/StructuredData";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

const title = "Contact & Request a Quote";
const description =
  "Request a quote from Precise Components & Tool Design — ISO 13485:2016 certified medical-device manufacturer in Clifton, NJ. Send STEP files, drawings, and specs to our quoting team.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/contact",
  keywords: [
    "request a quote medical CNC",
    "RFQ medical manufacturing",
    "Precise Components contact",
    "Clifton NJ CNC quote",
  ],
});

const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`,
)}&output=embed`;

export default function ContactPage() {
  return (
    <>
      <StructuredData
        pageTitle={title}
        pageDescription={description}
        pagePath="/contact"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
        includeLocalBusiness
      />

      <PageHeader
        eyebrow="Contact Us"
        title="Let's Engineer Your Next Breakthrough."
        subtitle="Partner with Precise Components & Tool Design for precision medical manufacturing. Send us your drawings and specs — a member of our quoting team will respond within one business day."
      />

      <section className="bg-precise-off-white py-16 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-black uppercase tracking-tight text-precise-navy">
                Request a Quote
              </h2>
              <p className="mt-2 max-w-xl text-sm text-precise-gray">
                Attach STEP, PDF, or DWG files. The more detail you can share —
                tolerances, materials, surface-finish requirements, annual
                volume — the more accurate the quote.
              </p>
              <div className="mt-6">
                <RFQForm />
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-lg border border-precise-line bg-white p-6 shadow-card">
                  <h3 className="text-base font-bold uppercase tracking-wide text-precise-navy">
                    Headquarters
                  </h3>
                  <ul className="mt-4 space-y-4 text-sm">
                    <li className="flex gap-3 text-precise-navy">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-precise-green" aria-hidden="true" />
                      <span>
                        {site.address.street}
                        <br />
                        {site.address.locality}, {site.address.region}{" "}
                        {site.address.postalCode}
                        <br />
                        United States
                      </span>
                    </li>
                    <li>
                      <a
                        href={`tel:${site.phoneE164}`}
                        className="flex gap-3 text-precise-navy hover:text-precise-green"
                      >
                        <Phone className="mt-0.5 h-4 w-4 shrink-0 text-precise-green" aria-hidden="true" />
                        <span className="font-semibold">{site.phone}</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${site.email}`}
                        className="flex gap-3 text-precise-navy hover:text-precise-green"
                      >
                        <Mail className="mt-0.5 h-4 w-4 shrink-0 text-precise-green" aria-hidden="true" />
                        <span className="font-semibold">{site.email}</span>
                      </a>
                    </li>
                    <li className="flex gap-3 text-precise-navy">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-precise-green" aria-hidden="true" />
                      {site.hours.summary}
                    </li>
                  </ul>
                </div>

                <div className="overflow-hidden rounded-lg border border-precise-line bg-white shadow-card">
                  <div className="aspect-[16/10] w-full">
                    <iframe
                      title="Map to Precise Components & Tool Design, Clifton NJ"
                      src={mapEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="rounded-lg border border-precise-line bg-white p-6 shadow-card">
                  <ShieldCheck className="h-7 w-7 text-precise-green" aria-hidden="true" />
                  <h3 className="mt-3 text-base font-bold uppercase tracking-wide text-precise-navy">
                    Certifications
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-precise-navy">
                    {site.certifications.map((c) => (
                      <li key={c} className="flex items-center gap-2">
                        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-precise-green" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/precise-capabilities.pdf"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-precise-navy hover:text-precise-green"
                  >
                    <FileDown className="h-4 w-4" aria-hidden="true" />
                    Download capabilities deck (PDF)
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
