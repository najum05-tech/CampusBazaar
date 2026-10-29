// src/pages/Admin/EditCategory.jsx
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminLayout from "./AdminLayout.jsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleGetAdminContentItemFunction, handleUpdateAdminContentFunction } from "/src/api.js";

// Zod Validation Schema for Edit Category Form
const editCategorySchema = z.object({
  categoryName: z.string().min(1, "Category Name is required"),
  iconClass: z.string().min(1, "Bootstrap Icon Class is required"),
  status: z.string().min(1, "Status is required"),
});

export default function EditCategory() {
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
    resolver: zodResolver(editCategorySchema),
  });

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await handleGetAdminContentItemFunction("Categories", id);
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
      await handleUpdateAdminContentFunction("Categories", id, data);
      setMessage("Changes saved successfully.");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save changes.");
    }
  };

  return (
    <AdminLayout activePage="categories">

      <section className="admin-form-card">

        <h2>Edit Category</h2>
        <p>Update this category's details.</p>

        {message && <p>{message}</p>}
        {error && <p>{error}</p>}

        <form className="admin-form" onSubmit={handleSubmit(handleMySubmissionFormFunction)}>

          <div className="form-row">
            <div className="form-group">
              <label className={errors.categoryName ? "label-alert" : ""}>
                {errors.categoryName?.message}
              </label>
              <input
                type="text"
                className={errors.categoryName ? "input-alert" : ""}
                {...register("categoryName")}
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
            <label className={errors.status ? "label-alert" : ""}>
              {errors.status?.message}
            </label>
            <select
              className={errors.status ? "input-alert" : ""}
              {...register("status")}
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>

          </div>

          <div className="form-actions">
            <Link to="/admin/categories" className="btn-admin btn-admin-outline">
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