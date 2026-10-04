// import Dashboard from src/pages/dashboard/DashboardLayout.jsx
import "../../styles/dashboard.css";

export default function DashboardLayout({ activePage, children }) {
  const navItems = [
    { key: "dashboard", href: "/dashboard", icon: "bi-grid", label: "Dashboard" },
    { key: "listings", href: "/dashboard/listings", icon: "bi-bag", label: "My Listings" },
    { key: "add-product", href: "/dashboard/add-product", icon: "bi-plus-square", label: "Add Product" },
    { key: "messages", href: "#", icon: "bi-chat-square-text", label: "Messages", badge: 3 },
    { key: "favorites", href: "#", icon: "bi-heart", label: "Favorites" },
    { key: "orders", href: "#", icon: "bi-bag-check", label: "Orders" },
    { key: "settings", href: "#", icon: "bi-gear", label: "Settings" },
    
  ];

  return (
    <div className="dashboard-page">

      <aside className="dashboard-sidebar">

        <div>
          <a className="navbar-brand dashboard-logo" href="#">
            <div className="logo-icon">
              <i className="bi bi-mortarboard-fill"></i>
            </div>
            <span>
              Campus<span>Bazaar</span>
            </span>
          </a>

          <nav className="dashboard-nav">
            {navItems.map((item) => (

              <a
                key={item.key}
                href={item.href}
                className={`dashboard-nav-item${activePage === item.key ? " active" : ""}`}
              >
                <i className={`bi ${item.icon}`}></i>
                <span>{item.label}</span>
                {item.badge && <span className="message-count">{item.badge}</span>}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <div className="community-note">
            <div>Campus</div>
            <div>Community</div>
            <div>Marketplace</div>
          </div>

          <a href="/" className="dashboard-nav-item logout-item">
            <i className="bi bi-box-arrow-left"></i>
            <span>Log out</span>
          </a>
        </div>

      </aside>

      <main className="dashboard-main">

        <header className="dashboard-header">
          <div className="dashboard-search">

            <i className="bi bi-search"></i>
            <input type="text" placeholder="Search for products, categories..." />
          </div>

          <div className="dashboard-header-right">
            <button className="notification-button">
              <i className="bi bi-bell"></i>
              <span></span>
            </button>

            <div className="dashboard-user">
              <div className="user-avatar">MN</div>
              <div className="user-name">Muhammad Najmuddin</div>
              <i className="bi bi-chevron-down"></i>
            </div>
          </div>
        </header>

        <div className="dashboard-content">
          {children}
        </div>

      </main>

    </div>
  );
}