
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import { handleGetProductsFunction } from "../api";

import "../styles/products.css";
import "../styles/browse.css";

export default function Browse() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch products from MongoDB when the page loads
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await handleGetProductsFunction();

        setProducts(
          Array.isArray(response.data) ? response.data : []
        );
      } catch (err) {
        console.error("Error fetching products:", err);

        setError(
          err.response?.data?.message ||
          "Unable to load products. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />

      <main className="browse-page">
        <div className="container">

          {/* Page Heading */}
          <div className="browse-heading">
            <span className="browse-label">
              CAMPUS MARKETPLACE
            </span>

            <h1>Browse Products</h1>

            <p>
              Discover products listed by students from different
              universities and campuses.
            </p>
          </div>

          {/* Results Heading */}
          {!loading && !error && products.length > 0 && (
            <div className="browse-results">
              <div>
                <h5>All Products</h5>
                <p>Find something useful for your campus life.</p>
              </div>

              <span className="browse-count">
                {products.length} products found
              </span>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="browse-message">
              <div
                className="spinner-border browse-spinner"
                role="status"
              >
                <span className="visually-hidden">
                  Loading...
                </span>
              </div>

              <p>Loading products...</p>
            </div>
          )}

          {/* Error State */}
          {!loading && error && (
            <div className="browse-message browse-error">
              <i className="bi bi-exclamation-circle"></i>

              <h5>Something went wrong</h5>

              <p>{error}</p>

              <button
                className="browse-retry-btn"
                onClick={() => window.location.reload()}
              >
                Try Again
              </button>
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && products.length === 0 && (
            <div className="browse-message">
              <i className="bi bi-box-seam"></i>

              <h5>No products available</h5>

              <p>
                There are no products listed yet.
                Be the first one to add a product!
              </p>
            </div>
          )}

          {/* Products Grid */}
          {!loading && !error && products.length > 0 && (
            <div className="row g-3">
              {products.map((product) => (
                <div
                  className="col-6 col-md-4 col-lg-3"
                  key={product._id}
                >
                  <ProductCard
                    product={{
                      ...product,
                      image: product.images?.[0] || "",
                    }}
                  />
                </div>
              ))}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
