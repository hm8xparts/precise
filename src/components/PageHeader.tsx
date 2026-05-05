import { Container } from "./Container";
import { GridBackground } from "./GridBackground";
import { SectionEyebrow } from "./SectionEyebrow";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
};

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  className,
  align = "left",
}: Props) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-precise-line bg-white",
        className,
      )}
    >
      <GridBackground />
      <Container
        className={cn(
          "relative py-16 md:py-20",
          align === "center" && "text-center",
        )}
      >
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h1
          className={cn(
            "mt-4 text-4xl font-black uppercase leading-[1.08] tracking-tight text-precise-navy sm:text-5xl md:text-6xl",
            align === "center" && "mx-auto max-w-3xl",
          )}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            className={cn(
              "mt-5 max-w-2xl text-lg leading-relaxed text-precise-gray",
              align === "center" && "mx-auto",
            )}
          >
            {subtitle}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
