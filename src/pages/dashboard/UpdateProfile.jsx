// src/pages/dashboard/UpdateProfile.jsx
import DashboardLayout from "../../pages/dashboard/DashboardLayout.jsx";
import "../../styles/Dashboard/addproduct.css";

export default function UpdateProfile() {
  return (
    <DashboardLayout activePage="profile">

      <section className="product-form-card">

        <h1>Update Profile</h1>
        <p>Manage your personal information and account details.</p>

        <form className="product-form">

          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="e.g. Muhammad Najmuddin" defaultValue="Muhammad Najmuddin" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="you@example.com" defaultValue="muhammad.najmuddin@example.com" />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+92 300 0000000" defaultValue="+92 300 1234567" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>University / College / School</label>
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
            <label>City</label>
            <select defaultValue="Abbottabad">
              <option>Abbottabad</option>
              <option>Islamabad</option>
              <option>Lahore</option>
              <option>Karachi</option>
            </select>
          </div>

          <div className="form-group">
            <label>About</label>
            <textarea placeholder="Tell other students about yourself..." defaultValue="Student at COMSATS Abbottabad. Buying and selling textbooks, electronics, and campus essentials on CampusBazaar."></textarea>
          </div>

          <div className="form-group">
            <label>Profile Photo</label>
            <label className="upload-box">
              <i className="bi bi-cloud-arrow-up"></i>
              Drag & drop image or click to upload
              <input
                type="file"
                accept="image/*"
                hidden
              />
            </label>
          </div>

          <div className="form-group">
            <label>Current Password</label>
            <input type="password" placeholder="Enter current password" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>New Password</label>
              <input type="password" placeholder="Enter new password" />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm new password" />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-outline">Cancel</button>
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-check-lg"></i>
              Save Changes
            </button>
          </div>

        </form>

      </section>

    </DashboardLayout>
  );
}