import React, { useEffect, useState } from "react";
import ImagemNavBar from "../assets/logo-simple.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
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
        {
          threshold: 0.4, // em vez de 0.5
        }
      );
  
    sectionElements.forEach((section) => {
      observer.observe(section);
    });
  
    return () => {
      sectionElements.forEach((section) => observer.unobserve(section));
    };
  }, []);
  
  

  return (
    <div className="header-wrapper">
      <div className="header">
        <div className="header-logo" onClick={() => {
          setActiveSection("");
          scrollToSection("hero");
        }}>
          <img src={ImagemNavBar} alt="" width="75px" />
        </div>
        <nav>
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
      </div>
    </div>
  );
};

export default Navbar;
