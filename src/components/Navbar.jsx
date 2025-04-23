import React from "react";
import { FaHome, FaInfoCircle, FaCogs, FaEnvelope, FaLaptopCode } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
      <div className="header">
      <nav className="header-content">
        <div className="header-logo">
          <h1>NewDev</h1>
          </div>
        <ul>
          <i className="link"> Home</i>
          <i className="link"> About</i>
          <i className="link"> Services</i>
          <i className="link"> Contact</i>
          <i className="link"> Projects</i>
        </ul>
        
      </nav>
      </div>
      <div className="divisoria"></div>
    </header>
    
  );
};

export default Navbar;
