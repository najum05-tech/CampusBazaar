// src/pages/Admin/EditCategory.jsx
import AdminLayout from "./AdminLayout.jsx";

export default function EditCategory() {
  return (
    <AdminLayout activePage="categories">

      <section className="admin-form-card">

        <h2>Edit Category</h2>
        <p>Update this category's details.</p>

        <form className="admin-form">

          <div className="form-row">
            <div className="form-group">
              <label>Category Name</label>
              <input type="text" defaultValue="Books" />
            </div>

            <div className="form-group">
              <label>Bootstrap Icon Class</label>
              <input type="text" defaultValue="bi-book" />
            </div>
          </div>

          <div className="form-group">
            <label>Status</label>
            <select defaultValue="Active">
              <option>Active</option>
              <option>Inactive</option>
            </select>

          </div>

          <div className="form-actions">
            <a href="/admin/categories" className="btn-admin btn-admin-outline">Cancel</a>
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