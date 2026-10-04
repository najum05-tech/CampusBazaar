import '../styles/Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg campus-navbar">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand campus-logo" href="#">
          <div className="logo-icon">
            <i className="bi bi-mortarboard-fill"></i>
          </div>

          <span>
            Campus<span>Bazaar</span>
          </span>
        </a>

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
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Browse
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Categories
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/profile">
                Profile
              </a>
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
            <a href="#" className="sell-nav-btn">
              <i className="bi bi-plus-lg"></i>
              Sell an Item
            </a>

          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar