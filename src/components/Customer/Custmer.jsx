import React from "react";
import "./Customer.css";
import '../CommunityUpdates/CommunityUpdates.css'
import '../Client/Client.css'
import { cust } from "../../svgs";
import { o_1, o_2, o_3, o_4, o_5, o_6, o_7 } from "../../svgs";

const Custmer = () => {
  return (
    <div className="customer-container">
      <div className="customer-image">
        <div className="cust" dangerouslySetInnerHTML={{ __html: cust }} />
      </div>
      <div className="customer-content">
        <p className="normal-text line_height">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <p className="small-text name">Tim Smith</p>
        <p className="small-text nrmal-text British">
          British Dragon Boat Racing Association
        </p>
        <div className="customer-brand-logo">
          <div className="log-1" dangerouslySetInnerHTML={{ __html: o_1 }} />
          <div className="log-1" dangerouslySetInnerHTML={{ __html: o_2 }} />
          <div className="log-3" dangerouslySetInnerHTML={{ __html: o_3 }} />
          <div className="log-4" dangerouslySetInnerHTML={{ __html: o_4 }} />
          <div className="log-5" dangerouslySetInnerHTML={{ __html: o_5 }} />
          <div className="log-6" dangerouslySetInnerHTML={{ __html: o_6 }} />
          <a href="">
            {" "}
            <span className="inside-text">Meet all customers</span>
            <svg
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3793 11.7119L13.6714 9.41978C13.9432 9.14795 13.9432 8.70722 13.6714 8.43539L11.3793 6.14331M13.4675 8.92759L3.72253 8.92759"
                stroke="#4CAF4F"
                stroke-width="1.0441"
                stroke-linecap="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Custmer;
