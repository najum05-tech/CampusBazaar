// src/pages/dashboard/MyListings.jsx
import { Link } from "react-router-dom";
import DashboardLayout from "../../pages/dashboard/DashboardLayout.jsx";
import { products } from "../../data/products";

export default function MyListings() {
  return (
    <DashboardLayout activePage="listings">

      <section className="dashboard-section">
        <div className="section-top">
          <h2>My Listings</h2>
          <Link to="/dashboard/add-product">
            Add Product <i className="bi bi-plus"></i>
          </Link>
        </div>

        <div className="dashboard-products">

          {products.map((product) => (
            <div className="dashboard-product" key={product.id}>

              <div className="dashboard-product-image">
                <img src={product.image} alt={product.title} />

                <Link
                  to={`/dashboard/product/${product.id}`}
                  className="product-more"
                >
                  <i className="bi bi-three-dots"></i>
                </Link>
              </div>

              <div className="dashboard-product-info">

                <h3>{product.title}</h3>

                <strong>
                  Rs {product.price.toLocaleString()}
                </strong>

                <div className="product-views">
                  <span>
                    <i className="bi bi-eye"></i>
                    {28 + product.id * 4} views
                  </span>
                </div>

                <div className="listing-bottom">

                  <span className="listing-status">
                    Active
                  </span>

                  <div className="listing-actions">

                    <Link
                      to={`/dashboard/product/${product.id}`}
                      title="View Product"
                    >
                      <i className="bi bi-eye"></i>
                    </Link>

                    <Link
                      to={`/dashboard/product/${product.id}/edit`}
                      title="Edit Product"
                    >
                      <i className="bi bi-pencil"></i>
                    </Link>

                    <Link
                      to={`/dashboard/product/${product.id}/delete`}
                      title="Delete Product"
                      className="delete-action"
                    >
                      <i className="bi bi-trash"></i>
                    </Link>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>
      </section>

    </DashboardLayout>
  );
}