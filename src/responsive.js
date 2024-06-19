import React from "react";
import "./responsive.css"; // assuming the CSS is imported in a separate file

const Mobile = () => {
  const isMobile = window.innerWidth <= 380;

  return (
    <div className={isMobile ? "mobile-hide" : ""}>
    </div>
  );
};

export default Mobile;
