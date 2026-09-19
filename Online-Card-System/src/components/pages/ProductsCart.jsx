import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import Navbar from '../Navbar'

function ProductsCart() {

  const dispatch = useDispatch();

  // Success message
  const [message, setMessage] = useState("");

  // Kis product par submitting ho rahi hai?
  const [isSubmitting, setIsSubmitting] = useState(null);


  const products = [

    // ================= MEN'S FASHION =================

    {
      id: 1,
      name: "Premium T-Shirt",
      price: 25,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      category: "Men's Fashion",
    },

    {
      id: 2,
      name: "Casual Shirt",
      price: 35,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
      category: "Men's Fashion",
    },

    {
      id: 3,
      name: "Denim Jeans",
      price: 45,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
      category: "Men's Fashion",
    },

    {
      id: 4,
      name: "Men Sneakers",
      price: 60,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      category: "Men's Fashion",
    },

    {
      id: 5,
      name: "Classic Watch",
      price: 80,
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d",
      category: "Men's Fashion",
    },

    {
      id: 6,
      name: "Leather Jacket",
      price: 95,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
      category: "Men's Fashion",
    },


    // ================= ELECTRONICS =================

    {
      id: 7,
      name: "Smartphone",
      price: 399,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      category: "Electronics",
    },

    {
      id: 8,
      name: "Laptop",
      price: 799,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      category: "Electronics",
    },

    {
      id: 9,
      name: "Wireless Headphones",
      price: 120,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      category: "Electronics",
    },

    {
      id: 10,
      name: "Smart Watch",
      price: 150,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      category: "Electronics",
    },

    {
      id: 11,
      name: "Digital Camera",
      price: 650,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      category: "Electronics",
    },

    {
      id: 12,
      name: "Gaming Mouse",
      price: 55,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
      category: "Electronics",
    },


    // ================= HOME & LIVING =================

    {
      id: 13,
      name: "Modern Sofa",
      price: 450,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
      category: "Home & Living",
    },

    {
      id: 14,
      name: "Table Lamp",
      price: 45,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
      category: "Home & Living",
    },

    {
      id: 15,
      name: "Modern Chair",
      price: 120,
      image: "https://images.unsplash.com/photo-1503602642458-232111445657",
      category: "Home & Living",
    },

    {
      id: 16,
      name: "Wall Decoration",
      price: 35,
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
      category: "Home & Living",
    },

    {
      id: 17,
      name: "Coffee Table",
      price: 180,
      image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d",
      category: "Home & Living",
    },

    {
      id: 18,
      name: "Home Plant",
      price: 25,
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
      category: "Home & Living",
    },


    // ================= BEAUTY =================

    {
      id: 19,
      name: "Face Cream",
      price: 30,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
      category: "Beauty & Personal Care",
    },

    {
      id: 20,
      name: "Premium Perfume",
      price: 75,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601",
      category: "Beauty & Personal Care",
    },

    {
      id: 21,
      name: "Makeup Kit",
      price: 60,
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
      category: "Beauty & Personal Care",
    },

    {
      id: 22,
      name: "Skin Care Set",
      price: 85,
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a",
      category: "Beauty & Personal Care",
    },

    {
      id: 23,
      name: "Hair Dryer",
      price: 50,
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da",
      category: "Beauty & Personal Care",
    },

    {
      id: 24,
      name: "Premium Lipstick",
      price: 20,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa",
      category: "Beauty & Personal Care",
    },


    // ================= SPORTS =================

    {
      id: 25,
      name: "Running Shoes",
      price: 75,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      category: "Sports & Fitness",
    },

    {
      id: 26,
      name: "Football",
      price: 30,
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
      category: "Sports & Fitness",
    },

    {
      id: 27,
      name: "Cricket Bat",
      price: 100,
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da",
      category: "Sports & Fitness",
    },

    {
      id: 28,
      name: "Dumbbells",
      price: 65,
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
      category: "Sports & Fitness",
    },

    {
      id: 29,
      name: "Sports Bottle",
      price: 20,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
      category: "Sports & Fitness",
    },

    {
      id: 30,
      name: "Gym Bag",
      price: 45,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
      category: "Sports & Fitness",
    },


    // ================= BOOKS =================

    {
      id: 31,
      name: "Programming Book",
      price: 35,
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
      category: "Books & Stationery",
    },

    {
      id: 32,
      name: "Premium Notebook",
      price: 12,
      image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57",
      category: "Books & Stationery",
    },

    {
      id: 33,
      name: "Study Planner",
      price: 15,
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      category: "Books & Stationery",
    },

    {
      id: 34,
      name: "Premium Pen Set",
      price: 10,
      image: "https://images.unsplash.com/photo-1585336261022-680e295ce1fe",
      category: "Books & Stationery",
    },

    {
      id: 35,
      name: "Reading Book",
      price: 25,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
      category: "Books & Stationery",
    },

    {
      id: 36,
      name: "Desk Organizer",
      price: 22,
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
      category: "Books & Stationery",
    },
  ];


  // ==========================================
  // ADD TO CART
  // ==========================================

  const handleAddToCart = (product) => {

    // jis product par click hua uski ID save
    setIsSubmitting(product.id);

    // purana message remove
    setMessage("");


    // 1.5 second wait
    setTimeout(() => {

      // Redux store mein product add
      dispatch(addToCart(product));

      // submitting khatam
      setIsSubmitting(null);

      // success message
      setMessage(
        `Order completed! ${product.name} has been added to your cart.`
      );


      // 2 seconds ke baad message remove
      setTimeout(() => {

        setMessage("");

      }, 2000);

    }, 1500);
  };


  // ==========================================
  // CATEGORIES
  // ==========================================

  const categories = [
    "Men's Fashion",
    "Electronics",
    "Home & Living",
    "Beauty & Personal Care",
    "Sports & Fitness",
    "Books & Stationery",
  ];


  return (
    <div>
        <Navbar />

      {/* ==========================================
          SUCCESS MESSAGE
      ========================================== */}

      {message && (

        <div
          style={{
            position: "fixed",
            top: "80px",
            right: "20px",
            zIndex: 9999,

            backgroundColor: "#16a34a",
            color: "white",

            padding: "15px 25px",

            borderRadius: "8px",

            fontSize: "16px",
            fontWeight: "600",

            boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
          }}
        >
          ✅ {message}
        </div>

      )}


      {/* ==========================================
          PRODUCTS
      ========================================== */}

      <div className="card-main-container">


        {categories.map((category) => (

          <div
            className="category-section"
            key={category}
          >


            {/* CATEGORY TITLE */}

            <div className="category-title">

              <h2>{category}</h2>

              <button>
                View All
              </button>

            </div>


            {/* PRODUCTS GRID */}

            <div className="products-grid">


              {products
                .filter(
                  (product) => product.category === category
                )
                .map((product) => (

                  <div
                    className="product-card"
                    key={product.id}
                  >


                    <img
                      src={product.image}
                      alt={product.name}
                    />


                    <h3>
                      {product.name}
                    </h3>


                    <p>
                      ${product.price}
                    </p>


                    {/* ===============================
                        ADD TO CART BUTTON
                    =============================== */}

                    <button
                      onClick={() =>
                        handleAddToCart(product)
                      }

                      disabled={
                        isSubmitting === product.id
                      }
                    >

                      {isSubmitting === product.id
                        ? "Adding..."
                        : "Add To Cart"}

                    </button>


                  </div>

                ))}


            </div>

          </div>

        ))}


      </div>

    </div>
  );
}

export default ProductsCart;