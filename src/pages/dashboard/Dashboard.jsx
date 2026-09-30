import "../../styles/dashboard.css";

import { products } from "../../data/products";
// import logo from "../assets/images/logo.png";

export default function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* ================= SIDEBAR ================= */}

      <aside className="dashboard-sidebar">

        <div>

          {/* Logo */}
          <a className="navbar-brand dashboard-logo" href="#">
          <div className="logo-icon">
            <i className="bi bi-mortarboard-fill"></i>
          </div>
          <span>
            Campus<span>Bazaar</span>
          </span>
        </a>


          {/* Navigation */}

          <nav className="dashboard-nav">

            <a href="#" className="dashboard-nav-item active">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>

            <a href="#" className="dashboard-nav-item">
              <i className="bi bi-bag"></i>
              <span>My Listings</span>
            </a>

            <a href="#" className="dashboard-nav-item">
              <i className="bi bi-chat-square-text"></i>
              <span>Messages</span>

              <span className="message-count">3</span>
            </a>

            <a href="#" className="dashboard-nav-item">
              <i className="bi bi-heart"></i>
              <span>Favorites</span>
            </a>

            <a href="#" className="dashboard-nav-item">
              <i className="bi bi-bag-check"></i>
              <span>Orders</span>
            </a>

            <a href="#" className="dashboard-nav-item">
              <i className="bi bi-person"></i>
              <span>Profile</span>
            </a>

            <a href="#" className="dashboard-nav-item">
              <i className="bi bi-gear"></i>
              <span>Settings</span>
            </a>

          </nav>

        </div>


        <div>

          {/* Community message */}

          <div className="community-note">
            <div>Campus</div>
            <div>Community</div>
            <div>Marketplace</div>
          </div>


          {/* Logout */}

          <a href="/" className="dashboard-nav-item logout-item">
            <i className="bi bi-box-arrow-left"></i>
            <span>Log out</span>
          </a>

        </div>

      </aside>


      {/* ================= MAIN AREA ================= */}

      <main className="dashboard-main">


        {/* TOP BAR */}

        <header className="dashboard-header">

          <div className="dashboard-search">

            <i className="bi bi-search"></i>

            <input
              type="text"
              placeholder="Search for products, categories..."
            />

          </div>


          <div className="dashboard-header-right">

            <button className="notification-button">
              <i className="bi bi-bell"></i>
              <span></span>
            </button>


            <div className="dashboard-user">

              <div className="user-avatar">
                MN
              </div>

              <div className="user-name">
                Muhammad Najmuddin
              </div>

              <i className="bi bi-chevron-down"></i>

            </div>

          </div>

        </header>


        {/* ================= CONTENT ================= */}

        <div className="dashboard-content">


          {/* WELCOME */}

          <section className="dashboard-welcome">

            <div>

              <span className="welcome-label">
                WELCOME BACK,
              </span>

              <h1>
                Muhammad Najmuddin <span>👋</span>
              </h1>

              <p>
                Good to see you again! Here's what's happening
                with your account today.
              </p>

            </div>


            <div className="dashboard-motto">

              <div className="motto-line"></div>

              <span>
                Buy. Sell. Connect.
              </span>

            </div>

          </section>


          {/* ================= STAT CARDS ================= */}

          <section className="dashboard-stats">

            <div className="stat-card">

              <div className="stat-icon green">
                <i className="bi bi-box"></i>
              </div>

              <span>Active Listings</span>

              <strong>5</strong>

              <small>
                <i className="bi bi-arrow-up"></i>
                1 this week
              </small>

            </div>


            <div className="stat-card">

              <div className="stat-icon teal">
                <i className="bi bi-chat-square-text"></i>
              </div>

              <span>Messages</span>

              <strong>3</strong>

              <small>
                <i className="bi bi-arrow-up"></i>
                2 new
              </small>

            </div>


            <div className="stat-card">

              <div className="stat-icon orange">
                <i className="bi bi-bag-check"></i>
              </div>

              <span>Total Orders</span>

              <strong>2</strong>

              <small>
                <i className="bi bi-arrow-up"></i>
                1 this month
              </small>

            </div>


            <div className="stat-card">

              <div className="stat-icon red">
                <i className="bi bi-heart"></i>
              </div>

              <span>Total Views</span>

              <strong>124</strong>

              <small>
                <i className="bi bi-arrow-up"></i>
                18% this week
              </small>

            </div>

          </section>


          {/* ================= DASHBOARD GRID ================= */}

          <div className="dashboard-grid">


            {/* LEFT CONTENT */}

            <div className="dashboard-left">


              {/* RECENT LISTINGS */}

              <section className="dashboard-section">

                <div className="section-top">

                  <h2>Your Recent Listings</h2>

                  <a href="#">
                    View All
                    <i className="bi bi-arrow-right"></i>
                  </a>

                </div>


                <div className="dashboard-products">

                  {products.slice(0, 4).map((product) => (

                    <div
                      className="dashboard-product"
                      key={product.id}
                    >

                      <div className="dashboard-product-image">

                        <img
                          src={product.image}
                          alt={product.title}
                        />

                        <button className="product-more">
                          <i className="bi bi-three-dots"></i>
                        </button>

                      </div>


                      <div className="dashboard-product-info">

                        <h3>{product.title}</h3>

                        <strong>
                          Rs {product.price.toLocaleString()}
                        </strong>

                        <div className="product-views">

                          <span>
                            <i className="bi bi-eye"></i>
                            {28 + product.id * 4} views
                          </span>

                        </div>

                        <span className="listing-status">
                          Active
                        </span>

                      </div>

                    </div>

                  ))}

                </div>

              </section>


              {/* RECENT ACTIVITY */}

              <section className="dashboard-section activity-section">

                <div className="section-top">

                  <h2>Recent Activity</h2>

                  <a href="#">
                    View All
                    <i className="bi bi-arrow-right"></i>
                  </a>

                </div>


                <div className="activity-list">


                  <div className="activity-item">

                    <div className="activity-icon message">
                      <i className="bi bi-chat-square-text"></i>
                    </div>

                    <div className="activity-text">

                      <strong>
                        New message from Ahmed Khan
                      </strong>

                      <p>
                        About your MacBook Air listing
                      </p>

                    </div>

                    <span>
                      2 hours ago
                    </span>

                  </div>


                  <div className="activity-item">

                    <div className="activity-icon order">
                      <i className="bi bi-bag-check"></i>
                    </div>

                    <div className="activity-text">

                      <strong>
                        Order completed
                      </strong>

                      <p>
                        Your listing "Calculus Textbook"
                        was purchased
                      </p>

                    </div>

                    <span>
                      5 hours ago
                    </span>

                  </div>


                  <div className="activity-item">

                    <div className="activity-icon listing">
                      <i className="bi bi-file-earmark-check"></i>
                    </div>

                    <div className="activity-text">

                      <strong>
                        New listing approved
                      </strong>

                      <p>
                        Your Scientific Calculator
                        is now live
                      </p>

                    </div>

                    <span>
                      1 day ago
                    </span>

                  </div>


                  <div className="activity-item">

                    <div className="activity-icon profile">
                      <i className="bi bi-person"></i>
                    </div>

                    <div className="activity-text">

                      <strong>
                        Profile updated
                      </strong>

                      <p>
                        You changed your phone number
                      </p>

                    </div>

                    <span>
                      1 day ago
                    </span>

                  </div>

                </div>

              </section>

            </div>


            {/* ================= RIGHT COLUMN ================= */}

            <aside className="dashboard-right">


              {/* PROFILE CARD */}

              <section className="profile-card">

                <div className="profile-cover"></div>

                <div className="profile-avatar">
                  MN

                  <span>
                    <i className="bi bi-check"></i>
                  </span>
                </div>


                <div className="profile-info">

                  <div className="profile-name">

                    <h2>
                      Muhammad Najmuddin
                    </h2>

                    <span>Verified</span>

                  </div>

                  <p className="profile-course">
                    BSE-4C · CUI Abbottabad
                  </p>

                  <p className="profile-bio">
                    Student | Tech Enthusiast |
                    Always open to new opportunities.
                  </p>


                  <a
                    href="#"
                    className="edit-profile-button"
                  >
                    <i className="bi bi-pencil"></i>
                    Edit Profile
                  </a>

                </div>


                <div className="profile-details">

                  <div>
                    <i className="bi bi-envelope"></i>
                    <span>najmuddin@gmail.com</span>
                  </div>

                  <div>
                    <i className="bi bi-telephone"></i>
                    <span>+92 300 1234567</span>
                  </div>

                  <div>
                    <i className="bi bi-geo-alt"></i>
                    <span>Abbottabad, Pakistan</span>
                  </div>

                </div>

              </section>


              {/* QUICK ACTIONS */}

              <section className="quick-actions">

                <h2>Quick Actions</h2>


                <button className="quick-action primary">
                  <i className="bi bi-plus-lg"></i>
                  Post a New Listing
                </button>


                <button className="quick-action">
                  <i className="bi bi-person"></i>
                  Update Profile
                </button>


                <button className="quick-action">
                  <i className="bi bi-box"></i>
                  View My Listings
                </button>


                <button className="quick-action">
                  <i className="bi bi-chat-square-text"></i>
                  Messages
                </button>


                <button className="quick-action">
                  <i className="bi bi-gear"></i>
                  Settings
                </button>

              </section>


              {/* HELP CARD */}

              <section className="help-card">

                <div className="help-icon">
                  <i className="bi bi-mortarboard"></i>
                </div>

                <div>

                  <h3>Need help?</h3>

                  <p>
                    Check our FAQs or contact support.
                  </p>

                  <a href="#">
                    Go to Help Center
                    <i className="bi bi-arrow-right"></i>
                  </a>

                </div>

              </section>

            </aside>

          </div>

        </div>

      </main>

    </div>
  );
}