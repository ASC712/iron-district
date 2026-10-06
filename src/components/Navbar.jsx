import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <a href="#" className="navbar-logo">
        IRON DISTRICT
      </a>

      <nav className="navbar-links">
        <a href="#sobre">SOBRE</a>
        <a href="#estrutura">ESTRUTURA</a>
        <a href="#planos">PLANOS</a>
        <a href="#contato">CONTATO</a>
      </nav>

      <button className="navbar-button">
        COMECE AGORA
      </button>
    </header>
  );
}

export default Navbar;