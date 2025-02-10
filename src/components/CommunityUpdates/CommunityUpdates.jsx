import React from "react";
import "./CommunityUpdates.css";

import { cu_1, cu_2, cu_3 } from "../../svgs";

const CommunityUpdates = () => {
  return (
    <div className="community-updates-container">
      <div className="community-updates-content">
        <h1>Caring is the new marketing</h1>
        <p className="small-text normal-text">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.​
        </p>
      </div>
      <div className="community-updates-card-container">
        <div className="community-updates-card">
          <div
            className="cu-images"
            dangerouslySetInnerHTML={{ __html: cu_1 }}
          />
          <div className="community-updates-card-content">
            <p className="small-text normal-text">
              Creating Streamlined Safeguarding Processes with OneRen
            </p>
            <a href="">
              {" "}
              <span className="inside-text">Read More</span>{" "}
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

        <div className="community-updates-card">
          <div
            className="cu-images"
            dangerouslySetInnerHTML={{ __html: cu_2 }}
          />
          <div className="community-updates-card-content">
            <p className="small-text normal-text">
            What are your safeguarding responsibilities and how can you manage them?
            </p>
            <a href="">
              {" "}
              <span className="inside-text">Read More</span>{" "}
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

        <div className="community-updates-card">
          <div
            className="cu-images"
            dangerouslySetInnerHTML={{ __html: cu_3 }}
          />
          <div className="community-updates-card-content">
            <p className="small-text normal-text">
            Revamping the Membership Model with Triathlon Australia
            </p>
            <a href="">
              {" "}
              <span className="inside-text">Read More</span>{" "}
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
    </div>
  );
};

export default CommunityUpdates;
