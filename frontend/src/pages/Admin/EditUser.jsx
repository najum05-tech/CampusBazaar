// src/pages/admin/EditUser.jsx
import {Link} from "react-router-dom";
import AdminLayout from "../../pages/Admin/AdminLayout.jsx";

export default function EditUser() {
  return (
    <AdminLayout activePage="users">

      <section className="admin-form-card">

        <h2>Edit User</h2>
        <p>Update this student's account information.</p>

        <form className="admin-form">

          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" defaultValue="Muhammad Najmuddin" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" defaultValue="najmuddin@gmail.com" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" defaultValue="+92 346 9611585" />
            </div>

            <div className="form-group">
              <label>Role</label>
              <select defaultValue="Seller">
                <option>Buyer</option>
                <option>Seller</option>
                <option>Admin</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>University</label>
              <select defaultValue="COMSATS University Islamabad">
                <option>COMSATS University Islamabad</option>
                <option>University of Abbottabad</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Campus</label>
              <select defaultValue="Abbottabad Campus">
                <option>Abbottabad Campus</option>
                <option>Islamabad Campus</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Status</label>
            <select defaultValue="Active">
              <option>Active</option>
              <option>Suspended</option>
            </select>
          </div>

          <div className="form-actions">
            <Link to="/admin/users" className="btn-admin btn-admin-outline">
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