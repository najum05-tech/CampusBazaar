import '../styles/Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg campus-navbar">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand campus-logo" to="#">
          <div className="logo-icon">
            <i className="bi bi-mortarboard-fill"></i>
          </div>

          <span>
            Campus<span>Bazaar</span>
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <i className="bi bi-list"></i>
        </button>

        {/* Navigation */}
        <div className="collapse navbar-collapse" id="mainNavbar">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/browse">
                Browse
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/categories">
                Categories
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>

          </ul>

          {/* Right Actions */}
          <div className="nav-actions">

            <Link to="/cart" className="nav-icon" title="Cart">
            <i className="bi bi-cart3"></i>
            </Link>

            <button className="nav-icon">
              <i className="bi bi-search"></i>
            </button>

            <Link to="/login" className="nav-icon">
              <i className="bi bi-person"></i>
            </Link>
            <Link to="/sell" className="sell-nav-btn">
              <i className="bi bi-plus-lg"></i>
              Sell an Item
            </Link>

          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar