// src/pages/Dashboard/Dashboard.jsx
import DashboardLayout from "../../pages/dashboard/DashboardLayout.jsx";
import { Link } from "react-router-dom";
import { products } from "../../data/products";

export default function Dashboard() {
  return (
    <DashboardLayout activePage="dashboard">

      {/* WELCOME */}
      <section className="dashboard-welcome">
        <div>
          <span className="welcome-label">WELCOME BACK,</span>
          <h1>Muhammad Najmuddin <span>👋</span></h1>
          <p>Good to see you again! Here's what's happening with your account today.</p>
        </div>

        <div className="dashboard-motto">
          <div className="motto-line"></div>
          <span>Buy. Sell. Connect.</span>
        </div>
      </section>

      {/* STAT CARDS */}
      <section className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon green"><i className="bi bi-box"></i></div>
          <span>Active Listings</span>
          <strong>5</strong>
          <small><i className="bi bi-arrow-up"></i>1 this week</small>
        </div>

        <div className="stat-card">

          <div className="stat-icon teal"><i className="bi bi-chat-square-text"></i></div>
          <span>Messages</span>
          <strong>3</strong>
          <small><i className="bi bi-arrow-up"></i>2 new</small>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange"><i className="bi bi-bag-check"></i></div>
          <span>Total Orders</span>
          <strong>2</strong>
          <small><i className="bi bi-arrow-up"></i>1 this month</small>
        </div>

        <div className="stat-card">
          <div className="stat-icon red"><i className="bi bi-heart"></i></div>
          <span>Total Views</span>
          <strong>124</strong>
          <small><i className="bi bi-arrow-up"></i>18% this week</small>
        </div>
      </section>

      <div className="dashboard-grid">

        <div className="dashboard-left">

          <section className="dashboard-section">
            <div className="section-top">
              <h2>Your Recent Listings</h2>
              <a href="#">View All <i className="bi bi-arrow-right"></i></a>
            </div>

           <div className="dashboard-products">

  {products.slice(0, 4).map((product) => (
    <div className="dashboard-product" key={product.id}>

      <div className="dashboard-product-image">
        <img src={product.image} alt={product.title} />

        <Link
          to={`/dashboard/product/${product.id}`}
          className="product-more"
        >
          <i className="bi bi-three-dots"></i>
        </Link>
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

        <div className="listing-bottom">

          <span className="listing-status">
            Active
          </span>

          <div className="listing-actions">

            <Link
              to={`/dashboard/product/${product.id}`}
              title="View Product"
            >
              <i className="bi bi-eye"></i>
            </Link>

            <Link
              to={`/dashboard/product/${product.id}/edit`}
              title="Edit Product"
            >
              <i className="bi bi-pencil"></i>
            </Link>

            <Link
              to={`/dashboard/product/${product.id}/delete`}
              title="Delete Product"
              className="delete-action"
            >
              <i className="bi bi-trash"></i>
            </Link>

          </div>

        </div>

      </div>

    </div>
  ))}

</div>
          </section>

          <section className="dashboard-section activity-section">
            <div className="section-top">
              <h2>Recent Activity</h2>
              <a href="#">View All <i className="bi bi-arrow-right"></i></a>
            </div>

            <div className="activity-list">

              <div className="activity-item">
                <div className="activity-icon message"><i className="bi bi-chat-square-text"></i></div>
                <div className="activity-text">
                  <strong>New message from Ahmed Khan</strong>

                  <p>About your MacBook Air listing</p>
                </div>
                <span>2 hours ago</span>
              </div>

              <div className="activity-item">
                <div className="activity-icon order"><i className="bi bi-bag-check"></i></div>
                <div className="activity-text">
                  <strong>Order completed</strong>
                  <p>Your listing "Calculus Textbook" was purchased</p>
                </div>
                <span>5 hours ago</span>
              </div>

              <div className="activity-item">
                <div className="activity-icon listing"><i className="bi bi-file-earmark-check"></i></div>
                <div className="activity-text">
                  <strong>New listing approved</strong>
                  <p>Your Scientific Calculator is now live</p>
                </div>
                <span>1 day ago</span>
              </div>

              <div className="activity-item">
                <div className="activity-icon profile"><i className="bi bi-person"></i></div>
                <div className="activity-text">
                  <strong>Profile updated</strong>
                  <p>You changed your phone number</p>
                </div>
                <span>1 day ago</span>
              </div>


            </div>
          </section>

        </div>

        <aside className="dashboard-right">
          <section className="quick-actions">

            <h2>Quick Actions</h2>
            <button className="quick-action primary"><i className="bi bi-plus-lg"></i>Post a New Listing</button>
            <button className="quick-action"><i className="bi bi-box"></i>View My Listings</button>
            <button className="quick-action"><i className="bi bi-chat-square-text"></i>Messages</button>
            <button className="quick-action"><i className="bi bi-gear"></i>Settings</button>
          </section>

          <section className="help-card">
            <div className="help-icon"><i className="bi bi-mortarboard"></i></div>
            <div>
              <h3>Need help?</h3>
              <p>Check our FAQs or contact support.</p>
              <a href="#">Go to Help Center <i className="bi bi-arrow-right"></i></a>
            </div>
          </section>

        </aside>

      </div>

    </DashboardLayout>
  );
}