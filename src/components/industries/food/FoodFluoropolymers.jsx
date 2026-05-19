import React from "react";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Excellent chemical resistance to cleaning agents",
  "Compatibility with steam sterilization",
  "Non-stick surface properties",
  "Low coefficient of friction",
  "Hygienic processing compatibility",
  "Long service life in washdown environments",
  "Dimensional stability across temperature cycles",
];



export default function FoodFluoropolymers() {
  return (
    <section className="
      relative
      overflow-hidden
      bg-gradient-to-b
      from-[#2F80FF]
      via-[#0b3f82]
      to-[#021a34]
      py-14

    ">

      {/* CONTENT */}
      <div className="container">

        <div className="
          grid
          lg:grid-cols-2
          gap-14
          lg:gap-24
          items-center
        ">

          {/* LEFT SIDE */}
          <div>

            {/* TITLE */}
            <h2 className="
              text-white
              font-bold
              text-[30px]
              sm:text-[40px]
              md:text-[40px]
              mb-8
            ">
              Why Fluoropolymers
              <br />
              Are Preferred
            </h2>

            {/* DESCRIPTION */}
            <p className="
              text-white/95
              text-[20px]
              font-medium
            ">

              Fluoropolymers provide a safe, durable, and non-reactive surface that ensures the integrity of your food products and the longevity of your processing equipment.
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6 md:space-y-7">

            {benefits.map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-4
                  mt-3
                "
              >

                {/* ICON */}
                <CheckCircle2
                  className="
                    text-white
                    min-w-[10px]

        
                  "
                  size={20}
                  strokeWidth={1.9}
                />

                {/* TEXT */}
                <p className="
                  text-white
                  text-[16px]
                  font-medium
                ">
                  {item}
                </p>

              </div>
            ))}

          </div>
        </div>
      </div>

    </section>
  );
}