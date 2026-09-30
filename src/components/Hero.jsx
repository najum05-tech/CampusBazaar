import "../styles/hero.css";

function Hero() {
    return (
        <section className="hero-section">

            <div className="container">

                <div className="row align-items-center hero-row">

                    {/* Left Content */}
                    <div className="col-lg-6 hero-content">

                        <div className="hero-label">
                            <span>BUY</span>
                            <b>•</b>
                            <span>SELL</span>
                            <b>•</b>
                            <span>EXCHANGE</span>
                            <b>•</b>
                            <span>CONNECT</span>
                        </div>

                        <h1 className="hero-title">
                            Your Campus.
                            <br />
                            <span>Your Marketplace.</span>
                        </h1>

                        <p className="hero-description">
                            Buy, sell, or exchange things with students
                            around you — easily, safely, and all in one place.
                        </p>

                        <div className="hero-buttons">

                            <a href="/browse" className="btn-primary-custom">
                                Explore Marketplace
                                <i className="bi bi-arrow-right"></i>
                            </a>

                            <a href="/sell" className="btn-secondary-custom">
                                <i className="bi bi-plus-lg"></i>
                                Sell an Item
                            </a>

                        </div>

                        <div className="category-list">

                            <div className="category-item">
                                <div className="category-icon">
                                    <i className="bi bi-book"></i>
                                </div>
                                <span>Books</span>
                            </div>

                            <div className="category-divider"></div>

                            <div className="category-item">
                                <div className="category-icon">
                                    <i className="bi bi-laptop"></i>
                                </div>
                                <span>Electronics</span>
                            </div>

                            <div className="category-divider"></div>

                            <div className="category-item">
                                <div className="category-icon">
                                    <i className="bi bi-person-workspace"></i>
                                </div>
                                <span>Furniture</span>
                            </div>

                            <div className="category-divider"></div>

                            <div className="category-item">
                                <div className="category-icon">
                                    <i className="bi bi-journal-text"></i>
                                </div>
                                <span>Notes</span>
                            </div>

                        </div>

                    </div>


                    {/* Right Visual */}
                    <div className="col-lg-6 hero-visual">

                        <div className="visual-background"></div>

                        <div className="product-image">

                            <img
                                src="/images/desk-hero.png"
                                alt="CampusBazaar marketplace"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;