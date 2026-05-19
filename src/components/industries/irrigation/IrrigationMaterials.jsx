import React from "react";

const materials = [
  {
    title: "PTFE",
    description:
      "Provides universal chemical resistance for ball valve liners.",
  },
  {
    title: "PVDF",
    description:
      "Offers the highest mechanical strength and abrasion resistance.",
  },
  {
    title: "ECTFE",
    description:
      "Outstanding barrier properties that prevent the permeation of aggressive fertilisers.",
  },
  {
    title: "ETFE",
    description:
      "Exceptional UV stability and weather resistance.",
  },
  {
    title: "FEP",
    description:
      "Optically clear resin used for specialized sight glasses and chemical dosing.",
  },
  {
    title: "ePTFE",
    description:
      "Expanded sealant tapes and joint sealants that provide a 100% leak-proof",
  },
];


export default function IrrigationMaterials() {
  return (
    <section className="bg-[#f5f5f5] py-14">

      <div className="container">

        {/* TOP HEADING */}
        <div className="text-center mb-10">

          <h2 className="text-[30px] md:text-[40px] font-bold text-black mb-2">
            Materials Used for Irrigation / Sanitary / Pipe Systems
          </h2>

          <p className="text-[16px] text-[#333] font-medium">
            We supply corrosion-resistant fluoropolymers suitable for piping and fluid-handling infrastructure:
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
        <p className="text-center font-base mt-3">Material selection depends on pressure rating, environmental exposure, chemical treatment compatibility, and sealing requirements.</p>
      </div>

    </section>
  );
}