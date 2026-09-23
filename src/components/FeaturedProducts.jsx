// src/components/FeaturedProducts.jsx
import { products } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";
import "../styles/products.css";

export default function FeaturedProducts() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head d-flex justify-content-between align-items-end">
          <div>
            <div className="section-label">Marketplace</div>
            <h2 className="section-title">Featured Listings</h2>
          </div>
          <a href="/browse" className="view-all-link">
            View all <i className="bi bi-arrow-right"></i>
          </a>
        </div>

        <div className="row g-4">
          {products.map((p) => (
            <div className="col-6 col-md-3" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}