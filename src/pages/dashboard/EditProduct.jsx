import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import DashboardLayout from "../../pages/dashboard/DashboardLayout.jsx";
import { products } from "../../data/products";
import "../../styles/Dashboard/product-actions.css";

export default function EditProduct() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );


  const [title, setTitle] = useState(
    product ? product.title : ""
  );

  const [category, setCategory] = useState(
    product ? product.category : "Books"
  );

  const [price, setPrice] = useState(
    product ? product.price : ""
  );

  const [condition, setCondition] = useState("Used");

  const [listingType, setListingType] = useState("Sell");

  const [city, setCity] = useState("Abbottabad");

  const [location, setLocation] = useState(
    "Near Main Gate"
  );

  const [description, setDescription] = useState(
    "This product is available for students on CampusBazaar."
  );


  if (!product) {
    return (
      <DashboardLayout activePage="listings">

        <section className="product-not-found">

          <div className="not-found-icon">
            <i className="bi bi-box-seam"></i>
          </div>

          <h1>Product Not Found</h1>

          <p>
            The product you are trying to edit does not exist.
          </p>

          <Link
            to="/dashboard/listings"
            className="product-primary-btn"
          >
            <i className="bi bi-arrow-left"></i>
            Back to My Listings
          </Link>

        </section>

      </DashboardLayout>
    );
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Product updated successfully!");

    // Backend/database update will be added later.
  };


  return (
    <DashboardLayout activePage="listings">

      <section className="product-page">

        {/* HEADER */}

        <div className="product-page-header">

          <div>

            <span className="product-page-label">
              MY LISTINGS
            </span>

            <h1>Edit Product</h1>

            <p>
              Update the information of your listing.
            </p>

          </div>


          <Link
            to={`/dashboard/product/${product.id}`}
            className="product-back-btn"
          >
            <i className="bi bi-arrow-left"></i>
            Back to Product
          </Link>

        </div>


        {/* EDIT FORM */}

        <section className="edit-product-card">

          <div className="edit-product-top">

            <div className="edit-product-preview">

              <img
                src={product.image}
                alt={product.title}
              />

            </div>

            <div>

              <span className="view-product-category">
                {product.category}
              </span>

              <h2>{product.title}</h2>

              <p>
                Update the details below and save
                your changes.
              </p>

            </div>

          </div>


          <form
            className="edit-product-form"
            onSubmit={handleSubmit}
          >

            {/* TITLE */}

            <div className="edit-form-group">

              <label>Product Title</label>

              <input
                type="text"
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
                placeholder="Enter product title"
              />

            </div>


            {/* CATEGORY + CONDITION */}

            <div className="edit-form-row">

              <div className="edit-form-group">

                <label>Category</label>

                <select
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value)
                  }
                >

                  <option>Books</option>
                  <option>Electronics</option>
                  <option>Furniture</option>
                  <option>Notes</option>

                </select>

              </div>


              <div className="edit-form-group">

                <label>Condition</label>

                <select
                  value={condition}
                  onChange={(e) =>
                    setCondition(e.target.value)
                  }
                >

                  <option>New</option>
                  <option>Like New</option>
                  <option>Used</option>

                </select>

              </div>

            </div>


            {/* LISTING TYPE + PRICE */}

            <div className="edit-form-row">

              <div className="edit-form-group">

                <label>Listing Type</label>

                <select
                  value={listingType}
                  onChange={(e) =>
                    setListingType(e.target.value)
                  }
                >

                  <option>Sell</option>
                  <option>Exchange</option>

                </select>

              </div>


              <div className="edit-form-group">

                <label>Price (Rs)</label>

                <input
                  type="number"
                  value={price}
                  onChange={(e) =>
                    setPrice(e.target.value)
                  }
                />

              </div>

            </div>


            {/* CITY + LOCATION */}

            <div className="edit-form-row">

              <div className="edit-form-group">

                <label>City</label>

                <select
                  value={city}
                  onChange={(e) =>
                    setCity(e.target.value)
                  }
                >

                  <option>Abbottabad</option>
                  <option>Islamabad</option>
                  <option>Lahore</option>
                  <option>Karachi</option>

                </select>

              </div>


              <div className="edit-form-group">

                <label>Location</label>

                <input
                  type="text"
                  value={location}
                  onChange={(e) =>
                    setLocation(e.target.value)
                  }
                  placeholder="e.g. Hostel Block A"
                />

              </div>

            </div>


            {/* DESCRIPTION */}

            <div className="edit-form-group">

              <label>Description</label>

              <textarea
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                placeholder="Describe your product..."
              ></textarea>

            </div>


            {/* IMAGE */}

            <div className="edit-form-group">

              <label>Product Image</label>

              <div className="edit-image-upload">

                <img
                  src={product.image}
                  alt={product.title}
                />

                <div>

                  <strong>Current product image</strong>

                  <p>
                    You can replace this image when
                    image storage is connected.
                  </p>

                  <button
                    type="button"
                    className="change-image-btn"
                  >
                    <i className="bi bi-image"></i>
                    Change Image
                  </button>

                </div>

              </div>

            </div>


            {/* BUTTONS */}

            <div className="edit-form-actions">

              <Link
                to={`/dashboard/product/${product.id}`}
                className="edit-cancel-btn"
              >
                Cancel
              </Link>


              <button
                type="submit"
                className="edit-save-btn"
              >
                <i className="bi bi-check-lg"></i>
                Save Changes
              </button>

            </div>

          </form>

        </section>

      </section>

    </DashboardLayout>
  );
}