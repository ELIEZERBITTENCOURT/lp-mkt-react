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
import { items } from '../data/mockdata';
import "../styles/Marquee.css";

function Marquee() {
    return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.map((item, i) => (
          <div key={i} className="marquee-item">
            <span className="marquee-dot">●</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Marquee;