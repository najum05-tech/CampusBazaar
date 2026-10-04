// src/pages/admin/ManageHero.jsx
import AdminLayout from "../../pages/Admin/AdminLayout.jsx";

const heroSlides = [
  {
    id: 1,
    label: "BUY • SELL • EXCHANGE • CONNECT",
    titleLine1: "Your Campus.",
    titleLine2: "Your Marketplace.",
    description: "Buy, sell, or exchange things with students around you — easily, safely, and all in one place.",
    primaryButtonText: "Explore Marketplace",
    secondaryButtonText: "Sell an Item",
    status: "Active",
  },
];

export default function ManageHero() {
  return (
    <AdminLayout activePage="hero">

      <section className="admin-list-card">

        <div className="section-top">
          <div>
            <h2>Hero Section</h2>
            <p>Content shown at the top of the homepage.</p>
          </div>

          <a href="/admin/hero/add" className="btn-admin btn-admin-primary">
            <i className="bi bi-plus-lg"></i>
            Add New Hero
          </a>

        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Label</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {heroSlides.map((hero) => (
              <tr key={hero.id}>
                <td>{hero.label}</td>
                <td>{hero.titleLine1} {hero.titleLine2}</td>
                <td>{hero.description.slice(0, 50)}...</td>
                <td>
                  <span className="status-badge active">{hero.status}</span>
                </td>
                <td>
                  <a href={`/admin/hero/view/${hero.id}`} className="icon-btn">
                    <i className="bi bi-eye"></i>
                  </a>
                  <a href={`/admin/hero/edit/${hero.id}`} className="icon-btn">
                    <i className="bi bi-pencil"></i>
                  </a>
                  <button className="icon-btn danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>

              </tr>
            ))}

            {heroSlides.length === 0 && (
              <tr>
                <td colSpan="5" className="admin-table-empty">No hero content yet.</td>
              </tr>
            )}
          </tbody>
        </table>

      </section>

    </AdminLayout>
  );
}