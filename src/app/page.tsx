import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Bone, Stethoscope, Scan, Microscope } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { CapabilityCard } from "@/components/CapabilityCard";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CtaPanel } from "@/components/CtaPanel";
import { MaterialMarquee } from "@/components/MaterialMarquee";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { StatRow } from "@/components/StatBlock";
import { StructuredData } from "@/components/StructuredData";
import { coreCapabilities } from "@/content/capabilities";
import { portfolioStats } from "@/content/portfolio";
import { buildMetadata } from "@/lib/seo";

const title = "Precision CNC Manufacturing for Medical Devices";
const description =
  "ISO 13485:2016 certified medical-device contract manufacturer in Clifton, NJ. Tight-tolerance CNC milling, turning, and EDM for orthopedic implants, surgical instruments, and diagnostics. Request a quote.";

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path: "/",
  keywords: [
    "medical device contract manufacturer",
    "ISO 13485 CNC machining",
    "orthopedic implant machining",
    "precision CNC New Jersey",
    "surgical instrument manufacturing",
    "titanium machining medical",
    "PEEK CNC machining",
  ],
});

const whatWeMake = [
  {
    icon: Stethoscope,
    label: "Surgical Instruments",
    detail: "Bone saws, drills, reamers & multi-component tools.",
    img: "/parts/01-surgical-drill-housings.jpg",
    alt: "Stainless surgical drill and reamer housings.",
  },
  {
    icon: Bone,
    label: "Orthopedic Implants",
    detail: "Hip, knee, and spine hardware in Titanium and CoCr.",
    img: "/parts/02-bone-screws-spherical.jpg",
    alt: "Bone screws and spherical orthopedic components.",
  },
  {
    icon: Scan,
    label: "Diagnostic & Robotic",
    detail: "Endoscopy and robotic-navigation structural components.",
    img: "/parts/11-surgical-instrument-tips.jpg",
    alt: "Surgical instrument tips and shafts.",
  },
  {
    icon: Microscope,
    label: "Test Specimens",
    detail: "Porous titanium pucks and polymer test geometries.",
    img: "/parts/12-porous-titanium-pucks.jpg",
    alt: "Porous titanium pucks and biocompatible polymer test specimens.",
  },
];

export default function HomePage() {
  return (
    <>
      <StructuredData
        pageTitle={title}
        pageDescription={description}
        pagePath="/"
        includeLocalBusiness
        includeWebSite
      />

      <Hero />

      {/* Core Capabilities preview */}
      <section className="border-b border-precise-line bg-white py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>Core Capabilities</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-precise-navy sm:text-4xl md:text-5xl">
              Advanced machining for surgical-grade components.
            </h2>
            <p className="mt-4 text-base text-precise-gray">
              Multi-axis CNC and EDM under one ISO 13485 quality system, supported
              by in-house finishing, inspection, and design.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

          <div className="mt-10 text-center">
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 text-sm font-semibold text-precise-navy hover:text-precise-green"
            >
              See full capabilities <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      {/* What We Make */}
      <section className="bg-precise-off-white py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionEyebrow>What We Make</SectionEyebrow>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-precise-navy sm:text-4xl">
                Engineered for life-critical applications.
              </h2>
              <p className="mt-4 text-base text-precise-gray">
                From orthopedic implants to robotic-surgery navigation, every
                component is manufactured under a dedicated medical-device
                quality system.
              </p>
              <Link
                href="/medical"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-precise-navy hover:text-precise-green"
              >
                Explore medical specialization{" "}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="lg:col-span-8">
              <div className="grid gap-6 sm:grid-cols-2">
                {whatWeMake.map((w) => (
                  <article
                    key={w.label}
                    className="group overflow-hidden rounded-lg border border-precise-line bg-white shadow-card transition-shadow hover:shadow-card-hover"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-precise-off-white">
                      <Image
                        src={w.img}
                        alt={w.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-precise-navy">
                        <w.icon className="h-5 w-5 text-precise-green" aria-hidden="true" />
                        <h3 className="text-base font-bold uppercase tracking-wide">
                          {w.label}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm text-precise-gray">{w.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Materials marquee */}
      <section className="bg-white pt-12">
        <Container className="mb-6">
          <SectionEyebrow>Material Expertise</SectionEyebrow>
          <h2 className="mt-3 max-w-2xl text-2xl font-black uppercase leading-tight text-precise-navy sm:text-3xl md:text-4xl">
            Biocompatible & exotic materials, mastered.
          </h2>
        </Container>
        <MaterialMarquee />
        <Container className="mt-6 flex justify-end">
          <Link
            href="/materials"
            className="inline-flex items-center gap-2 text-sm font-semibold text-precise-navy hover:text-precise-green"
          >
            View full materials list{" "}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Container>
      </section>

      {/* Why OEMs choose us */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>The Precise Edge</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-precise-navy sm:text-4xl md:text-5xl">
              Why leading medical OEMs choose us.
            </h2>
          </div>
          <div className="mt-12">
            <ComparisonTable />
          </div>
          <div className="mt-12">
            <StatRow stats={portfolioStats} />
          </div>
        </Container>
      </section>

      <CtaPanel />
    </>
  );
}
