import React from "react";

const materials = [
  {
    title: "PTFE",
    description:
      "Universal fluoropolymer for sealing and",
  },
  {
    title: "TFM",
    description:
      "Modified PTFE with improved creep resistance",
  },
  {
    title: "ePTFE",
    description:
      "Expanded PTFE for gasket and sealing applications",
  },
  {
    title: "PVDF",
    description:
      "Excellent mechanical strength and chemical resistance",
  },
  {
    title: "ETFE",
    description:
      "High-temperature and corrosion-resistant lining",
  },
  {
    title: "ECTFE",
    description:
      "Superior barrier properties for equipment lining",
  },
  {
    title: "FEP",
    description:
      "Transparent, flexible, chemically inert tubing",
  },
  {
    title: "Carbon-filled PTFE",
    description:
      "Enhanced wear and anti-static properties",
  },
  {
    title: "ESD PTFE",
    description:
      "Electrostatic discharge safe for hazardous zones",
  },
];

export default function OilMaterials() {
  return (
    <section className="bg-[#f5f5f5] py-14">

      <div className="container">

        {/* TOP HEADING */}
        <div className="text-center mb-10">

          <h2 className="text-[30px] md:text-[40px] font-bold text-black mb-2">
            Materials for Oil & Gas Applications
          </h2>

          <p className="text-[16px] text-[#333] font-medium">
            Material selection depends on pressure class, chemical compatibility, anti-static requirements, and temperature range.
          </p>

        </div>

        {/* CATEGORY TITLE */}
        <div className="text-center mb-10">

          <h3 className="text-[30px] md:text-[40px] font-bold text-black tracking-[-2px]">
            Fluoropolymers
          </h3>

        </div>

        {/* MATERIAL CARDS */}
        <div className="flex flex-wrap justify-center gap-3">
          {materials.map((item, index) => (
            <div
              key={index}
              className="
        bg-white
        border
        border-[#d9d9d9]
        rounded-[10px]
        sm:px-4
        sm:py-3
        p-3
        transition-all
        duration-300
        hover:shadow-2xl
        hover:-translate-y-2
        w-[47%]
        sm:w-[48%]
        md:w-[300px]
      "
            >
              {/* TITLE */}
              <h4 className="text-[20px] sm:text-[24px] font-bold text-black mb-2">
                {item.title}
              </h4>

              {/* DESCRIPTION */}
              <p className="text-[12px] sm:text-[16px] text-[#6d6d6d] font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}