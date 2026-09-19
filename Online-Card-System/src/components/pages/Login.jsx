import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

function Login() {

  const [isLogin, setIsLogin] = useState(true);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  // ================= LOGIN =================

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("Login successful! Welcome back.");

    setLoginData({
      email: "",
      password: "",
    });
  };

  // ================= REGISTRATION =================

  const handleRegisterChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      registerData.password !==
      registerData.confirmPassword
    ) {
        setMessage("Passwords do not match!" );
        return;
      }

    setMessage("Registration successful! You can now login.");

    setRegisterData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="auth-container">
      
      <nav className="loginNavbar">
          <ul>
            <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ""}>Home</NavLink></li>
            <li><NavLink to="/cart" className={({isActive}) => isActive ? 'active' : ""}>Cart</NavLink></li>
            <li><NavLink to="/contacts" className={({isActive}) => isActive ? 'active' : ""}>Contact</NavLink></li>
          </ul>
      </nav>

      <div className="auth-card">

        {/* ================= TITLE ================= */}

        <div className="auth-header">

          <h2>
            {isLogin ? "Welcome Back!" : "Create Account First"}
          </h2>

          <p>
            {isLogin
              ? "Login to continue shopping"
              : "Register to start shopping with us"}
          </p>

        </div>


        {/* ================= MESSAGE ================= */}

        {message && (
          <div className="auth-message">
            {message}
          </div>
        )}


        {/* ================= LOGIN FORM ================= */}

        {isLogin ? (

          <form onSubmit={handleLogin}>

            <div className="form-group">

              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
              />

            </div>


            <div className="form-group">

              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
              />

            </div>


            <div className="forgot-password">

              <button type="button">
                Forgot Password?
              </button>

            </div>


            <button
              type="submit"
              className="auth-submit-btn"
            >
              Login
            </button>

          </form>

        ) : (

          /* ================= REGISTER FORM ================= */

          <form onSubmit={handleRegister}>

            <div className="form-group">

              <label>Full Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={registerData.name}
                onChange={handleRegisterChange}
                required
              />

            </div>


            <div className="form-group">

              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={registerData.email}
                onChange={handleRegisterChange}
                required
              />

            </div>


            <div className="form-group">

              <label>Password</label>

              <input
                type="password"
                name="password"
                placeholder="Create password"
                value={registerData.password}
                onChange={handleRegisterChange}
                required
              />

            </div>


            <div className="form-group">

              <label>Confirm Password</label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={registerData.confirmPassword}
                onChange={handleRegisterChange}
                required
              />

            </div>


            <button
              type="submit"
              className="auth-submit-btn"
            >
              Create Account
            </button>

          </form>

        )}


        {/* ================= SWITCH LOGIN / REGISTER ================= */}

        <div className="auth-switch">

          {isLogin ? (
            <p>
              Don't have an account?

              <button
                type="button"
                onClick={() => {
                  setIsLogin(false);
                  setMessage("");
                }}
              >
                Register Now
              </button>

            </p>
          ) : (
            <p>
              Already have an account?

              <button
                type="button"
                onClick={() => {
                  setIsLogin(true);
                  setMessage("");
                }}
              >
                Login Now
              </button>

            </p>
          )}

        </div>

      </div>

    </div>
  );
}

export default Login;