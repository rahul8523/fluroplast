import React from "react";
import { industryOverviewIcons } from "../overviewIconUrls";
const icons = industryOverviewIcons.medical;

const challenges = [
    {
        icon: icons[0],
        title: "contamination control",
    },
    {
        icon: icons[1],
        title: "extractables and leachables minimization",
    },
    {
        icon: icons[2],
        title: "sterilization resistance",
    },
    {
        icon: icons[3],
        title: "aggressive cleaning chemicals (CIP/SIP)",
    },
    {
        icon: icons[4],
        title: "dimensional stability in cleanroom automation",
    },
    {
        icon: icons[5],
        title: "electrostatic charge accumulation in packaging and tablet handling systems",
    },
    {
        icon: icons[6],
        title: "chemical compatibility with solvents and APIs",
    },
];

export default function MedicalOverview() {
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
                            Medical & Pharmaceutical Industry
                        </h2>
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-4  mt-4">

                        <p className="text-[16px] text-[#4b4b4b] font-medium">
                            Medical and pharmaceutical manufacturing environments require materials that provide chemical resistance, dimensional stability, clean-process compatibility, and contamination-free performance. Fluoropolymers are widely used in sterile processing systems, high-purity fluid transfer applications, sealing components, and cleanroom automation equipment.
                        </p>

                        <p className="text-[16px] text-[#4b4b4b] font-medium">
                          Our PTFE and advanced fluoropolymer semi-finished products support high-reliability operation across pharmaceutical production lines, laboratory systems, and medical-grade process equipment.
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
                        Fluoropolymer materials provide safe and stable performance across these environments.
                    </p>

                </div>

            </div>

        </section>
    );
}