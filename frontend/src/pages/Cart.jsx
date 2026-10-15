// src/pages/Cart.jsx
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import { products } from "../data/products";
import "../styles/cart.css";

export default function Cart() {
  const cartItems = products.slice(0, 3);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Navbar />

      <main className="cart-page">

        <section className="cart-hero">
          <div className="container">
            <span className="section-label">YOUR CART</span>
            <h1 className="section-title">Shopping Cart</h1>
            <p className="section-subtitle">
              Review your items and complete checkout to confirm your order.
            </p>
          </div>
        </section>

        <section className="cart-section">
          <div className="container">
            <div className="cart-grid">

              {/* CART ITEMS */}
              <div className="cart-items-card">
                <h2>Cart Items ({cartItems.length})</h2>

                <div className="cart-items-list">
                  {cartItems.map((item) => (
                    <div className="cart-item" key={item.id}>
                      <div className="cart-item-image">
                        <img src={item.image} alt={item.title} />
                      </div>

                      <div className="cart-item-info">
                        <span className="cart-item-category">{item.category}</span>
                        <h3>{item.title}</h3>
                        <strong>Rs {item.price.toLocaleString()}</strong>
                      </div>

                      <button type="button" className="cart-item-remove" title="Remove">
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  ))}
                </div>

                <div className="cart-summary-row">
                  <span>Subtotal</span>
                  <strong>Rs {subtotal.toLocaleString()}</strong>
                </div>
              </div>

              {/* CHECKOUT FORM */}
              <div className="checkout-form-card">
                <h2>Checkout</h2>
                <p>Enter your details to complete the order.</p>

                <form className="checkout-form">

                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Your full name" />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="you@example.com" />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+92 300 0000000" />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>City</label>
                      <select defaultValue="Abbottabad">
                        <option>Abbottabad</option>
                        <option>Islamabad</option>
                        <option>Lahore</option>
                        <option>Karachi</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Campus</label>
                      <select defaultValue="Abbottabad Campus">
                        <option>Abbottabad Campus</option>
                        <option>Islamabad Campus</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Meetup / Delivery Location</label>
                    <input type="text" placeholder="e.g. Hostel Block A / Near Main Gate" />
                  </div>

                  <div className="form-group">
                    <label>Payment Method</label>
                    <select defaultValue="Cash on Meetup">
                      <option>Cash on Meetup</option>
                      <option>Bank Transfer</option>
                      <option>JazzCash</option>
                      <option>EasyPaisa</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Order Notes (optional)</label>
                    <textarea placeholder="Any special instructions..."></textarea>
                  </div>

                  <div className="checkout-total">
                    <span>Total</span>
                    <strong>Rs {subtotal.toLocaleString()}</strong>
                  </div>

                  <button type="submit" className="checkout-submit-btn">
                    <span>Place Order</span>
                    <i className="bi bi-arrow-right"></i>
                  </button>

                  <Link to="/" className="checkout-continue-link">
                    Continue Shopping
                  </Link>

                </form>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}