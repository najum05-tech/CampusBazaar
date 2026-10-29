// src/pages/Admin/ViewHowItWorks.jsx
import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout.jsx";
import { Link, useParams } from "react-router-dom";
import { handleGetAdminContentItemFunction } from "/src/api.js";

export default function ViewHowItWorks() {
  const { id } = useParams();
  const [step, setStep] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    handleGetAdminContentItemFunction("HowItWorks", id)
      .then((response) => setStep(response.data))
      .catch((err) => setError(err.response?.data?.message || "Unable to load content"));
  }, [id]);

  if (error) {
    return (
      <AdminLayout activePage="how-it-works">
        <section className="admin-form-card">
          <p>{error}</p>
          <Link to="/admin/how-it-works" className="btn-admin btn-admin-outline">Back to List</Link>
        </section>
      </AdminLayout>
    );
  }

  if (!step) {
    return (
      <AdminLayout activePage="how-it-works">
        <section className="admin-form-card"><p>Loading step...</p></section>
      </AdminLayout>
    );
  }

  const d = step.data || step;

  return (
    <AdminLayout activePage="how-it-works">

      <section className="admin-form-card">

        <div className="section-top">
          <div>
            <h2>View Step</h2>
            <p>Read-only details of this step.</p>
          </div>

          <Link to={`/admin/how-it-works/${step._id}/edit`} className="btn-admin btn-admin-primary">
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
            <span className="admin-view-value">{d.stepTitle}</span>
          </div>

          <div className="admin-view-row">
            <span className="admin-view-label">Description</span>
            <span className="admin-view-value">{d.stepDescription}</span>
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