import React from "react";
import { industryOverviewIcons } from "../overviewIconUrls";
const icons = industryOverviewIcons.infrastructure;

const challenges = [
    {
        icon: icons[0],
        title: "structural thermal expansion movement",
    },
    {
        icon: icons[1],
        title: "high compressive load sliding interfaces",
    },
    {
        icon: icons[2],
        title: "long-term outdoor exposure (UV, rain, temperature cycling)",
    },
    {
        icon: icons[3],
        title: "corrosion of conventional metallic sliding components",
    },
    {
        icon: icons[4],
        title: "vibration and traffic load transfer",
    },
    {
        icon: icons[5],
        title: "maintenance access limitations",
    },
    {
        icon: icons[6],
        title: "long service life requirements (20-50 years)",
    },
];




export default function InfrastructureOverview() {
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
                           Infrastructure / Bridges 
                            <br />
                            Industry
                        </h2>
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-4  mt-4">

                        <p className="text-[16px] text-[#4b4b4b] font-medium">
                            Infrastructure and bridge engineering projects require materials capable of supporting high load-bearing movement, long-term outdoor exposure, structural sliding performance, and maintenance-free operation over decades. Fluoropolymers-especially filled PTFE grades-are widely used in bridge bearings, expansion joints, structural slide plates, and vibration control systems.
                        </p>

                        <p className="text-[16px] text-[#4b4b4b] font-medium">
                            Our PTFE semi-finished stock shapes support bridge manufacturers, civil engineering contractors, bearing manufacturers, infrastructure consultants, and EPC project suppliers.
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
                       Filled PTFE materials provide proven solutions for these demanding structural conditions.
                    </p>

                </div>

            </div>

        </section>
    );
}