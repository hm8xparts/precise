import type { LucideIcon } from "lucide-react";
import {
  Bone,
  Stethoscope,
  Activity,
  Microscope,
  Syringe,
  FlaskConical,
  Scan,
  Pill,
} from "lucide-react";

export type MedicalArea = {
  slug: string;
  name: string;
  summary: string;
  bullets: string[];
  partImage: string;
  partAlt: string;
  icon: LucideIcon;
};

export const medicalAreas: MedicalArea[] = [
  {
    slug: "orthopedic-implants",
    name: "Orthopedic Implants",
    summary:
      "Hip, knee, and spine hardware machined from medical-grade titanium and cobalt chrome — including spherical articulating surfaces in Stainless Steel, CoCr, and PEEK.",
    bullets: [
      "Hip, knee, and spine hardware",
      "Titanium Grade 2/5/23 and CoCr",
      "Perfected spherical machining for joint replacements",
      "Mirror polishing for biocompatibility and wear resistance",
    ],
    partImage: "/parts/09-knee-hinge-assemblies.jpg",
    partAlt:
      "Machined knee hinge implant assemblies with stainless steel pivot pins.",
    icon: Bone,
  },
  {
    slug: "surgical-instruments",
    name: "Surgical Instruments",
    summary:
      "Bone saws, drills, reamers, and complex multi-component surgical tools — with full mechanical assembly to customer specifications in a controlled environment.",
    bullets: [
      "Bone saws, drills, and reamers",
      "Drive-shaft turning to ±0.0004\"",
      "Full surgical-instrument assembly",
      "TIG/MIG welding for multi-component fixtures",
    ],
    partImage: "/parts/01-surgical-drill-housings.jpg",
    partAlt:
      "Stainless surgical drill and reamer housings with internal drive features.",
    icon: Stethoscope,
  },
  {
    slug: "diagnostic-robotics",
    name: "Diagnostic & Robotic Navigation",
    summary:
      "Precision housings and structural components for endoscopy, robotic surgical navigation, and diagnostic imaging systems.",
    bullets: [
      "Endoscopy housings and tip assemblies",
      "Robotic-navigation structural components",
      "Diagnostic imaging brackets and frames",
      "Tight-tolerance optical/sensor mounts",
    ],
    partImage: "/parts/11-surgical-instrument-tips.jpg",
    partAlt:
      "Surgical instrument tips and shafts machined to tight tolerances.",
    icon: Activity,
  },
  {
    slug: "porous-titanium-test-specimens",
    name: "Porous Titanium & Test Specimens",
    summary:
      "Porous titanium with custom 1.5 micron pore size for osseointegration research, plus UHMWPE, PEEK, and Delrin dog-bones for mechanical testing.",
    bullets: [
      "Porous titanium pucks (1.5 µm pore size)",
      "Foam polyurethane specimens",
      "UHMWPE, PEEK, Delrin dog-bones",
      "Mechanical-test geometries to spec",
    ],
    partImage: "/parts/12-porous-titanium-pucks.jpg",
    partAlt:
      "Porous titanium pucks and biocompatible polymer test specimens.",
    icon: Microscope,
  },
];

export const medicalCallouts = [
  {
    icon: Syringe,
    label: "Micro Parts",
    detail: "5 mm screws with ±0.002\" tolerances for testing and implants.",
  },
  {
    icon: FlaskConical,
    label: "Cleanroom-Compatible",
    detail: "Finishes ready for sterilization workflows.",
  },
  {
    icon: Scan,
    label: "100% Lot Traceability",
    detail: "Raw stock through finished medical part.",
  },
  {
    icon: Pill,
    label: "Class VI Materials",
    detail: "Validated processing of Class VI medical-grade polymers.",
  },
];
