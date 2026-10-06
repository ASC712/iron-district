import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">
          <h3>IRON DISTRICT</h3>

          <p>
            Performance. Disciplina. Excelência.
          </p>
        </div>

        <div className="footer-column">
          <span>MENU</span>

          <a href="#sobre">Sobre</a>
          <a href="#estrutura">Estrutura</a>
          <a href="#planos">Planos</a>
          <a href="#contato">Contato</a>
        </div>

        <div className="footer-column">
          <span>CONTATO</span>

          <p>Av. Central, 1000</p>
          <p>São Paulo — SP</p>
          <p>+55 11 99999-9999</p>
        </div>

        <div className="footer-column">
          <span>SOCIAL</span>

          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">TikTok</a>
        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 IRON DISTRICT. TODOS OS DIREITOS RESERVADOS.
        </p>

        <p>
          PROJETO CONCEITUAL — PORTFÓLIO
        </p>

      </div>

    </footer>
  );
}

export default Footer;