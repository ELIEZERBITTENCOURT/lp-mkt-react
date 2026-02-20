import { items } from '../data/mockdata';

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