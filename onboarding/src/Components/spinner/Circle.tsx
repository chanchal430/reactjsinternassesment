import React from "react";
import "./Circle.css";

// Circle component
const Circle: React.FC = () => {
  return (
    // Container for the circle
    <div className="container-circle">
      {/* Spinner */}
      <div className="spinner">
        <h3>Welcome!!</h3>
      </div>
    </div>
  );
};

export default Circle;
