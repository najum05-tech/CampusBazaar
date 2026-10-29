// src/pages/admin/ManageUsers.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../pages/Admin/AdminLayout.jsx";
import { handleAdminUsersFunction, handleDeleteAdminUserFunction } from "/src/api.js";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  const loadUsers = async () => {
    try {
      const response = await handleAdminUsersFunction();
      setUsers(response.data);
    } catch (error) {
      setMessage(error.response?.data?.message || "Unable to load users");
    }
  };

  useEffect(() => {
    (async () => {
      await loadUsers();
    })();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await handleDeleteAdminUserFunction(id);
      setMessage("User deleted successfully.");
      await loadUsers();
    } catch (error) {
      setMessage(error.response?.data?.message || "Unable to delete user");
    }
  };

  return (
    <AdminLayout activePage="users">

      <section className="admin-list-card">

        <div className="section-top">
          <div>
            <h2>Manage Users</h2>
            <p>All registered students on CampusBazaar.</p>
          </div>

          <Link to="/admin/users/add" className="btn-admin btn-admin-primary">
            <i className="bi bi-plus-lg"></i>
            Add New User
          </Link>
        </div>

        {message && <p>{message}</p>}

        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>

              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <span className={`status-badge ${user.status === "Active" ? "active" : "suspended"}`}>
                    {user.status}
                  </span>
                </td>
                <td>{user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "-"}</td>
                <td>
                  <Link to={`/admin/users/edit/${user._id}`} className="icon-btn">
                    <i className="bi bi-pencil"></i>
                  </Link>
                  <button className="icon-btn danger" onClick={() => handleDelete(user._id)}>
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
            {users.length === 0 && <tr><td colSpan="6" className="admin-table-empty">No users found.</td></tr>}
          </tbody>
        </table>


      </section>

    </AdminLayout>
  );
}