const projetos = [
    { id: 1, nome: "Projeto 1", descricao: "Descrição do Projeto 1" },
    { id: 2, nome: "Projeto 2", descricao: "Descrição do Projeto 2" },
    { id: 3, nome: "Projeto 3", descricao: "Descrição do Projeto 3" },
  ];
  
  const Projetos = () => (
    <section id="projetos" className="section-projetos">
      <h2>Projetos</h2>
      <p className="projetos-description">
        Explore alguns dos projetos que destacam nossa criatividade e experiência técnica.
      </p>
      <div className="projetos-cards">
        {projetos.map((projeto) => (
          <div key={projeto.id} className="projetos-card">
            <img
              src={`https://via.placeholder.com/600x300?text=${projeto.nome}`}
              alt={projeto.nome}
              className="projetos-image"
            />
            <h3 className="projetos-card-title">{projeto.nome}</h3>
            <p className="projetos-card-text">{projeto.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Projetos;