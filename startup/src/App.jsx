import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Portfolio from './components/Portfolio';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Portfolio />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
