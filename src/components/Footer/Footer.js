import React from "react";
import "../../styles/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p>&copy; {new Date().getFullYear()} Viranchi More. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
