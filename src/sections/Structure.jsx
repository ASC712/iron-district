import "./Structure.css";

function Structure() {
  return (
    <section className="structure" id="estrutura">

      <div className="structure-header">
        <p className="section-label">NOSSA ESTRUTURA</p>

        <h2>FEITO PARA<br />PERFORMANCE.</h2>

        <p>
          Um ambiente pensado para quem busca
          qualidade, conforto e evolução em cada treino.
        </p>
      </div>

      <div className="structure-grid">

        <div className="structure-item structure-large">
          <div className="structure-overlay">
            <span>01</span>
            <h3>MUSCULAÇÃO</h3>
          </div>
        </div>

        <div className="structure-item structure-cardio">
          <div className="structure-overlay">
            <span>02</span>
            <h3>CARDIO</h3>
          </div>
        </div>

        <div className="structure-item structure-functional">
          <div className="structure-overlay">
            <span>03</span>
            <h3>PERFORMANCE</h3>
          </div>
        </div>

        <div className="structure-item structure-environment">
          <div className="structure-overlay">
            <span>04</span>
            <h3>AMBIENTE</h3>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Structure;