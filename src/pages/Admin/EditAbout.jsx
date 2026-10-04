// src/pages/Admin/EditAbout.jsx
import { Link } from "react-router-dom";
import AdminLayout from "../Admin/AdminLayout.jsx";
import "../../styles/Dashboard/addproduct.css";
import "../../styles/Dashboard/product-actions.css";

export default function EditAbout() {
  return (
    <AdminLayout activePage="about">

      <section className="product-page">

        <div className="product-page-header">
          <div>
            <span className="product-page-label">ABOUT</span>
            <h1>Update About</h1>
            <p>Edit the About Us page content.</p>
          </div>

          <Link to="/admin/about" className="product-back-btn">
            <i className="bi bi-arrow-left"></i>
            Back to View
          </Link>
        </div>

        <section className="product-form-card">

          <form className="product-form">

            <div className="form-group">
              <label>Page Title</label>
              <input type="text" defaultValue="Who We Are" />
            </div>

            <div className="form-group">
              <label>Short Intro</label>
              <textarea defaultValue="CampusBazaar is a student marketplace built for campus life — buy, sell and exchange with people from your university."></textarea>
            </div>

            <div className="form-group">
              <label>Our Story</label>
              <textarea defaultValue="We started CampusBazaar to make campus trading simple and safe. Textbooks, electronics, furniture and notes should move easily between students."></textarea>
            </div>

            <div className="form-group">
              <label>Mission</label>
              <textarea defaultValue="Help students save money and reduce waste by making it easy to buy and sell within their own campus."></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Vision</label>
                <textarea defaultValue="A trusted marketplace in every campus — where students connect, trade and support each other."></textarea>
              </div>

              <div className="form-group">
                <label>Values</label>
                <textarea defaultValue="Community, affordability, honesty and simplicity."></textarea>
              </div>
            </div>

            <div className="form-group">
              <label>About Image</label>
              <label className="upload-box">
                <i className="bi bi-cloud-arrow-up"></i>
                Drag & drop image or click to upload
                <input type="file" accept="image/*" hidden />
              </label>
            </div>

            <div className="form-actions">
              <Link to="/dashboard/about" className="btn btn-outline">Cancel</Link>
              <button type="submit" className="btn btn-primary">
                <i className="bi bi-check-lg"></i>
                Save Changes
              </button>
            </div>

          </form>

        </section>

      </section>

    </AdminLayout>
  );
}