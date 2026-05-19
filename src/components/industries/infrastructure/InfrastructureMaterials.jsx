import React from "react";

const materials = [
  {
    title: "PTFE",
    description:
      "Universal chemical resistance up to 260°C",
  },
  {
    title: "Glass-filled PTFE",
    description:
      "Modified PTFE with improved creep resistance",
  },
  {
    title: "Bronze-filled PTFE",
    description:
      "Excellent mechanical strength & chemical resistance",
  },
  {
    title: "Carbon-filled PTFE",
    description:
      "Outstanding barrier properties & impact resistance",
  },
  {
    title: "ETFE",
    description:
      "Universal chemical resistance up to 260°C",
  },
  {
    title: "PVDF",
    description:
      "Universal chemical resistance up to 260°C",
  },
];



export default function InfrastructureMaterials() {
  return (
    <section className="bg-[#f5f5f5] py-14">

      <div className="container">

        {/* TOP HEADING */}
        <div className="text-center mb-10">

          <h2 className="text-[30px] md:text-[40px] font-bold text-black mb-2">
            Materials Used for Infrastructure / Bridges Industry
          </h2>

          <p className="text-[16px] text-[#333] font-medium">
            We supply high-performance fluoropolymer materials designed for structural sliding and outdoor durability:
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
        <p className="text-center font-base mt-3">
          Material selection depends on load capacity, sliding velocity, environmental exposure conditions, and expected service life.
        </p>
      </div>

    </section>
  );
}