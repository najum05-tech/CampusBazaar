// src/pages/admin/AddUser.jsx
import {Link} from "react-router-dom";
import AdminLayout from "../../pages/Admin/AdminLayout.jsx";

export default function AddUser() {
  return (
    <AdminLayout activePage="users">

      <section className="admin-form-card">

        <h2>Add New User</h2>
        <p>Create a new student account manually.</p>

        <form className="admin-form">

          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="e.g. Ahmed Khan" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="e.g. ahmed@gmail.com" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" placeholder="e.g. +92 300 1234567" />
            </div>


            <div className="form-group">
              <label>Role</label>
              <select>
                <option>Buyer</option>
                <option>Seller</option>
                <option>Admin</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>University</label>
              <select>
                <option>COMSATS University Islamabad</option>
                <option>University of Abbottabad</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Campus</label>
              <select>
                <option>Abbottabad Campus</option>
                <option>Islamabad Campus</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">

              <label>Password</label>
              <input type="password" placeholder="Set a temporary password" />
            </div>

            <div className="form-group">
              <label>Status</label>
              <select>
                <option>Active</option>
                <option>Suspended</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <Link to="/admin/users" className="btn-admin btn-admin-outline">
              Cancel
            </Link>
            <button type="submit" className="btn-admin btn-admin-primary">
              <i className="bi bi-check-lg"></i>
              Add User
            </button>
          </div>

        </form>

      </section>

    </AdminLayout>
  );
}