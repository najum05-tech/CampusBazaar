// src/pages/Admin/EditHowItWorks.jsx
import {Link} from "react-router-dom";
import AdminLayout from "./AdminLayout.jsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod Validation Schema for Edit How It Works Form
const editHowItWorksSchema = z.object({
  stepTitle: z.string().min(1, "Step Title is required"),
  iconClass: z.string().min(1, "Bootstrap Icon Class is required"),
  stepDescription: z.string().min(1, "Step Description is required"),
});

export default function EditHowItWorks() {
  // Connect Zod to react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editHowItWorksSchema),
  });

  // Function to log valid submitted data
  const handleMySubmissionFormFunction = (data) => {
    console.log("Edit How It Works Form submitted with data:", data);
  };

  return (
    <AdminLayout activePage="how-it-works">

      <section className="admin-form-card">

        <h2>Edit Step</h2>
        <p>Update this step's details.</p>

        <form className="admin-form" onSubmit={handleSubmit(handleMySubmissionFormFunction)}>

          <div className="form-row">
            <div className="form-group">
              <label className={errors.stepTitle ? "label-alert" : ""}>
                {errors.stepTitle?.message}
              </label>
              <input
                type="text"
                defaultValue="Find"
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
                defaultValue="bi-search"
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
              defaultValue="Search or browse listings from students near you."
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