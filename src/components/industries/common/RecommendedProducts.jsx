import React from "react";

const products = [
  "PTFE sheets (moulded & skived)",
  "PTFE rods (extruded & moulded)",
  "PTFE tubes",
  "PTFE machining blanks",
  "ePTFE gasket sheets",
  "PTFE envelope gaskets",
  "PTFE joint sealant tape",
  "PVDF sheets & pipes",
  "ECTFE liners",
  "ETFE liners",
  "FEP tubes",
];

export default function RecommendedProducts() {
  return (
    <section className="bg-[#fff] py-20 overflow-hidden">

      <div className="container">


        {/* TOP HEADING */}
        <div className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-center
          gap-5
          mb-20
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
            Best-suited product categories from our portfolio for the chemical processing industry.
          </p>

        </div>

        {/* PRODUCT TAGS */}
        <div className="
          flex
          flex-wrap
          justify-center
          gap-4

        ">

          {products.map((item, index) => (
            <div
              key={index}
              className="
                      px-4
                      md:px-8
                      py-3
                      md:py-3
                      border
                      border-[#2F80FF] shadow-[0_0_0_1px_#2F80FF]
                      rounded-full
                      bg-white
                      text-[#4e4e4e]
                      text-[14px]
                      md:text-[18px]
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

    </section>
  );
}