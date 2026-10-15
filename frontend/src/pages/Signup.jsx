import { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/signup.css";
import { Link } from "react-router-dom";
// import logo from "../assets/images/logo.png";
import marketplaceImage from "../assets/images/signup-marketplace.png";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleMySubmissionFormFunction = (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <div className="signup-page">

      {/* ================= LEFT SIDE ================= */}

      <div className="signup-left">

        <div className="signup-content">

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
          <div className="signup-heading">
            <h1>Create your account</h1>

            <p>
              Join CampusBazaar and be part of a growing
              campus community.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(handleMySubmissionFormFunction)}
            className="signup-form"
            method="POST"
          >

            {/* Full Name */}
            <div className="signup-input">
              <i className="bi bi-person"></i>

              <input
                type="text"
                placeholder="Full name"
                {...register("fullName", { required: "Full Name is required" })}
              />
              {errors.fullName && (
                <span className="error-message">{errors.fullName.message}</span>
              )}
            </div>

            {/* Email */}
            <div className="signup-input">
              <i className="bi bi-envelope"></i>

              <input
                type="email"
                placeholder="Email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </div>

            {/* Password */}
            <div className="signup-input">

              <i className="bi bi-lock"></i>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />

              <button
                type="button"
                className="signup-password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                <i
                  className={
                    showPassword
                      ? "bi bi-eye"
                      : "bi bi-eye-slash"
                  }
                ></i>
              </button>

              {errors.password && (
                <span className="error-message">{errors.password.message}</span>
              )}

            </div>

            {/* Confirm Password */}
            <div className="signup-input">

              <i className="bi bi-lock"></i>

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                placeholder="Confirm password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />

              <button
                type="button"
                className="signup-password-toggle"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
              >
                <i
                  className={
                    showConfirmPassword
                      ? "bi bi-eye"
                      : "bi bi-eye-slash"
                  }
                ></i>
              </button>

              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword.message}</span>
              )}

            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="signup-button"
            >
              <span>Sign up</span>
              <i className="bi bi-arrow-right"></i>
            </button>

          </form>

          {/* Login */}
          <p className="already-account">
            Already have an account?

            <Link to="/login">
              Log in
            </Link>
          </p>

        </div>


        {/* Footer */}

        <div className="signup-footer">

          <span>
            © 2025 CampusBazaar. All rights reserved.
          </span>

          <div className="signup-footer-links">

            <Link to="#">English</Link>

            <i className="bi bi-chevron-down"></i>

            <span className="signup-divider"></span>

            <Link to="#">Contact Us</Link>

            <span className="signup-divider"></span>

            <Link to="#">Help</Link>

          </div>

        </div>

      </div>


      {/* ================= RIGHT SIDE ================= */}

      <div className="signup-right">

        <div className="signup-hero-content">

          <h2>
            More than just a
            <br />
            marketplace.
          </h2>

          <p>
            Buy, sell, connect and make the most
            <br />
            of your campus life.
          </p>

        </div>


        {/* Background Shape */}

        <div className="signup-shape"></div>


        {/* Marketplace Image */}

        <div className="signup-marketplace-image">
          <img
            src={marketplaceImage}
            alt="CampusBazaar marketplace"
          />
        </div>


        {/* Decorative Icons */}

        <div className="signup-floating-icon signup-book">
          <i className="bi bi-book"></i>
        </div>

        <div className="signup-floating-icon signup-laptop">
          <i className="bi bi-laptop"></i>
        </div>

        <div className="signup-floating-icon signup-bag">
          <i className="bi bi-backpack"></i>
        </div>

      </div>

    </div>
  );
}