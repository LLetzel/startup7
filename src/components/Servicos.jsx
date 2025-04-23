const servicos = [
    {
      title: 'Sistema de Entrega',
      desc: 'Pedidos, rastreamento ao vivo, rotas otimizadas.'
    },
    {
      title: 'Dashboard Completo',
      desc: 'Gestão de entregas, clientes, pedidos e entregadores.'
    },
    {
      title: 'Aplicativo com sua marca',
      desc: 'App Android/iOS com visual 100% personalizado.'
    },
  ];
  
  const Servicos = () => (
    <section id="servicos" className="servicos">
      <h2 className="section-title" data-aos="fade-up">O que oferecemos</h2>
      <div className="cards-container">
        {servicos.map((item, i) => (
          <div
            className="card"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default Servicos;
  