import React from 'react'
import heroImage from '../assets/images/hero-banner.jpg'


const HeroHome = () => {
    return (
        <section className="hero-section">

            {/* Background image via HTML */}
            <img
                src={heroImage}
                alt="hero"
                className="hero-bg"
            />

            {/* Overlay */}
            <div className="hero-overlay"></div>

            <div className="container-fluid hero-content">
                <div className="row align-items-center">

                    {/* LEFT SOCIAL BAR */}
                    <div className="col-auto d-none d-lg-flex flex-column social-bar">
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                        <i className="fa-solid fa-envelope"></i>
                        <span className="follow-text">Follow Us On</span>
                    </div>

                    {/* LEFT CONTENT */}
                    <div className="col-lg-6 hero-text">

                        <h1>
                            Advanced <br />
                            Fluoropolymer Solutions <br />
                            PTFE, PVDF & PFA
                        </h1>

                        <p>
                            Manufacturers & Global Exporters of High-Performance Fluoropolymer Products
                        </p>

                        <button className="discover-btn">
                            Discover More <span>→</span>
                        </button>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroHome