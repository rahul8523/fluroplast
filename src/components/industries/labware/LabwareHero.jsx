import React from "react";

import labwareImg from "../../../assets/images/industries/labware/labware.jpg";

export default function LabwareHero() {
    return (
        <section className="relative w-full h-[700px] overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${labwareImg})`,
                }}
            />

            <div className="absolute inset-0" />
            <div className="relative z-20 h-full flex items-center">
                <div className="container mx-auto">
                    <div className="max-w-[620px] text-white">

                        <p className="text-[20px] md:text-[24px] font-medium mb-4 text-gray-200">
                            The Technical Hub
                        </p>

                        {/* MAIN TITLE */}
                        <h1 className="text-[30px] md:text-[50px] leading-[1.05] font-bold mb-7 tracking-[-2px]">
                            Labware Industry
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="text-[18px] md:text-[20px] leading-[1.35] text-gray-200 font-medium mb-10">
                           Chemically inert and non-leachable fluoropolymer labware designed for critical analysis, ensuring zero sample contamination and total reliability in the most demanding laboratory environments.
                        </p>

                        {/* BUTTON */}
                        <button className="bg-[#2F80FF] hover:bg-[#1565e8] transition-all duration-300 text-white px-8 py-2 text-[18px] font-medium ">
                            Request a Quote
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
}