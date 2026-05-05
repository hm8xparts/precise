export const site = {
  name: "Precise Components & Tool Design",
  shortName: "Precise Components",
  domain: "precisecomponents.com",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://precisecomponents.com",
  tagline: "Precision Manufacturing for Medical Devices",
  description:
    "ISO 13485:2016 certified precision CNC manufacturer in Clifton, NJ. Tight-tolerance components for medical devices — orthopedic implants, surgical instruments, robotic navigation, diagnostics.",
  email: "sales@precisecomponents.com",
  phone: "(973) 928-2928",
  phoneE164: "+1-973-928-2928",
  address: {
    street: "10 Clifton Blvd #A4",
    locality: "Clifton",
    region: "NJ",
    postalCode: "07011",
    country: "US",
  },
  geo: {
    latitude: 40.8584,
    longitude: -74.1638,
  },
  hours: {
    summary: "Monday–Friday, 8:00 AM – 5:00 PM ET",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  certifications: [
    "ISO 13485:2016 Certified",
    "ISO 9001:2015 Certified",
    "AS9102 FAI Compliant",
  ],
  facility: {
    sqft: 13695,
    label: "13,695 sq ft air-conditioned facility · Clifton, NJ",
  },
  social: {
    // None published — keep empty until provided.
  },
} as const;

export const nav = [
  { label: "Capabilities", href: "/capabilities" },
  { label: "Medical", href: "/medical" },
  { label: "Materials", href: "/materials" },
  { label: "Quality", href: "/quality" },
  { label: "Equipment", href: "/equipment" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;
