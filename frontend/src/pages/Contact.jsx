// src/pages/Contact.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";
import "../styles/contact.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { handleContactFunction } from "/src/api.js";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();
  const [contactMessage, setContactMessage] = useState("");
  const [contactError, setContactError] = useState("");

  const handleMySubmissionFormFunction = async (data) => {
    setContactMessage("");
    setContactError("");
    try {
      await handleContactFunction(data);
      setContactMessage("Message sent successfully.");
      reset();
    } catch (error) {
      setContactError(error.response?.data?.message || "Failed to send message. Please try again.");
    }
  };

  return (
    <>
      <Navbar />

      <main className="contact-page">

        {/* HERO */}
        <section className="contact-hero">
          <div className="container">
            <span className="section-label">GET IN TOUCH</span>
            <h1 className="section-title">Contact Us</h1>
            <p className="section-subtitle">
              Have a question about CampusBazaar? We are here to help
              students buy, sell and connect across campus.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">

              {/* INFO CARDS */}
              <div className="contact-info">

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p>support@campusbazaar.com</p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <p>+92 300 1234567</p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <div>
                    <h3>Location</h3>
                    <p>COMSATS University, Abbottabad Campus</p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <i className="bi bi-clock"></i>
                  </div>
                  <div>
                    <h3>Hours</h3>
                    <p>Mon – Fri, 9:00 AM – 6:00 PM</p>
                  </div>
                </div>

              </div>

              {/* FORM */}
              <div className="contact-form-card">

                <h2>Send us a message</h2>
                <p>Fill out the form and we will get back to you soon.</p>

                {contactMessage && <p>{contactMessage}</p>}
                {contactError && <p>{contactError}</p>}

                <form className="contact-form" onSubmit={handleSubmit(handleMySubmissionFormFunction)}>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" placeholder="Your full name" {...register("fullName", { required: true })} />
                    </div>

                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" placeholder="you@example.com" {...register("email", { required: true })} />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Subject</label>
                    <input type="text" placeholder="How can we help?" {...register("subject", { required: true })} />
                  </div>

                  <div className="form-group">
                    <label>Message</label>
                    <textarea placeholder="Write your message here..." {...register("message", { required: true })}></textarea>
                  </div>

                  <button type="submit" className="contact-submit-btn">
                    <span>Send Message</span>
                    <i className="bi bi-arrow-right"></i>
                  </button>

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
