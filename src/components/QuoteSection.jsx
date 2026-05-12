import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./QuoteSection.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import cardImage from '../assets/images/manufacturing.png'

const QuoteSection = () => {
    return (
        <section className="quote-section">
            <div className="container">

                {/* Heading */}
                <div className="text-center mb-5">
                    <h2 className="quote-title">
                        Get Custom Fluoropolymer Solution
                    </h2>
                    <p className="quote-subtitle">
                        Request a detailed quote for your specific requirements. Our technical team will
                        respond within 24 hours
                    </p>
                </div>

                <div className="row g-4">

                    {/* LEFT SIDE */}
                    <div className="col-lg-4">

                        <div className="contact-card">
                            <h5 className="mb-4 fw-bold">Contact Information</h5>

                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <div>
                                    <small>Email</small>
                                    <p>sales@fluoroplast-solutions.com</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <FaPhoneAlt className="contact-icon" />
                                <div>
                                    <small>Phone</small>
                                    <p>+91-XXX-XXXX-XXX</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <div>
                                    <small>Location</small>
                                    <p>Industrial Area, Manufacturing District</p>
                                </div>
                            </div>

                            <hr />

                            <div className="working-hours">
                                <small>Working Hours</small>
                                <p>Mon-Sat: 9:00 AM - 6:00 PM</p>
                            </div>
                        </div>

                        <div className="contact-image mt-4">
                            <img
                                src={cardImage}
                                alt="industry"
                                className="img-fluid"
                            />
                        </div>

                    </div>

                    {/* RIGHT SIDE FORM */}
                    <div className="col-lg-8">
                        <div className="form-card">

                            <div className="row g-3">

                                <div className="col-md-6">
                                    <label>Full Name *</label>
                                    <input type="text" className="form-control" placeholder="John Doe" />
                                </div>

                                <div className="col-md-6">
                                    <label>Email Address *</label>
                                    <input type="email" className="form-control" placeholder="john@company.com" />
                                </div>

                                <div className="col-md-6">
                                    <label>Phone Number *</label>
                                    <input type="text" className="form-control" placeholder="+1 (555) 000-0000" />
                                </div>

                                <div className="col-md-6">
                                    <label>Company Name *</label>
                                    <input type="text" className="form-control" placeholder="Your Company" />
                                </div>

                                <div className="col-md-6">
                                    <label>Product Type *</label>
                                    <select className="form-control">
                                        <option>Select product</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label>Estimated Quantity</label>
                                    <input type="text" className="form-control" placeholder="e.g., 500 kg, 100 sheets" />
                                </div>

                                <div className="col-12">
                                    <label>Additional Requirements</label>
                                    <textarea
                                        rows="4"
                                        className="form-control"
                                        placeholder="Please specify dimensions, tolerances, delivery timeline, or any other requirements..."
                                    ></textarea>
                                </div>

                                <div className="col-12">
                                    <button className="submit-btn w-100">
                                        Submit Quote Request <FaPaperPlane className="ms-2" />
                                    </button>
                                </div>

                                <div className="col-12 text-center form-note">
                                    By submitting this form, you agree to our terms and privacy policy
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default QuoteSection;