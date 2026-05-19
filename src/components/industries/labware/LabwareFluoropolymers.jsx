import React from "react";
import { CheckCircle2 } from "lucide-react";

const benefits = [

  "outstanding chemical resistance across acids and solvents",
  "low extractables and leachables",
  "contamination-free surfaces",
  "compatibility with sterilization processes",
  "dimensional stability in analytical environments",
  "excellent dielectric insulation properties",
  "availability of ESD-safe automation materials",

];



export default function LabwareFluoropolymers() {
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
              Fluoropolymers deliver unmatched performance in analytical and research settings, ensuring zero leaching, universal chemical compatibility, and superior sample integrity.
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