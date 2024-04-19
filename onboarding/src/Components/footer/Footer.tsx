import React from "react";

// Footer component displaying a message
const Footer = () => {
  return (
    // Container for the footer
    <div className="footer">
      {/* Message with styling */}
      <p style={{ color: "grey", margin: "10px 0", padding: "23px" }}>
        <b>
          **Tenant Conenctions are not allowed in free tier, however you can
          still explore the website features.
        </b>
      </p>
    </div>
  );
};

export default Footer;
