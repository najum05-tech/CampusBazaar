// src/components/HowItWorks.jsx
import "../styles/navbar.css";
const steps = [
  { icon: "bi-search", title: "Find", desc: "Search or browse listings from students near you." },
  { icon: "bi-chat-dots", title: "Connect", desc: "Message the seller and agree on details." },
  { icon: "bi-arrow-left-right", title: "Exchange", desc: "Meet on campus and complete the exchange." },
];

export default function HowItWorks() {
  return (
    <section className="section how-it-works">
      <div className="container">
        <div className="section-head text-center mx-auto">
          <div className="section-label">Process</div>
          <h2 className="section-title">How It Works</h2>
        </div>

        <div className="row g-4">
          {steps.map((s, i) => (
            <div className="col-md-4" key={s.title}>
              <div className="step-card">
                <div className="step-number">0{i + 1}</div>
                <i className={`bi ${s.icon}`}></i>
                <h5>{s.title}</h5>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}