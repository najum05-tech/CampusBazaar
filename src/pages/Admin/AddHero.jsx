// src/pages/admin/AddHero.jsx
import AdminLayout from "../../pages/Admin/AdminLayout.jsx";

export default function AddHero() {
  return (
    <AdminLayout activePage="hero">

      <section className="admin-form-card">

        <h2>Add Hero Content</h2>
        <p>Create new content for the homepage hero section.</p>

        <form className="admin-form">

          <div className="form-group">
            <label>Small Label</label>
            <input type="text" placeholder="e.g. BUY • SELL • EXCHANGE • CONNECT" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Title Line 1</label>
              <input type="text" placeholder="e.g. Your Campus." />
            </div>

            <div className="form-group">
              <label>Title Line 2 (highlighted)</label>
              <input type="text" placeholder="e.g. Your Marketplace." />
            </div>
          </div>

          <div className="form-group">

            <label>Description</label>
            <textarea placeholder="Short description shown under the heading..."></textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Primary Button Text</label>
              <input type="text" placeholder="e.g. Explore Marketplace" />
            </div>

            <div className="form-group">
              <label>Secondary Button Text</label>
              <input type="text" placeholder="e.g. Sell an Item" />
            </div>
          </div>

          <div className="form-group">
            <label>Status</label>
            <select>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="form-group">
            <label>Hero Image</label>
            <label className="upload-box">
              <i className="bi bi-cloud-arrow-up"></i>
              Click to upload hero image
              <input type="file" accept="image/*" hidden />
            </label>
          </div>


          <div className="form-actions">
            <a href="/admin/hero" className="btn-admin btn-admin-outline">Cancel</a>
            <button type="submit" className="btn-admin btn-admin-primary">
              <i className="bi bi-check-lg"></i>
              Add Hero
            </button>
          </div>

        </form>

      </section>

    </AdminLayout>
  );
}