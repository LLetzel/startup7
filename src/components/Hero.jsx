import logoNewDev from '../assets/NewDev.png';

const Hero = () => (
  <section id="hero" className="hero pt-20" >

    <div className="container-hero1">
      <p className="hero-subtitle" data-aos="fade-up">
        Transformamos ideias em sistemas de entrega modernos, eficientes e personalizados.
      </p>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          const contactSection = document.getElementById("contat");
          if (contactSection) {
            setTimeout(() => {
              contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100); // Pequeno delay para garantir animação suave
          }
        }}
        className="hero-button"
        data-aos="zoom-in"
      >
        Quero minha solução agora
      </a>
    </div>

    <div className="logoplus">
      <img src={logoNewDev} alt="" />
    </div>
  </section>
);

export default Hero;
