// src/pages/Dashboard/AddProduct.jsx
import { useState } from "react";
import DashboardLayout from "../../pages/dashboard/DashboardLayout.jsx";
import "../../styles/Dashboard/addproduct.css";

export default function AddProduct() {
  const [images, setImages] = useState([]);

  const handleImages = (e) => {
    setImages([...e.target.files]);
  };

  return (
    <DashboardLayout activePage="add-product">

      <section className="product-form-card">

        <h1>Add New Product</h1>
        <p>List an item for other students to discover.</p>

        <form className="product-form">

          <div className="form-group">
            <label>Product Title</label>
            <input type="text" placeholder="e.g. Scientific Calculator - Casio fx-991" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Category</label>
              <select>
                <option>Books</option>

                <option>Electronics</option>
                <option>Furniture</option>
                <option>Notes</option>
              </select>
            </div>

            <div className="form-group">
              <label>Condition</label>
              <select>
                <option>New</option>
                <option>Like New</option>
                <option>Used</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Listing Type</label>
            <select>
              <option>Sell</option>
              <option>Exchange</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Price (Rs)</label>
              <input type="number" placeholder="0.00" />
            </div>

            <div className="form-group">
              <label>City</label>

              <select>
                <option>Abbottabad</option>
                <option>Islamabad</option>
                <option>Lahore</option>
                <option>Karachi</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>University / College / School</label>
              <select>
                <option>COMSATS University Islamabad</option>
                <option>University of Abbottabad</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Campus</label>
              <select>
                <option>Abbottabad Campus</option>
                <option>Islamabad Campus</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Location</label>
            <input type="text" placeholder="e.g. Hostel Block A / Near Main Gate" />

          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea placeholder="Describe your item..."></textarea>
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
                onChange={handleImages}
                hidden
              />
            </label>
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