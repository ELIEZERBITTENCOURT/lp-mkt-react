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
import { useEffect, useState } from "react";
import "../styles/Nav.css";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav
      className="nav"
      style={scrolled ? { boxShadow: "0 1px 0 rgba(255,255,255,0.05)" } : {}}
    >
      <div className="nav-logo">
        <span>▲</span> devcraft
      </div>
      <ul className="nav-links">
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#processo">Processo</a></li>
        <li><a href="#depoimentos">Clientes</a></li>
        <li><a href="#precos">Preços</a></li>
      </ul>
      <button className="nav-cta">FALAR AGORA</button>
    </nav>
  );
}

export default Nav;