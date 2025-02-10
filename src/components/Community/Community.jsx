import React from "react";
import "./Community.css";

import { c_1, c_2, c_3 } from "../../svgs";

const Community = () => {
  return(
  <div className="community-container">
    <div className="community-content">
      <h1 className="primary-color">
        Manage your entire community <br /> in a single system
      </h1>
      <p className="small-text normal-text">Who is Nextcent suitable for?</p>
    </div>
    <div className="community-bottom">
      <div className="community-one">
        <div className="com-1" dangerouslySetInnerHTML={{ __html: c_1 }} />
        <h1 className="primary-color">
          Membership <br /> Organisations
        </h1>

        <p className="small-text normal-text" style={{marginTop:'0px'}}>
          Our membership management software provides full automation of
          membership renewals and payments
        </p>
      </div>
      <div className="community-one">
        <div className="com-1" dangerouslySetInnerHTML={{ __html: c_2 }} />
        <h1 className="primary-color">
        National  <br /> Associations
        </h1>

        <p className="small-text normal-text" style={{marginTop:'0px'}}>
        Our membership management software provides full automation of membership renewals and payments
        </p>
      </div>
      <div className="community-one">
        <div className="com-1" dangerouslySetInnerHTML={{ __html: c_3 }} />
        <h1 className="primary-color">
        Clubs And  <br /> Groups
        </h1>

        <p className="small-text normal-text" style={{marginTop:'0px'}}>
        Our membership management software provides full automation of membership renewals and payments
        </p>
      </div>
    </div>
  </div>);
};

export default Community;
