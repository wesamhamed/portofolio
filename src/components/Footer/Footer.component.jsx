import React from "react";
import "./Footer.style.css";

const Footer = () => {
  return (
    <div>
      <div className="py-2 text-center footer">Wesam Mohammed Hamed Hamed &nbsp;&copy; {new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;
