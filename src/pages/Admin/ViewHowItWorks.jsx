// src/pages/Admin/ViewHowItWorks.jsx
import AdminLayout from "./AdminLayout.jsx";
import {Link} from "react-router-dom";

export default function ViewHowItWorks() {
  return (
    <AdminLayout activePage="how-it-works">

      <section className="admin-form-card">

        <div className="section-top">
          <div>
            <h2>View Step</h2>
            <p>Read-only details of this step.</p>
          </div>

          <Link to="/admin/how-it-works/edit/1" className="btn-admin btn-admin-primary">
            <i className="bi bi-pencil"></i>
            Edit
          </Link>
        </div>

        <div className="admin-view-grid">

          <div className="admin-view-row">
            <span className="admin-view-label">Icon</span>
            <span className="admin-view-value">
              <i className="bi bi-search admin-table-icon"></i>
            </span>
          </div>

          <div className="admin-view-row">
            <span className="admin-view-label">Title</span>

            <span className="admin-view-value">Find</span>
          </div>

          <div className="admin-view-row">
            <span className="admin-view-label">Description</span>
            <span className="admin-view-value">
              Search or browse listings from students near you.
            </span>
          </div>

        </div>

        <div className="form-actions">
          <Link to="/admin/how-it-works" className="btn-admin btn-admin-outline">
            Back to List
          </Link>
        </div>

      </section>

    </AdminLayout>
  );
}