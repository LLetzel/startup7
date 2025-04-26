import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'; // Import your CSS file here
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Contat from './components/Contat';
import Footer from './components/Footer';
import Projetos from './components/Projetos';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="fullscreen-container">
      <div className="app">
        <Navbar />
        <Hero />
        <div className="linha">
          <div className="section-tag-container">
            <div>Sobre Nós</div>
            <div className="section-tag-line"></div>
          </div>
        </div>
        <Sobre />
        <div className="linha">
          <div className="section-tag-container">
            <div>Nossos Serviços</div>
            <div className="section-tag-line"></div>
          </div>
        </div>
        <Servicos />
        <div className="linha">
          <div className="section-tag-container">
            <div>Alguns Projetos</div>
            <div className="section-tag-line"></div>
          </div>
        </div>
        <Projetos />
        <div className="linha">
          <div className="section-tag-container">
            <div>Contato</div>
            <div className="section-tag-line"></div>
          </div>
        </div>
        <Contat />
        <div className="linha-roxo">
          <div className="section-tag-container-roxo">
            <div className="section-tag-line-roxo"></div>
          </div>
        </div>
        <Footer />

      </div>
    </div>
  );
}

export default App;
