import React from "react";
import "./Footer.css";

import { sc_2, sc_3, sc_4, sc_1, logo_w } from "../../svgs";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-box-1">
        <div className="logo" dangerouslySetInnerHTML={{ __html: logo_w }} />
        <p className="small-text normal-text">
          Copyright © 2020 Landify UI Kit. <br /> All rights reserved{" "}
        </p>
        <div className="social-logos">
          <div dangerouslySetInnerHTML={{ __html: sc_1 }} />
          <div dangerouslySetInnerHTML={{ __html: sc_2 }} />
          <div dangerouslySetInnerHTML={{ __html: sc_3 }} />
          <div dangerouslySetInnerHTML={{ __html: sc_4 }} />
        </div>
      </div>
      <div className="footer-box-2">
        <div className="footer-box-2-inside">
          <h2>Company</h2>
          <div className="links">
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Pricing</a>
            <a href="#">Testimonials</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="footer-box-2-inside">
          <h2>Support</h2>
          <div className="links">
            <a href="#">Help Center</a>
            <a href="#">Terms of Services</a>
            <a href="#">Legal</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Status</a>
          </div>
        </div>
        <div className="footer-box-2-inside">
          <h2>Stays up to date</h2>
          <div className="inputs" placeholder="Enter your email">
            <input type="text" />
            <svg
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="arrow"
            >
              <g clip-path="url(#clip0_332_231)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.4608 0.766934C12.6026 0.908743 12.6506 1.11925 12.5844 1.30854L8.93002 11.7496C8.8593 11.9516 8.67243 12.09 8.45855 12.0987C8.24468 12.1075 8.04715 11.9848 7.96021 11.7891L5.95355 7.27416L1.43857 5.2675C1.24297 5.18057 1.12025 4.98304 1.12898 4.76916C1.1377 4.55529 1.2761 4.36841 1.47813 4.2977L11.9192 0.643337C12.1085 0.577086 12.319 0.625125 12.4608 0.766934ZM6.97174 6.99427L8.37953 10.1618L10.8432 3.12285L6.97174 6.99427ZM10.1049 2.38455L3.06592 4.84819L6.23345 6.25598L10.1049 2.38455Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_332_231">
                  <rect
                    width="12.5293"
                    height="12.5293"
                    fill="white"
                    transform="translate(0.606506 0.092041)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
