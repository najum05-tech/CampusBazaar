// src/pages/Dashboard/AddProduct.jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DashboardLayout from "../../pages/dashboard/DashboardLayout.jsx";
import "../../styles/Dashboard/addproduct.css";
import {handleMyAddProductFunction} from "/src/api.js";
import { useNavigate } from "react-router-dom";

// Zod Validation Schema for Add Product Form
const productSchema = z.object({
  title: z.string().min(1, "Product title is required"),

  category: z.enum(
    ["Books", "Electronics", "Furniture", "Notes"],
    { error: "Please select a category" }
  ),

  condition: z.enum(
    ["New", "Like New", "Used"],
    { error: "Please select a condition" }
  ),

  listingType: z.enum(
    ["Sell", "Exchange"],
    { error: "Please select a listing type" }
  ),

  price: z.coerce.number().min(0, "Price must be a valid number"),

  city: z.enum(
    ["Abbottabad", "Islamabad", "Lahore", "Karachi"],
    { error: "Please select a city" }
  ),

  university: z.enum(
    [
      "COMSATS University Islamabad",
      "University of Abbottabad",
      "Other"
    ],
    { error: "Please select a university" }
  ),

  campus: z.enum(
    ["Abbottabad Campus", "Islamabad Campus", "Other"],
    { error: "Please select a campus" }
  ),

  location: z.string().min(1, "Location is required"),

  description: z.string().min(1, "Description is required"),

});


export default function AddProduct() {
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  const handleImages = (e) => {
    setImages([...e.target.files]);
  };

  async function handleMySubmissionFormFunction(data) {
    try {
        const imageData = await Promise.all(
          images.map((image) => new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(image);
          }))
        );
        await handleMyAddProductFunction({ ...data, images: imageData });
        navigate("/dashboard/listings");
    } catch (error) {
        console.error(
            error.response?.data?.message || error.message
        );
    }
}

  return (
    <DashboardLayout activePage="add-product">

      <section className="product-form-card">

        <h1>Add New Product</h1>
        <p>List an item for other students to discover.</p>

        <form className="product-form" onSubmit={handleSubmit(handleMySubmissionFormFunction)}>

          <div className="form-group">
            <label>Product Title</label>
            <input
              type="text"
              placeholder="e.g. Scientific Calculator - Casio fx-991"
              {...register("title")}
            />
            {errors.title && <p className="error">{errors.title?.message}</p>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Category</label>
              <select {...register("category")}>
                <option value="">Select category</option>
                <option>Books</option>
                <option>Electronics</option>
                <option>Furniture</option>
                <option>Notes</option>
              </select>
              {errors.category && <p className="error">{errors.category?.message}</p>}
            </div>

            <div className="form-group">
              <label>Condition</label>
              <select {...register("condition")}>
                <option value="">Select condition</option>
                <option>New</option>
                <option>Like New</option>
                <option>Used</option>
              </select>
              {errors.condition && <p className="error">{errors.condition?.message}</p>}
            </div>
          </div>

          <div className="form-group">
            <label>Listing Type</label>
            <select {...register("listingType")}>
              <option value="">Select type</option>
              <option>Sell</option>
              <option>Exchange</option>
            </select>
            {errors.listingType && <p className="error">{errors.listingType?.message}</p>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Price (Rs)</label>
              <input
                type="number"
                placeholder="0.00"
                {...register("price")}
              />
              {errors.price && <p className="error">{errors.price?.message}</p>}
            </div>

            <div className="form-group">
              <label>City</label>
              <select {...register("city")}>
                <option value="">Select city</option>
                <option>Abbottabad</option>
                <option>Islamabad</option>
                <option>Lahore</option>
                <option>Karachi</option>
              </select>
              {errors.city && <p className="error">{errors.city?.message}</p>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>University / College / School</label>
              <select {...register("university")}>
                <option value="">Select university</option>
                <option>COMSATS University Islamabad</option>
                <option>University of Abbottabad</option>
                <option>Other</option>
              </select>
              {errors.university && <p className="error">{errors.university?.message}</p>}
            </div>

            <div className="form-group">
              <label>Campus</label>
              <select {...register("campus")}>
                <option value="">Select campus</option>
                <option>Abbottabad Campus</option>
                <option>Islamabad Campus</option>
                <option>Other</option>
              </select>
              {errors.campus && <p className="error">{errors.campus?.message}</p>}
            </div>
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              placeholder="e.g. Hostel Block A / Near Main Gate"
              {...register("location")}
            />
            {errors.location && <p className="error">{errors.location?.message}</p>}
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              placeholder="Describe your item..."
              {...register("description")}
            ></textarea>
            {errors.description && <p className="error">{errors.description?.message}</p>}
          </div>

          <div className="form-group">
            <label>Product Images</label>
            <label className="upload-box">
              <i className="bi bi-cloud-arrow-up"></i>
              {images.length
                ? `${images.length} file(s) selected`
                : "Drag & drop images or click to upload"}
              <input
                type="file"
                multiple
                accept="image/*"
                hidden
                {...register("images")}
                onChange={(e) => {
                  handleImages(e);
                }}
              />
            </label>
            {errors.images && <p className="error">{errors.images?.message}</p>}
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-outline">Cancel</button>
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-check-lg"></i>
              Publish Listing
            </button>
          </div>

        </form>

      </section>

    </DashboardLayout>
  );
}
