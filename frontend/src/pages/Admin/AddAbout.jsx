// src/pages/Admin/AddAbout.jsx
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import AdminLayout from "../Admin/AdminLayout.jsx";
import "../../styles/Dashboard/addproduct.css";

// 1. Zod Validation Schema for Add About Form
const aboutSchema = z.object({
  pageTitle: z.string().min(1),
  shortIntro: z.string().min(1),
  ourStory: z.string().min(1),
  mission: z.string().min(1),
  vision: z.string().min(1),
  values: z.string().min(1),
});

export default function AddAbout() {
  // 2. Connect Zod to react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(aboutSchema),
  });

  // 3. Function to log valid submitted data
  const handleMySubmissionFormFunction = (data) => {
    console.log("About Form submitted with data:", data);
  };

  return (
    <AdminLayout activePage="about">
      <section className="product-form-card">
        <h1>Add About Content</h1>
        <p>Create content for the About Us page.</p>

        <form
          className="product-form"
          onSubmit={handleSubmit(handleMySubmissionFormFunction)}
          method="POST"
        >
          {/* Page Title */}
          <div className="form-group">
            <label className={errors.pageTitle ? "label-alert" : ""}>
              {errors.pageTitle ? "Page Title is required!" : "Page Title"}
            </label>
            <input
              type="text"
              className={errors.pageTitle ? "input-alert" : ""}
              placeholder="e.g. Who We Are"
              {...register("pageTitle")}
            />
          </div>

          {/* Short Intro */}
          <div className="form-group">
            <label className={errors.shortIntro ? "label-alert" : ""}>
              {errors.shortIntro ? "Short Intro is required!" : "Short Intro"}
            </label>
            <textarea
              className={errors.shortIntro ? "input-alert" : ""}
              placeholder="Short introduction shown at the top of About page..."
              {...register("shortIntro")}
            ></textarea>
          </div>

          {/* Our Story */}
          <div className="form-group">
            <label className={errors.ourStory ? "label-alert" : ""}>
              {errors.ourStory ? "Our Story is required!" : "Our Story"}
            </label>
            <textarea
              className={errors.ourStory ? "input-alert" : ""}
              placeholder="Write the story of CampusBazaar..."
              {...register("ourStory")}
            ></textarea>
          </div>

          {/* Mission */}
          <div className="form-group">
            <label className={errors.mission ? "label-alert" : ""}>
              {errors.mission ? "Mission is required!" : "Mission"}
            </label>
            <textarea
              className={errors.mission ? "input-alert" : ""}
              placeholder="Our mission..."
              {...register("mission")}
            ></textarea>
          </div>

          {/* Vision & Values Row */}
          <div className="form-row">
            <div className="form-group">
              <label className={errors.vision ? "label-alert" : ""}>
                {errors.vision ? "Vision is required!" : "Vision"}
              </label>
              <textarea
                className={errors.vision ? "input-alert" : ""}
                placeholder="Our vision..."
                {...register("vision")}
              ></textarea>
            </div>

            <div className="form-group">
              <label className={errors.values ? "label-alert" : ""}>
                {errors.values ? "Values are required!" : "Values"}
              </label>
              <textarea
                className={errors.values ? "input-alert" : ""}
                placeholder="Our values..."
                {...register("values")}
              ></textarea>
            </div>
          </div>

          {/* About Image */}
          <div className="form-group">
            <label>About Image</label>
            <label className="upload-box">
              <i className="bi bi-cloud-arrow-up"></i>
              Drag &amp; drop image or click to upload
              <input type="file" accept="image/*" hidden />
            </label>
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-outline">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-check-lg"></i>
              Save About
            </button>
          </div>
        </form>
      </section>
    </AdminLayout>
  );
}