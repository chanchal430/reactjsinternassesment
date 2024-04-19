import React from "react";
import "./Title.css";
import Circle from "../spinner/Circle";
import Button from "../buttons/Button";
import Footer from "../footer/Footer";

// Functional component for the Title section
const Title = () => {
  return (
    <div className="container">
      <h1 className="title-header">
        Ah!!, I never saw someone from your
        <br /> company.
      </h1>
      <Circle />
      <Button />
      <Footer />
    </div>
  );
};

// Exporting Title component for use in other parts of the application
export default Title;
