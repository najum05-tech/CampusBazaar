import { useState } from "react";
import "../../styles/Dashboard/addproduct.css";

export default function AddProduct() {
  const [images, setImages] = useState([]);

  const handleImages = (e) => {
    setImages([...e.target.files]);
  };

  return (
    <div className="dashboard-page">

      <aside className="dashboard-sidebar">
        <div>
          <a className="navbar-brand dashboard-logo" href="#">
            <div className="logo-icon">
              <i className="bi bi-mortarboard-fill"></i>
            </div>
            <span>Campus<span>Bazaar</span></span>
          </a>

          <nav className="dashboard-nav">
            <a href="/dashboard" className="dashboard-nav-item">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
            <a href="/dashboard/listings" className="dashboard-nav-item">
              <i className="bi bi-bag"></i>
              <span>My Listings</span>
            </a>
            <a href="/dashboard/add-product" className="dashboard-nav-item active">
              <i className="bi bi-plus-square"></i> 
              <span>Add Product</span>
            </a>
            <a href="#" className="dashboard-nav-item">
              <i className="bi bi-chat-square-text"></i>
              <span>Messages</span>
            </a>
            <a href="#" className="dashboard-nav-item">
              <i className="bi bi-gear"></i>
              <span>Settings</span>
            </a>
          </nav>
        </div>

        <a href="/" className="dashboard-nav-item logout-item">
          <i className="bi bi-box-arrow-left"></i>
          <span>Log out</span>
        </a>
      </aside>

      <main className="dashboard-main">

        <header className="dashboard-header">
          <div className="dashboard-search">
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Search for products, categories..." />
          </div>

          <div className="dashboard-header-right">
            <button className="notification-button">
              <i className="bi bi-bell"></i>
              <span></span>
            </button>
            <div className="dashboard-user">
              <div className="user-avatar">MN</div>
              <div className="user-name">Muhammad Najmuddin</div>
              <i className="bi bi-chevron-down"></i>
            </div>
          </div>
        </header>

        <div className="dashboard-content">

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
                <button type="button" className="btn btn-outline">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  <i className="bi bi-check-lg"></i>
                  Publish Listing
                </button>
              </div>

            </form>

          </section>

        </div>

      </main>

    </div>
  );
}