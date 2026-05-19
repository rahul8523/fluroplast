import React from "react";

const materials = [
  {
    title: "PTFE",
    description:
      "Universal chemical resistance up to 260°C",
  },
  {
    title: "TFM",
    description:
      "Modified PTFE with improved creep resistance",
  },
  {
    title: "PVDF",
    description:
      "Modified PTFE with improved creep resistance",
  },
  {
    title: "ECTFE",
    description:
      "Outstanding barrier properties & impact resistance",
  },
  {
    title: "ETFE",
    description:
      "Universal chemical resistance up to 260°C",
  },
  {
    title: "FEP",
    description:
      "Universal chemical resistance up to 260°C",
  },
  {
    title: "ePTFE",
    description:
      "Expanded PTFE for superior sealing",
  },

];

export default function ChemicalMaterials() {
  return (
    <section className="bg-[#f5f5f5] py-14">

      <div className="container">

        {/* TOP HEADING */}
        <div className="text-center mb-10">

          <h2 className="text-[30px] md:text-[40px] font-bold text-black mb-2">
            Materials for Chemical Processing
          </h2>

          <p className="text-[16px] text-[#333] font-medium">
            Each material is selected depending on temperature range, chemical exposure level, pressure conditions, and purity requirements.
          </p>

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