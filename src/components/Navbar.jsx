import React from "react";
import { FaHome, FaInfoCircle, FaCogs, FaEnvelope, FaLaptopCode } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
      <nav className="header-content">
        <div className="header-logo">
          <h1>NewDev</h1>
          </div>
        <ul>
          <li className="link"><FaHome /> Home</li>
          <li className="link"><FaInfoCircle /> About</li>
          <li className="link"><FaCogs /> Services</li>
          <li className="link"><FaEnvelope /> Contact</li>
          <li className="link"><FaLaptopCode /> Projects</li>
        </ul>
        
      </nav>
    </header>
  );
};

export default Navbar;
