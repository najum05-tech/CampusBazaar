// src/pages/admin/AdminDashboard.jsx
import AdminLayout from "../../pages/Admin/AdminLayout.jsx";

export default function AdminDashboard() {
  const sections = [
    { icon: "bi-layout-text-window", label: "Hero Section", count: "1 active", href: "/admin/hero" },
    { icon: "bi-tags", label: "Categories", count: "4 items", href: "/admin/categories" },
    { icon: "bi-diagram-3", label: "How It Works", count: "3 steps", href: "/admin/how-it-works" },
    { icon: "bi-stars", label: "Why CampusBazaar", count: "4 benefits", href: "/admin/benefits" },
  ];

  return (
    <AdminLayout activePage="overview">

      <div className="admin-overview-grid">
        {sections.map((s) => (
          <a href={s.href} className="admin-overview-card" key={s.label}>
            <div className="admin-overview-icon">
              <i className={`bi ${s.icon}`}></i>
            </div>
            <div>
              <h3>{s.label}</h3>
              <span>{s.count}</span>
            </div>
            <i className="bi bi-arrow-right admin-overview-arrow"></i>
          </a>
        ))}
      </div>

    </AdminLayout>
  );
}