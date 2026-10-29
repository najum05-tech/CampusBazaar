import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../../pages/dashboard/DashboardLayout.jsx";
import { handleGetProductsFunction } from "/src/api.js";

export default function MyListings() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    handleGetProductsFunction()
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error.response?.data?.message || error.message));
  }, []);

  return (
    <DashboardLayout activePage="listings">
      <section className="dashboard-section">
        <div className="section-top">
          <h2>My Listings</h2>
          <Link to="/dashboard/add-product">Add Product <i className="bi bi-plus"></i></Link>
        </div>
        <div className="dashboard-products">
          {products.map((product) => (
            <div className="dashboard-product" key={product._id}>
              <div className="dashboard-product-image">
                {product.images?.[0] && <img src={product.images[0]} alt={product.title} />}
                <Link to={`/dashboard/product/${product._id}`} className="product-more"><i className="bi bi-three-dots"></i></Link>
              </div>
              <div className="dashboard-product-info">
                <h3>{product.title}</h3>
                <strong>Rs {product.price.toLocaleString()}</strong>
                <div className="listing-bottom">
                  <span className="listing-status">Active</span>
                  <div className="listing-actions">
                    <Link to={`/dashboard/product/${product._id}`} title="View Product"><i className="bi bi-eye"></i></Link>
                    <Link to={`/dashboard/product/${product._id}/edit`} title="Edit Product"><i className="bi bi-pencil"></i></Link>
                    <Link to={`/dashboard/product/${product._id}/delete`} title="Delete Product" className="delete-action"><i className="bi bi-trash"></i></Link>
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
