import type { LucideIcon } from "lucide-react";
import {
  Mountain,
  Shield,
  Gem,
  Layers,
  Flame,
  Eye,
  Weight,
  Thermometer,
  Zap,
  Hammer,
  Activity,
  Container,
  Disc,
  Droplets,
  Cog,
  ShieldHalf,
} from "lucide-react";

export type MaterialCard = {
  name: string;
  spec: string;
  description: string;
  icon: LucideIcon;
};

export type MaterialColumn = {
  heading: string;
  description: string;
  items: MaterialCard[];
};

export const materialColumns: MaterialColumn[] = [
  {
    heading: "Core Medical Metals",
    description:
      "Workhorse alloys for orthopedic implants, surgical instruments, and structural housings.",
    items: [
      {
        name: "Titanium",
        spec: "Grade 2, 5, 23",
        icon: Mountain,
        description:
          "Titanium is the workhorse of permanent orthopedic implants — hip stems, knee components, spine cages, dental abutments. Grade 5 (Ti-6Al-4V) and Grade 23 (Ti-6Al-4V ELI) provide the strength-to-weight ratio and biocompatibility required for load-bearing implants, while commercially pure Grade 2 is used for surgical instruments and non-load-bearing applications. Titanium machines slowly and generates heat — proper coolant flow and tool selection are critical.",
      },
      {
        name: "Stainless Steel",
        spec: "304, 316, 17-4PH",
        icon: Shield,
        description:
          "316L stainless is the most common stainless for surgical instruments and short-term implants due to corrosion resistance in saline environments. 17-4PH offers higher strength after precipitation hardening for surgical tools requiring edge retention. We machine all three grades regularly with full lot traceability and CMTRs.",
      },
      {
        name: "Cobalt Chrome",
        spec: "CoCr Alloy",
        icon: Gem,
        description:
          "Cobalt chrome is the gold standard for joint replacement wear surfaces — femoral heads, knee femoral components, dental crowns. Its hardness, wear resistance, and biocompatibility make it irreplaceable for articulating implant surfaces. CoCr is challenging to machine due to work-hardening behavior; we use specialized tooling and proven feed-rate strategies refined over 25 years of orthopedic work.",
      },
      {
        name: "Aluminum",
        spec: "6061, 7075",
        icon: Layers,
        description:
          "Aluminum 6061 and 7075 are used for surgical instrument housings, jigs, fixtures, and non-implant medical-device components where weight and machinability matter more than implant-grade biocompatibility. Both alloys machine cleanly and accept anodizing, type-II or type-III, for color-coding and corrosion resistance.",
      },
      {
        name: "Inconel",
        spec: "High Temp",
        icon: Flame,
        description:
          "Inconel nickel-based superalloys serve high-temperature and corrosion-critical applications — autoclave components, medical sterilizer parts, downhole tooling adjacent to medical research. Inconel work-hardens aggressively and demands rigid setups, sharp tooling, and conservative feed strategies. We machine 718, 625, and X-750 to print.",
      },
    ],
  },
  {
    heading: "Specialty Alloys",
    description:
      "Refractory and exotic metals for radiopaque, magnetic, and high-density applications.",
    items: [
      {
        name: "Tantalum",
        spec: "Radiopaque",
        icon: Eye,
        description:
          "Tantalum's radiopacity makes it visible under fluoroscopy and CT — essential for vascular markers, catheter tips, and radiopaque implant landmarks used during minimally-invasive procedures. Tantalum is dense, ductile, and biocompatible. Machining requires sharp tooling and slow feeds to avoid galling; we have proven processes for tantalum micro-machining.",
      },
      {
        name: "Tungsten",
        spec: "High Density",
        icon: Weight,
        description:
          "Tungsten's extreme density (19.3 g/cc) makes it the material of choice for radiation shielding components, balance weights in medical robotics, and counterweights in surgical positioning systems. Pure tungsten is brittle and difficult to machine; we typically work with sintered tungsten alloys and tungsten heavy-metal blends optimized for machinability.",
      },
      {
        name: "Molybdenum",
        spec: "Refractory",
        icon: Thermometer,
        description:
          "Molybdenum is used in high-temperature medical and laboratory equipment, including vacuum furnace components and X-ray tube parts. Its high melting point and dimensional stability under thermal load make it suitable where stainless and titanium fail. Specialized machining strategies prevent edge chipping.",
      },
      {
        name: "Brass & Copper",
        spec: "Conductive",
        icon: Zap,
        description:
          "Used in medical-device electrical contacts, RFID-tagged surgical instrument tracking, and conductive components in diagnostic equipment. Both machine easily but require careful chip control to maintain tight tolerances.",
      },
      {
        name: "Hardened Tool Steels",
        spec: "A2, D2, S7, H13",
        icon: Hammer,
        description:
          "We machine A2, D2, S7, H13, and other tool steels for fixtures, jigs, custom EDM electrodes, and surgical instrument tooling. Pre- and post-hardening machining strategies allow us to hold tight tolerances on hardened parts using EDM and precision grinding when conventional cutting isn't viable.",
      },
    ],
  },
  {
    heading: "Medical Polymers",
    description:
      "Implantable, autoclavable, and engineering polymers for life-critical applications.",
    items: [
      {
        name: "PEEK",
        spec: "Implantable",
        icon: Activity,
        description:
          "PEEK (polyether ether ketone) is the implantable polymer of choice for spine cages, cranial reconstruction, and load-bearing implants where radiolucency under imaging is required. Implant-grade PEEK (PEEK-OPTIMA) is biocompatible and X-ray transparent. PEEK machines well but requires proper coolant strategy to prevent thermal stress and dimensional drift.",
      },
      {
        name: "ULTEM",
        spec: "Autoclavable",
        icon: Container,
        description:
          "ULTEM (polyetherimide) is autoclave-stable, FDA-compliant, and used for sterilizable surgical instrument handles, trays, and reusable medical-device housings. It machines cleanly and tolerates repeated steam sterilization without degradation.",
      },
      {
        name: "UHMWPE",
        spec: "Joint Liners",
        icon: Disc,
        description:
          "Ultra-high-molecular-weight polyethylene is the bearing surface in total knee and total hip replacements — the polymer half of the metal-on-poly articulation. Highly cross-linked UHMWPE variants improve wear life. We machine UHMWPE liners and test specimens to dimensional and surface-finish specs critical to wear performance.",
      },
      {
        name: "PTFE / Teflon",
        spec: "Low Friction",
        icon: Droplets,
        description:
          "PTFE's extreme low-friction surface and chemical inertness make it suitable for catheter components, fluid-handling parts, and sliding surfaces in medical devices. Machining requires sharp tooling and careful chip evacuation to maintain tolerances on this soft, deformable material.",
      },
      {
        name: "Delrin / Acetal",
        spec: "Structural",
        icon: Cog,
        description:
          "Delrin (POM, polyoxymethylene) is a structural engineering thermoplastic used in medical-device housings, gears, bushings, and non-implant mechanical components. It machines like a soft metal — clean, predictable, dimensionally stable.",
      },
      {
        name: "Zircar Ceramic",
        spec: "Insulating",
        icon: ShieldHalf,
        description:
          "Zircar zirconium-oxide-based ceramics provide thermal and electrical insulation for medical-device applications including laser components, RF-electrosurgery handpieces, and high-temperature sensors. Ceramic machining is performed via EDM and specialized grinding due to extreme hardness.",
      },
    ],
  },
];

export const marqueeMaterials = [
  "Titanium Grade 2/5/23",
  "Stainless 304 / 316 / 17-4",
  "Cobalt Chrome (CoCr)",
  "PEEK Implantable",
  "UHMWPE Joint Liners",
  "Inconel High Temp",
  "Tantalum Radiopaque",
  "Tungsten High Density",
  "ULTEM Autoclavable",
  "Aluminum 6061 / 7075",
  "Delrin Acetal",
  "PTFE Low Friction",
];
