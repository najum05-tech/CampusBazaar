// src/components/ProductCard.jsx
export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-card-body">
        <span className="product-category">{product.category}</span>
        <h6 className="product-title">{product.title}</h6>
        <span className="product-price">Rs {product.price.toLocaleString()}</span>
      </div>
    </div>
  );
}