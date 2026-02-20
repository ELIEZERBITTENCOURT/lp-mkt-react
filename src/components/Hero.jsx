import { Circle, ChevronsRight } from "lucide-react"; 

function Hero() {
  return (
    <section className="hero">
      <div className="hero-badge"><Circle size={10} strokeWidth={1.5}/> CONSULTORIA DISPONÍVEL — 2 VAGAS ABERTAS</div>
      <h1 className="hero-title">
        Código que<br />
        <em>realmente</em><br />
        funciona.
      </h1>
      <p className="hero-sub">
        Consultoria técnica de alto nível para times que levam engenharia de software a sério. Menos hype, mais resultado.
      </p>
      <div className="hero-actions">
        <button className="btn-primary">Começar agora</button>
        <button className="btn-ghost">
          Ver casos de sucesso <span><ChevronsRight size={20} color="#4fffb0" strokeWidth={1.5}/></span>
        </button>
      </div>
      <div className="hero-metrics">
        <div className="metric">
          <div className="metric-num">120+</div>
          <div className="metric-label">PROJETOS ENTREGUES</div>
        </div>
        <div className="metric">
          <div className="metric-num">8 anos</div>
          <div className="metric-label">DE EXPERIÊNCIA</div>
        </div>
        <div className="metric">
          <div className="metric-num">98%</div>
          <div className="metric-label">SATISFAÇÃO</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;