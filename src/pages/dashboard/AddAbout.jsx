// src/pages/dashboard/AddAbout.jsx
import DashboardLayout from "../../pages/dashboard/DashboardLayout.jsx";
import "../../styles/Dashboard/addproduct.css";

export default function AddAbout() {
  return (
    <DashboardLayout activePage="about">

      <section className="product-form-card">

        <h1>Add About Content</h1>
        <p>Create content for the About Us page.</p>

        <form className="product-form">

          <div className="form-group">
            <label>Page Title</label>
            <input type="text" placeholder="e.g. Who We Are" />
          </div>

          <div className="form-group">
            <label>Short Intro</label>
            <textarea placeholder="Short introduction shown at the top of About page..."></textarea>
          </div>

          <div className="form-group">
            <label>Our Story</label>
            <textarea placeholder="Write the story of CampusBazaar..."></textarea>
          </div>

          <div className="form-group">
            <label>Mission</label>
            <textarea placeholder="Our mission..."></textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Vision</label>
              <textarea placeholder="Our vision..."></textarea>
            </div>

            <div className="form-group">
              <label>Values</label>
              <textarea placeholder="Our values..."></textarea>
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
            <button type="button" className="btn btn-outline">Cancel</button>
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-check-lg"></i>
              Save About
            </button>
          </div>

        </form>

      </section>

    </DashboardLayout>
  );
}