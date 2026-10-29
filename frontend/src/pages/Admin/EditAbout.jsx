// src/pages/Admin/EditAbout.jsx
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminLayout from "../Admin/AdminLayout.jsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "../../styles/Dashboard/addproduct.css";
import "../../styles/Dashboard/product-actions.css";
import { handleGetAdminContentItemFunction, handleUpdateAdminContentFunction } from "/src/api.js";

// Zod Validation Schema for Edit About Form
const editAboutSchema = z.object({
  pageTitle: z.string().min(1, "Page Title is required"),
  shortIntro: z.string().min(1, "Short Intro is required"),
  ourStory: z.string().min(1, "Our Story is required"),
  mission: z.string().min(1, "Mission is required"),
  vision: z.string().min(1, "Vision is required"),
  values: z.string().min(1, "Values are required"),
});

export default function EditAbout() {
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
    resolver: zodResolver(editAboutSchema),
  });

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await handleGetAdminContentItemFunction("About", id);
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
      await handleUpdateAdminContentFunction("About", id, data);
      setMessage("Changes saved successfully.");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save changes.");
    }
  };

  return (
    <AdminLayout activePage="about">

      <section className="product-page">

        <div className="product-page-header">
          <div>
            <span className="product-page-label">ABOUT</span>
            <h1>Update About</h1>
            <p>Edit the About Us page content.</p>
          </div>

          <Link to="/admin/about" className="product-back-btn">
            <i className="bi bi-arrow-left"></i>
            Back to View
          </Link>
        </div>

        <section className="product-form-card">

        {message && <p>{message}</p>}
        {error && <p>{error}</p>}

          <form className="product-form" onSubmit={handleSubmit(handleMySubmissionFormFunction)}>

            <div className="form-group">
              <label className={errors.pageTitle ? "label-alert" : ""}>
                {errors.pageTitle?.message}
              </label>
              <input
                type="text"
                className={errors.pageTitle ? "input-alert" : ""}
                {...register("pageTitle")}
              />
            </div>

            <div className="form-group">
              <label className={errors.shortIntro ? "label-alert" : ""}>
                {errors.shortIntro?.message}
              </label>
              <textarea
                className={errors.shortIntro ? "input-alert" : ""}
                {...register("shortIntro")}
              ></textarea>
            </div>

            <div className="form-group">
              <label className={errors.ourStory ? "label-alert" : ""}>
                {errors.ourStory?.message}
              </label>
              <textarea
                className={errors.ourStory ? "input-alert" : ""}
                {...register("ourStory")}
              ></textarea>
            </div>

            <div className="form-group">
              <label className={errors.mission ? "label-alert" : ""}>
                {errors.mission?.message}
              </label>
              <textarea
                className={errors.mission ? "input-alert" : ""}
                {...register("mission")}
              ></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className={errors.vision ? "label-alert" : ""}>
                  {errors.vision?.message}
                </label>
                <textarea
                  className={errors.vision ? "input-alert" : ""}
                  {...register("vision")}
                ></textarea>
              </div>

              <div className="form-group">
                <label className={errors.values ? "label-alert" : ""}>
                  {errors.values?.message}
                </label>
                <textarea
                  className={errors.values ? "input-alert" : ""}
                  {...register("values")}
                ></textarea>
              </div>
            </div>

            <div className="form-group">
              <label>About Image</label>
              <label className="upload-box">
                <i className="bi bi-cloud-arrow-up"></i>
                Drag & drop image or click to upload
                <input type="file" accept="image/*" hidden />
              </label>
            </div>

            <div className="form-actions">
              <Link to="/dashboard/about" className="btn btn-outline">Cancel</Link>
              <button type="submit" className="btn btn-primary">
                <i className="bi bi-check-lg"></i>
                Save Changes
              </button>
            </div>

          </form>

        </section>

      </section>

    </AdminLayout>
  );
}