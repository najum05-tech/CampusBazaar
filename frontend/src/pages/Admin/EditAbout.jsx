// src/pages/Admin/EditAbout.jsx
import { Link } from "react-router-dom";
import AdminLayout from "../Admin/AdminLayout.jsx";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "../../styles/Dashboard/addproduct.css";
import "../../styles/Dashboard/product-actions.css";

// Zod Validation Schema for Edit About Form
const editAboutSchema = z.object({
  pageTitle: z.string().min(1),
  shortIntro: z.string().min(1),
  ourStory: z.string().min(1),
  mission: z.string().min(1),
  vision: z.string().min(1),
  values: z.string().min(1),
});

export default function EditAbout() {
  // Connect Zod to react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editAboutSchema),
  });

  // Function to log valid submitted data
  const handleMySubmissionFormFunction = (data) => {
    console.log("Edit About Form submitted with data:", data);
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

          <form className="product-form" onSubmit={handleSubmit(handleMySubmissionFormFunction)}>

            <div className="form-group">
              <label className={errors.pageTitle ? "label-alert" : ""}>
                {errors.pageTitle ? "Page Title is required!" : "Page Title"}
              </label>
              <input
                type="text"
                defaultValue="Who We Are"
                className={errors.pageTitle ? "input-alert" : ""}
                {...register("pageTitle")}
              />
            </div>

            <div className="form-group">
              <label className={errors.shortIntro ? "label-alert" : ""}>
                {errors.shortIntro ? "Short Intro is required!" : "Short Intro"}
              </label>
              <textarea
                defaultValue="CampusBazaar is a student marketplace built for campus life — buy, sell and exchange with people from your university."
                className={errors.shortIntro ? "input-alert" : ""}
                {...register("shortIntro")}
              ></textarea>
            </div>

            <div className="form-group">
              <label className={errors.ourStory ? "label-alert" : ""}>
                {errors.ourStory ? "Our Story is required!" : "Our Story"}
              </label>
              <textarea
                defaultValue="We started CampusBazaar to make campus trading simple and safe. Textbooks, electronics, furniture and notes should move easily between students."
                className={errors.ourStory ? "input-alert" : ""}
                {...register("ourStory")}
              ></textarea>
            </div>

            <div className="form-group">
              <label className={errors.mission ? "label-alert" : ""}>
                {errors.mission ? "Mission is required!" : "Mission"}
              </label>
              <textarea
                defaultValue="Help students save money and reduce waste by making it easy to buy and sell within their own campus."
                className={errors.mission ? "input-alert" : ""}
                {...register("mission")}
              ></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className={errors.vision ? "label-alert" : ""}>
                  {errors.vision ? "Vision is required!" : "Vision"}
                </label>
                <textarea
                  defaultValue="A trusted marketplace in every campus — where students connect, trade and support each other."
                  className={errors.vision ? "input-alert" : ""}
                  {...register("vision")}
                ></textarea>
              </div>

              <div className="form-group">
                <label className={errors.values ? "label-alert" : ""}>
                  {errors.values ? "Values are required!" : "Values"}
                </label>
                <textarea
                  defaultValue="Community, affordability, honesty and simplicity."
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