import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "../../pages/dashboard/DashboardLayout.jsx";
import { handleEditProductFunction, handleGetProductFunction } from "/src/api.js";
import "../../styles/Dashboard/product-actions.css";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    handleGetProductFunction(id)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error.response?.data?.message || error.message));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleEditProductFunction(id, product);
      navigate(`/dashboard/product/${id}`);
    } catch (error) {
      console.error(error.response?.data?.message || error.message);
    }
  };

  const handleChange = (e) => setProduct({ ...product, [e.target.name]: e.target.value });

  if (!product) {
    return <DashboardLayout activePage="listings"><section className="product-not-found"><h1>Product Not Found</h1><Link to="/dashboard/listings" className="product-primary-btn">Back to My Listings</Link></section></DashboardLayout>;
  }

  return (
    <DashboardLayout activePage="listings">
      <section className="product-page">
        <div className="product-page-header"><div><span className="product-page-label">MY LISTINGS</span><h1>Edit Product</h1><p>Update the information of your listing.</p></div><Link to={`/dashboard/product/${id}`} className="product-back-btn">Back to Product</Link></div>
        <section className="edit-product-card">
          <form className="edit-product-form" onSubmit={handleSubmit}>
            <div className="edit-form-group"><label>Product Title</label><input name="title" value={product.title} onChange={handleChange} /></div>
            <div className="edit-form-row"><div className="edit-form-group"><label>Category</label><select name="category" value={product.category} onChange={handleChange}><option>Books</option><option>Electronics</option><option>Furniture</option><option>Notes</option></select></div><div className="edit-form-group"><label>Condition</label><select name="condition" value={product.condition} onChange={handleChange}><option>New</option><option>Like New</option><option>Used</option></select></div></div>
            <div className="edit-form-row"><div className="edit-form-group"><label>Listing Type</label><select name="listingType" value={product.listingType} onChange={handleChange}><option>Sell</option><option>Exchange</option></select></div><div className="edit-form-group"><label>Price (Rs)</label><input type="number" name="price" value={product.price} onChange={handleChange} /></div></div>
            <div className="edit-form-row"><div className="edit-form-group"><label>City</label><select name="city" value={product.city} onChange={handleChange}><option>Abbottabad</option><option>Islamabad</option><option>Lahore</option><option>Karachi</option></select></div><div className="edit-form-group"><label>Location</label><input name="location" value={product.location} onChange={handleChange} /></div></div>
            <div className="edit-form-group"><label>Description</label><textarea name="description" value={product.description} onChange={handleChange}></textarea></div>
            <div className="edit-form-actions"><Link to={`/dashboard/product/${id}`} className="edit-cancel-btn">Cancel</Link><button type="submit" className="edit-save-btn">Save Changes</button></div>
          </form>
        </section>
      </section>
    </DashboardLayout>
  );
}
