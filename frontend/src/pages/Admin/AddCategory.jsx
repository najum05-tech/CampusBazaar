// src/pages/Admin/AddCategory.jsx
import {Link} from "react-router-dom";
import AdminLayout from "./AdminLayout.jsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod Validation Schema for Add Category Form
const categorySchema = z.object({
  categoryName: z.string().min(1, "Category Name is required"),
  iconClass: z.string().min(1, "Bootstrap Icon Class is required"),
  status: z.string().min(1, "Status is required"),
});

export default function AddCategory() {
  // Connect Zod to react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(categorySchema),
  });

  // Function to log valid submitted data
  const handleMySubmissionFormFunction = (data) => {
    console.log("Category Form submitted with data:", data);
  };

  return (
    <AdminLayout activePage="categories">

      <section className="admin-form-card">

        <h2>Add New Category</h2>
        <p>Create a new category for listings and homepage.</p>

        <form className="admin-form" onSubmit={handleSubmit(handleMySubmissionFormFunction)}>

          <div className="form-row">
            <div className="form-group">
              <label className={errors.categoryName ? "label-alert" : ""}>
                {errors.categoryName?.message}
              </label>
              <input
                type="text"
                className={errors.categoryName ? "input-alert" : ""}
                placeholder={errors.categoryName ? "Category name is required!" : "e.g. Sportswear"}
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
                placeholder={errors.iconClass ? "Icon class is required!" : "e.g. bi-bicycle"}
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
              Add Category
            </button>
          </div>

        </form>

      </section>

    </AdminLayout>
  );
}