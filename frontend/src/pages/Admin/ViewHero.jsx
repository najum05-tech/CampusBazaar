// src/pages/admin/ViewHero.jsx
import { useEffect, useState } from "react";
import AdminLayout from "../../pages/Admin/AdminLayout.jsx";
import { Link, useParams } from "react-router-dom";
import { handleGetAdminContentItemFunction } from "/src/api.js";

export default function ViewHero() {
  const { id } = useParams();
  const [hero, setHero] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    handleGetAdminContentItemFunction("Hero", id)
      .then((response) => setHero(response.data))
      .catch((err) => setError(err.response?.data?.message || "Unable to load content"));
  }, [id]);

  if (error) {
    return (
      <AdminLayout activePage="hero">
        <section className="admin-form-card">
          <p>{error}</p>
          <Link to="/admin/hero" className="btn-admin btn-admin-outline">Back to List</Link>
        </section>
      </AdminLayout>
    );
  }

  if (!hero) {
    return (
      <AdminLayout activePage="hero">
        <section className="admin-form-card"><p>Loading hero content...</p></section>
      </AdminLayout>
    );
  }

  const d = hero.data || hero;

  return (
    <AdminLayout activePage="hero">

      <section className="admin-form-card">

        <div className="section-top">
          <div>
            <h2>View Hero Content</h2>
            <p>Read-only preview of this hero section.</p>
          </div>

          <Link to={`/admin/hero/${hero._id}/edit`} className="btn-admin btn-admin-primary">
            <i className="bi bi-pencil"></i>
            Edit
          </Link>
        </div>

        <div className="admin-view-grid">

          <div className="admin-view-row">
            <span className="admin-view-label">Small Label</span>
            <span className="admin-view-value">{d.smallLabel}</span>
          </div>

          <div className="admin-view-row">
            <span className="admin-view-label">Title</span>
            <span className="admin-view-value">{d.titleLine1} {d.titleLine2}</span>
          </div>

          <div className="admin-view-row">
            <span className="admin-view-label">Description</span>
            <span className="admin-view-value">{d.description}</span>
          </div>

          <div className="admin-view-row">
            <span className="admin-view-label">Primary Button</span>
            <span className="admin-view-value">{d.primaryButtonText}</span>
          </div>

          <div className="admin-view-row">
            <span className="admin-view-label">Secondary Button</span>
            <span className="admin-view-value">{d.secondaryButtonText}</span>
          </div>

          <div className="admin-view-row">
            <span className="admin-view-label">Status</span>
            <span className={`status-badge ${d.status === "Active" ? "active" : "suspended"}`}>{d.status}</span>
          </div>

        </div>

        <div className="form-actions">
          <Link to="/admin/hero" className="btn-admin btn-admin-outline">
            Back to List
          </Link>
        </div>

      </section>

    </AdminLayout>
  );
}