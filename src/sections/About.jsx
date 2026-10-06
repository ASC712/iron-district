import "./About.css";
import gymImage from "../assets/gym-hero.png";

function About() {
  return (
    <section className="about" id="sobre">
      <div className="about-image">
        <img
          src={gymImage}
          alt="Interior da Iron District"
        />
      </div>

      <div className="about-content">
        <p className="section-label">
          SOBRE A IRON DISTRICT
        </p>

        <h2>MAIS QUE UMA ACADEMIA.</h2>

        <p>
          Um espaço criado para quem leva sua evolução a sério.
        </p>

        <p>
          Na Iron District, combinamos estrutura premium,
          equipamentos de alta performance e um ambiente pensado
          para transformar treinamento em estilo de vida.
        </p>

        <a href="#estrutura" className="about-button">
  CONHEÇA NOSSA ESTRUTURA
</a>
      </div>
    </section>
  );
}

export default About;