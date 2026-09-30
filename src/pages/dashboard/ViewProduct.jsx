import { Link, useParams } from "react-router-dom";
import DashboardLayout from "../../pages/dashboard/DashboardLayout.jsx";
import { products } from "../../data/products";
import "../../styles/Dashboard/product-actions.css";

export default function ViewProduct() {
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
            The product you are looking for does not exist.
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

  return (
    <DashboardLayout activePage="listings">

      <section className="product-page">

        {/* PAGE HEADER */}

        <div className="product-page-header">

          <div>
            <span className="product-page-label">
              MY LISTINGS
            </span>

            <h1>View Product</h1>

            <p>
              View the complete details of your listing.
            </p>
          </div>

          <Link
            to="/dashboard/listings"
            className="product-back-btn"
          >
            <i className="bi bi-arrow-left"></i>
            Back to Listings
          </Link>

        </div>


        {/* PRODUCT */}

        <div className="view-product-card">

          {/* IMAGE */}

          <div className="view-product-image">

            <img
              src={product.image}
              alt={product.title}
            />

          </div>


          {/* DETAILS */}

          <div className="view-product-details">

            <div className="product-status-row">

              <span className="product-active-status">
                <i className="bi bi-check-circle-fill"></i>
                Active Listing
              </span>

              <span className="product-id">
                ID #{product.id}
              </span>

            </div>


            <span className="view-product-category">
              {product.category}
            </span>


            <h2>{product.title}</h2>


            <div className="view-product-price">
              Rs {product.price.toLocaleString()}
            </div>


            <div className="view-product-divider"></div>


            {/* PRODUCT INFO */}

            <div className="product-info-grid">

              <div className="product-info-item">
                <span>Category</span>
                <strong>{product.category}</strong>
              </div>

              <div className="product-info-item">
                <span>Listing Type</span>
                <strong>Sell</strong>
              </div>

              <div className="product-info-item">
                <span>Condition</span>
                <strong>Used</strong>
              </div>

              <div className="product-info-item">
                <span>Location</span>
                <strong>Abbottabad</strong>
              </div>

            </div>


            {/* DESCRIPTION */}

            <div className="product-description">

              <h3>Description</h3>

              <p>
                This product is listed on CampusBazaar
                for students. Contact the seller through
                CampusBazaar to discuss availability,
                condition and meeting details.
              </p>

            </div>


            {/* ACTIONS */}

            <div className="product-action-buttons">

              <Link
                to={`/dashboard/product/${product.id}/edit`}
                className="product-edit-btn"
              >
                <i className="bi bi-pencil"></i>
                Edit Product
              </Link>


              <Link
                to={`/dashboard/product/${product.id}/delete`}
                className="product-delete-btn"
              >
                <i className="bi bi-trash"></i>
                Delete
              </Link>

            </div>

          </div>

        </div>

      </section>

    </DashboardLayout>
  );
}