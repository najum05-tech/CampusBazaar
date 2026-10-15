// src/components/Categories.jsx
import { categories } from "../data/categories.js";
import "../styles/products.css";

export default function Categories() {
  return (
    <section className="section categories-section">
      <div className="container">
        <div className="section-head text-center mx-auto">
          <div className="section-label">Browse</div>
          <h2 className="section-title">Popular Categories</h2>
        </div>

        <div className="categories-grid">
          {categories.map((cat) => (
            <div className="category-card" key={cat.name}>
              <i className={`bi ${cat.icon}`}></i>
              <span>{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}