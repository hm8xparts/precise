import { site } from "@/content/site";

type Crumb = { name: string; href: string };

type Props = {
  pageTitle: string;
  pageDescription: string;
  pagePath: string;
  breadcrumbs?: Crumb[];
  includeLocalBusiness?: boolean;
  includeWebSite?: boolean;
};

export function StructuredData({
  pageTitle,
  pageDescription,
  pagePath,
  breadcrumbs,
  includeLocalBusiness,
  includeWebSite,
}: Props) {
  const url = `${site.url}${pagePath}`;
  const logoUrl = `${site.url}/logo/precise-logo-master.png`;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: logoUrl,
    email: site.email,
    telephone: site.phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "ISO 13485:2016 Certified",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "ISO 9001:2015 Certified",
      },
    ],
    naics: "332710",
    industry: "Precision Machining; Medical Device Contract Manufacturing",
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    image: logoUrl,
    url: site.url,
    telephone: site.phoneE164,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: site.hours.days,
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
    ],
    priceRange: "$$$",
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbList = breadcrumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          item: `${site.url}${c.href}`,
        })),
      }
    : null;

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: pageTitle,
    description: pageDescription,
    isPartOf: { "@id": `${site.url}/#website` },
    primaryImageOfPage: { "@type": "ImageObject", url: logoUrl },
  };

  const blocks: Record<string, unknown>[] = [organization, webPage];
  if (includeLocalBusiness) blocks.push(localBusiness);
  if (includeWebSite) blocks.push(webSite);
  if (breadcrumbList) blocks.push(breadcrumbList);

  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
