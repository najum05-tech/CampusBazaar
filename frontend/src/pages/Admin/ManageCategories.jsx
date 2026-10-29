// src/pages/Admin/ManageCategories.jsx
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import AdminLayout from "./AdminLayout.jsx";
import { handleAdminContentFunction, handleDeleteAdminContentFunction } from "/src/api.js";

export default function ManageCategories() {
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState("");

  const loadCategories = async () => {
    try {
      const response = await handleAdminContentFunction("Categories");
      setCategories(response.data);
    } catch (error) {
      setMessage(error.response?.data?.message || "Unable to load categories");
    }
  };

  useEffect(() => { loadCategories(); }, []);

  const handleDelete = async (id) => {
    try {
      await handleDeleteAdminContentFunction("Categories", id);
      setMessage("Category deleted successfully");
      loadCategories();
    } catch (error) {
      setMessage(error.response?.data?.message || "Unable to delete category");
    }
  };

  return (
    <AdminLayout activePage="categories">
      <section className="admin-list-card">
        <div className="section-top">
          <div>
            <h2>Categories</h2>
            <p>Categories shown on the homepage and listing filters.</p>
          </div>
          <Link to="/admin/categories/add" className="btn-admin btn-admin-primary">
            <i className="bi bi-plus-lg"></i>
            Add New Category
          </Link>
        </div>

        {message && <p>{message}</p>}

        <table className="admin-table">
          <thead>
            <tr><th>Icon</th><th>Name</th><th>Icon Class</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat._id}>
                <td><i className={`bi ${cat.data.iconClass} admin-table-icon`}></i></td>
                <td>{cat.data.categoryName}</td>
                <td><code>{cat.data.iconClass}</code></td>
                <td>
                  <Link to={`/admin/categories/${cat._id}`} className="icon-btn"><i className="bi bi-eye"></i></Link>
                  <Link to={`/admin/categories/${cat._id}/edit`} className="icon-btn"><i className="bi bi-pencil"></i></Link>
                  <button className="icon-btn danger" onClick={() => handleDelete(cat._id)}><i className="bi bi-trash"></i></button>
                </td>
              </tr>
            ))}
            {categories.length === 0 && <tr><td colSpan="4" className="admin-table-empty">No categories yet.</td></tr>}
          </tbody>
        </table>
      </section>
    </AdminLayout>
  );
}
