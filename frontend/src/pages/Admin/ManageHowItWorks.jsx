
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "./AdminLayout.jsx";
import {
  handleAdminContentFunction,
  handleDeleteAdminContentFunction,
} from "/src/api.js";

export default function ManageHowItWorks() {
  const [steps, setSteps] = useState([]);
  const [message, setMessage] = useState("");

  const load = async () => {
    try {
      const response = await handleAdminContentFunction("HowItWorks");
      setSteps(response.data);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Unable to load steps"
      );
    }
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id) => {
    try {
      await handleDeleteAdminContentFunction("HowItWorks", id);
      setMessage("Step deleted successfully.");
      await load();
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Unable to delete step"
      );
    }
  };

  return (
    <AdminLayout activePage="how-it-works">
      <section className="admin-list-card">
        <div className="section-top">
          <div>
            <h2>How It Works</h2>
            <p>Steps shown in the homepage section.</p>
          </div>

          <Link
            to="/admin/how-it-works/add"
            className="btn-admin btn-admin-primary"
          >
            Add New Step
          </Link>
        </div>

        {message && <p>{message}</p>}

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
              <tr key={step._id}>
                <td>
                  <i
                    className={`bi ${step.data.iconClass} admin-table-icon`}
                  ></i>
                </td>
                <td>{step.data.stepTitle}</td>
                <td>{step.data.stepDescription}</td>
                <td>
                  <Link
                    to={`/admin/how-it-works/${step._id}`}
                    className="icon-btn"
                  >
                    <i className="bi bi-eye"></i>
                  </Link>

                  <Link
                    to={`/admin/how-it-works/${step._id}/edit`}
                    className="icon-btn"
                  >
                    <i className="bi bi-pencil"></i>
                  </Link>

                  <button
                    type="button"
                    className="icon-btn danger"
                    onClick={() => remove(step._id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}

            {steps.length === 0 && (
              <tr>
                <td colSpan="4" className="admin-table-empty">
                  No steps yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </AdminLayout>
  );
}
