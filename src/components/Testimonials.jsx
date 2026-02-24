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
import { testimonials } from "../data/mockdata";
import '../styles/Testimonials.css';

function Testimonials() {
  return (
    <section className="section" id="depoimentos">
      <div className="reveal">
        <div className="section-label">// CLIENTES</div>
        <h2 className="section-title">Quem confiou, voltou</h2>
      </div>
      <div className="testimonials-grid reveal">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial">
            <p className="testimonial-quote">"{t.quote}"</p>
            <div className="testimonial-author">
              <div className="author-avatar">{t.initials}</div>
              <div>
                <div className="author-name">{t.name}</div>
                <div className="author-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;