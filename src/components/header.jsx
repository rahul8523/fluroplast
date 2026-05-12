import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Automobile Industry",
    path: "/automobile-industry",
  },

  {
    name: "Chemical Industry",
    path: "/chemical-industry",
  },

  {
    name: "Medical Industry",
    path: "/medical-industry",
  },

  {
    name: "About",
    path: "/about",
  },

  {
    name: "Careers",
    path: "/careers",
  },

  {
    name: "Contact Us",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <header className="custom-header absolute top-0 left-0 w-full z-50">

      <div className="container">

        <div className="d-flex align-items-center justify-content-between py-3">

          {/* LOGO */}
          <Link to="/" className="logo-slot">

            <img
              src={logo}
              alt="Logo"
              className="img-fluid"
              style={{
                maxWidth: "180px",
              }}
            />

          </Link>

          {/* NAVIGATION */}
          <nav className="nav-center d-none d-lg-flex align-items-center">

            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className="nav-link-custom"
              >
                {link.name}
              </Link>
            ))}

          </nav>

          {/* RIGHT SIDE */}
          <div className="d-flex align-items-center gap-3">

            {/* SEARCH */}
            <button className="border-0 bg-transparent text-white">
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
            </button>

            {/* BUTTON */}
            <button className="quote-btn">
              Request A Quote
              <span className="ms-2">→</span>
            </button>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Header;