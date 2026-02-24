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
import { useRef } from 'react';
import '../styles/ServicesCard.css';

export function ServiceCard({ icon: Icon, name, desc, tag }) {
  const ref = useRef(null);
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    ref.current.style.setProperty("--mx", x + "%");
    ref.current.style.setProperty("--my", y + "%");
  };
  return (
    <div className="service-card" ref={ref} onMouseMove={handleMouseMove}>
      <div className="service-icon"><Icon size={24} strokeWidth={1.5}/></div>
      <div className="service-name">{name}</div>
      <p className="service-desc">{desc}</p>
      <span className="service-tag">{tag}</span>
    </div>
  );
}
