import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

const industryLinks = [
  {
    name: "Automobile Industry",
    path: "/automobile-industry",
  },
  {
    name: "Chemical Industry",
    path: "/chemical-industry",
  },
  {
    name: "Electrical Industry",
    path: "/electrical-industry",
  },
  {
    name: "Food Industry",
    path: "/food-industry",
  },
  {
    name: "Infrastructure Industry",
    path: "/infrastructure-industry",
  },
  {
    name: "Irrigation Industry",
    path: "/irrigation-industry",
  },
  {
    name: "Labware Industry",
    path: "/labware-industry",
  },
  {
    name: "Medical Industry",
    path: "/medical-industry",
  },
  {
    name: "Oil Industry",
    path: "/oil-industry",
  },
];

const navLinks = [
  {
    name: "Home",
    path: "/",
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
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [megaOpen, setMegaOpen] = React.useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((value) => !value);
  const toggleMegaMenu = () => setMegaOpen((value) => !value);

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
          <button
            className="menu-toggle d-lg-none border-0 bg-transparent text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>

          <nav className={`nav-center align-items-center ${mobileMenuOpen ? "mobile-open" : ""}`}>
            <div
              className="mega-menu-wrapper"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                type="button"
                className="nav-link-custom mega-trigger"
                onClick={toggleMegaMenu}
                aria-expanded={megaOpen}
              >
                Industries
                <span className="mega-chevron">▾</span>
              </button>

              <div className={`mega-menu-content ${megaOpen ? "open" : ""}`}>
                <div className="mega-menu-header">
                  <span>Industry Solutions</span>
                  <p>Explore all industrial segments powered by our fluoropolymer solutions.</p>
                </div>

                <div className="mega-menu-grid">
                  {industryLinks.map((link, index) => (
                    <Link key={index} to={link.path} className="mega-item-link" onClick={() => setMobileMenuOpen(false)}>
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((link, i) => (
              <Link key={i} to={link.path} className="nav-link-custom" onClick={() => setMobileMenuOpen(false)}>
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