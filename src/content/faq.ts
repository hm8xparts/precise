export type FaqItem = {
  q: string;
  a: string;
};

export type FaqSection = {
  slug: string;
  title: string;
  items: FaqItem[];
};

export const faqSections: FaqSection[] = [
  {
    slug: "engagement-process",
    title: "Engagement & Process",
    items: [
      {
        q: "Do you sign mutual NDAs?",
        a: "Yes. We sign mutual confidentiality agreements as a standard first step on every project. We can work from your NDA template or provide ours on request — email sales@precisecomponent.com to receive a copy before sharing CAD files.",
      },
      {
        q: "What file formats do you accept for RFQs?",
        a: "We accept STEP, IGES, Parasolid (.X_T), SolidWorks (.SLDPRT), Pro/E, and PDF drawings. STEP is preferred for fastest quote turnaround. We can also work from 2D PDF drawings with proper GD&T callouts if 3D models aren't available.",
      },
      {
        q: "What's your standard prototype lead time?",
        a: "Standard prototype lead time is 2–3 weeks from approved drawings and PO. Production lead times typically run 4–8 weeks depending on complexity, material availability, and finishing requirements. Expedited prototyping is available on a case-by-case basis.",
      },
      {
        q: "What's your minimum order quantity?",
        a: "There's no hard minimum. We routinely run prototype quantities of 1–10 pieces alongside production runs in the hundreds to low thousands. Per-piece pricing reflects setup amortization across the run.",
      },
      {
        q: "Do you provide regulatory documentation?",
        a: "Yes. We provide Certificates of Conformance, full material certifications, and First Article Inspection reports as standard deliverables. Additional documentation including dimensional reports, process validation records, and traceability packages are available on request and required for medical-device customers under ISO 13485.",
      },
    ],
  },
  {
    slug: "quality-certifications",
    title: "Quality & Certifications",
    items: [
      {
        q: "Are you ISO certified?",
        a: "Yes — we are certified to both ISO 13485:2016 (medical devices quality management) and ISO 9001:2015 (general quality management). Both certificates are available on request via sales@precisecomponent.com.",
      },
      {
        q: "What is the difference between ISO 13485 and ISO 9001?",
        a: "ISO 9001:2015 is the international standard for general quality management systems applicable across industries. ISO 13485:2016 is the medical-device-specific standard, with stricter requirements for risk management, traceability, validation, and regulatory documentation. Holding both means we operate under the more stringent medical-device framework while maintaining general quality management discipline.",
      },
      {
        q: "How do you handle material traceability?",
        a: "We maintain 100% lot traceability from raw stock to finished component. Every part ships with documentation linking it to its raw material lot, heat number, and certified material test reports (CMTRs). Our quality system retains traceability records for the duration required by the customer's quality agreement, typically a minimum of 10 years for medical devices.",
      },
      {
        q: "Do you perform First Article Inspection (FAI)?",
        a: "Yes. First Article Inspection is performed per documented internal procedures on the first production piece of every new part number. FAI reports include full dimensional verification against drawing requirements, material verification, and process validation documentation.",
      },
    ],
  },
  {
    slug: "capabilities-specifications",
    title: "Capabilities & Specifications",
    items: [
      {
        q: "What is your tightest achievable tolerance?",
        a: "We routinely hold ±0.0004\" (±0.01mm) on critical features across CNC milling, turning, and EDM. Tighter tolerances are achievable on specific features through grinding and precision EDM operations — discuss your tolerance stack-up with us early in the design phase to optimize manufacturability.",
      },
      {
        q: "What's the smallest part you can produce?",
        a: "Our turning capability handles parts down to 3mm diameter on dual-spindle live-tooling CNC lathes including the HAAS DS30 SSY 5-axis. We routinely produce screws and pins down to 5mm with ±0.002\" tolerances for medical implant and test specimen applications. For sub-3mm work or true Swiss-style production volumes, we can structure the work through partner capacity.",
      },
      {
        q: "Do you do assembly?",
        a: "Yes. We perform full mechanical assembly of multi-component surgical instruments and fixtures to customer specifications in a controlled environment. This includes pinning, threading, and tooling-aided assembly.",
      },
      {
        q: "Do you offer surface finishing?",
        a: "Yes — we offer in-house mirror polishing (critical for orthopedic implant wear surfaces), sand blasting for osseointegration surface texture, precision grinding, laser marking for UDI compliance, and TIG/MIG welding. Heat treating is performed in-house to eliminate supply-chain delays.",
      },
    ],
  },
  {
    slug: "materials-manufacturing",
    title: "Materials & Manufacturing",
    items: [
      {
        q: "What materials do you machine?",
        a: "We work across three material classes: core medical metals (Titanium Grades 2/5/23, Stainless 304/316/17-4, Cobalt Chrome, Aluminum, Inconel), specialty alloys (Tantalum, Tungsten, Molybdenum, hardened tool steels), and medical polymers (PEEK, ULTEM, UHMWPE, PTFE, Delrin, Zircar ceramic). See /materials for full details and application notes.",
      },
      {
        q: "Are your finishes cleanroom-compatible?",
        a: "Yes — finishing processes are sterilization-ready and compatible with downstream cleanroom assembly. We do not currently operate a Class 10,000 cleanroom on-site, but our finishing protocols and packaging are designed to integrate with customer cleanroom environments without contamination risk.",
      },
      {
        q: "Do you machine porous titanium?",
        a: "Yes. We machine porous titanium specimens with custom 1.5-micron pore size for osseointegration research and orthopedic implant testing applications. This is a specialized capability not commonly offered by general medical-device contract manufacturers.",
      },
      {
        q: "Can you handle high-volume production?",
        a: "Yes. Our equipment fleet of dual-spindle live-tooling turning centers, multi-axis milling centers, and parallel EDM workstations supports both prototype quantities and mid-volume production runs. For high-volume needs, we can structure manufacturing across our network including injection molding and vacuum casting capabilities.",
      },
      {
        q: "Where do you manufacture?",
        a: "All CNC machining, EDM, and finishing operations are performed in our 13,695 sq ft facility in Clifton, NJ. For extended production needs we have qualified manufacturing capacity across the U.S., Europe, and India — with zero China dependency.",
      },
    ],
  },
];
