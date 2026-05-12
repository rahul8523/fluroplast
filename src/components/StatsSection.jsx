import React from "react";



const StatsSection = () => {
    const stats = [
        { number: "1000+", label: "Clients Worldwide" },
        { number: "8+", label: "Years of Experience" },
        { number: "350+", label: "Trained Workers" },
        { number: "4 Acres", label: "Manufacturing Area" },
    ];

    return (
        <section className="stats-section">
            <div className="container">
                <div className="row text-center">
                    {stats.map((item, index) => (
                        <div key={index} className="col-6 col-md-3 mb-4 mb-md-0">
                            <h2 className="stat-number">{item.number}</h2>
                            <p className="stat-label">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;