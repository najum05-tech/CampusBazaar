// src/pages/Admin/AddHowItWorks.jsx
import {Link} from "react-router-dom";
import AdminLayout from "./AdminLayout.jsx";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { handleAddAdminContentFunction } from "/src/api.js";

// Zod Validation Schema for Add How It Works Form
const howItWorksSchema = z.object({
  stepTitle: z.string().min(1, "Step Title is required"),
  iconClass: z.string().min(1, "Bootstrap Icon Class is required"),
  stepDescription: z.string().min(1, "Step Description is required"),
});

export default function AddHowItWorks() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  // Connect Zod to react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(howItWorksSchema),
  });

  // Function to log valid submitted data
  const handleMySubmissionFormFunction = async (data) => {
    setMessage("");
    setError("");
    try {
      await handleAddAdminContentFunction("HowItWorks", data);
      setMessage("Step added successfully.");
      setTimeout(() => navigate("/admin/how-it-works"), 1000);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add step.");
    }
  };

  return (
    <AdminLayout activePage="how-it-works">

      <section className="admin-form-card">

        <h2>Add New Step</h2>
        <p>Create a new step for the "How It Works" section.</p>

        {message && <p>{message}</p>}
        {error && <p>{error}</p>}

        <form className="admin-form" onSubmit={handleSubmit(handleMySubmissionFormFunction)}>

          <div className="form-row">
            <div className="form-group">
              <label className={errors.stepTitle ? "label-alert" : ""}>
                {errors.stepTitle?.message}
              </label>
              <input
                type="text"
                className={errors.stepTitle ? "input-alert" : ""}
                placeholder={errors.stepTitle ? "Step title is required!" : "e.g. Deliver"}
                {...register("stepTitle")}
              />
            </div>

            <div className="form-group">
              <label className={errors.iconClass ? "label-alert" : ""}>
                {errors.iconClass?.message}
              </label>
              <input
                type="text"
                className={errors.iconClass ? "input-alert" : ""}
                placeholder={errors.iconClass ? "Icon class is required!" : "e.g. bi-truck"}
                {...register("iconClass")}
              />
            </div>
          </div>

          <div className="form-group">
            <label className={errors.stepDescription ? "label-alert" : ""}>
              {errors.stepDescription?.message}
            </label>
            <textarea
              className={errors.stepDescription ? "input-alert" : ""}
              placeholder={errors.stepDescription ? "Step description is required!" : "Short description of this step..."}
              {...register("stepDescription")}
            ></textarea>
          </div>

          <div className="form-actions">

            <Link to="/admin/how-it-works" className="btn-admin btn-admin-outline">
              Cancel
            </Link>
            <button type="submit" className="btn-admin btn-admin-primary">
              <i className="bi bi-check-lg"></i>
              Add Step
            </button>
          </div>

        </form>

      </section>

    </AdminLayout>
  );
}
