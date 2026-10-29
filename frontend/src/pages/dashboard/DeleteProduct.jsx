import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../pages/dashboard/DashboardLayout.jsx";
import { handleDeleteProductFunction, handleGetProductFunction } from "/src/api.js";
import "../../styles/Dashboard/product-actions.css";

export default function DeleteProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    handleGetProductFunction(id)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error.response?.data?.message || error.message));
  }, [id]);

  const handleDelete = async () => {
    try {
      await handleDeleteProductFunction(id);
      navigate("/dashboard/listings");
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
    }
  };

  if (!product) {
    return <DashboardLayout activePage="listings"><section className="product-not-found"><h1>Product Not Found</h1><Link to="/dashboard/listings" className="product-primary-btn">Back to My Listings</Link></section></DashboardLayout>;
  }

  return (
    <DashboardLayout activePage="listings">
      <section className="product-page"><div className="product-page-header"><div><span className="product-page-label">MY LISTINGS</span><h1>Delete Product</h1><p>Remove this listing from your products.</p></div><Link to={`/dashboard/product/${id}`} className="product-back-btn">Back to Product</Link></div>
        <section className="delete-product-card"><h2>Delete this listing?</h2><p>Are you sure you want to delete this product? This action cannot be undone.</p><div className="delete-product-preview"><div className="delete-product-info"><span>{product.category}</span><h3>{product.title}</h3><strong>Rs {product.price.toLocaleString()}</strong></div></div><div className="delete-actions"><Link to={`/dashboard/product/${id}`} className="delete-cancel-btn">Keep Product</Link><button type="button" className="delete-confirm-btn" onClick={handleDelete}>Delete Product</button></div></section>
      </section>
    </DashboardLayout>
  );
}
