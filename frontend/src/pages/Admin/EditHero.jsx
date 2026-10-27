// src/pages/admin/EditHero.jsx
import {Link} from "react-router-dom";
import AdminLayout from "../../pages/Admin/AdminLayout.jsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod Validation Schema for Edit Hero Form
const editHeroSchema = z.object({
  smallLabel: z.string().min(1, "Small Label is required"),
  titleLine1: z.string().min(1, "Title Line 1 is required"),
  titleLine2: z.string().min(1, "Title Line 2 is required"),
  description: z.string().min(1, "Description is required"),
  primaryButtonText: z.string().min(1, "Primary Button Text is required"),
  secondaryButtonText: z.string().min(1, "Secondary Button Text is required"),
  status: z.string().min(1, "Status is required"),
});

export default function EditHero() {
  // Connect Zod to react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editHeroSchema),
  });

  // Function to log valid submitted data
  const handleMySubmissionFormFunction = (data) => {
    console.log("Edit Hero Form submitted with data:", data);
  };

  return (
    <AdminLayout activePage="hero">

      <section className="admin-form-card">

        <h2>Edit Hero Content</h2>
        <p>Update the existing homepage hero section.</p>

        <form className="admin-form" onSubmit={handleSubmit(handleMySubmissionFormFunction)}>

          <div className="form-group">
            <label className={errors.smallLabel ? "label-alert" : ""}>
              {errors.smallLabel?.message}
            </label>
            <input
              type="text"
              defaultValue="BUY • SELL • EXCHANGE • CONNECT"
              className={errors.smallLabel ? "input-alert" : ""}
              {...register("smallLabel")}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className={errors.titleLine1 ? "label-alert" : ""}>
                {errors.titleLine1?.message}
              </label>
              <input
                type="text"
                defaultValue="Your Campus."
                className={errors.titleLine1 ? "input-alert" : ""}
                {...register("titleLine1")}
              />
            </div>

            <div className="form-group">
              <label className={errors.titleLine2 ? "label-alert" : ""}>
                {errors.titleLine2?.message}
              </label>
              <input
                type="text"
                defaultValue="Your Marketplace."
                className={errors.titleLine2 ? "input-alert" : ""}
                {...register("titleLine2")}
              />
            </div>
          </div>

          <div className="form-group">
            <label className={errors.description ? "label-alert" : ""}>
              {errors.description?.message}
            </label>
            <textarea
              defaultValue="Buy, sell, or exchange things with students around you — easily, safely, and all in one place."
              className={errors.description ? "input-alert" : ""}
              {...register("description")}
            ></textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className={errors.primaryButtonText ? "label-alert" : ""}>
                {errors.primaryButtonText?.message}
              </label>
              <input
                type="text"
                defaultValue="Explore Marketplace"
                className={errors.primaryButtonText ? "input-alert" : ""}
                {...register("primaryButtonText")}
              />
            </div>

            <div className="form-group">
              <label className={errors.secondaryButtonText ? "label-alert" : ""}>
                {errors.secondaryButtonText?.message}
              </label>
              <input
                type="text"
                defaultValue="Sell an Item"
                className={errors.secondaryButtonText ? "input-alert" : ""}
                {...register("secondaryButtonText")}
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

          <div className="form-group">
            <label>Hero Image</label>
            <label className="upload-box">
              <i className="bi bi-cloud-arrow-up"></i>
              Click to upload a new hero image
              <input type="file" accept="image/*" hidden />
            </label>
          </div>

          <div className="form-actions">
            <Link to="/admin/hero" className="btn-admin btn-admin-outline">
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