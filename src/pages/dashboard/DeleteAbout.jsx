// src/pages/dashboard/DeleteAbout.jsx
import { Link } from "react-router-dom";
import DashboardLayout from "../../pages/dashboard/DashboardLayout.jsx";
import "../../styles/Dashboard/product-actions.css";

export default function DeleteAbout() {
  return (
    <DashboardLayout activePage="about">

      <section className="product-page">

        <div className="product-page-header">
          <div>
            <span className="product-page-label">ABOUT</span>
            <h1>Delete About</h1>
            <p>Remove the About Us content.</p>
          </div>

          <Link to="/dashboard/about" className="product-back-btn">
            <i className="bi bi-arrow-left"></i>
            Back to View
          </Link>
        </div>

        <section className="delete-product-card">

          <div className="delete-warning-icon">
            <i className="bi bi-trash3"></i>
          </div>

          <h2>Delete About content?</h2>

          <p>
            This will remove the current About Us content from the site.
            You can add new content later from the Add About form.
          </p>

          <div className="delete-product-actions">
            <Link to="/dashboard/about" className="product-primary-btn">
              Cancel
            </Link>

            <button type="button" className="product-delete-btn">
              <i className="bi bi-trash"></i>
              Confirm Delete
            </button>
          </div>

        </section>

      </section>

    </DashboardLayout>
  );
}