import React from "react";
import { industryOverviewIcons } from "../overviewIconUrls";
const icons = industryOverviewIcons.electrical;

const challenges = [
    {
        icon: icons[0],
        title: "electrostatic discharge damage to sensitive components",
    },
    {
        icon: icons[1],
        title: "high-temperature soldering environments",
    },
    {
        icon: icons[2],
        title: "dimensional stability requirements for precision fixtures",
    },
    {
        icon: icons[3],
        title: "dielectric insulation reliability",
    },
    {
        icon: icons[4],
        title: "contamination control in semiconductor processing",
    },
    {
        icon: icons[5],
        title: "wear resistance in automated assembly systems",
    },

];

export default function AutomobileIndustryOverview() {
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
                            Engineered for
                            <br />
                            Electronics & Electrical Industry
                        </h2>
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-4  mt-4">

                        <p className="text-[16px] text-[#4b4b4b] font-medium">
                            Electronics and electrical manufacturing environments require materials with excellent electrical insulation properties, dimensional stability, thermal resistance, and electrostatic discharge (ESD) control performance. Fluoropolymers and engineering plastics are widely used in semiconductor processing equipment, PCB manufacturing, cable insulation systems, and automation fixtures.
                        </p>

                        <p className="text-[16px] text-[#4b4b4b] font-medium">
                            Our fluoropolymer semi-finished stock shapes and ESD-grade engineering plastics support precision electronics manufacturing, cleanroom automation, and high-reliability electrical insulation applications.
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
        min-h-[160px]
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
                        Specialized fluoropolymers and ESD-grade engineering plastics provide safe and reliable solutions.
                    </p>

                </div>

            </div>

        </section>
    );
}