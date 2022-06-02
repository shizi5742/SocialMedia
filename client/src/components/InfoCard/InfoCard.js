import React from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";

const InfoCard = () => {
  return (
    <div className="InfoCard">
      <div className="InfoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.2rem" />
        </div>
      </div>
      <div className="Info">
        <span>
          <b>Status</b>
        </span>
        <span> in Realationship</span>
      </div>

      <div className="Info">
        <span>
          <b>Lives in</b>
        </span>
        <span> San Jose</span>
      </div>
      <div className="Info">
        <span>
          <b>Works at</b>
        </span>
        <span> Cognizant</span>
      </div>
      <button className="button ">Logout</button>
    </div>
  );
};

export default InfoCard;
