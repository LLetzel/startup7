import React, { useEffect, useState } from "react";
import ImagemNavBar from "../assets/logoIA.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = ["hero", "sobre", "servicos", "projetos", "contat"];
    const sectionElements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id === "hero" ? "" : id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionElements.forEach((section) => observer.observe(section));
    return () => sectionElements.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="header-wrapper">
      <div className="header">
        <div
          className="header-logo"
          onClick={() => {
            setActiveSection("");
            scrollToSection("hero");
          }}
        >
          <img src={ImagemNavBar} id="logoNavBar" alt="Logo" width="65px" />
        </div>

        <nav className={`nav-links-wrapper ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li
              className={`link ${activeSection === "sobre" ? "active" : ""}`}
              onClick={() => scrollToSection("sobre")}
            >
              Sobre
            </li>
            <li
              className={`link ${activeSection === "servicos" ? "active" : ""}`}
              onClick={() => scrollToSection("servicos")}
            >
              Serviços
            </li>
            <li
              className={`link ${activeSection === "projetos" ? "active" : ""}`}
              onClick={() => scrollToSection("projetos")}
            >
              Projetos
            </li>
            <li
              className={`link ${activeSection === "contat" ? "active" : ""}`}
              onClick={() => scrollToSection("contat")}
            >
              Contato
            </li>
          </ul>
        </nav>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
