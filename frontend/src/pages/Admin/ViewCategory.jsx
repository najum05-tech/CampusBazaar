// src/pages/Admin/ViewCategory.jsx
import AdminLayout from "./AdminLayout.jsx";
import {Link} from "react-router-dom";

export default function ViewCategory() {
  return (
    <AdminLayout activePage="categories">

      <section className="admin-form-card">

        <div className="section-top">
          <div>
            <h2>View Category</h2>
            <p>Read-only details of this category.</p>
          </div>

          <Link to="/admin/categories/edit/1" className="btn-admin btn-admin-primary">
            <i className="bi bi-pencil"></i>
            Edit
          </Link>
        </div>

        <div className="admin-view-grid">

          <div className="admin-view-row">
            <span className="admin-view-label">Icon</span>
            <span className="admin-view-value">
              <i className="bi bi-book admin-table-icon"></i>
            </span>
          </div>

          <div className="admin-view-row">
            <span className="admin-view-label">Name</span>

            <span className="admin-view-value">Books</span>
          </div>

          <div className="admin-view-row">
            <span className="admin-view-label">Icon Class</span>
            <span className="admin-view-value"><code>bi-book</code></span>
          </div>

          <div className="admin-view-row">
            <span className="admin-view-label">Status</span>
            <span className="status-badge active">Active</span>
          </div>

        </div>

        <div className="form-actions">
          <Link to="/admin/categories" className="btn-admin btn-admin-outline">
            Back to List
          </Link>
        </div>

      </section>

    </AdminLayout>
  );
}