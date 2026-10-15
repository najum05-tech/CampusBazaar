// src/pages/Admin/AddHowItWorks.jsx
import {Link} from "react-router-dom";
import AdminLayout from "./AdminLayout.jsx";

export default function AddHowItWorks() {
  return (
    <AdminLayout activePage="how-it-works">

      <section className="admin-form-card">

        <h2>Add New Step</h2>
        <p>Create a new step for the "How It Works" section.</p>

        <form className="admin-form">

          <div className="form-row">
            <div className="form-group">
              <label>Step Title</label>
              <input type="text" placeholder="e.g. Deliver" />
            </div>

            <div className="form-group">
              <label>Bootstrap Icon Class</label>
              <input type="text" placeholder="e.g. bi-truck" />
            </div>
          </div>

          <div className="form-group">
            <label>Step Description</label>
            <textarea placeholder="Short description of this step..."></textarea>
          </div>

          <div className="form-actions">

            <Link to="/admin/how-it-works" className="btn-admin btn-admin-outline">
              Cancel
            </Link>
            <button type="submit" className="btn-admin btn-admin-primary">
              <i className="bi bi-check-lg"></i>
              Add Step
            </button>
          </div>

        </form>

      </section>

    </AdminLayout>
  );
}