import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="testimonials-header">
        <p className="section-label">QUEM TREINA, SENTE.</p>

        <h2>RESULTADOS<br />FALAM.</h2>
      </div>

      <div className="testimonials-grid">

        <article className="testimonial-card">
          <span>01</span>

          <p>
            “A estrutura realmente faz diferença.
            Depois que comecei a treinar aqui, minha
            rotina mudou completamente.”
          </p>

          <div>
            <strong>RAFAEL M.</strong>
            <small>ALUNO HÁ 2 ANOS</small>
          </div>
        </article>

        <article className="testimonial-card">
          <span>02</span>

          <p>
            “O ambiente é muito diferente de uma
            academia tradicional. Você entra e já
            sente vontade de treinar.”
          </p>

          <div>
            <strong>MARINA S.</strong>
            <small>ALUNA HÁ 1 ANO</small>
          </div>
        </article>

        <article className="testimonial-card">
          <span>03</span>

          <p>
            “O acompanhamento dos profissionais
            me ajudou a ter muito mais consistência
            e disciplina nos meus treinos.”
          </p>

          <div>
            <strong>GABRIEL R.</strong>
            <small>ALUNO HÁ 3 ANOS</small>
          </div>
        </article>

      </div>

    </section>
  );
}

export default Testimonials;