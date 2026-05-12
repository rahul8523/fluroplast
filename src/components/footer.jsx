import React from "react";
import logo from '../assets/images/logo.png'

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="fluoroplast-footer">
            <div className="container">
                <div className="row gy-4">
                    {/* Column 1 */}
                    <div className="col-lg-4 col-md-6">
                        <img
                            src={logo}
                        />
                        <p className="footer-description">
                            Delivering high-performance fluoropolymer solutions engineered for
                            reliability, precision, and long-term industrial use. Trusted by
                            industries for consistent quality and technical expertise.
                        </p>

                        <div className="social-icons mt-3">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="col-lg-2 col-md-6">
                        <h6 className="footer-heading">Main Menu</h6>
                        <ul className="footer-links">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Products</li>
                            <li>Industries</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="col-lg-3 col-md-6">
                        <h6 className="footer-heading">Company</h6>
                        <ul className="footer-links">
                            <li>Careers</li>
                            <li>Team</li>
                            <li>Blog</li>
                            <li>Contacts</li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="col-lg-3 col-md-6">
                        <h6 className="footer-heading">Official Info</h6>
                        <ul className="footer-info">
                            <li>Address : Gurugram, Haryana, India</li>
                            <li>Mail : info@fluoroplastsolutions.in</li>
                            <li>Ph : +91 99532 89335</li>
                        </ul>
                    </div>

                </div>

                <hr className="footer-divider" />

                {/* Bottom Bar */}
                <div className="row align-items-center footer-bottom">
                    <div className="col-md-6 text-md-start text-center mb-2 mb-md-0">
                        © 2026 Fluoroplast Solutions Pvt. Ltd. All Rights Reserved.
                    </div>
                    <div className="col-md-6 text-md-end text-center">
                        <span className="footer-bottom-links">Privacy policy</span>
                        <span className="mx-2">/</span>
                        <span className="footer-bottom-links">Terms of use</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;