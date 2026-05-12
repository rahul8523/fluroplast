import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./NewsletterCTA.css";
import { FaEnvelopeOpenText, FaPaperPlane } from "react-icons/fa";

const NewsletterCTA = () => {
    return (
        <section className="newsletter-section">
            <div className="container">
                <div className="row align-items-center gy-4">

                    {/* Left Content */}
                    <div className="col-lg-6">
                        <div className="newsletter-left d-flex">

                            <div className="newsletter-icon">
                                <FaEnvelopeOpenText />
                            </div>

                            <div className="ms-4">
                                <p className="newsletter-small mb-2">
                                    Newsletter Subscription
                                </p>
                                <h2 className="newsletter-title">
                                    Get Instant Industry <br /> Updates
                                </h2>
                            </div>

                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="col-lg-6">
                        <div className="newsletter-form-wrapper">

                            <div className="newsletter-form d-flex">
                                <input
                                    type="email"
                                    className="form-control newsletter-input"
                                    placeholder="Enter your email address"
                                />
                                <button className="newsletter-btn">
                                    Subscribe
                                </button>
                            </div>

                            <div className="newsletter-privacy mt-2">
                                <input type="checkbox" className="me-2" />
                                Your email is safe with us. We do not spam. Privacy Policy
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Decorative Right Icon */}
            <div className="newsletter-plane">
                <FaPaperPlane />
            </div>
        </section>
    );
};

export default NewsletterCTA;