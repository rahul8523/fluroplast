import React from "react";
import {
    Settings2,
    Droplets,
    Thermometer,
    Box,
    FlaskConical,
    Disc3,
    Zap,
} from "lucide-react";

const challenges = [
    {
        icon: <Settings2 size={42} strokeWidth={1.7} />,
        title: "friction and wear in moving assemblies",
    },
    {
        icon: <Droplets size={42} strokeWidth={1.7} />,
        title: "exposure to fuels, oils, and additives",
    },
    {
        icon: <Thermometer size={42} strokeWidth={1.7} />,
        title: "thermal cycling under engine conditions",
    },
    {
        icon: <Box size={42} strokeWidth={1.7} />,
        title: "dimensional stability in precision components",
    },
    {
        icon: <FlaskConical size={42} strokeWidth={1.7} />,
        title: "chemical exposure in braking and hydraulic systems",
    },
    {
        icon: <Disc3 size={42} strokeWidth={1.7} />,
        title: "vibration and noise reduction requirements",
    },
    {
        icon: <Zap size={42} strokeWidth={1.7} />,
        title: "electrical insulation reliability in wiring systems",
    },
];

export default function AutomobileIndustryOverview() {
    return (
        <section className="bg-[#fff] py-24">

            <div className="max-w-7xl mx-auto px-6 lg:px-10">

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
                            Automobile Industry
                        </h2>
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-4  mt-4">

                        <p className="text-[16px] text-[#4b4b4b] font-medium">
                            Automotive manufacturing environments require materials
                            capable of operating under continuous friction, thermal
                            cycling, fuel exposure, vibration loading, and dimensional
                            precision requirements. Fluoropolymers and high-performance
                            engineering plastics are widely used in fuel systems,
                            braking systems, sealing assemblies, wire insulation,
                            sliding components, and automation tooling used in vehicle
                            production.
                        </p>

                        <p className="text-[16px] text-[#4b4b4b] font-medium">
                            Our PTFE and advanced fluoropolymer semi-finished products
                            support OEM suppliers, Tier-1 manufacturers, and precision
                            machining companies producing automotive components.
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
                                {item.icon}
                            </div>

                            {/* TEXT */}
                            <p className="text-[12px] md:text-[16px] text-[#333] font-medium leading-[1.4]">
                                {item.title}
                            </p>

                        </div>
                    ))}

                </div>

                {/* BOTTOM TEXT */}
                <div className="text-center mt-20">

                    <p className="text-[16px] text-[#444] font-medium">
                        Fluoropolymers provide long-term performance under these
                        demanding operating environments.
                    </p>

                </div>

            </div>

        </section>
    );
}