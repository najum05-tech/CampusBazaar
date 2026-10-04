// src/pages/Admin/EditHowItWorks.jsx
import AdminLayout from "./AdminLayout.jsx";

export default function EditHowItWorks() {
  return (
    <AdminLayout activePage="how-it-works">

      <section className="admin-form-card">

        <h2>Edit Step</h2>
        <p>Update this step's details.</p>

        <form className="admin-form">

          <div className="form-row">
            <div className="form-group">
              <label>Step Title</label>
              <input type="text" defaultValue="Find" />
            </div>

            <div className="form-group">
              <label>Bootstrap Icon Class</label>
              <input type="text" defaultValue="bi-search" />
            </div>
          </div>

          <div className="form-group">
            <label>Step Description</label>
            <textarea defaultValue="Search or browse listings from students near you."></textarea>
          </div>

          <div className="form-actions">
            <a href="/admin/how-it-works" className="btn-admin btn-admin-outline">Cancel</a>
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