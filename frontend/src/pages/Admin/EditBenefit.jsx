// src/pages/Admin/EditBenefit.jsx
import {Link} from "react-router-dom";
import AdminLayout from "./AdminLayout.jsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod Validation Schema for Edit Benefit Form
const editBenefitSchema = z.object({
  title: z.string().min(1, "Title is required"),
  iconClass: z.string().min(1, "Bootstrap Icon Class is required"),
  description: z.string().min(1, "Description is required"),
});

export default function EditBenefit() {
  // Connect Zod to react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editBenefitSchema),
  });

  // Function to log valid submitted data
  const handleMySubmissionFormFunction = (data) => {
    console.log("Edit Benefit Form submitted with data:", data);
  };

  return (
    <AdminLayout activePage="benefits">

      <section className="admin-form-card">

        <h2>Edit Benefit</h2>
        <p>Update this benefit's details.</p>

        <form className="admin-form" onSubmit={handleSubmit(handleMySubmissionFormFunction)}>

          <div className="form-row">
            <div className="form-group">
              <label className={errors.title ? "label-alert" : ""}>
                {errors.title?.message}
              </label>
              <input
                type="text"
                defaultValue="Student Only"
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
                defaultValue="bi-mortarboard"
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
              defaultValue="Verified accounts from your campus community."
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