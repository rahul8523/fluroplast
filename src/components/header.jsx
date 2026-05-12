import React from "react";
import logo from '../assets/images/logo.png'

const navLinks = [
    "Home",
    "Products & Solutions",
    "Technical Centre",
    "About",
    "Careers",
    "Contact Us",
];

const Header = () => {
    return (
        <header className="custom-header">
            <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between">

                    {/* LEFT — Logo */}
                    <div className="logo-slot">
                        {/* logo image yaha laga dena later */}
                        <img
                            src={logo}
                        />
                    </div>

                    {/* CENTER — Nav */}
                    <nav className="nav-center d-none d-lg-flex">
                        {navLinks.map((link, i) => (
                            <a key={i} href="#" className="nav-link-custom">
                                {link}
                            </a>
                        ))}
                    </nav>

                    {/* RIGHT — Actions */}
                    <div className="d-flex align-items-center gap-3">

                        {/* Search */}
                        <i className="fa-solid fa-magnifying-glass search-icon"></i>

                        {/* Button */}
                        <button className="quote-btn">
                            Request A Quote <span className="ms-1">→</span>
                        </button>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;