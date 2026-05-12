import React from "react";

const materials = [
    {
        title: "ESD POM",
        description: "Universal chemical resistance up to 260°C",
    },
    {
        title: "ESD Nylon",
        description: "Modified PTFE with improved creep resistance",
    },
    {
        title: "ESD PC",
        description: "Excellent mechanical strength & chemical resistance",
    },
    {
        title: "ESD ABS",
        description: "Outstanding barrier properties & impact resistance",
    },
    {
        title: "ESD PTFE",
        description: "Universal chemical resistance up to 260°C",
    },
];

export default function ESDEngineeringPlastics() {
    return (
        <section className="bg-[#f4f4f4] py-14 md:py-14 overflow-hidden mt-4">

            <div className="container">

                {/* HEADING */}
                <div className="text-center mb-14 md:mb-20">

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
                        <span className="font-bold">
                         
                            (for automotive electronics assembly)
                        </span>
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
                <div className="text-center mt-16 md:mt-24">

                    <p className="text-[16px] text-black font-medium max-w-[1200px] mx-auto">
                        These materials are selected depending on friction load,
                        temperature exposure, chemical compatibility, and
                        electrical performance requirements.
                    </p>

                </div>

            </div>

        </section>
    );
}