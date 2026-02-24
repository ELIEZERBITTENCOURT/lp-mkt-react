/*
====================================================
© 2026 Eliezer Bittencourt

Projeto desenvolvido em React.js
Todos os direitos reservados.

Este código fonte, estilos e layout são propriedade
intelectual do autor. A reprodução, modificação ou
distribuição sem autorização é proibida.

License: MIT
====================================================
*/
import { process } from '../data/mockdata';
import '../styles/Process.css';

function Process() {
  return (
    <section className="process-section" id="processo">
      <div className="process-inner">
        <div className="reveal">
          <div className="section-label">// COMO TRABALHAMOS</div>
          <h2 className="section-title">Um processo claro do início ao fim</h2>
        </div>
        <div className="process-steps">
          {process.map((step, i) => (
            <div
              key={i}
              className="step reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="step-num">{step.num}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;