import React from "react";

import productImg from "../../../assets/images/industries/electronic/Layer1.png";

const products = [
  "PTFE sheets",
  "PFA sheets",
  "PTFE rods",
  "PFA tubes",
  "PVDF sheets",
];

const materials = [
  "PTFE",
  "PFA",
  "PVDF",
];

const applications = [
  "wafer handling fixtures",
  "chemical wet benches",
  "etching equipment components",
  "ultrapure chemical transfer systems",
  "semiconductor process tooling",
];

export default function ProductSolutions() {
  return (
    <section className="bg-white py-5 overflow-hidden">

      <div className="container">

        {/* TOP SECTION */}
        <div className="
          grid
          lg:grid-cols-12
          gap-2
          lg:gap-16
          items-center
          mb-12
        ">

          {/* LEFT TITLE */}
          <div className="lg:col-span-5">

            <h2 className="
              text-[30px]
              sm:text-[40px]
              md:text-[40px]
              font-bold
              text-black
            ">
              Product Solutions
            </h2>

          </div>

          {/* RIGHT TEXT */}
          <div className="lg:col-span-7">

            <p className="
              text-[16px]
              text-[#000]
              font-medium
            ">
              Comprehensive fluoropolymer product range designed to ensure high-speed signal integrity and superior thermal insulation in precision electronic systems.
            </p>

          </div>

        </div>

        {/* MAIN CONTENT */}
        <div className="
          grid
          lg:grid-cols-12
          gap-10
          lg:gap-8
          items-center
        ">

          {/* IMAGE */}
          <div className="lg:col-span-5">

            <img
              src={productImg}
              alt="Product Solutions"
              className="
                w-full
                h-full
                object-cover
                rounded-[20px]
              "
            />

          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-7">

            {/* TITLE */}
            <h3 className="
              text-[20px]
              sm:text-[30px]
              font-bold
              text-black
              mb-6
            ">
              Semiconductor Processing Equipment Solutions
            </h3>

            {/* DESCRIPTION */}
            <p className="
              text-[18px]
              text-[#000]
              font-medium
              mb-10
            ">
              Ultra-clean fluoropolymer materials support contamination-free semiconductor handling environments.
            </p>

            {/* BOXES */}
            <div className="
              grid
              md:grid-cols-3
              gap-3
            ">

              {/* PRODUCTS */}
              <div className="
                bg-white
                border
                border-[#d9d9d9]
                rounded-[14px]
                p-4
              ">

                <h4 className="
                  text-[20px]
                  font-bold
                  text-black
                  mb-3
                ">
                  Products
                </h4>

                <ul className="space-y-3">

                  {products.map((item, index) => (
                    <li
                      key={index}
                      className="
                        text-[16px]
                        text-[#000]
                        flex
                        items-start
                        gap-1
                        mt-2
                      "
                    >
                      <span className="text-[#2F80FF]">•</span>
                      {item}
                    </li>
                  ))}

                </ul>

              </div>

              {/* MATERIALS */}
              <div className="
                bg-white
                border
                border-[#d9d9d9]
                rounded-[14px]
                p-4
              ">

                <h4 className="
                  text-[20px]
                  font-bold
                  text-black
                  mb-3
                ">
                  Materials
                </h4>

                <div className="flex flex-wrap gap-2">

                  {materials.map((item, index) => (
                    <span
                      key={index}
                      className="
                        px-3
                        py-2
                        border
                        border-[#2F80FF]
                        rounded-full
                        text-[14px]
                        text-white
                        bg-[#2563eb]
                      "
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

              {/* APPLICATIONS */}
              <div className="
                bg-white
                border
                border-[#d9d9d9]
                rounded-[14px]
                p-4
              ">

                <h4 className="
                  text-[16px]
                  font-bold
                  text-black
                  mb-3
                ">
                  Applications
                </h4>

                <ul className="space-y-3">

                  {applications.map((item, index) => (
                    <li
                      key={index}
                      className="
                        text-[16px]
                        text-[#000]
                        flex
                        items-start
                        gap-1
                        mt-2
                      "
                    >
                      <span className="text-[#2F80FF]">•</span>
                      {item}
                    </li>
                  ))}

                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}