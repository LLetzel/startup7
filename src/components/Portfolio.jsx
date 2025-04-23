const Portfolio = () => (
    <section id="portfolio" className="servicos bg-gray-900">
      <h2 className="section-title" data-aos="fade-up">Portfólio</h2>
      <div className="cards-container">
        {[1, 2, 3].map((p, i) => (
          <div
            key={i}
            className="card"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <img
              src={`https://via.placeholder.com/600x300?text=Projeto+${p}`}
              alt={`Projeto ${p}`}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="card-title">Projeto {p}</h3>
            <p className="card-desc">Breve descrição do projeto {p}. Funcionalidades, tecnologias e propósito.</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Portfolio;
  