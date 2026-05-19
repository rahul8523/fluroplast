import React from "react";

export default function RecommendedProducts() {

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
  "TFM valve seats",
  "ESD PTFE components"
];



  return (

    <>
    
      <section className="bg-[#fff] py-10 overflow-hidden">

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
            Best-suited product categories from our portfolio for the oil & gas industry.
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
  
    <section className="py-10 overflow-hidden">
      <div className="container">
        <div className="rounded-[32px] overflow-hidden bg-gradient-to-b from-[#1d77ff] via-[#0d4bd6] to-[#071a2b] px-6 py-14 sm:px-10 sm:py-16 lg:px-10 lg:py-16 shadow-[0_40px_120px_rgba(0,0,0,0.15)]">
          <div className="text-center">
            <h2 className="text-[30px] sm:text-[40px] md:text-[40px] font-bold text-white">
              Need Fluoropolymer Solutions for Your Oil & Gas Operations?
            </h2>
            <p className="mt-3 text-[16px] sm:text-[18px] text-white/90 leading-[1.8] max-w-[780px] mx-auto">
              Contact our technical team to discuss your specific application requirements and get a customized solution.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex min-w-[180px] items-center justify-center rounded-lg border border-white px-8 py-3 text-[16px] font-medium text-white transition duration-300 hover:bg-white/10"
              >
                Contact Us
              </a>
              <a
                href="/catalogue.pdf"
                className="inline-flex min-w-[220px] items-center justify-center rounded-lg bg-white px-8 py-3 text-[16px] font-semibold text-[#071a2b] transition duration-300 hover:bg-[#f7f7f7]"
              >
                Download Catalogue
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

      
    </>
  );
}