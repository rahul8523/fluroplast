import React from "react";

const materials = [
  {
    title: "PTFE",
    description:
      "Exceptional low-friction properties for shaft seals,",
  },
  {
    title: "TFM",
    description:
      "Enhanced load-bearing capacity and creep resistance",
  },
  {
    title: "PVDF",
    description:
      "Highly resistant to automotive fluids; used in multi-layer fuel line tubing.",
  },
  {
    title: "ETFE",
    description:
      "Outstanding impact resistance and barrier properties for under-the-hood sensors.",
  },
  {
    title: "FEP",
    description:
      "Excellent chemical barrier for fuel tanks and",
  },
];

export default function AutomobileMaterials() {
  return (
    <section className="bg-[#f5f5f5] py-14">

      <div className="container">

        {/* TOP HEADING */}
        <div className="text-center mb-10">

          <h2 className="text-[30px] md:text-[40px] font-bold text-black mb-2">
            Materials Used for Automotive Applications
          </h2>

          <p className="text-[16px] text-[#333] font-medium">
            We supply high-performance materials suitable for automotive component manufacturing:
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