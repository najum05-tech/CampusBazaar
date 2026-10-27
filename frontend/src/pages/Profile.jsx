import { Link } from "react-router-dom";
import { products } from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/profile.css";

export default function Profile() {
const user = {
name: "Muhammad Najmuddin",
initials: "MN",
university: "COMSATS University Islamabad",
campus: "Abbottabad Campus",
location: "Abbottabad, Pakistan",
bio: "Student marketplace enthusiast · Buy. Sell. Connect.",
email: "[najmuddin@gmail.com](mailto:najmuddin@gmail.com)",
phone: "+92 300 1234567",
};

return ( 

<>
 <Navbar /> 
 <div className="profile-page"> 
  <main className="profile-container">
    <section className="profile-cover">
      <img src="/images/campus-hero.png" alt="Campus cover" />
      <button type="button" className="cover-edit-button">
        <i className="bi bi-camera-fill"></i> Edit cover
      </button>
    </section>

    <section className="profile-heading">
      <div className="profile-avatar-wrap">
        <div className="profile-avatar-large">MN</div>
        <button type="button" className="avatar-camera" aria-label="Profile photo">
          <i className="bi bi-camera-fill"></i>
        </button>
      </div>

      <div className="profile-identity">
        <div className="profile-name-row">
          <h1>{user.name}</h1>
          <i className="bi bi-patch-check-fill verified-icon"></i>
          <span className="student-badge">Student</span>
        </div>

       <p className="profile-university">
        <span className="profile-icon-slot"><i className="bi bi-mortarboard-fill"></i></span>
        {user.university}, {user.campus}
        </p>

        <p className="profile-location">
        <span className="profile-icon-slot"><i className="bi bi-geo-alt-fill"></i></span>
        {user.location}
        </p>

        <p className="profile-bio">
        <span className="profile-icon-slot"></span>
        {user.bio}
        </p>

        <div className="profile-counts">
          <span><strong>{products.length}</strong> listings</span>
          <span><strong>0</strong> saved</span>
          <span><strong>0</strong> reviews</span>
        </div>
      </div>

      <div className="profile-header-actions">
        <Link to="/dashboard" className="profile-dashboard-btn">
          <i className="bi bi-grid-1x2-fill"></i> Dashboard
        </Link>

        <Link to="/profile/edit" className="profile-edit-btn">
          <i className="bi bi-pencil-fill"></i> Edit Profile
        </Link>

          <Link to="/messages" className="profile-message-btn">
            <i className="bi bi-chat-dots-fill"></i>Messages
          </Link>
      </div>
    </section>

    <nav className="profile-tabs">
      <Link to="#posts" className="active">Posts</Link>
      <Link to="#about">About</Link>
      <Link to="#listings">Listings</Link>
      <Link to="#reviews">Reviews</Link>
      <Link to="#saved">Saved</Link>
    </nav>

    <section className="profile-content" id="posts">
      <aside className="profile-sidebar">
        <div className="profile-info-card" id="about">
          <div className="profile-card-heading">
            <h2>Personal details</h2>
            <Link to="/profile/edit" aria-label="Edit profile">
              <i className="bi bi-pencil"></i>
            </Link>
          </div>

          <div className="profile-detail-row">
            <div className="detail-icon"><i className="bi bi-envelope"></i></div>
            <div><span>Email</span><p>{user.email}</p></div>
          </div>

          <div className="profile-detail-row">
            <div className="detail-icon"><i className="bi bi-mortarboard"></i></div>
            <div><span>University</span><p>{user.university}</p></div>
          </div>

          <div className="profile-detail-row">
            <div className="detail-icon"><i className="bi bi-building"></i></div>
            <div><span>Campus</span><p>{user.campus}</p></div>
          </div>

          <div className="profile-detail-row">
            <div className="detail-icon"><i className="bi bi-geo-alt"></i></div>
            <div><span>Location</span><p>{user.location}</p></div>
          </div>

          <div className="profile-detail-row">
            <div className="detail-icon"><i className="bi bi-telephone"></i></div>
            <div><span>Phone</span><p>{user.phone}</p></div>
          </div>
        </div>
      </aside>

      <div className="profile-main-column">
        <div className="profile-post-composer">
          <div className="composer-avatar">MN</div>
          <span className="composer-input">Share an update or a listing...</span>
          <Link to="/dashboard/add-product" className="composer-image-btn" aria-label="Add listing">
            <i className="bi bi-image"></i>
          </Link>
        </div>

        <div className="profile-listings-card" id="listings">
          <div className="profile-listings-heading">
            <h2>My recent listings</h2>
            <Link to="/dashboard/listings">
              View all <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          {products.length > 0 ? (
            <div className="profile-listings-grid">
              {products.slice(0, 3).map((product) => (
                <article className="profile-listing-card" key={product.id}>
                  <Link
                    to={`/dashboard/product/${product.id}`}
                    className="profile-listing-image"
                  >
                    <img src={product.image} alt={product.title} />
                  </Link>

                  <div className="profile-listing-info">
                    <span className="profile-listing-category">{product.category}</span>

                    <Link
                      to={`/dashboard/product/${product.id}`}
                      className="profile-listing-title"
                    >
                      {product.title}
                    </Link>

                    <strong>Rs {product.price.toLocaleString()}</strong>

                    <div className="profile-listing-footer">
                      <span><i className="bi bi-eye"></i> View listing</span>
                      <span className="profile-active-badge">Active</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="profile-empty-state">
              <i className="bi bi-box-seam"></i>
              <h3>No listings yet</h3>
              <p>Your products will appear here when you add them.</p>
              <Link to="/dashboard/add-product">Create a listing</Link>
            </div>
          )}
        </div>
      </div>
    </section>
  </main>
</div>
<Footer />
</>
);
}
