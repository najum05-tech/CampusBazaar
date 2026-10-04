// src/pages/EditProfile.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/editProfile.css";

export default function EditProfile() {
  const [form, setForm] = useState({
    name: "Muhammad Najmuddin",
    badge: "Student",
    bio: "Student marketplace enthusiast · Buy. Sell. Connect.",
    university: "COMSATS University Islamabad",
    campus: "Abbottabad Campus",
    email: "najmuddin@gmail.com",
    phone: "+92 300 1234567",
    location: "Abbottabad, Pakistan",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated profile:", form);
  };

  return (
    <>
      <Navbar />


      <div className="edit-profile-page">

        <div className="edit-profile-container">

          <h2 className="edit-profile-title">Edit Profile</h2>
          <p className="edit-profile-subtitle">Update your public profile information.</p>

          {/* Cover + Avatar preview */}
          <div className="edit-profile-media-card">

            <div className="edit-cover-preview">
              <button type="button" className="edit-cover-btn">
                <i className="bi bi-camera-fill"></i>
                Change Cover
              </button>
            </div>

            <div className="edit-avatar-row">
              <div className="edit-avatar-preview">
                MN
                <button type="button" className="edit-avatar-camera" aria-label="Change photo">
                  <i className="bi bi-camera-fill"></i>
                </button>
              </div>
              <div>
                <p className="edit-avatar-label">Profile photo</p>
                <p className="edit-avatar-hint">Square image recommended, at least 200x200px</p>
              </div>
            </div>

          </div>


          {/* Form */}
          <form className="edit-profile-form" onSubmit={handleSubmit}>

            <h3 className="edit-form-section-title">Basic Information</h3>

            <div className="edit-form-row">
              <div className="edit-form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="edit-form-group">
                <label>Student Badge</label>
                <input
                  type="text"
                  name="badge"
                  value={form.badge}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="edit-form-group">
              <label>Bio</label>
              <textarea
                name="bio"
                value={form.bio}

                onChange={handleChange}
              ></textarea>
            </div>

            <h3 className="edit-form-section-title bordered">Education</h3>

            <div className="edit-form-row">
              <div className="edit-form-group">
                <label>University</label>
                <input
                  type="text"
                  name="university"
                  value={form.university}
                  onChange={handleChange}
                />
              </div>

              <div className="edit-form-group">
                <label>Campus</label>
                <input
                  type="text"
                  name="campus"
                  value={form.campus}
                  onChange={handleChange}
                />
              </div>
            </div>

            <h3 className="edit-form-section-title bordered">Contact &amp; Location</h3>

            <div className="edit-form-row">
              <div className="edit-form-group">

                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="edit-form-group">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="edit-form-group">
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
              />
            </div>

            <div className="edit-form-actions">
              <Link to="/profile" className="edit-btn-outline">Cancel</Link>

              <button type="submit" className="edit-btn-primary">
                <i className="bi bi-check-lg"></i>
                Save Changes
              </button>
            </div>

          </form>

        </div>

      </div>

      <Footer />
    </>
  );
}