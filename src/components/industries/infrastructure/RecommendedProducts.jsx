import React from "react";

const sections = [
  {
    title: "Structural Sliding Range",
    items: [
      "glass-filled PTFE sheets",
      "bronze-filled PTFE sheets",
      "PTFE slide plates",
      "PTFE bearing pads",
    ],
  },
  {
    title: "Protection Range",
    items: [
      "PVDF sheets",
      "ETFE liners",
      "PTFE sheets",
    ],
  },
  {
    title: "Machining Stock Range",
    items: [
      "PTFE blocks",
      "PTFE rods"
    ],
  },
];

export default function RecommendedProducts() {
  return (
    <section className="bg-[#fff] py-14 overflow-hidden">

      <div className="container">

        {/* TOP HEADING */}
        <div className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-center
          gap-5
          mb-16
          md:mb-24
        ">

          {/* TITLE */}
          <h2 className="
            text-[30px]
            sm:text-[40px]
            md:text-[40px]
            font-bold
            tracking-[-1px]
            text-black
          ">
            Recommended Products
          </h2>

          {/* DESCRIPTION */}
          <p className="
            text-[16px]
            text-[#5f5f5f]
            leading-[1.6]
            max-w-[720px]
            font-medium
            text-left
          ">
            Best positioning products for this sector
          </p>

        </div>

        {/* SECTIONS */}
        <div className="space-y-10 md:space-y-20">

          {sections.map((section, index) => (
            <div
              key={index}
              className="text-center"
            >

              {/* SECTION TITLE */}
              <h3 className="
                text-[20px]
                md:text-[30px]
                font-bold
                text-black
                mb-10
                md:mb-12
              ">
                {section.title}
              </h3>

              {/* TAGS */}
              <div className="
                flex
                flex-wrap
                justify-center
                gap-4
                md:gap-6
              ">

                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className="
                      px-4
                      md:px-6
                      py-3
                      md:py-4
                      border
                      border-[#2F80FF] shadow-[0_0_0_1px_#2F80FF]
                      rounded-full
                      bg-white
                      text-[#4e4e4e]
                      text-[15px]
                      md:text-[20px]
                      leading-[1.4]
                      font-medium
                      transition-all
                      duration-300
                      hover:bg-[#2F80FF]
                      hover:text-black
                      cursor-pointer
                    "
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}