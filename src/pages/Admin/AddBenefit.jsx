// src/pages/Admin/AddBenefit.jsx
import {Link} from "react-router-dom";
import AdminLayout from "./AdminLayout.jsx";

export default function AddBenefit() {
  return (
    <AdminLayout activePage="benefits">

      <section className="admin-form-card">

        <h2>Add New Benefit</h2>
        <p>Create a new item for the "Why CampusBazaar" section.</p>

        <form className="admin-form">

          <div className="form-row">
            <div className="form-group">
              <label>Title</label>
              <input type="text" placeholder="e.g. Secure" />
            </div>

            <div className="form-group">
              <label>Bootstrap Icon Class</label>
              <input type="text" placeholder="e.g. bi-shield-check" />
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea placeholder="Short description..."></textarea>
          </div>

          <div className="form-actions">

            <Link to="/admin/benefits" className="btn-admin btn-admin-outline">
              Cancel
            </Link>
            <button type="submit" className="btn-admin btn-admin-primary">
              <i className="bi bi-check-lg"></i>
              Add Benefit
            </button>
          </div>

        </form>

      </section>

    </AdminLayout>
  );
}