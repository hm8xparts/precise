export type MaterialColumn = {
  heading: string;
  description: string;
  items: { name: string; spec: string; note: string }[];
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
        note: "Implant-grade, biocompatible. Hip, knee, spine hardware.",
      },
      {
        name: "Stainless Steel",
        spec: "304, 316, 17-4",
        note: "Surgical instruments, drill housings, drive shafts.",
      },
      {
        name: "Cobalt Chrome",
        spec: "CoCr",
        note: "Joint articulating surfaces and high-wear implants.",
      },
      {
        name: "Aluminum",
        spec: "6061, 7075",
        note: "Structural housings, fixtures, and tooling.",
      },
      {
        name: "Inconel",
        spec: "High Temp",
        note: "Sterilization-resistant and high-temperature components.",
      },
      {
        name: "Carbon Steel",
        spec: "High Strength",
        note: "Tooling and structural applications.",
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
        note: "Imaging markers and biocompatible structures.",
      },
      {
        name: "Tungsten",
        spec: "High Density",
        note: "Counterweights and radiation shielding.",
      },
      {
        name: "Molybdenum",
        spec: "Refractory",
        note: "High-temperature structural components.",
      },
      {
        name: "Brass & Copper",
        spec: "Conductive",
        note: "Electrode bodies and conductive parts.",
      },
      {
        name: "Hardened Steels",
        spec: "Tooling",
        note: "EDM and precision tooling applications.",
      },
      {
        name: "Iron",
        spec: "Magnetic",
        note: "Magnetic-property components.",
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
        note: "Spinal cages, dental, and load-bearing implants.",
      },
      {
        name: "ULTEM",
        spec: "Autoclavable",
        note: "Sterilizable instruments and trays.",
      },
      {
        name: "UHMWPE",
        spec: "Joint Liners",
        note: "Hip and knee bearing surfaces.",
      },
      {
        name: "Teflon (PTFE)",
        spec: "Low Friction",
        note: "Seals and low-friction guides.",
      },
      {
        name: "Delrin (Acetal)",
        spec: "Structural",
        note: "Stable engineering polymer for fixtures.",
      },
      {
        name: "Zircar Ceramic",
        spec: "Insulating",
        note: "High-temperature insulating components.",
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
