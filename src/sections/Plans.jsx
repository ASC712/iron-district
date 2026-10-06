import "./Plans.css";

function Plans() {
  return (
    <section className="plans" id="planos">

      <div className="plans-header">
        <p className="section-label">ESCOLHA SEU PLANO</p>

        <h2>SEU TREINO.<br />SEU RITMO.</h2>

        <p>
          Escolha a experiência que combina com seus objetivos
          e comece sua evolução.
        </p>
      </div>

      <div className="plans-grid">

        <article className="plan-card">
          <span className="plan-number">01</span>

          <div>
            <h3>ESSENTIAL</h3>

            <p className="plan-description">
              O essencial para começar sua jornada.
            </p>

            <div className="plan-price">
              <strong>R$ 99</strong>
              <span>/mês</span>
            </div>

            <ul>
              <li>✓ Acesso à musculação</li>
              <li>✓ Área de cardio</li>
              <li>✓ Vestiários</li>
            </ul>
          </div>

          <a href="#contato">ESCOLHER PLANO →</a>
        </article>


        <article className="plan-card plan-featured">

          <div className="plan-badge">
            MAIS ESCOLHIDO
          </div>

          <span className="plan-number">02</span>

          <div>
            <h3>PERFORMANCE</h3>

            <p className="plan-description">
              Mais recursos para acelerar sua evolução.
            </p>

            <div className="plan-price">
              <strong>R$ 149</strong>
              <span>/mês</span>
            </div>

            <ul>
              <li>✓ Tudo do plano Essential</li>
              <li>✓ Área funcional</li>
              <li>✓ Avaliação física</li>
              <li>✓ 1 aula experimental personalizada</li>
            </ul>
          </div>

          <a href="#contato">ESCOLHER PLANO →</a>
        </article>


        <article className="plan-card">
          <span className="plan-number">03</span>

          <div>
            <h3>ELITE</h3>

            <p className="plan-description">
              Uma experiência completa de alta performance.
            </p>

            <div className="plan-price">
              <strong>R$ 249</strong>
              <span>/mês</span>
            </div>

            <ul>
              <li>✓ Tudo do plano Performance</li>
              <li>✓ Personal trainer</li>
              <li>✓ Acompanhamento individual</li>
              <li>✓ Avaliações periódicas</li>
            </ul>
          </div>

          <a href="#contato">ESCOLHER PLANO →</a>
        </article>

      </div>

    </section>
  );
}

export default Plans;