// src/pages/admin/ViewHero.jsx
import AdminLayout from "../../pages/Admin/AdminLayout.jsx";

export default function ViewHero() {
  return (
    <AdminLayout activePage="hero">

      <section className="admin-form-card">

        <div className="section-top">
          <div>
            <h2>View Hero Content</h2>
            <p>Read-only preview of this hero section.</p>
          </div>

          <a href="/admin/hero/edit/1" className="btn-admin btn-admin-primary">
            <i className="bi bi-pencil"></i>
            Edit
          </a>
        </div>

        <div className="admin-view-grid">

          <div className="admin-view-row">
            <span className="admin-view-label">Small Label</span>
            <span className="admin-view-value">BUY • SELL • EXCHANGE • CONNECT</span>
          </div>

          <div className="admin-view-row">
            <span className="admin-view-label">Title</span>
            <span className="admin-view-value">Your Campus. Your Marketplace.</span>
          </div>

          <div className="admin-view-row">
            <span className="admin-view-label">Description</span>
            <span className="admin-view-value">
              Buy, sell, or exchange things with students around you — easily, safely, and all in one place.
            </span>
          </div>

          <div className="admin-view-row">
            <span className="admin-view-label">Primary Button</span>
            <span className="admin-view-value">Explore Marketplace</span>
          </div>

          <div className="admin-view-row">
            <span className="admin-view-label">Secondary Button</span>
            <span className="admin-view-value">Sell an Item</span>
          </div>

          <div className="admin-view-row">
            <span className="admin-view-label">Status</span>
            <span className="status-badge active">Active</span>
          </div>

        </div>

        <div className="form-actions">
          <a href="/admin/hero" className="btn-admin btn-admin-outline">Back to List</a>
        </div>

      </section>

    </AdminLayout>
  );
}