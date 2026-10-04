// src/pages/admin/ManageUsers.jsx
import AdminLayout from "../../pages/Admin/AdminLayout.jsx";

const users = [
  { id: 1, name: "Muhammad Najmuddin", email: "najmuddin@gmail.com", role: "Seller", status: "Active", joined: "Jan 2026" },
  { id: 2, name: "Ahmed Khan", email: "ahmed.khan@gmail.com", role: "Buyer", status: "Active", joined: "Feb 2026" },
  { id: 3, name: "Sara Ali", email: "sara.ali@gmail.com", role: "Seller", status: "Suspended", joined: "Mar 2026" },
  { id: 4, name: "Bilal Hussain", email: "bilal.h@gmail.com", role: "Buyer", status: "Active", joined: "Apr 2026" },
];

export default function ManageUsers() {
  return (
    <AdminLayout activePage="users">

      <section className="admin-list-card">

        <div className="section-top">
          <div>
            <h2>Manage Users</h2>
            <p>All registered students on CampusBazaar.</p>
          </div>

          <a href="/admin/users/add" className="btn-admin btn-admin-primary">
            <i className="bi bi-plus-lg"></i>
            Add New User
          </a>
        </div>

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
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <span className={`status-badge ${user.status === "Active" ? "active" : "suspended"}`}>
                    {user.status}
                  </span>
                </td>
                <td>{user.joined}</td>
                <td>
                  <a href={`/admin/users/edit/${user.id}`} className="icon-btn">
                    <i className="bi bi-pencil"></i>
                  </a>
                  <button className="icon-btn danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


      </section>

    </AdminLayout>
  );
}