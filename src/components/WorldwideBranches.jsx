import React from "react";
import MapSection from '../assets/images/map-new.png'

const WorldwideBranches = () => {
    return (
        <section className="worldwide-section py-5">
            <div className="container">
                <div className="row align-items-center">

                    {/* Left Content */}
                    <div className="col-lg-5 mb-4 mb-lg-0">
                        <p className="text-primary small fw-semibold letter-spacing">
                            Regional
                        </p>

                        <h2 className="fw-bold mb-4">Worldwide Branches</h2>

                        <ul className="branch-list list-unstyled">
                            <li className="active-branch">
                                India (Head Office & Manufacturing)
                            </li>
                            <li>Asia</li>
                            <li>Europe</li>
                            <li>North America</li>
                            <li>South America</li>
                            <li>Africa</li>
                            <li>Australia</li>
                        </ul>

                        <button className="btn btn-primary mt-4 px-4">
                            Let's Chat →
                        </button>
                    </div>

                    {/* Right Image Placeholder */}
                    <div className="col-lg-7 text-center">
                        <img
                            src={MapSection}
                            alt="World Map Placeholder"
                            className="img-fluid"
                        />

                    </div>
                </div>

                {/* Bottom Text */}
                <div className="row mt-5">
                    <div className="col-lg-8 mx-auto text-center">
                        <h3 className="fw-bold mb-3">
                            India, Asia & Global Supply Network
                        </h3>
                        <p className="text-muted">
                            Our manufacturing base in India supports domestic and
                            international clients with efficient production, quality
                            control, and global logistics coordination.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorldwideBranches;