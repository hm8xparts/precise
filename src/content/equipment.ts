export type EquipmentItem = {
  count: number;
  name: string;
  description: string;
};

export const cncAndEdm: EquipmentItem[] = [
  {
    count: 7,
    name: "CNC Milling Centers",
    description:
      "Including Okuma Genos M560V full 5-axis, Bridgeport Conquest 480V full 4-axis, and Mitsui Seiki VS3A.",
  },
  {
    count: 5,
    name: "CNC Turning Centers",
    description:
      "Including HAAS DS30 SSY Dual Spindle live tooling turning center, HAAS SL-30, and SL-10.",
  },
  {
    count: 2,
    name: "Wire EDMs",
    description:
      "Mitsubishi Electric MV1200S advanced wire EDM systems for complex geometries.",
  },
  {
    count: 1,
    name: "Sinker EDM",
    description:
      "Specialized electrical discharge machining for blind cavities and intricate 3D features.",
  },
];

export const finishingQualityDesign: EquipmentItem[] = [
  {
    count: 3,
    name: "Surface Grinders",
    description:
      "Including 2 Mitsui grinders with 3-axis auto feed, plus 2 dedicated polishing stations.",
  },
  {
    count: 2,
    name: "Programmable CMMs",
    description:
      "Mitutoyo Crysta-Apex automated Coordinate Measuring Machines for precise validation.",
  },
  {
    count: 2,
    name: "Laser Workstations",
    description:
      "Trumpf Vectormark and Epilog Laser Mark systems for permanent UDI engraving.",
  },
  {
    count: 10,
    name: "CAD Design Stations",
    description:
      "Networked design and programming seats supporting complex DFM and CAM workflows.",
  },
];
