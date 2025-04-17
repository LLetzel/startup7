import React from "react";
import { FaHome, FaInfoCircle, FaCogs, FaEnvelope, FaLaptopCode } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-white w-10 h-10 rounded-full" />
          <span className="text-xl font-bold text-white">LLetzelDev</span>
        </div>
        <ul className="flex gap-6 text-gray-300 font-medium text-sm">
          <li><a href="#hero" className="hover:text-white flex items-center gap-1"><FaHome /> Início</a></li>
          <li><a href="#sobre" className="hover:text-white flex items-center gap-1"><FaInfoCircle /> Sobre</a></li>
          <li><a href="#servicos" className="hover:text-white flex items-center gap-1"><FaCogs /> Serviços</a></li>
          <li><a href="#portfolio" className="hover:text-white flex items-center gap-1"><FaLaptopCode /> Portfólio</a></li>
          <li><a href="#contato" className="hover:text-white flex items-center gap-1"><FaEnvelope /> Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
