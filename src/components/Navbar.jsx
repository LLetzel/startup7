import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="header">
      <div className="header-logo">
        <img src="/src/assets/NewDev.png" alt="" width="140px" />
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
      <div className="divisoria"></div>
    </header>
  );
};

export default Navbar;
