import React from "react";

import productImg from "../../../assets/images/industries/Infrastructure/Layer5.png";

const products = [
  "glass-filled PTFE sheets",
  "bronze-filled PTFE sheets",
  "carbon-filled PTFE sheets",
];

const materials = [
  "Glass-filled PTFE",
  "Bronze-filled PTFE",
  "Carbon-filled PTFE",
];

const applications = [
  "bridge sliding bearings",
  "metro rail elevated structures",
  "flyover support systems",
  "heavy structural expansion supports",
];




export default function InfrastructureVibration() {
  return (
    <section className="bg-white py-5 overflow-hidden">

      <div className="container">


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
              Long-Life Maintenance-Free Sliding Surface Solutions
            </h3>

            {/* DESCRIPTION */}
            <p className="
              text-[18px]
              text-[#000]
              font-medium
              mb-10
            ">
              Filled PTFE materials eliminate lubrication requirements and provide long-term sliding stability in inaccessible infrastructure locations.
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
            <p className="font-base mt-3">These materials enable maintenance-free movement performance for decades.</p>
          </div>

        </div>

      </div>

    </section>
  );
}