// src/pages/Admin/ViewCategory.jsx
import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout.jsx";
import { Link, useParams } from "react-router-dom";
import { handleGetAdminContentItemFunction } from "/src/api.js";

export default function ViewCategory() {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    handleGetAdminContentItemFunction("Categories", id)
      .then((response) => setCategory(response.data))
      .catch((err) => setError(err.response?.data?.message || "Unable to load content"));
  }, [id]);

  if (error) {
    return (
      <AdminLayout activePage="categories">
        <section className="admin-form-card">
          <p>{error}</p>
          <Link to="/admin/categories" className="btn-admin btn-admin-outline">Back to List</Link>
        </section>
      </AdminLayout>
    );
  }

  if (!category) {
    return (
      <AdminLayout activePage="categories">
        <section className="admin-form-card"><p>Loading category...</p></section>
      </AdminLayout>
    );
  }

  const d = category.data || category;

  return (
    <AdminLayout activePage="categories">

      <section className="admin-form-card">

        <div className="section-top">
          <div>
            <h2>View Category</h2>
            <p>Read-only details of this category.</p>
          </div>

          <Link to={`/admin/categories/${category._id}/edit`} className="btn-admin btn-admin-primary">
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
            <span className="admin-view-label">Name</span>
            <span className="admin-view-value">{d.categoryName}</span>
          </div>

          <div className="admin-view-row">
            <span className="admin-view-label">Icon Class</span>
            <span className="admin-view-value"><code>{d.iconClass}</code></span>
          </div>

          <div className="admin-view-row">
            <span className="admin-view-label">Status</span>
            <span className={`status-badge ${d.status === "Active" ? "active" : "suspended"}`}>{d.status}</span>
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