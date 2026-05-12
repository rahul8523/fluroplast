import React from "react";
import logo0 from '../assets/images/Container.png'
import logo1 from '../assets/images/Container(1).png'
import logo2 from '../assets/images/Container(2).png'
import logo3 from '../assets/images/Container(3).png'
import logo4 from '../assets/images/Container(4).png'
import logo5 from '../assets/images/Container(5).png'
import logo6 from '../assets/images/Container(6).png'
import logo7 from '../assets/images/Container(7).png'

const logos = [
    { id: 1, img: logo1 },
    { id: 2, img: logo2 },
    { id: 3, img: logo3 },
    { id: 4, img: logo4 },
    { id: 5, img: logo5 },
    { id: 6, img: logo6 },
    { id: 7, img: logo7 },
    { id: 8, img: logo0 }
];

const TrustedPartners = () => {
    return (
        <section className="trusted-section">
            <div className="container">
                <div className="row align-items-center">

                    {/* LEFT TEXT */}
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <p className="trusted-small">Top Brands</p>
                        <h2 className="trusted-title">
                            Our Trusted <br /> Partners
                        </h2>
                    </div>

                    {/* RIGHT LOGO GRID */}
                    <div className="col-lg-8">
                        <div className="logo-grid">
                            {logos.map((logo) => (
                                <div key={logo.id} className="logo-box">
                                    <img
                                        src={logo.img}
                                        alt="brand"
                                        className="img-fluid"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrustedPartners;