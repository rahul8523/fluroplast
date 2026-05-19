import React from "react";
import { industryOverviewIcons } from "../overviewIconUrls";
const icons = industryOverviewIcons.irrigation;

const challenges = [
    {
        icon: icons[0],
        title: "leakage at threaded and flanged joints",
    },
    {
        icon: icons[1],
        title: "corrosion from treated water and chemicals",
    },
    {
        icon: icons[2],
        title: "scaling and deposit formation",
    },
    {
        icon: icons[3],
        title: "outdoor environmental exposure",
    },
    {
        icon: icons[4],
        title: "dimensional stability under pressure variation",
    },
    {
        icon: icons[5],
        title: "long-term sealing reliability requirements",
    },
    {
        icon: icons[6],
        title: "maintenance challenges in buried or concealed systems",
    },
];



export default function IrrigationOverview() {
    return (
        <section className="bg-[#fff] py-14">

            <div className="container">

                {/* TOP CONTENT */}
                <div className="grid lg:grid-cols-2 gap-10 items-start mb-20">

                    {/* LEFT */}
                    <div>
                        <p className="text-[#2F80FF] text-[18px] font-medium mb-2">
                            Industry Overview
                        </p>

                        <h2 className="text-[30px] md:text-[40px]  font-bold text-black max-w-[500px]">
                            Irrigation / Sanitary / Pipe 
                            <br />
                            & Fittings Industry
                        </h2>
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-4  mt-4">

                        <p className="text-[16px] text-[#4b4b4b] font-medium">
                            Irrigation systems, sanitary installations, and industrial pipe networks require materials that provide long-term sealing reliability, corrosion resistance, dimensional stability, and compatibility with water-treatment chemicals. Fluoropolymers are widely used in pipe sealing systems, corrosion-resistant liners, valve components, and specialized fittings due to their inertness and durability in outdoor and wet environments.
                        </p>

                        <p className="text-[16px] text-[#4b4b4b] font-medium">
                           Our fluoropolymer semi-finished products support pipe manufacturers, valve OEMS, infrastructure contractors, irrigation system integrators, and sanitary installation suppliers.
                        </p>

                    </div>

                </div>

                {/* TITLE */}
                <div className="text-center mb-10">

                    <h3 className="text-[30px] md:text-[40px] font-bold text-black">
                        Key Industry Challenges
                    </h3>

                </div>

                {/* CHALLENGE BOXES */}

                <div className="flex flex-wrap justify-center gap-4 md:gap-6">

                    {challenges.map((item, index) => (
                        <div
                            key={index}
                            className="
        w-[45%]
        sm:w-[47%]
        md:w-[240px]
        min-h-[150px]
        border
        border-[#2F80FF] shadow-[0_0_0_1px_#2F80FF]
        bg-white
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-2
        md:px-6
        py-4
        md:py-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
                        >

                            {/* ICON */}
                            <div className="text-[#2F80FF] mb-4 md:mb-6">
                                <img src={item.icon} alt="" className="mx-auto h-[42px] w-[42px] object-contain" />
                            </div>

                            {/* TEXT */}
                            <p className="text-[12px] md:text-[16px] text-[#333] font-medium leading-[1.4]">
                                {item.title}
                            </p>

                        </div>
                    ))}

                </div>

                {/* BOTTOM TEXT */}
                <div className="text-center mt-5">

                    <p className="text-[16px] text-[#444] font-medium">
                        Fluoropolymer materials provide durable sealing and corrosion-resistant performance across these applications.
                    </p>

                </div>

            </div>

        </section>
    );
}