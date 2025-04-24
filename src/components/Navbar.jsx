import React from "react";

const Navbar = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="header-logo">
          <img src="/src/assets/logo5.png" alt="" width="105px" />
        </div>
        <nav>
          <ul className="nav-links">
            <li className="link">Home</li>
            <li className="link">About</li>
            <li className="link">Services</li>
            <li className="link">Contact</li>
            <li className="link">Projects</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
