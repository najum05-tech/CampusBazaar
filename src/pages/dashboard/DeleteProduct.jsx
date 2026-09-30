import { Link, useParams } from "react-router-dom";

import DashboardLayout from "../../pages/dashboard/DashboardLayout.jsx";
import { products } from "../../data/products";
import "../../styles/Dashboard/product-actions.css";

export default function DeleteProduct() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
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
            The product you are trying to delete does not exist.
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


  const handleDelete = () => {

    alert(
      `"${product.title}" would be deleted here.`
    );

    // Actual deletion will be connected
    // when the backend/database is added.
  };


  return (
    <DashboardLayout activePage="listings">

      <section className="product-page">

        <div className="product-page-header">

          <div>

            <span className="product-page-label">
              MY LISTINGS
            </span>

            <h1>Delete Product</h1>

            <p>
              Remove this listing from your products.
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


        {/* DELETE CARD */}

        <section className="delete-product-card">

          <div className="delete-warning-icon">
            <i className="bi bi-trash3"></i>
          </div>


          <h2>Delete this listing?</h2>


          <p className="delete-warning-text">
            Are you sure you want to delete this product?
            This action cannot be undone.
          </p>


          {/* PRODUCT PREVIEW */}

          <div className="delete-product-preview">

            <div className="delete-product-image">

              <img
                src={product.image}
                alt={product.title}
              />

            </div>


            <div className="delete-product-info">

              <span>
                {product.category}
              </span>

              <h3>
                {product.title}
              </h3>
              <strong>
                Rs {product.price.toLocaleString()}
              </strong>

            </div>

          </div>


          {/* WARNING */}

          <div className="delete-warning-box">

            <i className="bi bi-exclamation-triangle"></i>

            <div>

              <strong>
                Please note
              </strong>

              <p>
                Deleting this listing will remove it
                from your marketplace listings.
              </p>

            </div>

          </div>


          {/* ACTIONS */}

          <div className="delete-actions">

            <Link
              to={`/dashboard/product/${product.id}`}
              className="delete-cancel-btn"
            >
              Keep Product
            </Link>


            <button
              type="button"
              className="delete-confirm-btn"
              onClick={handleDelete}
            >
              <i className="bi bi-trash3"></i>
              Delete Product
            </button>

          </div>

        </section>

      </section>

    </DashboardLayout>
  );
}