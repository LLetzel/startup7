const Footer = () => (
  <footer className="footer-container">
    <div className="footer-bg"></div>
    <div className="footer-divider-roxo"></div>
    <div className="footer-content">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/src/assets/NewDev-sem-escrita.png" alt="NewDev Logo" width="130" />
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} NewDev. Todos os direitos reservados.
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
