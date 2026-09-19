import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  return (
    <div>

      {/* ================= NAVIGATION BAR ================= */}

      <nav className="nav-container">

        {/* ================= LOGO ================= */}

        <div className="logo">

          <div className="logo-link">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
              alt="Shopping Logo"
            />

            <span>S</span>hopping Website

          </div>

        </div>


        {/* ================= NAVIGATION LINKS ================= */}

        <div className="nav-list">

          <ul>

            <li>
              <NavLink to="/" className ={({isActive}) => isActive ? 'active': ""}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ""}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/products" className={({isActive}) => isActive ? 'active' : ""}>
                Products
              </NavLink>
            </li>
              

            <li>
              <NavLink to="/contacts" className={({isActive}) => isActive ? 'active' : ""}>
                Contact
              </NavLink>
            </li>

          </ul>

        </div>


        {/* ================= NAV BUTTONS ================= */}

        <div className="nav-buttons">

          <NavLink to="/login">
            <button>Login</button>
          </NavLink>


          <NavLink to="/cart" >

            <button className="cart-button">

              🛒 Cart

              <span> ({cartItems.length})</span>

            </button>

          </NavLink>

        </div>

      </nav>

    </div>
  );
}

export default Navbar;