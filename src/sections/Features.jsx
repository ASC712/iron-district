import "./Features.css";

function Features() {
  return (
    <section className="features">
      <div className="features-header">
        <p className="section-label">POR QUE IRON DISTRICT?</p>

        <h2>ESTRUTURA PARA<br />IR ALÉM.</h2>

        <p>
          Tudo o que você precisa para transformar
          disciplina em resultado.
        </p>
      </div>

      <div className="features-grid">

        <div className="feature-card">
          <span>01</span>
          <h3>EQUIPAMENTOS PREMIUM</h3>
          <p>
            Máquinas e equipamentos selecionados para
            proporcionar uma experiência completa de treino.
          </p>
        </div>

        <div className="feature-card">
          <span>02</span>
          <h3>PERSONAL TRAINERS</h3>
          <p>
            Profissionais preparados para acompanhar
            sua evolução e ajudar você a alcançar seus objetivos.
          </p>
        </div>

        <div className="feature-card">
          <span>03</span>
          <h3>AMBIENTE EXCLUSIVO</h3>
          <p>
            Um espaço moderno, confortável e pensado
            para quem valoriza qualidade em cada detalhe.
          </p>
        </div>

        <div className="feature-card">
          <span>04</span>
          <h3>ALTA PERFORMANCE</h3>
          <p>
            Estrutura e metodologia para quem busca
            evolução constante dentro e fora da academia.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Features;