// src/pages/Admin/EditBenefit.jsx
import {Link} from "react-router-dom";
import AdminLayout from "./AdminLayout.jsx";

export default function EditBenefit() {
  return (
    <AdminLayout activePage="benefits">

      <section className="admin-form-card">

        <h2>Edit Benefit</h2>
        <p>Update this benefit's details.</p>

        <form className="admin-form">

          <div className="form-row">
            <div className="form-group">
              <label>Title</label>
              <input type="text" defaultValue="Student Only" />
            </div>

            <div className="form-group">
              <label>Bootstrap Icon Class</label>
              <input type="text" defaultValue="bi-mortarboard" />
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea defaultValue="Verified accounts from your campus community."></textarea>
          </div>

          <div className="form-actions">

            <Link to="/admin/benefits" className="btn-admin btn-admin-outline">
              Cancel
            </Link>
            <button type="submit" className="btn-admin btn-admin-primary">
              <i className="bi bi-check-lg"></i>
              Save Changes
            </button>
          </div>

        </form>

      </section>

    </AdminLayout>
  );
}