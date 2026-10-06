// src/pages/Admin/ManageBenefits.jsx
import {Link} from "react-router-dom";
import AdminLayout from "./AdminLayout.jsx";

const benefits = [
  { id: 1, icon: "bi-mortarboard", title: "Student Only", desc: "Verified accounts from your campus community." },
  { id: 2, icon: "bi-tag", title: "Affordable", desc: "Better prices than retail, no middlemen." },
  { id: 3, icon: "bi-geo-alt", title: "Local", desc: "Meet nearby, no shipping hassle." },
  { id: 4, icon: "bi-lightning", title: "Easy", desc: "List an item in under a minute." },
];

export default function ManageBenefits() {
  return (
    <AdminLayout activePage="benefits">

      <section className="admin-list-card">

        <div className="section-top">
          <div>
            <h2>Why CampusBazaar</h2>
            <p>Benefits shown in the "Why CampusBazaar" homepage section.</p>
          </div>

          <Link to="/admin/benefits/add" className="btn-admin btn-admin-primary">
            <i className="bi bi-plus-lg"></i>
            Add New Benefit
          </Link>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Icon</th>

              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {benefits.map((b) => (
              <tr key={b.id}>
                <td><i className={`bi ${b.icon} admin-table-icon`}></i></td>
                <td>{b.title}</td>
                <td>{b.desc}</td>
                <td>
                  <Link to={`/admin/benefits/view/${b.id}`} className="icon-btn">
                    <i className="bi bi-eye"></i>
                  </Link>
                  <Link to={`/admin/benefits/edit/${b.id}`} className="icon-btn">
                    <i className="bi bi-pencil"></i>
                  </Link>
                  <button className="icon-btn danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}

            {benefits.length === 0 && (
              <tr>
                <td colSpan="4" className="admin-table-empty">No benefits yet.</td>
              </tr>
            )}
          </tbody>
        </table>


      </section>

    </AdminLayout>
  );
}