import React from "react";
import "./About.css";
import Navbar from '../Navbar'

function About() {
  return (
    <div className="about-page">

      <Navbar />

      {/* ================= HERO SECTION ================= */}

      <section className="about-hero">

        <div className="about-hero-content">

          <h1>
            About <span>Shopping Website</span>
          </h1>

          <p>
            Welcome to our online shopping platform, where quality,
            convenience and great prices come together. Explore our
            wide range of products and enjoy a smooth shopping
            experience from anywhere.
          </p>

        </div>

      </section>


      {/* ================= ABOUT SECTION ================= */}

      <section className="about-container">

        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
            alt="Online Shopping"
          />

        </div>


        <div className="about-content">

          <h2>Who We Are</h2>

          <p>
            Our Shopping Website is designed to make online shopping
            simple, fast and enjoyable. We provide products from
            different categories including fashion, electronics,
            home & living, beauty, sports and books.
          </p>

          <p>
            Our goal is to provide customers with quality products,
            affordable prices and a reliable shopping experience.
            Everything you need is just a few clicks away.
          </p>

          <button className="about-btn">
            Explore Products
          </button>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="features-section">

        <h2>Why Choose Us?</h2>

        <p className="features-subtitle">
          We make your online shopping experience easier and better.
        </p>


        <div className="features-grid">


          {/* Feature 1 */}

          <div className="feature-card">

            <div className="feature-icon">
              🚚
            </div>

            <h3>Fast Delivery</h3>

            <p>
              Get your favorite products delivered quickly
              and safely to your doorstep.
            </p>

          </div>


          {/* Feature 2 */}

          <div className="feature-card">

            <div className="feature-icon">
              🔒
            </div>

            <h3>Secure Payment</h3>

            <p>
              Your payment information is protected with
              secure and reliable payment methods.
            </p>

          </div>


          {/* Feature 3 */}

          <div className="feature-card">

            <div className="feature-icon">
              ⭐
            </div>

            <h3>Quality Products</h3>

            <p>
              We focus on providing quality products that
              offer great value for your money.
            </p>

          </div>


          {/* Feature 4 */}

          <div className="feature-card">

            <div className="feature-icon">
              ↩️
            </div>

            <h3>Easy Returns</h3>

            <p>
              Shop with confidence with our simple and
              customer-friendly return process.
            </p>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="about-stats">

        <div className="stat-card">

          <h2>500+</h2>

          <p>Products</p>

        </div>


        <div className="stat-card">

          <h2>10+</h2>

          <p>Categories</p>

        </div>


        <div className="stat-card">

          <h2>1000+</h2>

          <p>Happy Customers</p>

        </div>


        <div className="stat-card">

          <h2>24/7</h2>

          <p>Customer Support</p>

        </div>

      </section>


      {/* ================= MISSION ================= */}

      <section className="mission-section">

        <h2>Our Mission</h2>

        <p>
          Our mission is to create a simple and reliable online
          shopping platform where customers can discover products,
          compare prices and place orders with confidence.
        </p>

      </section>

    </div>
  );
}

export default About;