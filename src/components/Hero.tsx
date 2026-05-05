import Link from "next/link";
import { ArrowRight, FileDown } from "lucide-react";
import { Container } from "./Container";
import { GridBackground } from "./GridBackground";
import { SectionEyebrow } from "./SectionEyebrow";
import { TrustBar } from "./TrustBar";
import { PreciseLogo } from "./PreciseLogo";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-precise-line bg-white">
      <GridBackground />
      <Container className="relative grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <SectionEyebrow>Medical Grade Manufacturing</SectionEyebrow>
          <h1 className="mt-4 text-4xl font-black uppercase leading-[1.05] tracking-tight text-precise-navy sm:text-5xl md:text-6xl lg:text-[64px]">
            Precision Manufacturing for Medical Devices.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-precise-gray">
            Tight-tolerance components for orthopedic implants, surgical
            instruments, robotic navigation, and diagnostic equipment.
            ISO 13485:2016 certified. Made in the USA.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-precise-navy px-6 py-3 text-base font-semibold text-white shadow-card transition-colors hover:bg-precise-navy-dark"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="/precise-capabilities.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-precise-navy px-6 py-3 text-base font-semibold text-precise-navy transition-colors hover:bg-precise-navy hover:text-white"
            >
              <FileDown className="h-4 w-4" aria-hidden="true" />
              Download Capabilities
            </a>
          </div>

          <div className="mt-10 border-t border-precise-line pt-6">
            <TrustBar />
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative h-full min-h-[360px] overflow-hidden rounded-lg bg-precise-navy">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-precise-grid-dark bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,_black_55%,_transparent_100%)]"
            />
            <div className="relative flex h-full min-h-[360px] items-center justify-center p-10">
              <PreciseLogo
                variant="light"
                className="h-auto w-full max-w-[360px]"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-precise-navy-dark/80 px-6 py-3 text-xs uppercase tracking-eyebrow text-white/70">
              ±0.0004&quot; tolerance · 100% lot traceability · Cleanroom-ready finishes
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
