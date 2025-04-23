import React from "react";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src="/src/assets/logoNewDev.png" alt="" width="80px" />
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
    </header>
  );
};

export default Navbar;
