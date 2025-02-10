import React, { useState } from "react";
import "./Navbar.css";
import { logo } from "../../svgs";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-container flex-container">
      

      <div className="navbar-logo" dangerouslySetInnerHTML={{ __html: logo }} />
      <div className="navbar-links flex-container normal-text">
        <div
          className="navbar-logo-1"
          dangerouslySetInnerHTML={{ __html: logo }}
        />
        <Link to="/" className="scale-animation">
          Home
        </Link>
        <Link to="/features" className="scale-animation">
          Features
        </Link>
        <Link to="/community" className="scale-animation">
          Community
        </Link>
        <Link to="/blog" className="scale-animation">
          Blog
        </Link>
        <Link to="/pricing" className="scale-animation">
          Pricing
        </Link>
        <Link to="/register" className="primary-btn scale-animation">
          <p>Register Now</p>
          <svg
            width="9"
            height="6"
            viewBox="0 0 9 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.52563 5.47034L8.24474 3.75123C8.44862 3.54735 8.44862 3.2168 8.24474 3.01292L6.52563 1.29381M8.09183 3.38207L0.434875 3.38207"
              stroke="white"
              strokeWidth="0.765676"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </div>

      <div className={`navbar-links-sidebar flex-container normal-text ${isOpen?'active':''}`}>
        <div
          className="menu-close-icon scale-animation"
          onClick={() => setIsOpen(false)}
        >
          <FontAwesomeIcon icon={faXmark} size="2x" />
        </div>
        <div
          className="navbar-logo-1"
          dangerouslySetInnerHTML={{ __html: logo }}
        />
        <Link to="/" className="scale-animation">
          Home
        </Link>
        <Link to="/features" className="scale-animation">
          Features
        </Link>
        <Link to="/community" className="scale-animation">
          Community
        </Link>
        <Link to="/blog" className="scale-animation">
          Blog
        </Link>
        <Link to="/pricing" className="scale-animation">
          Pricing
        </Link>
        <Link to="/register" className="primary-btn scale-animation">
          <p>Register Now</p>
          <svg
            width="9"
            height="6"
            viewBox="0 0 9 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.52563 5.47034L8.24474 3.75123C8.44862 3.54735 8.44862 3.2168 8.24474 3.01292L6.52563 1.29381M8.09183 3.38207L0.434875 3.38207"
              stroke="white"
              strokeWidth="0.765676"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} size="2x" />
      </div>
    </div>
  );
};

export default Navbar;
