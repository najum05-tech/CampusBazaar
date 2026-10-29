// src/pages/Admin/AddBenefit.jsx
import {Link} from "react-router-dom";
import AdminLayout from "./AdminLayout.jsx";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { handleAddAdminContentFunction } from "/src/api.js";

// Zod Validation Schema for Add Benefit Form
const benefitSchema = z.object({
  title: z.string().min(1, "Title is required"),
  iconClass: z.string().min(1, "Bootstrap Icon Class is required"),
  description: z.string().min(1, "Description is required"),
});

export default function AddBenefit() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  // Connect Zod to react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(benefitSchema),
  });

  // Function to log valid submitted data
  const handleMySubmissionFormFunction = async (data) => {
    setMessage("");
    setError("");
    try {
      await handleAddAdminContentFunction("Benefits", data);
      setMessage("Benefit added successfully.");
      setTimeout(() => navigate("/admin/benefits"), 1000);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add benefit.");
    }
  };

  return (
    <AdminLayout activePage="benefits">

      <section className="admin-form-card">

        <h2>Add New Benefit</h2>
        <p>Create a new item for the "Why CampusBazaar" section.</p>

        {message && <p>{message}</p>}
        {error && <p>{error}</p>}

        <form className="admin-form" onSubmit={handleSubmit(handleMySubmissionFormFunction)}>

          <div className="form-row">
            <div className="form-group">
              <label className={errors.title ? "label-alert" : ""}>
                {errors.title?.message}
              </label>
              <input
                type="text"
                className={errors.title ? "input-alert" : ""}
                placeholder={errors.title ? "Title is required!" : "e.g. Secure"}
                {...register("title")}
              />
            </div>

            <div className="form-group">
              <label className={errors.iconClass ? "label-alert" : ""}>
                {errors.iconClass?.message}
              </label>
              <input
                type="text"
                className={errors.iconClass ? "input-alert" : ""}
                placeholder={errors.iconClass ? "Icon class is required!" : "e.g. bi-shield-check"}
                {...register("iconClass")}
              />
            </div>
          </div>

          <div className="form-group">
            <label className={errors.description ? "label-alert" : ""}>
              {errors.description?.message}
            </label>
            <textarea
              className={errors.description ? "input-alert" : ""}
              placeholder={errors.description ? "Description is required!" : "Short description..."}
              {...register("description")}
            ></textarea>
          </div>

          <div className="form-actions">

            <Link to="/admin/benefits" className="btn-admin btn-admin-outline">
              Cancel
            </Link>
            <button type="submit" className="btn-admin btn-admin-primary">
              <i className="bi bi-check-lg"></i>
              Add Benefit
            </button>
          </div>

        </form>

      </section>

    </AdminLayout>
  );
}
