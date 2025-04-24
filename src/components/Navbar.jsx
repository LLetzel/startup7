import React from "react";

const Navbar = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="header-logo">
          <img src="/src/assets/logo5.png" alt="" width="77 px" />
        </div>
        <nav>
          <ul className="nav-links">
            <li className="link">Início</li>
            <li className="link">Sobre</li>
            <li className="link">Serviços</li>
            <li className="link">Contato</li>
            <li className="link">Projetos</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
