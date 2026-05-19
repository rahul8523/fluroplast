import React from "react";

const materials = [
  {
    title: "Virgin PTFE",
    description:
      "Fully FDA-compliant and chemically inert.",
  },
  {
    title: "Modified PTFE (TFM)",
    description:
      "Features a denser molecular structure to prevent bacterial growth.",
  },
  {
    title: "FEP",
    description:
      "Highly transparent and flexible ideal for visual monitoring.",
  },
  {
    title: "PVDF",
    description:
      "Exceptional resistance to aggressive Clean-in-Place (CIP).",
  },
  {
    title: "ETFE",
    description:
      "A high-impact, durable material designed for components at high",
  },
  {
    title: "ePTFE",
    description:
      "Microporous structure used for sterile venting of fermentation tanks.",
  },
];



export default function FoodMaterials() {
  return (
    <section className="bg-[#f5f5f5] py-14">

      <div className="container">

        {/* TOP HEADING */}
        <div className="text-center mb-10">

          <h2 className="text-[30px] md:text-[40px] font-bold text-black mb-2">
           Materials Used for Food & Beverage Applications
          </h2>

          <p className="text-[16px] text-[#333] font-medium">
           We supply materials suitable for hygienic and corrosion-resistant food processing environments:
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
        {/* CATEGORY TITLE */}
        <div className="text-center mt-10">

          <p className="text-[16px]text-black ">
           Material selection depends on food-contact compliance, operating temperature, cleaning chemistry, and mechanical loading conditions.
          </p>

        </div>
      </div>

    </section>
  );
}