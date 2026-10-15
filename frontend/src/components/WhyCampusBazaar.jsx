// src/components/WhyCampusBazaar.jsx
const features = [
  { icon: "bi-mortarboard", title: "Student Only", desc: "Verified accounts from your campus community." },
  { icon: "bi-tag", title: "Affordable", desc: "Better prices than retail, no middlemen." },
  { icon: "bi-geo-alt", title: "Local", desc: "Meet nearby, no shipping hassle." },
  { icon: "bi-lightning", title: "Easy", desc: "List an item in under a minute." },
];

export default function WhyCampusBazaar() {
  return (
    <section className="section why-section">
      <div className="container">
        <div className="section-head text-center mx-auto">
          <div className="section-label">Benefits</div>
          <h2 className="section-title">Why CampusBazaar</h2>
        </div>

        <div className="row g-4">
          {features.map((f) => (
            <div className="col-6 col-md-3" key={f.title}>
              <div className="feature-card">
                <i className={`bi ${f.icon}`}></i>
                <h6>{f.title}</h6>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}