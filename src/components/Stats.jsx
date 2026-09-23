// src/components/Stats.jsx
const stats = [
  { value: "500+", label: "Active Listings" },
  { value: "1200+", label: "Students Joined" },
  { value: "350+", label: "Successful Exchanges" },
];

export default function Stats() {
  return (
    <section className="section stats-section">
      <div className="container">
        <div className="row text-center g-4">
          {stats.map((s) => (
            <div className="col-md-4" key={s.label}>
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}