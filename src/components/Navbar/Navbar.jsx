import "./Navbar.css";
import logo from "../../assets/logo.png";

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <header className={scrolled ? "navbar scrolled" : "navbar"}>

      <div className="container">

        {/* Logo */}

        <div className="brand">

          <NavLink to="/">

            <img src={logo} alt="Power Engineers" />

          </NavLink>

        </div>

        {/* Navigation */}

        <nav className={menuOpen ? "nav active" : "nav"}>

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
                    {/* About Dropdown */}

          <div className="dropdown">

            <span className="dropdown-title">

              About Us

              <FaChevronDown className="arrow" />

            </span>

            <div className="dropdown-menu">

              <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
              >
                Company Profile
              </NavLink>

              <NavLink
                to="/vision-mission"
                onClick={() => setMenuOpen(false)}
              >
                Vision & Mission
              </NavLink>

              <NavLink
                to="/infrastructure"
                onClick={() => setMenuOpen(false)}
              >
                Infrastructure
              </NavLink>

            </div>

          </div>


          {/* Products Dropdown */}

          <div className="dropdown">

            <span className="dropdown-title">

              Products

              <FaChevronDown className="arrow" />

            </span>

            <div className="dropdown-menu">

              <NavLink
                to="/products/ht-panel"
                onClick={() => setMenuOpen(false)}
              >
                HT Panel
              </NavLink>

              <NavLink
                to="/products/lt-panel"
                onClick={() => setMenuOpen(false)}
              >
                LT Panel
              </NavLink>

              <NavLink
                to="/products/pcc-panel"
                onClick={() => setMenuOpen(false)}
              >
                PCC Panel
              </NavLink>

              <NavLink
                to="/products/mcc-panel"
                onClick={() => setMenuOpen(false)}
              >
                MCC Panel
              </NavLink>

              <NavLink
                to="/products/apfc-panel"
                onClick={() => setMenuOpen(false)}
              >
                APFC Panel
              </NavLink>
              

              <NavLink
                to="/products/bus-duct"
                onClick={() => setMenuOpen(false)}
              >
                Bus Duct
              </NavLink>

            </div>

          </div>


          {/* Projects */}

          <NavLink
            to="/projects"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>
                    {/* Contact Dropdown */}

          <div className="dropdown">

            <span className="dropdown-title">

              Contact Us

              <FaChevronDown className="arrow" />

            </span>

            <div className="dropdown-menu">

              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </NavLink>

              <NavLink
                to="/career"
                onClick={() => setMenuOpen(false)}
              >
                Career
              </NavLink>

              <NavLink
                to="/get-quote"
                onClick={() => setMenuOpen(false)}
              >
                Get Quote
              </NavLink>

            </div>

          </div>

        </nav>

        {/* Get Quote Button */}

        <NavLink
          to="/get-quote"
          className="quote-btn"
          onClick={() => setMenuOpen(false)}
        >
          Get Quote
        </NavLink>

        {/* Mobile Menu */}

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>

      {/* Overlay */}

      <div
        className={
          menuOpen
            ? "overlay-bg active"
            : "overlay-bg"
        }
        onClick={() => setMenuOpen(false)}
      ></div>

    </header>

  );

}

export default Navbar;