import React from "react";
import "./Acheivement.css";

import { ach_1, ach_2, ach_3, ach_4 } from "../../svgs";

const Acheivement = () => {
  return (
    <div className="acheivement-container">
      <div className="acheivement-content">
        <h1 className="head-text">
          Helping a local <br />{" "}
          <span className="inside-text">business reinvent itself</span>
        </h1>
        <p className="small-text normal-text">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className="acheivement-body">
        <div className="acheivement-body-card-container">
          <div className="acheivement-card">
            <div className="ach1" dangerouslySetInnerHTML={{ __html: ach_1 }} />
            <div className="acheivement-card-content">
              <p className="numbers">
                2,245,341 <br />
                <span className="number-text normal-text">Members</span>
              </p>
              <p></p>
            </div>
          </div>
          <div className="acheivement-card">
            <div className="ach1" dangerouslySetInnerHTML={{ __html: ach_2 }} />
            <div className="acheivement-card-content">
              <p className="numbers">
              46,328 <br />
                <span className="number-text normal-text">Clubs</span>
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="acheivement-body-card-container">
          <div className="acheivement-card">
            <div className="ach1" dangerouslySetInnerHTML={{ __html: ach_3 }} />
            <div className="acheivement-card-content">
              <p className="numbers">
              828,867 <br />
                <span className="number-text normal-text">Event Bookings</span>
              </p>
              <p></p>
            </div>
          </div>
          <div className="acheivement-card">
            <div className="ach1" dangerouslySetInnerHTML={{ __html: ach_4 }} />
            <div className="acheivement-card-content">
              <p className="numbers">
              1,926,436 <br />
                <span className="number-text normal-text">Payments</span>
              </p>
              <p></p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Acheivement;
