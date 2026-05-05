import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { PreciseMark } from "./PreciseLogo";

type Props = {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaPanel({
  title = "Ready to engineer your next breakthrough?",
  description = "Send us your STEP files and tolerance stack — we'll respond with a manufacturable quote.",
  primaryHref = "/contact",
  primaryLabel = "Request a Quote",
  secondaryHref = "/precise-capabilities.pdf",
  secondaryLabel = "Download Capabilities",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-precise-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-precise-grid-dark bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,_black_50%,_transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 top-1/2 hidden -translate-y-1/2 opacity-15 lg:block"
      >
        <PreciseMark variant="light" className="h-[420px] w-[420px]" />
      </div>
      <Container className="relative grid gap-8 py-20 lg:grid-cols-3 lg:items-center lg:gap-12">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/80">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 rounded-md bg-precise-green px-6 py-3 text-base font-semibold text-precise-ink shadow-card transition-colors hover:bg-precise-green-dark hover:text-white"
          >
            {primaryLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={secondaryHref}
            className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            {secondaryLabel}
          </a>
        </div>
      </Container>
    </section>
  );
}
