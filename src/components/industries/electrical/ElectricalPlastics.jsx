import React from "react";

const materials = [
    {
        title: "ESD POM",
        description: "Lowest dielectric constant and loss factor.",
    },
    {
        title: "ESD PVC",
        description: "Superior surface finish and lower micro-porosity.",
    },
    {
        title: "ESD PC",
        description: "Excellent piezoelectric properties and mechanical strength.",
    },
    {
        title: "ESD Acrylic",
        description: "Melt-processable with high transparency.",
    },
    {
        title: "ESD Nylon",
        description: "Microporous venting solutions for acoustic",
    },
    {
        title: "ESD PEEK",
        description: "Excellent piezoelectric properties and",
    },
    {
        title: "ESD PEI",
        description: "Excellent piezoelectric properties and",
    },
    {
        title: "ESD ABS",
        description: "Excellent piezoelectric properties and",
    },
    {
        title: "ESD FR4/G10",
        description: "Excellent piezoelectric properties and mechanical",
    },
    {
        title: "ESD Durostone",
        description: "Excellent piezoelectric properties and",
    },
];

export default function ESDEngineeringPlastics() {
    return (
        <section className="bg-[#f4f4f4] py-14 md:py-14 overflow-hidden mt-4">

            <div className="container">

                {/* HEADING */}
                <div className="text-center mb-14 md:mb-10">

                    <h2 className="
            text-[30px]
            sm:text-[38px]
            md:text-[40px]
            lg:text-[40px]
            leading-[1.15]
            font-bold
            tracking-[-1px]
            text-black
            max-w-[1400px]
            mx-auto
          ">
                        ESD Engineering Plastics

                    </h2>

                </div>

                {/* CARDS */}
                <div className="flex flex-wrap justify-center gap-3">
                    {materials.map((item, index) => (
                        <div key={index} className="bg-white border border-[#d9d9d9] rounded-[10px] sm:px-4 sm:py-3 p-3 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 w-[47%] sm:w-[48%] md:w-[300px]">

                            {/* TITLE */}
                            <h4 className="text-[20px] sm:text-[24px] font-bold text-black mb-2">
                                {item.title}
                            </h4>

                            {/* DESCRIPTION */}
                            <p className="text-[12px] sm:text-[16px] text-[#6d6d6d] font-medium">
                                {item.description}
                            </p>

                        </div>
                    ))}

                </div>

                {/* BOTTOM TEXT */}
                <div className="text-center mt-10">

                    <p className="text-[16px] text-black font-medium max-w-[1200px] mx-auto">
                        This material coverage makes your portfolio extremely strong compared to most PTFE-focused suppliers.
                    </p>

                </div>

            </div>

        </section>
    );
}