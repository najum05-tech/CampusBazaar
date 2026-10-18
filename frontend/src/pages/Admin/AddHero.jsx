// src/pages/admin/AddHero.jsx
import {Link} from "react-router-dom";
import AdminLayout from "../../pages/Admin/AdminLayout.jsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod Validation Schema for Add Hero Form
const heroSchema = z.object({
  smallLabel: z.string().min(1),
  titleLine1: z.string().min(1),
  titleLine2: z.string().min(1),
  description: z.string().min(1),
  primaryButtonText: z.string().min(1),
  secondaryButtonText: z.string().min(1),
  status: z.string().min(1),
});

export default function AddHero() {
  // Connect Zod to react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(heroSchema),
  });

  // Function to log valid submitted data
  const handleMySubmissionFormFunction = (data) => {
    console.log("Hero Form submitted with data:", data);
  };

  return (
    <AdminLayout activePage="hero">

      <section className="admin-form-card">

        <h2>Add Hero Content</h2>
        <p>Create new content for the homepage hero section.</p>

        <form className="admin-form" onSubmit={handleSubmit(handleMySubmissionFormFunction)}>

          <div className="form-group">
            <label className={errors.smallLabel ? "label-alert" : ""}>
              {errors.smallLabel ? "Small Label is required!" : "Small Label"}
            </label>
            <input
              type="text"
              className={errors.smallLabel ? "input-alert" : ""}
              placeholder={errors.smallLabel ? "Small label is required!" : "e.g. BUY • SELL • EXCHANGE • CONNECT"}
              {...register("smallLabel")}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className={errors.titleLine1 ? "label-alert" : ""}>
                {errors.titleLine1 ? "Title Line 1 is required!" : "Title Line 1"}
              </label>
              <input
                type="text"
                className={errors.titleLine1 ? "input-alert" : ""}
                placeholder={errors.titleLine1 ? "Title line 1 is required!" : "e.g. Your Campus."}
                {...register("titleLine1")}
              />
            </div>

            <div className="form-group">
              <label className={errors.titleLine2 ? "label-alert" : ""}>
                {errors.titleLine2 ? "Title Line 2 is required!" : "Title Line 2 (highlighted)"}
              </label>
              <input
                type="text"
                className={errors.titleLine2 ? "input-alert" : ""}
                placeholder={errors.titleLine2 ? "Title line 2 is required!" : "e.g. Your Marketplace."}
                {...register("titleLine2")}
              />
            </div>
          </div>

          <div className="form-group">

            <label className={errors.description ? "label-alert" : ""}>
              {errors.description ? "Description is required!" : "Description"}
            </label>
            <textarea
              className={errors.description ? "input-alert" : ""}
              placeholder={errors.description ? "Description is required!" : "Short description shown under the heading..."}
              {...register("description")}
            ></textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className={errors.primaryButtonText ? "label-alert" : ""}>
                {errors.primaryButtonText ? "Primary Button Text is required!" : "Primary Button Text"}
              </label>
              <input
                type="text"
                className={errors.primaryButtonText ? "input-alert" : ""}
                placeholder={errors.primaryButtonText ? "Primary button text is required!" : "e.g. Explore Marketplace"}
                {...register("primaryButtonText")}
              />
            </div>

            <div className="form-group">
              <label className={errors.secondaryButtonText ? "label-alert" : ""}>
                {errors.secondaryButtonText ? "Secondary Button Text is required!" : "Secondary Button Text"}
              </label>
              <input
                type="text"
                className={errors.secondaryButtonText ? "input-alert" : ""}
                placeholder={errors.secondaryButtonText ? "Secondary button text is required!" : "e.g. Sell an Item"}
                {...register("secondaryButtonText")}
              />
            </div>
          </div>

          <div className="form-group">
            <label className={errors.status ? "label-alert" : ""}>
              {errors.status ? "Status is required!" : "Status"}
            </label>
            <select
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
              Click to upload hero image
              <input type="file" accept="image/*" hidden />
            </label>
          </div>


          <div className="form-actions">
            <Link to="/admin/hero" className="btn-admin btn-admin-outline">
              Cancel
            </Link>
            <button type="submit" className="btn-admin btn-admin-primary">
              <i className="bi bi-check-lg"></i>
              Add Hero
            </button>
          </div>

        </form>

      </section>

    </AdminLayout>
  );
}