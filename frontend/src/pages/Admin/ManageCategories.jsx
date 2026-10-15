// src/pages/Admin/ManageCategories.jsx
import {Link} from "react-router-dom";
import AdminLayout from "./AdminLayout.jsx";

const categories = [
  { id: 1, name: "Books", icon: "bi-book" },
  { id: 2, name: "Electronics", icon: "bi-laptop" },
  { id: 3, name: "Furniture", icon: "bi-person-workspace" },
  { id: 4, name: "Notes", icon: "bi-journal-text" },
];

export default function ManageCategories() {
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

        <table className="admin-table">
          <thead>
            <tr>
              <th>Icon</th>

              <th>Name</th>
              <th>Icon Class</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id}>
                <td><i className={`bi ${cat.icon} admin-table-icon`}></i></td>
                <td>{cat.name}</td>
                <td><code>{cat.icon}</code></td>
                <td>
                  <Link to={`/admin/categories/view/${cat.id}`} className="icon-btn">
                    <i className="bi bi-eye"></i>
                  </Link>
                  <Link to={`/admin/categories/edit/${cat.id}`} className="icon-btn">
                    <i className="bi bi-pencil"></i>
                  </Link>
                  <button className="icon-btn danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}

            {categories.length === 0 && (
              <tr>
                <td colSpan="4" className="admin-table-empty">No categories yet.</td>
              </tr>
            )}
          </tbody>
        </table>


      </section>

    </AdminLayout>
  );
}