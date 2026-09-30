// src/pages/dashboard/ViewAbout.jsx
import { Link } from "react-router-dom";
import DashboardLayout from "../../pages/dashboard/DashboardLayout.jsx";
import "../../styles/Dashboard/product-actions.css";

export default function ViewAbout() {
  return (
    <DashboardLayout activePage="about">

      <section className="product-page">

        <div className="product-page-header">
          <div>
            <span className="product-page-label">ABOUT</span>
            <h1>View About</h1>
            <p>Preview the About Us content.</p>
          </div>

          <Link to="/dashboard/about/add" className="product-back-btn">
            <i className="bi bi-plus"></i>
            Add About
          </Link>
        </div>

        <div className="view-product-card">
          <div className="view-product-details" style={{ width: "100%" }}>

            <span className="view-product-category">About Us</span>
            <h2>Who We Are</h2>

            <div className="view-product-divider"></div>

            <div className="product-description">
              <h3>Intro</h3>
              <p>
                CampusBazaar is a student marketplace built for campus life —
                buy, sell and exchange with people from your university.
              </p>
            </div>

            <div className="product-description">
              <h3>Our Story</h3>
              <p>
                We started CampusBazaar to make campus trading simple and safe.
                Textbooks, electronics, furniture and notes should move easily
                between students.
              </p>
            </div>

            <div className="product-info-grid">
              <div className="product-info-item">
                <span>Mission</span>
                <strong>Help students save money and trade on campus.</strong>
              </div>
              <div className="product-info-item">
                <span>Vision</span>
                <strong>A trusted marketplace in every campus.</strong>
              </div>
              <div className="product-info-item">
                <span>Values</span>
                <strong>Community, affordability, honesty, simplicity.</strong>
              </div>
            </div>

            <div className="product-action-buttons">
              <Link to="/dashboard/about/edit" className="product-edit-btn">
                <i className="bi bi-pencil"></i>
                Update
              </Link>
              <Link to="/dashboard/about/delete" className="product-delete-btn">
                <i className="bi bi-trash"></i>
                Delete
              </Link>
            </div>

          </div>
        </div>

      </section>

    </DashboardLayout>
  );
}