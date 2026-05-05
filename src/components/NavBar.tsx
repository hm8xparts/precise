"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { PreciseLogo } from "./PreciseLogo";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/cn";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-colors",
        scrolled
          ? "border-precise-line bg-white/90 backdrop-blur"
          : "border-transparent bg-white",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label={`${site.shortName} — home`}
          className="flex items-center gap-3"
        >
          <PreciseLogo className="h-9 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-precise-navy transition-colors hover:text-precise-green"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-precise-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-precise-navy-dark"
          >
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-precise-navy lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-precise-line bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-precise-navy hover:bg-precise-off-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-precise-navy px-4 py-3 text-base font-semibold text-white"
            >
              Request a Quote
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
