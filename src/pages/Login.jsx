import { useState } from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";

// import logo from "../assets/images/logo.png";
import campusHero from "../assets/images/campus-hero.png";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">

      {/* LEFT SIDE */}
      <div className="login-left">

        <div className="login-content">

         {/* Logo */}
        <Link className="navbar-brand campus-logo" to="#">
          <div className="logo-icon">
            <i className="bi bi-mortarboard-fill"></i>
          </div>
          <span>
            Campus<span>Bazaar</span>
          </span>
        </Link>
          {/* Heading */}
          <div className="login-heading">
            <h1>Welcome back</h1>

            <p>
              Log in to your account and continue your journey
              with CampusBazaar.
            </p>
          </div>

          {/* Login Form */}
          <form className="login-form" method="POST">

            {/* Email */}
            <div className="input-group-custom">
              <i className="bi bi-envelope"></i>
              <input
                type="email"
                placeholder="Email address"
              />
            </div>

            {/* Password */}
            <div className="input-group-custom">
              <i className="bi bi-lock"></i>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={
                    showPassword
                      ? "bi bi-eye"
                      : "bi bi-eye-slash"
                  }
                ></i>
              </button>
            </div>

            {/* Forgot Password */}
            <a href="#" className="forgot-password">
              Forgot password?
            </a>

            {/* Login Button */}
            <button
              type="button"
              className="login-button"
              onClick={() => {
              window.location.href = "/dashboard";
             }}
            >
            <span>Log in</span>
              <i className="bi bi-arrow-right"></i>
            </button>

          </form>

          {/* Sign Up */}
          <p className="signup-text">
            Don't have an account?

          <Link to="/signup">
            Sign up
         </Link>
         </p>

        </div>

        {/* Footer */}
        <div className="login-footer">

          <span>
            © 2025 CampusBazaar. All rights reserved.
          </span>

          <div className="footer-links">
            <Link to="#">English</Link>
            <i className="bi bi-chevron-down"></i>

            <span className="footer-divider"></span>

            <Link to="#">Contact Us</Link>

            <span className="footer-divider"></span>

            <Link to="#">Help</Link>
          </div>

        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="login-right">

        <div className="login-hero-content">

          <h2>
            Buy. Sell. Connect.
          </h2>

          <p>
            Your campus marketplace for books,
            electronics, notes and more.
          </p>

        </div>

        {/* Decorative background */}
        <div className="hero-shape"></div>

        {/* Campus Image */}
        <div className="login-image">
          <img
            src={campusHero}
            alt="CampusBazaar marketplace"
          />
        </div>

        {/* Decorative icons */}
        <div className="floating-icon book-icon">
          <i className="bi bi-book"></i>
        </div>

        <div className="floating-icon laptop-icon">
          <i className="bi bi-laptop"></i>
        </div>

        <div className="floating-icon bag-icon">
          <i className="bi bi-backpack"></i>
        </div>

      </div>

    </div>
  );
}