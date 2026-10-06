// src/pages/About.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import "../styles/about.css";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* HERO */}
        <section className="about-hero">
          <div className="container">
            <span className="section-label">ABOUT US</span>
            <h1 className="section-title">Who We Are</h1>
            <p className="section-subtitle">
              CampusBazaar is a student marketplace built for campus life —
              buy, sell and exchange with people from your university.
            </p>
          </div>
        </section>

        {/* STORY */}
        <section className="about-section">
          <div className="container">
            <div className="about-story">
              <div className="about-story-text">
                <span className="section-label">OUR STORY</span>
                <h2>Built for students, by students</h2>
                <p>
                  We started CampusBazaar to make campus trading simple and safe.
                  Textbooks, electronics, furniture and notes should move easily
                  between students — without high prices or complicated shipping.
                </p>
                <p>
                  Today, students across campuses use CampusBazaar to list items,
                  find deals nearby, and connect with their community.
                </p>
              </div>

              <div className="about-story-cards">
                <div className="about-mini-card">
                  <i className="bi bi-mortarboard-fill"></i>
                  <strong>Student focused</strong>
                  <span>Made for campus communities</span>
                </div>
                <div className="about-mini-card">
                  <i className="bi bi-shield-check"></i>
                  <strong>Trusted trading</strong>
                  <span>Local meetups, real people</span>
                </div>
                <div className="about-mini-card">
                  <i className="bi bi-lightning-charge"></i>
                  <strong>Fast & simple</strong>
                  <span>List an item in minutes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className="about-section about-mission-section">
          <div className="container">
            <div className="about-mission-grid">
              <div className="about-mission-card">
                <div className="about-mission-icon">
                  <i className="bi bi-bullseye"></i>
                </div>
                <h3>Our Mission</h3>
                <p>
                  Help students save money and reduce waste by making it easy
                  to buy and sell within their own campus.
                </p>
              </div>

              <div className="about-mission-card">
                <div className="about-mission-icon">
                  <i className="bi bi-eye"></i>
                </div>
                <h3>Our Vision</h3>
                <p>
                  A trusted marketplace in every campus — where students
                  connect, trade and support each other.
                </p>
              </div>

              <div className="about-mission-card">
                <div className="about-mission-icon">
                  <i className="bi bi-heart"></i>
                </div>
                <h3>Our Values</h3>
                <p>
                  Community, affordability, honesty and simplicity guide
                  everything we build on CampusBazaar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta-section">
          <div className="container">
            <div className="about-cta-card">
              <h2>Ready to join CampusBazaar?</h2>
              <p>Create an account and start buying or selling on your campus today.</p>
              <div className="about-cta-actions">
                <Link to="/signup" className="about-btn-primary">
                  Get Started
                  <i className="bi bi-arrow-right"></i>
                </Link>
                <Link to="/contact" className="about-btn-outline">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

