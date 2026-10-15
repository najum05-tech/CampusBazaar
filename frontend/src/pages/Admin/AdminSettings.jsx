// src/pages/Admin/AdminSettings.jsx
import AdminLayout from "./AdminLayout.jsx";

export default function AdminSettings() {
  return (
    <AdminLayout activePage="settings">

      <section className="admin-form-card">

        <h2>General Settings</h2>
        <p>Basic site information shown across CampusBazaar.</p>

        <form className="admin-form">

          <div className="form-row">
            <div className="form-group">
              <label>Site Name</label>
              <input type="text" defaultValue="CampusBazaar" />
            </div>

            <div className="form-group">
              <label>Support Email</label>
              <input type="email" placeholder="support@campusbazaar.com" />
            </div>
          </div>

          <div className="form-group">
            <label>Footer Tagline</label>
            <input type="text" defaultValue="Your campus marketplace to buy, sell, and exchange." />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Contact Phone</label>
              <input type="text" placeholder="+92 300 1234567" />
            </div>

            <div className="form-group">
              <label>Default City</label>
              <select>
                <option>Abbottabad</option>
                <option>Islamabad</option>
                <option>Lahore</option>
                <option>Karachi</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-admin btn-admin-primary">
              <i className="bi bi-check-lg"></i>
              Save Settings
            </button>
          </div>

        </form>

      </section>

      <section className="admin-form-card">

        <h2>Social Links</h2>
        <p>Links shown in the website footer.</p>


        <form className="admin-form">

          <div className="form-row">
            <div className="form-group">
              <label>Facebook URL</label>
              <input type="text" placeholder="https://facebook.com/campusbazaar" />
            </div>

            <div className="form-group">
              <label>Instagram URL</label>
              <input type="text" placeholder="https://instagram.com/campusbazaar" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>LinkedIn URL</label>
              <input type="text" placeholder="https://linkedin.com/company/campusbazaar" />
            </div>

            <div className="form-group">
              <label>Twitter / X URL</label>
              <input type="text" placeholder="https://x.com/campusbazaar" />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-admin btn-admin-primary">
              <i className="bi bi-check-lg"></i>
              Save Links
            </button>
          </div>


        </form>

      </section>

      <section className="admin-form-card">

        <h2>Account Password</h2>
        <p>Update your admin login password.</p>

        <form className="admin-form">

          <div className="form-group">
            <label>Current Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>New Password</label>
              <input type="password" placeholder="••••••••" />
            </div>

            <div className="form-group">
              <label>Confirm New Password</label>
              <input type="password" placeholder="••••••••" />
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-admin btn-admin-primary">
              <i className="bi bi-check-lg"></i>

              Update Password
            </button>
          </div>

        </form>

      </section>

    </AdminLayout>
  );
}