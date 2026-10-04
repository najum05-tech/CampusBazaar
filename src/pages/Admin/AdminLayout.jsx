// src/components/admin/AdminLayout.jsx
import "../../styles/admin.css";

export default function AdminLayout({ activePage, children }) {
  const navItems = [
    { key: "overview", href: "/admin", icon: "bi-grid", label: "Overview" },
    { key: "users", href: "/admin/users", icon: "bi-people", label: "Manage Users" },
    { key: "hero", href: "/admin/hero", icon: "bi-layout-text-window", label: "Hero Section" },
    { key: "categories", href: "/admin/categories", icon: "bi-tags", label: "Categories" },
    { key: "how-it-works", href: "/admin/how-it-works", icon: "bi-diagram-3", label: "How It Works" },
    { key: "benefits", href: "/admin/benefits", icon: "bi-stars", label: "Why CampusBazaar" },
    { key: "about", href: "/admin/about", icon: "bi-info-circle", label: "About" },
    { key: "settings", href: "/admin/settings", icon: "bi-gear", label: "Settings" },
  ];

  return (
    <div className="admin-page">

      <aside className="admin-sidebar">

        <div>
          <a className="navbar-brand admin-logo" href="#">
            <div className="logo-icon">
              <i className="bi bi-mortarboard-fill"></i>
            </div>
            <span>
              Campus<span>Bazaar</span>
            </span>
          </a>

          <div className="admin-role-tag">
            <i className="bi bi-shield-lock"></i>
            Admin Panel
          </div>


          <nav className="admin-nav">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`admin-nav-item${activePage === item.key ? " active" : ""}`}
              >
                <i className={`bi ${item.icon}`}></i>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>

        <a href="/" className="admin-nav-item logout-item">
          <i className="bi bi-box-arrow-left"></i>
          <span>Log out</span>
        </a>

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