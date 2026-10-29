// src/pages/Admin/EditBenefit.jsx
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminLayout from "./AdminLayout.jsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleGetAdminContentItemFunction, handleUpdateAdminContentFunction } from "/src/api.js";

// Zod Validation Schema for Edit Benefit Form
const editBenefitSchema = z.object({
  title: z.string().min(1, "Title is required"),
  iconClass: z.string().min(1, "Bootstrap Icon Class is required"),
  description: z.string().min(1, "Description is required"),
});

export default function EditBenefit() {
  const { id } = useParams();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Connect Zod to react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValues,
  } = useForm({
    resolver: zodResolver(editBenefitSchema),
  });

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await handleGetAdminContentItemFunction("Benefits", id);
        setValues(response.data.data || response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Unable to load content");
      }
    };
    loadContent();
  }, [id]);

  const handleMySubmissionFormFunction = async (data) => {
    setMessage("");
    setError("");
    try {
      await handleUpdateAdminContentFunction("Benefits", id, data);
      setMessage("Changes saved successfully.");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save changes.");
    }
  };

  return (
    <AdminLayout activePage="benefits">

      <section className="admin-form-card">

        <h2>Edit Benefit</h2>
        <p>Update this benefit's details.</p>

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
              {...register("description")}
            ></textarea>
          </div>

          <div className="form-actions">

            <Link to="/admin/benefits" className="btn-admin btn-admin-outline">
              Cancel
            </Link>
            <button type="submit" className="btn-admin btn-admin-primary">
              <i className="bi bi-check-lg"></i>
              Save Changes
            </button>
          </div>

        </form>

      </section>

    </AdminLayout>
  );
}