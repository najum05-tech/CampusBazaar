// src/pages/Admin/ViewBenefit.jsx
import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout.jsx";
import { Link, useParams } from "react-router-dom";
import { handleGetAdminContentItemFunction } from "/src/api.js";

export default function ViewBenefit() {
  const { id } = useParams();
  const [benefit, setBenefit] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    handleGetAdminContentItemFunction("Benefits", id)
      .then((response) => setBenefit(response.data))
      .catch((err) => setError(err.response?.data?.message || "Unable to load content"));
  }, [id]);

  if (error) {
    return (
      <AdminLayout activePage="benefits">
        <section className="admin-form-card">
          <p>{error}</p>
          <Link to="/admin/benefits" className="btn-admin btn-admin-outline">Back to List</Link>
        </section>
      </AdminLayout>
    );
  }

  if (!benefit) {
    return (
      <AdminLayout activePage="benefits">
        <section className="admin-form-card"><p>Loading benefit...</p></section>
      </AdminLayout>
    );
  }

  const d = benefit.data || benefit;

  return (
    <AdminLayout activePage="benefits">

      <section className="admin-form-card">

        <div className="section-top">
          <div>
            <h2>View Benefit</h2>
            <p>Read-only details of this benefit.</p>
          </div>

          <Link to={`/admin/benefits/${benefit._id}/edit`} className="btn-admin btn-admin-primary">
            <i className="bi bi-pencil"></i>
            Edit
          </Link>
        </div>

        <div className="admin-view-grid">

          <div className="admin-view-row">
            <span className="admin-view-label">Icon</span>
            <span className="admin-view-value">
              <i className={`bi ${d.iconClass} admin-table-icon`}></i>
            </span>
          </div>

          <div className="admin-view-row">
            <span className="admin-view-label">Title</span>
            <span className="admin-view-value">{d.title}</span>
          </div>

          <div className="admin-view-row">
            <span className="admin-view-label">Description</span>
            <span className="admin-view-value">{d.description}</span>
          </div>

        </div>

        <div className="form-actions">
          <Link to="/admin/benefits" className="btn-admin btn-admin-outline">
            Back to List
          </Link>
        </div>

      </section>

    </AdminLayout>
  );
}