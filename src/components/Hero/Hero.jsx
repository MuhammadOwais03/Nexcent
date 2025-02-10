import React from "react";
import "./Hero.css";
import {
  laptop_content,
  laptop,
  person,
  gear,
  platform,
  cross,
  line,
} from "../../svgs";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-content">
          <p className="headline-1 head-text">
            Lessons and insights{" "}
            <span className="inside-text">from 8 years</span>
          </p>
          <p className="small-text normal-text">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="small-btn">Register</button>
        </div>
        <div className="hero-image">
          <div className="laptop">
            <div
              className="lap-1"
              dangerouslySetInnerHTML={{ __html: laptop }}
            />
            <div
              className="lap-3"
              dangerouslySetInnerHTML={{ __html: laptop_content }}
            />
            <div className="lap-2" dangerouslySetInnerHTML={{ __html: line }} />
          </div>
          <div className="person">
            <div
              className="per-2"
              dangerouslySetInnerHTML={{ __html: platform }}
            />

            <div
              className="per-1"
              dangerouslySetInnerHTML={{ __html: person }}
            />
          </div>
          <div className="gear">
            <div
              className="ger-1"
              dangerouslySetInnerHTML={{ __html: gear }}
            />
          </div>
        <div className="cross">
          <div className="cor-1" dangerouslySetInnerHTML={{ __html: cross }}/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
