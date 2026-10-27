// src/pages/Admin/EditCategory.jsx
import {Link} from "react-router-dom";
import AdminLayout from "./AdminLayout.jsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod Validation Schema for Edit Category Form
const editCategorySchema = z.object({
  categoryName: z.string().min(1, "Category Name is required"),
  iconClass: z.string().min(1, "Bootstrap Icon Class is required"),
  status: z.string().min(1, "Status is required"),
});

export default function EditCategory() {
  // Connect Zod to react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editCategorySchema),
  });

  // Function to log valid submitted data
  const handleMySubmissionFormFunction = (data) => {
    console.log("Edit Category Form submitted with data:", data);
  };

  return (
    <AdminLayout activePage="categories">

      <section className="admin-form-card">

        <h2>Edit Category</h2>
        <p>Update this category's details.</p>

        <form className="admin-form" onSubmit={handleSubmit(handleMySubmissionFormFunction)}>

          <div className="form-row">
            <div className="form-group">
              <label className={errors.categoryName ? "label-alert" : ""}>
                {errors.categoryName?.message}
              </label>
              <input
                type="text"
                defaultValue="Books"
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
                defaultValue="bi-book"
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
              defaultValue="Active"
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