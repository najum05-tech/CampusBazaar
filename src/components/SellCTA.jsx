// src/components/SellCTA.jsx
export default function SellCTA() {
  return (
    <section className="section sell-cta">
      <div className="container">
        <div className="sell-cta-box text-center">
          <h2>Got something to sell?</h2>
          <p>List your item in minutes and reach students on your campus.</p>
          <a href="/sell" className="btn-primary-custom">
            <i className="bi bi-plus-lg"></i> Sell an Item
          </a>
        </div>
      </div>
    </section>
  );
}