// src/pages/Admin/ManageHowItWorks.jsx
import AdminLayout from "./AdminLayout.jsx";

const steps = [
  { id: 1, icon: "bi-search", title: "Find", desc: "Search or browse listings from students near you." },
  { id: 2, icon: "bi-chat-dots", title: "Connect", desc: "Message the seller and agree on details." },
  { id: 3, icon: "bi-arrow-left-right", title: "Exchange", desc: "Meet on campus and complete the exchange." },
];

export default function ManageHowItWorks() {
  return (
    <AdminLayout activePage="how-it-works">

      <section className="admin-list-card">

        <div className="section-top">
          <div>
            <h2>How It Works</h2>
            <p>Steps shown in the "How It Works" homepage section.</p>
          </div>

          <a href="/admin/how-it-works/add" className="btn-admin btn-admin-primary">
            <i className="bi bi-plus-lg"></i>
            Add New Step
          </a>
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
            {steps.map((step) => (
              <tr key={step.id}>
                <td><i className={`bi ${step.icon} admin-table-icon`}></i></td>
                <td>{step.title}</td>
                <td>{step.desc}</td>
                <td>
                  <a href={`/admin/how-it-works/view/${step.id}`} className="icon-btn">
                    <i className="bi bi-eye"></i>
                  </a>
                  <a href={`/admin/how-it-works/edit/${step.id}`} className="icon-btn">
                    <i className="bi bi-pencil"></i>
                  </a>
                  <button className="icon-btn danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}

            {steps.length === 0 && (
              <tr>
                <td colSpan="4" className="admin-table-empty">No steps yet.</td>
              </tr>
            )}
          </tbody>
        </table>


      </section>

    </AdminLayout>
  );
}