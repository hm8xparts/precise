import Link from "next/link";
import { Mail, Phone, MapPin, Clock, FileDown, HelpCircle } from "lucide-react";
import { Container } from "./Container";
import { PreciseLogo } from "./PreciseLogo";
import { nav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-precise-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 bg-precise-grid-dark bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,_black_50%,_transparent_100%)]"
      />
      <Container className="relative grid gap-12 py-16 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" aria-label={`${site.shortName} — home`} className="inline-block">
            <PreciseLogo variant="light" className="text-2xl" />
          </Link>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/70">
            Tight-tolerance components for medical devices — orthopedic
            implants, surgical instruments, robotic navigation, diagnostics.
            ISO 13485:2016 and ISO 9001:2015 certified. Made in the USA.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-eyebrow text-white/60">
            {site.certifications.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/20 px-3 py-1"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-eyebrow text-white/60">
            Site
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/85 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-eyebrow text-white/60">
            Resources
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                href="/faq"
                className="flex items-center gap-2 text-white/85 transition-colors hover:text-white"
              >
                <HelpCircle className="h-4 w-4 text-precise-green" aria-hidden="true" />
                FAQ
              </Link>
            </li>
            <li>
              <a
                href="/precise-capabilities.pdf"
                className="flex items-center gap-2 text-white/85 transition-colors hover:text-white"
              >
                <FileDown className="h-4 w-4 text-precise-green" aria-hidden="true" />
                Capabilities Deck (PDF)
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white/85 transition-colors hover:text-white"
              >
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-eyebrow text-white/60">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3 text-white/85">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-precise-green" />
              <span>
                {site.address.street}
                <br />
                {site.address.locality}, {site.address.region} {site.address.postalCode}
              </span>
            </li>
            <li>
              <a
                href={`tel:${site.phoneE164}`}
                className="flex gap-3 text-white/85 transition-colors hover:text-white"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-precise-green" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex gap-3 text-white/85 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-precise-green" />
                {site.email}
              </a>
            </li>
            <li className="flex gap-3 text-white/85">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-precise-green" />
              {site.hours.summary}
            </li>
          </ul>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col items-start justify-between gap-2 py-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>NAICS 332710 · Precision Machining · Medical Device Contract Manufacturing</p>
        </Container>
      </div>
    </footer>
  );
}
