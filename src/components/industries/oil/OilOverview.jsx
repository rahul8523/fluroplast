import React from "react";
import { industryOverviewIcons } from "../overviewIconUrls";
const icons = industryOverviewIcons.oil;

const challenges = [
    {
        icon: icons[0],
        title: "Hydrocarbon exposure",
    },
    {
        icon: icons[1],
        title: "High-pressure sealing requirements",
    },
    {
        icon: icons[2],
        title: "Temperature cycling and thermal shock",
    },
    {
        icon: icons[3],
        title: "Corrosive process environments",
    },
    {
        icon: icons[4],
        title: "Flange leakage risks",
    },
    {
        icon: icons[5],
        title: "Offshore environmental exposure",
    },
    {
        icon: icons[6],
        title: "Explosion-risk zones requiring anti-static materials",
    },
    {
        icon: icons[7],
        title: "Maintenance downtime from seal failure",
    },
];

export default function OilOverview() {
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
                            Extreme Oil & Gas Environments
                        </h2>
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-4  mt-4">

                        <p className="text-[16px] text-[#4b4b4b] font-medium">
                           Oil, gas, and petrochemical processing environments demand materials capable of operating under aggressive hydrocarbons, high pressures, elevated temperatures, and corrosive process conditions.
                        </p>

                        <p className="text-[16px] text-[#4b4b4b] font-medium">
                           Our PTFE and high-performance fluoropolymer semi-finished products support upstream, midstream, and downstream processing operations worldwide.
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
        md:w-[220px]
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
                        Fluoropolymer materials provide long-term solutions to these challenges.
                    </p>

                </div>

            </div>

        </section>
    );
}