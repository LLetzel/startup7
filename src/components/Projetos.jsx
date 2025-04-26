const projetos = [
  {
    id: 1,
    nome: "Clima Web",
    descricao:
      "Clima Web é um projeto web responsivo e dinâmico que oferece informações meteorológicas precisas e em tempo real, diretamente no seu navegador. Desenvolvido com foco na experiência do usuário, o Clima Web combina uma interface intuitiva e elegante com dados confiáveis de previsão do tempo.",
    link: "https://climaweb.vercel.app/",
    // imagem: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fclimaweb.vercel.app%2F?w=600"
    imagem: "src/assets/climaweb.png",
  },
  { id: 2, nome: "Projeto 2", descricao: "Descrição do Projeto 2", imagem: "https://via.placeholder.com/600x300?text=Projeto+2" },
  { id: 3, nome: "Projeto 3", descricao: "Descrição do Projeto 3", imagem: "https://via.placeholder.com/600x300?text=Projeto+3" },
];

const Projetos = () => (
  <section id="projetos" className="section-projetos">
    <h2>Projetos</h2>
    <p className="projetos-description">
      Explore alguns dos projetos que destacam nossa criatividade e experiência técnica.
    </p>
    <div className="projetos-cards">
      {projetos.map((projeto) =>
        projeto.link ? (
          <a
            key={projeto.id}
            className="projetos-card"
            href={projeto.link}
            target="_blank"
            rel="noopener noreferrer"
            title={`Acessar ${projeto.nome}`}
            style={{ textDecoration: "none" }}
          >
            <div className="projetos-image-wrapper">
              <img
                src={projeto.imagem}
                alt={projeto.nome}
                className="projetos-image"
                loading="lazy"
              />
              <div className="projetos-overlay">
                <span>Ver mais</span>
              </div>
            </div>
            <h3 className="projetos-card-title">{projeto.nome}</h3>
            <p className="projetos-card-text">{projeto.descricao}</p>
          </a>
        ) : (
          <div key={projeto.id} className="projetos-card">
            <div className="projetos-image-wrapper">
              <img
                src={projeto.imagem}
                alt={projeto.nome}
                className="projetos-image"
                loading="lazy"
              />
            </div>
            <h3 className="projetos-card-title">{projeto.nome}</h3>
            <p className="projetos-card-text">{projeto.descricao}</p>
          </div>
        )
      )}
    </div>
  </section>
);

export default Projetos;