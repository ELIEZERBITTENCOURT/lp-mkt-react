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
import '../styles/CTA.css';

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-inner reveal">
        <h2 className="cta-title">
          Pronto para elevar seu nível técnico?
        </h2>
        <p className="cta-sub">
          Vagas limitadas. Trabalhamos com poucos clientes de cada vez para garantir qualidade e atenção máxima.
        </p>
        <button className="btn-primary" style={{ fontSize: "1rem", padding: "1.1rem 2.8rem" }}>
          Agendar conversa gratuita
        </button>
      </div>
    </section>
  );
}

export default CTA;