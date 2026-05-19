import React from "react";

const materials = [
  {
    title: "ESD PTFE",
    description:
      "Microporous venting solutions for acoustic",
  },
  {
    title: "Carbon-filled PTFE",
    description:
      "",
  },
];

export default function HighPerformanceMaterials() {
  return (
    <section className="bg-[#f3f3f3] py-14 mt-4">

          <div className="container">

        {/* HEADING */}
        <div className="text-center mb-10">

          <h2 className="text-[30px] md:text-[40px] font-bold text-black tracking-[-2px]">
            ESD Fluoropolymer Grades
          </h2>

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