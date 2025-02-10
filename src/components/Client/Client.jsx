import React from "react";
import "./Client.css";
import { o_1, o_2, o_3, o_4, o_5, o_6, o_7 } from "../../svgs";

const Client = () => {
  return (
    <div className="client-container">
      <div className="client-content">
        <h1 className="primary-color" >Our Clients</h1>
        <p className="small-text normal-text">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      <div className="cleint-logos">
        <div className="log-1" dangerouslySetInnerHTML={{ __html: o_1 }} />
        <div className="log-1" dangerouslySetInnerHTML={{ __html: o_2 }} />
        <div className="log-3" dangerouslySetInnerHTML={{ __html: o_3 }} />
        <div className="log-4" dangerouslySetInnerHTML={{ __html: o_4 }} />
        <div className="log-5" dangerouslySetInnerHTML={{ __html: o_5 }} />
        <div className="log-6" dangerouslySetInnerHTML={{ __html: o_6 }} />
        <div className="log-7" dangerouslySetInnerHTML={{ __html: o_7 }} />

      </div>
    </div>
  );
};

export default Client;
