import React from "react";
import { assests } from "../../assests/assests";
import "./Button.css";

const Button: React.FC = () => {
  return (
    // {/* Container for both buttons */}
    <div className="button-container">
      {/* Button for browsing test data */}
      <div className="button browse-button">
        <p>Browse Test Data</p>
      </div>
      {/* Button for connecting domain */}
      <div className="button domain-button">
        <img src={assests.icon} alt="plus-icon" className="icon" />
        <p>Connect Domain</p>
      </div>
    </div>
  );
};

export default Button;
