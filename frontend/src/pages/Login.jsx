import { useState } from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {handleMyLoginFunction} from "/src/api.js";

// import logo from "../assets/images/logo.png";
import campusHero from "../assets/images/campus-hero.png";

// Zod Validation Schema
const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

    async function handleMyLoginFormFunction(data){
    console.log("Form submitted with data:", data);
    await handleMyLoginFunction(data);
  };

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
              Log in to your account and continue your journey with
              CampusBazaar.
            </p>
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleSubmit(handleMyLoginFormFunction)}
            className="login-form"
            method="POST"
          >
            {/* Email */}
            <div
              className={`input-group-custom ${
                errors.email ? "input-alert" : ""
              }`}
            >
              <i className="bi bi-envelope"></i>
              <input
                type="email"
                placeholder={
                  errors.email?.message
                }
                {...register("email")}
              />
            </div>

            {/* Password */}
            <div
              className={`input-group-custom ${
                errors.password ? "input-alert" : ""
              }`}
            >
              <i className="bi bi-lock"></i>
              <input
                type={showPassword ? "text" : "password"}
                placeholder={
                  errors.password?.message                    
                }
                {...register("password")}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={showPassword ? "bi bi-eye" : "bi bi-eye-slash"}
                ></i>
              </button>
            </div>

            {/* Forgot Password */}
            <Link to="#" className="forgot-password">
              Forgot password?
            </Link>

            {/* Login Button */}
            <button type="submit" className="login-button">
              <span>Log in</span>
              <i className="bi bi-arrow-right"></i>
            </button>
          </form>

          {/* Sign Up */}
          <p className="signup-text">
            Don&apos;t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>

        {/* Footer */}
        <div className="login-footer">
          <span>© 2025 CampusBazaar. All rights reserved.</span>

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
          <h2>Buy. Sell. Connect.</h2>
          <p>
            Your campus marketplace for books, electronics, notes and more.
          </p>
        </div>

        {/* Decorative background */}
        <div className="hero-shape"></div>

        {/* Campus Image */}
        <div className="login-image">
          <img src={campusHero} alt="CampusBazaar marketplace" />
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
