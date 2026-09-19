import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../Navbar'

function Home() {
    const cartItems = useSelector((state) => state.cart.cartItems)
    console.log("Cart Items:", cartItems);


  return (
    <div className="app">

      <Navbar />
      {/* HERO SECTION */}

      <div className="header-container">

        <div className="left-part">

          <h2>WELCOME TO</h2>

          <h4>ONLINE SHOPPING SYSTEM</h4>

          <p>
            Explore something special every day. From everyday essentials
            to stylish favorites, find everything you love with just a few
            clicks. Enjoy quality products, amazing deals and a smooth
            shopping experience.
          </p>

          <div className="buttons">

            <button>
              Shop Now
            </button>

            <button>
              Explore Products
            </button>

          </div>

          <div className="shopping-features">

            <span>🚚 Free Shipping</span>
            <span>🔒 Secure Payment</span>
            <span>↩ Easy Returns</span>

          </div>

        </div>

        <div className="right-part">

          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
            alt="Online Shopping"
          />

        </div>

      </div>

      <section className="category-main-section">

        <h2>Shop By Category</h2>

        <p>
          Discover our wide range of products and find everything
          you need in one place.
        </p>

      </section>

    </div>
  )
}

export default Home
