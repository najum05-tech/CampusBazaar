// src/pages/Admin/AddCategory.jsx
import AdminLayout from "./AdminLayout.jsx";

export default function AddCategory() {
  return (
    <AdminLayout activePage="categories">

      <section className="admin-form-card">

        <h2>Add New Category</h2>
        <p>Create a new category for listings and homepage.</p>

        <form className="admin-form">

          <div className="form-row">
            <div className="form-group">
              <label>Category Name</label>
              <input type="text" placeholder="e.g. Sportswear" />
            </div>

            <div className="form-group">
              <label>Bootstrap Icon Class</label>
              <input type="text" placeholder="e.g. bi-bicycle" />
            </div>
          </div>

          <div className="form-group">
            <label>Status</label>
            <select>
              <option>Active</option>
              <option>Inactive</option>
            </select>

          </div>

          <div className="form-actions">
            <a href="/admin/categories" className="btn-admin btn-admin-outline">Cancel</a>
            <button type="submit" className="btn-admin btn-admin-primary">
              <i className="bi bi-check-lg"></i>
              Add Category
            </button>
          </div>

        </form>

      </section>

    </AdminLayout>
  );
}