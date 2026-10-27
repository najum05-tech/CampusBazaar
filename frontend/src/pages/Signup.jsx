import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "../styles/signup.css";
import { Link } from "react-router-dom";
// import logo from "../assets/images/logo.png";
import marketplaceImage from "../assets/images/signup-marketplace.png";

// Zod Validation Schema for Sign Up
const signupSchema = z
  .object({
    fullName: z.string().min(1, "Full name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    {
      path: ["confirmPassword"],
      message: "Passwords do not match!",
    }
  );

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

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
              Join CampusBazaar and be part of a growing campus community.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(handleMySubmissionFormFunction)}
            className="signup-form"
            method="POST"
          >
            {/* Full Name */}
            <div
              className={`signup-input ${errors.fullName ? "input-alert" : ""}`}
            >
              <i className="bi bi-person"></i>
              <input
                type="text"
                placeholder={errors.fullName?.message}
                {...register("fullName")}
              />
            </div>

            {/* Email */}
            <div
              className={`signup-input ${errors.email ? "input-alert" : ""}`}
            >
              <i className="bi bi-envelope"></i>
              <input
                type="email"
                placeholder={errors.email?.message}
                {...register("email")}
              />
            </div>

            {/* Password */}
            <div
              className={`signup-input ${errors.password ? "input-alert" : ""}`}
            >
              <i className="bi bi-lock"></i>
              <input
                type={showPassword ? "text" : "password"}
                placeholder={errors.password?.message}
                {...register("password")}
              />
              <button
                type="button"
                className="signup-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={showPassword ? "bi bi-eye" : "bi bi-eye-slash"}
                ></i>
              </button>
            </div>

            {/* Confirm Password */}
            <div
              className={`signup-input ${
                errors.confirmPassword ? "input-alert" : ""
              }`}
            >
              <i className="bi bi-lock"></i>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder={errors.confirmPassword?.message}
                {...register("confirmPassword")}
              />
              <button
                type="button"
                className="signup-password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <i
                  className={
                    showConfirmPassword ? "bi bi-eye" : "bi bi-eye-slash"
                  }
                ></i>
              </button>
            </div>

            {/* Sign Up Button */}
            <button type="submit" className="signup-button">
              <span>Sign up</span>
              <i className="bi bi-arrow-right"></i>
            </button>
          </form>

          {/* Login */}
          <p className="already-account">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>

        {/* Footer */}
        <div className="signup-footer">
          <span>© 2025 CampusBazaar. All rights reserved.</span>

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
          <img src={marketplaceImage} alt="CampusBazaar marketplace" />
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
