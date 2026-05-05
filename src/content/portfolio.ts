export type PartPhoto = {
  src: string;
  alt: string;
  caption: string;
  material: string;
  process: string;
};

export const portfolioParts: PartPhoto[] = [
  {
    src: "/parts/01-surgical-drill-housings.jpg",
    alt:
      "Stainless steel surgical drill and reamer housings with internal drive features.",
    caption: "Surgical drill & reamer housings",
    material: "Stainless 316",
    process: "5-axis milling + turning",
  },
  {
    src: "/parts/02-bone-screws-spherical.jpg",
    alt: "Bone screws and spherical components for orthopedic assemblies.",
    caption: "Bone screws & spherical components",
    material: "Titanium Grade 5 / CoCr",
    process: "Live-tooling turning",
  },
  {
    src: "/parts/03-uhmwpe-test-discs.jpg",
    alt: "UHMWPE plastic test discs for mechanical wear testing.",
    caption: "UHMWPE test discs",
    material: "UHMWPE",
    process: "CNC turning",
  },
  {
    src: "/parts/04-titanium-pins.jpg",
    alt: "Machined titanium pins for orthopedic fixation hardware.",
    caption: "Titanium fixation pins",
    material: "Titanium Grade 23",
    process: "CNC turning + grinding",
  },
  {
    src: "/parts/05-stepped-shafts.jpg",
    alt: "Stepped drive shafts for powered surgical tools.",
    caption: "Stepped surgical drive shafts",
    material: "17-4 PH Stainless",
    process: "Live-tooling turning + Wire EDM",
  },
  {
    src: "/parts/06-titanium-plates-stack.jpg",
    alt: "Stack of machined titanium plate stock for implant blanks.",
    caption: "Titanium plate stock",
    material: "Titanium Grade 5",
    process: "Surface grinding",
  },
  {
    src: "/parts/07-mixed-shafts-fittings.jpg",
    alt: "Assorted machined shafts and threaded fittings.",
    caption: "Shafts & threaded fittings",
    material: "Stainless 304 / 316",
    process: "Multi-axis turning",
  },
  {
    src: "/parts/08-peek-implant-blocks.jpg",
    alt: "PEEK implant blocks and balls for spinal and dental applications.",
    caption: "PEEK implant blocks",
    material: "PEEK Implantable",
    process: "5-axis milling",
  },
  {
    src: "/parts/09-knee-hinge-assemblies.jpg",
    alt: "Knee hinge implant assemblies with stainless pivot pins.",
    caption: "Knee hinge assemblies",
    material: "CoCr + Stainless",
    process: "Mill + assembly",
  },
  {
    src: "/parts/10-injection-molded-housings.jpg",
    alt: "Injection-molded medical device housings and enclosures.",
    caption: "Injection-molded housings",
    material: "Class VI Polymer",
    process: "Injection molding",
  },
  {
    src: "/parts/11-surgical-instrument-tips.jpg",
    alt: "Surgical instrument tips and shafts with tight-tolerance features.",
    caption: "Surgical instrument tips",
    material: "Stainless 17-4 PH",
    process: "Wire EDM + grinding",
  },
  {
    src: "/parts/12-porous-titanium-pucks.jpg",
    alt:
      "Porous titanium pucks and test specimens with controlled pore size.",
    caption: "Porous titanium specimens",
    material: "Porous Titanium",
    process: "5-axis milling",
  },
];

export const portfolioStats = [
  { value: "16+", label: "Part Families" },
  { value: "±0.0004\"", label: "Tolerance" },
  { value: "100%", label: "Lot Traceability" },
  { value: "8+", label: "Material Classes" },
];
