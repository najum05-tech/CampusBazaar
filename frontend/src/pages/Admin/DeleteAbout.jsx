// src/pages/Admin/DeleteAbout.jsx
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import AdminLayout from "../dashboard/DashboardLayout.jsx";
import "../../styles/Dashboard/product-actions.css";
import { handleGetAdminContentItemFunction, handleDeleteAdminContentFunction } from "/src/api.js";

export default function DeleteAbout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [about, setAbout] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    handleGetAdminContentItemFunction("About", id)
      .then((response) => setAbout(response.data))
      .catch((err) => setError(err.response?.data?.message || "Unable to load content"));
  }, [id]);

  const handleDelete = async () => {
    try {
      await handleDeleteAdminContentFunction("About", id);
      setMessage("About content deleted successfully.");
      setTimeout(() => navigate("/admin/about"), 1000);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete content.");
    }
  };

  if (error) {
    return (
      <AdminLayout activePage="about">
        <section className="product-page">
          <div className="product-page-header">
            <div>
              <span className="product-page-label">ABOUT</span>
              <h1>Delete About</h1>
              <p>Remove the About Us content.</p>
            </div>
            <Link to="/admin/about" className="product-back-btn">
              <i className="bi bi-arrow-left"></i>
              Back to View
            </Link>
          </div>
          <p>{error}</p>
        </section>
      </AdminLayout>
    );
  }

  if (!about) {
    return (
      <AdminLayout activePage="about">
        <section className="product-page">
          <div className="product-page-header">
            <div>
              <span className="product-page-label">ABOUT</span>
              <h1>Delete About</h1>
              <p>Remove the About Us content.</p>
            </div>
            <Link to="/admin/about" className="product-back-btn">
              <i className="bi bi-arrow-left"></i>
              Back to View
            </Link>
          </div>
          <p>Loading content...</p>
        </section>
      </AdminLayout>
    );
  }

  const d = about.data || about;

  return (
    <AdminLayout activePage="about">

      <section className="product-page">

        <div className="product-page-header">
          <div>
            <span className="product-page-label">ABOUT</span>
            <h1>Delete About</h1>
            <p>Remove the About Us content.</p>
          </div>

          <Link to="/admin/about" className="product-back-btn">
            <i className="bi bi-arrow-left"></i>
            Back to View
          </Link>
        </div>

        {message && <p>{message}</p>}
        {error && <p>{error}</p>}

        <section className="delete-product-card">

          <div className="delete-warning-icon">
            <i className="bi bi-trash3"></i>
          </div>

          <h2>Delete About content?</h2>

          <p>
            This will remove the "{d.pageTitle || "About"}" content from the site.
            You can add new content later from the Add About form.
          </p>

          <div className="delete-product-actions">
            <Link to="/admin/about" className="product-primary-btn">
              Cancel
            </Link>

            <button type="button" className="product-delete-btn" onClick={handleDelete}>
              <i className="bi bi-trash"></i>
              Confirm Delete
            </button>
          </div>

        </section>

      </section>

    </AdminLayout>
  );
}