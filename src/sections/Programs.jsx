import "./Programs.css";

function Programs() {
  return (
    <section className="programs" id="modalidades">
      <div className="programs-header">
        <p className="section-label">NOSSAS MODALIDADES</p>

        <h2>ENCONTRE SEU<br />RITMO.</h2>

        <p>
          Diferentes formas de treinar. Um único objetivo:
          evoluir constantemente.
        </p>
      </div>

      <div className="programs-grid">

        <article className="program-card">
          <span>01</span>

          <div>
            <h3>MUSCULAÇÃO</h3>
            <p>
              Equipamentos completos para desenvolver
              força, resistência e composição corporal.
            </p>
          </div>

          <a href="#contato">SAIBA MAIS →</a>
        </article>

        <article className="program-card">
          <span>02</span>

          <div>
            <h3>FUNCIONAL</h3>
            <p>
              Treinos dinâmicos para melhorar mobilidade,
              condicionamento e performance.
            </p>
          </div>

          <a href="#contato">SAIBA MAIS →</a>
        </article>

        <article className="program-card">
          <span>03</span>

          <div>
            <h3>PERSONAL TRAINER</h3>
            <p>
              Acompanhamento individualizado para quem
              busca um treinamento direcionado.
            </p>
          </div>

          <a href="#contato">SAIBA MAIS →</a>
        </article>

        <article className="program-card">
          <span>04</span>

          <div>
            <h3>CARDIO</h3>
            <p>
              Equipamentos e espaço dedicados para
              melhorar resistência e condicionamento.
            </p>
          </div>

          <a href="#contato">SAIBA MAIS →</a>
        </article>

      </div>
    </section>
  );
}

export default Programs;