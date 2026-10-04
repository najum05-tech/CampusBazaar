// src/pages/Admin/ViewBenefit.jsx
import AdminLayout from "./AdminLayout.jsx";

export default function ViewBenefit() {
  return (
    <AdminLayout activePage="benefits">

      <section className="admin-form-card">

        <div className="section-top">
          <div>
            <h2>View Benefit</h2>
            <p>Read-only details of this benefit.</p>
          </div>

          <a href="/admin/benefits/edit/1" className="btn-admin btn-admin-primary">
            <i className="bi bi-pencil"></i>
            Edit
          </a>
        </div>

        <div className="admin-view-grid">

          <div className="admin-view-row">
            <span className="admin-view-label">Icon</span>
            <span className="admin-view-value">
              <i className="bi bi-mortarboard admin-table-icon"></i>
            </span>
          </div>

          <div className="admin-view-row">
            <span className="admin-view-label">Title</span>
            <span className="admin-view-value">Student Only</span>
          </div>

          <div className="admin-view-row">
            <span className="admin-view-label">Description</span>
            <span className="admin-view-value">
              Verified accounts from your campus community.
            </span>
          </div>

        </div>

        <div className="form-actions">
          <a href="/admin/benefits" className="btn-admin btn-admin-outline">Back to List</a>
        </div>

      </section>

    </AdminLayout>
  );
}