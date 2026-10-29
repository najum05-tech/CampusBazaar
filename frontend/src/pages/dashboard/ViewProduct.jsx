import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DashboardLayout from "../../pages/dashboard/DashboardLayout.jsx";
import { handleGetProductFunction } from "/src/api.js";
import "../../styles/Dashboard/product-actions.css";

export default function ViewProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    handleGetProductFunction(id)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error.response?.data?.message || error.message));
  }, [id]);

  if (!product) {
    return <DashboardLayout activePage="listings"><section className="product-not-found"><h1>Product Not Found</h1><Link to="/dashboard/listings" className="product-primary-btn">Back to My Listings</Link></section></DashboardLayout>;
  }

  return (
    <DashboardLayout activePage="listings">
      <section className="product-page">
        <div className="product-page-header"><div><span className="product-page-label">MY LISTINGS</span><h1>View Product</h1><p>View the complete details of your listing.</p></div><Link to="/dashboard/listings" className="product-back-btn">Back to Listings</Link></div>
        <div className="view-product-card">
          <div className="view-product-image">{product.images?.[0] && <img src={product.images[0]} alt={product.title} />}</div>
          <div className="view-product-details">
            <div className="product-status-row"><span className="product-active-status">Active Listing</span><span className="product-id">ID #{product._id}</span></div>
            <span className="view-product-category">{product.category}</span><h2>{product.title}</h2><div className="view-product-price">Rs {product.price.toLocaleString()}</div><div className="view-product-divider"></div>
            <div className="product-info-grid"><div className="product-info-item"><span>Category</span><strong>{product.category}</strong></div><div className="product-info-item"><span>Listing Type</span><strong>{product.listingType}</strong></div><div className="product-info-item"><span>Condition</span><strong>{product.condition}</strong></div><div className="product-info-item"><span>Location</span><strong>{product.location}</strong></div></div>
            <div className="product-description"><h3>Description</h3><p>{product.description}</p></div>
            <div className="product-action-buttons"><Link to={`/dashboard/product/${product._id}/edit`} className="product-edit-btn">Edit Product</Link><Link to={`/dashboard/product/${product._id}/delete`} className="product-delete-btn">Delete</Link></div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
