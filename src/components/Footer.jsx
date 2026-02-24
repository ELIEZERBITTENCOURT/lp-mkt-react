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
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copy">
        © 2026 devcraft. Design from Eliezer Bittencourt. Todos os direitos reservados.
      </div>
      <nav className="footer-links">
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
        <a href="#">Política de Privacidade</a>
        <a href="#">Contato</a>
      </nav>
    </footer>
  );
}

export default Footer;