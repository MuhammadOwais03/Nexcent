import React from "react";

import "./Unlock.css";

import { sitting_person, mobile, standing_person, platform_2 } from "../../svgs";

const Unlock = () => {
  return (
    <div className="unlock-container">
      <div className="unlock-images">
        <div
          className="stt"
          dangerouslySetInnerHTML={{ __html: sitting_person }}
        />
        <div className="mob" dangerouslySetInnerHTML={{ __html: mobile }} />
        <div
          className="std"
          dangerouslySetInnerHTML={{ __html: standing_person }}
        />

        <div
          className="plt"
          dangerouslySetInnerHTML={{ __html: platform_2 }}
        />
      </div>
      <div className="unlock-content">
        <h1 className="primary-color">
          The unseen of spending three years at Pixelgrade
        </h1>
        <p className="normal-text small-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button className="small-btn" style={{width: '115px'}}>Learn More</button>
      </div>
    </div>
  );
};

export default Unlock;
