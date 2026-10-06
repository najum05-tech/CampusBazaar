// src/components/admin/AdminLayout.jsx
import { Link } from "react-router-dom";
import "../../styles/admin.css";

export default function AdminLayout({ activePage, children }) {
  const navItems = [
    { key: "overview", to: "/admin", icon: "bi-grid", label: "Overview" },
    { key: "users", to: "/admin/users", icon: "bi-people", label: "Manage Users" },
    { key: "hero", to: "/admin/hero", icon: "bi-layout-text-window", label: "Hero Section" },
    { key: "categories", to: "/admin/categories", icon: "bi-tags", label: "Categories" },
    { key: "how-it-works", to: "/admin/how-it-works", icon: "bi-diagram-3", label: "How It Works" },
    { key: "benefits", to: "/admin/benefits", icon: "bi-stars", label: "Why CampusBazaar" },
    { key: "about", to: "/admin/about", icon: "bi-info-circle", label: "About" },
    { key: "settings", to: "/admin/settings", icon: "bi-gear", label: "Settings" },
  ];

  return (
    <div className="admin-page">

      <aside className="admin-sidebar">

        <div>
          <Link className="navbar-brand admin-logo" to="#">
            <div className="logo-icon">
              <i className="bi bi-mortarboard-fill"></i>
            </div>
            <span>
              Campus<span>Bazaar</span>
            </span>
          </Link>

          <div className="admin-role-tag">
            <i className="bi bi-shield-lock"></i>
            Admin Panel
          </div>


          <nav className="admin-nav">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.to}
                className={`admin-nav-item${activePage === item.key ? " active" : ""}`}
              >
                <i className={`bi ${item.icon}`}></i>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <Link to="/" className="admin-nav-item logout-item">
          <i className="bi bi-box-arrow-left"></i>
          <span>Log out</span>
        </Link>

      </aside>

      <main className="admin-main">

        <header className="admin-header">
          <div>
            <h1>Site Content Management</h1>
            <p>Manage homepage content shown to all students.</p>
          </div>

          <div className="admin-user">
            <div className="user-avatar">AD</div>

            <div className="user-name">Admin</div>
          </div>
        </header>

        <div className="admin-content">
          {children}
        </div>

      </main>

    </div>
  );
}