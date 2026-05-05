export type EquipmentItem = {
  name: string;
  description: string;
};

export const cncAndEdm: EquipmentItem[] = [
  {
    name: "CNC Milling Centers",
    description:
      "Including Okuma Genos M560V full 5-axis, Bridgeport Conquest 480V full 4-axis, and Mitsui Seiki VS3A.",
  },
  {
    name: "CNC Turning Centers",
    description:
      "Including HAAS DS30 SSY Dual Spindle live tooling turning center, HAAS SL-30, and SL-10.",
  },
  {
    name: "Wire EDMs",
    description:
      "Mitsubishi Electric MV1200S advanced wire EDM systems for complex geometries.",
  },
  {
    name: "Sinker EDM",
    description:
      "Specialized electrical discharge machining for blind cavities and intricate 3D features.",
  },
];

export const finishingQualityDesign: EquipmentItem[] = [
  {
    name: "Surface Grinders",
    description:
      "Including Mitsui surface grinders with 3-axis auto feed, plus dedicated polishing stations.",
  },
  {
    name: "Programmable CMMs",
    description:
      "Mitutoyo Crysta-Apex automated Coordinate Measuring Machines for precise validation.",
  },
  {
    name: "Laser Workstations",
    description:
      "Trumpf Vectormark and Epilog Laser Mark systems for permanent UDI engraving.",
  },
];
