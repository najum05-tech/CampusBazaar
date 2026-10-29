// src/pages/Admin/ViewAbout.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../pages/Admin/AdminLayout.jsx";
import "../../styles/Dashboard/product-actions.css";
import { handleAdminContentFunction } from "/src/api.js";

export default function ViewAbout() {
  const [about, setAbout] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    handleAdminContentFunction("About")
      .then((response) => {
        const items = response.data || [];
        setAbout(items[0] || null);
      })
      .catch((err) => setError(err.response?.data?.message || "Unable to load content"));
  }, []);

  if (error) {
    return (
      <AdminLayout activePage="about">
        <section className="product-page">
          <div className="product-page-header">
            <div>
              <span className="product-page-label">ABOUT</span>
              <h1>View About</h1>
              <p>Preview the About Us content.</p>
            </div>
            <Link to="/admin/about/add" className="product-back-btn">
              <i className="bi bi-plus"></i>
              Add About
            </Link>
          </div>
          <p>{error}</p>
        </section>
      </AdminLayout>
    );
  }

  const d = about ? (about.data || about) : null;

  return (
    <AdminLayout activePage="about">

      <section className="product-page">

        <div className="product-page-header">
          <div>
            <span className="product-page-label">ABOUT</span>
            <h1>View About</h1>
            <p>Preview the About Us content.</p>
          </div>

          <Link to="/admin/about/add" className="product-back-btn">
            <i className="bi bi-plus"></i>
            Add About
          </Link>
        </div>

        <div className="view-product-card">
          <div className="view-product-details" style={{ width: "100%" }}>

            <span className="view-product-category">About Us</span>
            <h2>{d ? d.pageTitle : "Who We Are"}</h2>

            <div className="view-product-divider"></div>

            {d ? (
              <>
                <div className="product-description">
                  <h3>Intro</h3>
                  <p>{d.shortIntro}</p>
                </div>

                <div className="product-description">
                  <h3>Our Story</h3>
                  <p>{d.ourStory}</p>
                </div>

                <div className="product-info-grid">
                  <div className="product-info-item">
                    <span>Mission</span>
                    <strong>{d.mission}</strong>
                  </div>
                  <div className="product-info-item">
                    <span>Vision</span>
                    <strong>{d.vision}</strong>
                  </div>
                  <div className="product-info-item">
                    <span>Values</span>
                    <strong>{d.values}</strong>
                  </div>
                </div>

                <div className="product-action-buttons">
                  <Link to={`/admin/about/${about._id}/edit`} className="product-edit-btn">
                    <i className="bi bi-pencil"></i>
                    Update
                  </Link>
                  <Link to={`/admin/about/${about._id}/delete`} className="product-delete-btn">
                    <i className="bi bi-trash"></i>
                    Delete
                  </Link>
                </div>
              </>
            ) : (
              <p>No About content yet. Add content from the Add About form.</p>
            )}

          </div>
        </div>

      </section>

    </AdminLayout>
  );
}