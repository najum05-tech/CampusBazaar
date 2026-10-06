// src/components/Footer.jsx
import { Link } from "react-router-dom";
import "../styles/footer.css";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <div className="footer-logo">
              <i className="bi bi-mortarboard-fill"></i> CampusBazaar
            </div>
            <p>Your campus marketplace to buy, sell, and exchange.</p>
          </div>

          <div className="col-6 col-md-2">
            <h6>Explore</h6>
            <ul>
              <li><Link to="/browse">Browse</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/sell">Sell an Item</Link></li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6>Company</h6>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6>Stay Updated</h6>

            <div className="footer-newsletter">
              <input type="email" placeholder="Your email" />
              <button><i className="bi bi-arrow-right"></i></button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 CampusBazaar. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}