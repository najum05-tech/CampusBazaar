// src/pages/admin/EditHero.jsx
import {Link} from "react-router-dom";
import AdminLayout from "../../pages/Admin/AdminLayout.jsx";

export default function EditHero() {
  return (
    <AdminLayout activePage="hero">

      <section className="admin-form-card">

        <h2>Edit Hero Content</h2>
        <p>Update the existing homepage hero section.</p>

        <form className="admin-form">

          <div className="form-group">
            <label>Small Label</label>
            <input type="text" defaultValue="BUY • SELL • EXCHANGE • CONNECT" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Title Line 1</label>
              <input type="text" defaultValue="Your Campus." />
            </div>

            <div className="form-group">
              <label>Title Line 2 (highlighted)</label>
              <input type="text" defaultValue="Your Marketplace." />
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea defaultValue="Buy, sell, or exchange things with students around you — easily, safely, and all in one place."></textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Primary Button Text</label>
              <input type="text" defaultValue="Explore Marketplace" />
            </div>

            <div className="form-group">
              <label>Secondary Button Text</label>
              <input type="text" defaultValue="Sell an Item" />
            </div>
          </div>

          <div className="form-group">
            <label>Status</label>
            <select defaultValue="Active">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="form-group">
            <label>Hero Image</label>
            <label className="upload-box">
              <i className="bi bi-cloud-arrow-up"></i>
              Click to upload a new hero image
              <input type="file" accept="image/*" hidden />
            </label>
          </div>

          <div className="form-actions">
            <Link to="/admin/hero" className="btn-admin btn-admin-outline">
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