// src/pages/Admin/EditHowItWorks.jsx
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminLayout from "./AdminLayout.jsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleGetAdminContentItemFunction, handleUpdateAdminContentFunction } from "/src/api.js";

// Zod Validation Schema for Edit How It Works Form
const editHowItWorksSchema = z.object({
  stepTitle: z.string().min(1, "Step Title is required"),
  iconClass: z.string().min(1, "Bootstrap Icon Class is required"),
  stepDescription: z.string().min(1, "Step Description is required"),
});

export default function EditHowItWorks() {
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
    resolver: zodResolver(editHowItWorksSchema),
  });

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await handleGetAdminContentItemFunction("HowItWorks", id);
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
      await handleUpdateAdminContentFunction("HowItWorks", id, data);
      setMessage("Changes saved successfully.");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save changes.");
    }
  };

  return (
    <AdminLayout activePage="how-it-works">

      <section className="admin-form-card">

        <h2>Edit Step</h2>
        <p>Update this step's details.</p>

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
              {...register("stepDescription")}
            ></textarea>
          </div>

          <div className="form-actions">
            <Link to="/admin/how-it-works" className="btn-admin btn-admin-outline">
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