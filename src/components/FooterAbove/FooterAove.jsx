import React from "react";
import "./FooterAbove.css";

const FooterAove = () => {
  return (
    <div className="footer-above-container">
      <h1>
        Pellentesque suscipit <br /> fringilla libero eu.
      </h1>
      <div className="primary-btn small">
        Get a Demo
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.71673 7.75012L10.4358 6.03101C10.6397 5.82714 10.6397 5.49658 10.4358 5.2927L8.71673 3.5736M10.2829 5.66186L2.62598 5.66186"
            stroke="white"
            stroke-width="0.765676"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default FooterAove;
