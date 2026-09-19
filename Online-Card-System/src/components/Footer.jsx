import React from 'react'

function Footer() {
  return (
    <div>
      {/* ================= FOOTER ================= */}

        <footer className="footer">

            <div className="footer-container">


            {/* Footer About */}

            <div className="footer-column">

                <h2>
                <span>S</span>hopping Website
                </h2>

                <p>
                Your one-stop destination for quality products,
                amazing deals and a smooth online shopping experience.
                Shop smarter, shop easier and enjoy every purchase.
                </p>

            </div>



            {/* Quick Links */}

            <div className="footer-column">

                <h3>Quick Links</h3>

                <ul>

                <li>Home</li>

                <li>About Us</li>

                <li>Products</li>

                <li>Contact</li>

                <li>Shopping Cart</li>

                </ul>

            </div>



            {/* Categories */}

            <div className="footer-column">

                <h3>Categories</h3>

                <ul>

                <li>Men's Fashion</li>

                <li>Electronics</li>

                <li>Home & Living</li>

                <li>Beauty & Care</li>

                <li>Sports & Fitness</li>

                <li>Books & Stationery</li>

                </ul>

            </div>



            {/* Contact */}

            <div className="footer-column">

                <h3>Contact Us</h3>

                <p>📍 Pakistan</p>

                <p>📧 shopping@example.com</p>

                <p>📞 +92 300 1234567</p>

                <p>🕒 Mon - Sat: 9AM - 8PM</p>


                <div className="social-icons">

                <span>Facebook</span>

                <span>Instagram</span>

                <span>Twitter</span>

                </div>

            </div>

            </div>



            {/* Footer Bottom */}

            <div className="footer-bottom">

            <p>
                © 2026 Shopping Website. All Rights Reserved.
            </p>

            <p>
                Designed & Developed with ❤️
            </p>

            </div>

        </footer>
    </div>
  )
}

export default Footer
