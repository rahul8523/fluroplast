import React from "react";

const materials = [
  {
    title: "PTFE",
    description:
      "Biocompatible and chemically inert",
  },
  {
    title: "TFM",
    description:
      "Enhanced structural integrity and lower porosity.",
  },
  {
    title: "PVDF",
    description:
      "Superior resistance to harsh sterilization chemicals.",
  },
  {
    title: "ECTFE",
    description:
      "Excellent clarity and permeation resistance for pharmaceuticals.",
  },
  {
    title: "ETFE",
    description:
      "High-performance resin with exceptional",
  },
  {
    title: "FEP",
    description:
      "Optically clear and chemically stable.",
  },
   {
    title: "ePTFE",
    description:
      "Microporous structure for advanced surgical",
  },
];

export default function MedicalMaterials() {
  return (
    <section className="bg-[#f5f5f5] py-14">

      <div className="container">

        {/* TOP HEADING */}
        <div className="text-center mb-10">

          <h2 className="text-[30px] md:text-[40px] font-bold text-black mb-2">
            Materials Used for Medical & Pharmaceutical Applications
          </h2>

          <p className="text-[16px] text-[#333] font-medium">
            We supply high-performance materials suitable for clean-process and sterile manufacturing environments
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
        <p className="mt-3 font-base text-center">Material selection depends on sterilization method, purity level requirements, temperature exposure, and electrostatic sensitivity of the application.</p>

      </div>

    </section>
  );
}