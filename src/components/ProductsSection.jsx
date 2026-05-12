import React from "react";
import cardImage from '../assets/images/Overlay+Shadow.png'

const ProductsSection = () => {
    return (
        <section className="products-section py-5">
            <div className="container">

                {/* Heading */}
                <div className="text-center mb-4">
                    <h2 className="main-title">Our Premium Fluoropolymer Products</h2>
                    <p className="subtitle">
                        Industry-leading PTFE, PVDF, and PFA materials engineered for the most demanding applications
                    </p>
                </div>

                {/* Pills */}
                <ul className="nav nav-pills justify-content-center mb-5 custom-pills" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#ptfe">
                            PTFE →
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pvdf">
                            PVDF
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" data-bs-toggle="pill" data-bs-target="#pfa">
                            PFA
                        </button>
                    </li>
                </ul>

                <div className="tab-content">

                    {/* PTFE TAB */}
                    <div className="tab-pane fade show active" id="ptfe">

                        <div className="row align-items-center">

                            {/* LEFT CONTENT */}
                            <div className="col-lg-6">

                                <h4 className="product-title">Polytetrafluoroethylene</h4>
                                <p className="product-desc">
                                    High-performance engineering polymer with versatile properties
                                </p>

                                <h6 className="mt-4 mb-3 text-white">Key Properties</h6>

                                <div className="row g-3">
                                    {[
                                        "Chemical Inertness",
                                        "Exceptional Weather Resistance",
                                        "Excellent Electrical Insulator",
                                        "Heat Resistance up to 260°C",
                                        "Non-Adhesive Properties",
                                        "Very Low Coefficient of Friction",
                                    ].map((item, i) => (
                                        <div key={i} className="col-md-6">
                                            <div className="property-box">{item}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Technical Specs */}
                                <div className="spec-box mt-4">
                                    <h6 className="mb-3">Technical Specifications</h6>
                                    <div className="spec-row">
                                        <span>Temperature Range</span>
                                        <span className="badge bg-success-subtle text-success">-200°C to +260°C</span>
                                    </div>
                                    <div className="spec-row">
                                        <span>Density</span>
                                        <span className="badge bg-success-subtle text-success">2.1-2.3 g/cm³</span>
                                    </div>
                                    <div className="spec-row">
                                        <span>Tensile</span>
                                        <span className="badge bg-success-subtle text-success">20-35 MPa</span>
                                    </div>
                                    <div className="spec-row">
                                        <span>Dielectric</span>
                                        <span className="badge bg-success-subtle text-success">Excellent</span>
                                    </div>
                                </div>

                                <button className="btn request-btn mt-4 w-100 text-white">
                                    Request Quote for PTFE →
                                </button>

                            </div>

                            {/* RIGHT IMAGE PLACEHOLDER */}
                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <div className="image-card">

                                    <img
                                        src={cardImage}
                                        className="w-100"
                                    />
                                    <div className="image-footer">
                                        Sheets | Rods | Tubes | Machined Components
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductsSection;