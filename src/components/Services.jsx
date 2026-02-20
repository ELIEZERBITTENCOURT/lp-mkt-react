import { services } from '../data/mockdata';
import { ServiceCard } from './ServiceCard';

function Services() {
  return (
    <section className="section" id="servicos">
      <div className="reveal">
        <div className="section-label">// SERVIÇOS</div>
        <h2 className="section-title">O que entregamos com excelência</h2>
        <p className="section-sub">
          Cada engajamento é único. Trabalhamos onde seu time mais precisa de alavancagem técnica.
        </p>
      </div>
      <div className="services-grid reveal">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
}

export default Services;