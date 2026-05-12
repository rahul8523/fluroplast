import React from "react";
import Development1 from '../assets/images/development1.png'
import Development2 from '../assets/images/development2.png'

const DevelopmentSection = () => {
    return (
        <section className="development-section py-5">
            <div className="container">
                <div className="row align-items-center">

                    {/* LEFT CONTENT */}
                    <div className="col-lg-5">
                        <p className="section-tag">Development</p>
                        <h2 className="section-title">How We Started</h2>
                        <h5 className="section-subtitle">
                            Building a Trusted Fluoroplastic Brand
                        </h5>

                        <p className="section-text">
                            fPvt. Ltd. began with a clear vision—to deliver reliable,
                            high-performance fluoropolymer products for demanding industrial
                            applications. From the early days, our focus has been on precision
                            manufacturing, material excellence, and long-term customer partnerships.
                        </p>

                        <p className="section-text">
                            Over the years, we have evolved by adopting advanced technology,
                            expanding capabilities, and consistently meeting the growing needs
                            of modern industries.
                        </p>

                        <button className="btn btn-primary custom-btn">
                            More Details →
                        </button>
                    </div>

                    {/* RIGHT IMAGES */}
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <img
                                    src={Development1}
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <img
                                    src={Development2}
                                    className="w-100 developmentImageTwo"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* TIMELINE */}
                <div className="timeline mt-5">
                    <div className="timeline-line"></div>

                    {[
                        { year: "2010", label: "Seed Stage", active: true },
                        { year: "2013", label: "Process Development" },
                        { year: "2016", label: "Technology Upgrade" },
                        { year: "2019", label: "Product Expansion" },
                        { year: "2022", label: "Industry Growth" },
                        { year: "2024", label: "Continuous Innovation" },
                    ].map((item, index) => (
                        <div key={index} className="timeline-item">
                            <span className="timeline-year">{item.year}</span>
                            <div
                                className={`timeline-dot ${item.active ? "active-dot" : ""
                                    }`}
                            ></div>
                            <p
                                className={`timeline-label ${item.active ? "active-label" : ""
                                    }`}
                            >
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DevelopmentSection;