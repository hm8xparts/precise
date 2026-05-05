import type { LucideIcon } from "lucide-react";
import {
  Cpu,
  Settings2,
  Zap,
  Box,
  Barcode,
  Gem,
  Cog,
  Flame,
  SprayCan,
  Wrench,
  Layers,
  Droplets,
  TestTube,
} from "lucide-react";

export type Capability = {
  slug: string;
  name: string;
  short: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
};

export const coreCapabilities: Capability[] = [
  {
    slug: "cnc-milling",
    name: "CNC Milling",
    short: "3, 4 & 5-axis precision milling",
    description:
      "Complex 3, 4, and 5-axis milling for intricate orthopedic implants, bone plates, and surgical instrument housings.",
    highlights: [
      "Okuma Genos M560V full 5-axis",
      "Bridgeport Conquest 480V full 4-axis",
      "Tolerances to ±0.0004\"",
    ],
    icon: Cpu,
  },
  {
    slug: "cnc-turning",
    name: "CNC Turning",
    short: "Live-tooling, dual-spindle turning",
    description:
      "High-precision turning for cylindrical components, bone screws, rods, and powered surgical tool drive shafts.",
    highlights: [
      "Dual Spindle live tooling turning centers",
      "HAAS DS30 SSY 5-axis with live tooling",
      "Micro parts down to 3mm diameter",
    ],
    icon: Settings2,
  },
  {
    slug: "wire-edm",
    name: "Wire EDM",
    short: "Zero-cutting-force precision",
    description:
      "Ultra-precise cutting for complex geometries, splines, and delicate features in hardened medical-grade alloys.",
    highlights: [
      "Two Mitsubishi Electric MV1200S units",
      "Zero cutting force on delicate parts",
      "Exceptional surface finish capabilities",
    ],
    icon: Zap,
  },
  {
    slug: "sinker-edm",
    name: "Sinker EDM",
    short: "Blind cavities & sharp internal corners",
    description:
      "Specialized electrical discharge machining for blind cavities, sharp internal corners, and complex 3D shapes.",
    highlights: [
      "Machining hardened tool steels and exotics",
      "Custom EDM tooling and fixtures",
      "Burr-free processing for critical components",
    ],
    icon: Box,
  },
];

export const secondaryProcesses: Capability[] = [
  {
    slug: "laser-marking",
    name: "Laser Marking",
    short: "UDI-grade permanent marking",
    description:
      "Permanent, high-contrast UDI and part marking using Trumpf Vectormark and Epilog Laser Fusion M2 workstations.",
    highlights: ["Trumpf Vectormark", "Epilog Laser Fusion M2", "UDI-compliant"],
    icon: Barcode,
  },
  {
    slug: "mirror-polishing",
    name: "Mirror Polishing",
    short: "Implant-grade mirror finishes",
    description:
      "Specialized mirror finishing for orthopedic implant components (hips, knees) ensuring optimal biocompatibility and wear resistance.",
    highlights: [
      "Hip and knee implant finishing",
      "Biocompatibility-ready",
      "Wear-resistant surfaces",
    ],
    icon: Gem,
  },
  {
    slug: "precision-grinding",
    name: "Precision Grinding",
    short: "Three surface grinders + polishing",
    description:
      "Equipped with 3 surface grinders, including two Mitsui units with 3-axis auto feed, plus dedicated polishing stations.",
    highlights: [
      "2× Mitsui 3-axis auto feed",
      "3 total surface grinders",
      "Dedicated polishing stations",
    ],
    icon: Cog,
  },
  {
    slug: "heat-treating",
    name: "In-House Heat Treating",
    short: "Controlled thermal processing",
    description:
      "Controlled thermal processing to achieve exact hardness and material property specifications without supply chain delays.",
    highlights: [
      "Hardness to spec",
      "Material property control",
      "No supply-chain delays",
    ],
    icon: Flame,
  },
  {
    slug: "sand-blasting",
    name: "Sand Blasting",
    short: "Texturing for osseointegration",
    description:
      "Surface texturing and preparation of medical components for enhanced osseointegration or aesthetic finishing.",
    highlights: [
      "Osseointegration prep",
      "Surface texturing",
      "Aesthetic finishing",
    ],
    icon: SprayCan,
  },
  {
    slug: "welding",
    name: "TIG & MIG Welding",
    short: "Surgical assembly welding",
    description:
      "Precision welding services for complex surgical instrument assemblies and multi-component fixtures.",
    highlights: [
      "TIG and MIG processes",
      "Surgical instrument assemblies",
      "Multi-component fixtures",
    ],
    icon: Wrench,
  },
];

export const extendedCapabilities: Capability[] = [
  {
    slug: "3d-printing",
    name: "Medical-Grade 3D Printing",
    short: "MJF · SLA · DLP",
    description:
      "MJF, SLA, and DLP technologies for rapid iteration — ideal for prototyping, surgical guides, and anatomical fit-checks. Biocompatible resins and advanced polymers.",
    highlights: [
      "MJF, SLA, DLP processes",
      "Surgical guides & fit-checks",
      "Biocompatible resins",
    ],
    icon: Layers,
  },
  {
    slug: "injection-molding",
    name: "Injection Molding",
    short: "Class VI medical-grade volume",
    description:
      "Validated high-volume production for medical device components. Processing of Class VI medical-grade materials. Insert molding and overmolding for complex assemblies.",
    highlights: [
      "Validated high-volume production",
      "Class VI medical-grade materials",
      "Insert molding & overmolding",
    ],
    icon: Droplets,
  },
  {
    slug: "vacuum-casting",
    name: "Vacuum Casting",
    short: "Low-volume soft-touch parts",
    description:
      "Low-volume production of medical-grade parts without hard tooling. Silicone, polyurethane, and elastomeric materials. Perfect for soft-touch grips, seals, and wearable enclosures.",
    highlights: [
      "No hard tooling required",
      "Silicone, polyurethane, elastomers",
      "Grips, seals, wearables",
    ],
    icon: TestTube,
  },
];

export const keyDifferentiators = [
  {
    label: "Tight Tolerances",
    detail: "±0.0004\" across CNC & additive processes",
  },
  {
    label: "Scalable",
    detail: "Rapid prototypes through low/mid-volume production",
  },
  {
    label: "Cleanroom-Compatible",
    detail: "Finishes ready for sterilization workflows",
  },
  {
    label: "Zero China Dependency",
    detail: "Manufacturing across U.S., Europe & India",
  },
];

export const comparisonRows = [
  {
    requirement: "Quality Systems",
    traditional: "Basic ISO 9001 or uncertified",
    precise: "ISO 13485:2016 Certified",
    preciseDetail: "Dedicated medical device quality management",
  },
  {
    requirement: "Precision & Tolerances",
    traditional: "Standard commercial tolerances (±0.005\")",
    precise: "Ultra-Precision (±0.0004\")",
    preciseDetail: "Critical for surgical instruments and implants",
  },
  {
    requirement: "Material Traceability",
    traditional: "Partial or manual tracking",
    precise: "100% Lot Control & Traceability",
    preciseDetail: "From raw stock to finished component",
  },
  {
    requirement: "Supply Chain Risk",
    traditional: "Heavy reliance on single regions",
    precise: "Zero China Dependency",
    preciseDetail: "Manufacturing across U.S., Europe & India",
  },
  {
    requirement: "Production Scale",
    traditional: "Rigid volume requirements",
    precise: "Seamless Scalability",
    preciseDetail: "From rapid prototypes to mid-volume production",
  },
];
