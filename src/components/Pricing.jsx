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
import { plans } from "../data/mockdata";
import '../styles/Pricing.css';

function Pricing() {
  return (
    <section className="section" id="precos">
      <div className="reveal">
        <div className="section-label">// INVESTIMENTO</div>
        <h2 className="section-title">Preços transparentes, sem surpresas</h2>
        <p className="section-sub">Escolha o formato que mais faz sentido para o momento do seu time.</p>
      </div>
      <div className="pricing-grid reveal">
        {plans.map((plan, i) => (
          <div key={i} className={`plan${plan.featured ? " featured" : ""}`}>
            {plan.featured && <div className="plan-badge">MAIS POPULAR</div>}
            <div className="plan-name">{plan.name}</div>
            <p className="plan-desc">{plan.desc}</p>
            <div className="plan-price">
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "1rem", color: "var(--muted)" }}>R$</span>
              <span className="price-amount">{plan.price}</span>
              <span className="price-period">{plan.period}</span>
            </div>
            <ul className="plan-features">
              {plan.features.map((f, j) => <li key={j}>{f}</li>)}
            </ul>
            <button
              className={`btn-plan ${plan.featured ? "btn-plan-filled" : "btn-plan-outline"}`}
            >
              {plan.featured ? "Começar agora" : "Solicitar proposta"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;