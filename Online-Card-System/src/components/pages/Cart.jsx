import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../features/cart/cartSlice";
import './Cart.css';
import Navbar from '../Navbar'


function Cart() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  return (
    <>
    
        <div>
          <Navbar />

        </div>

        <div className="cart-container">
          <div className="header">
            <h2>🛒 Your Carts</h2>

            <h2>
                Total Orders: {cartItems.length}
            </h2>
          </div>
          

          {cartItems.length === 0 ? (

            <p>Your cart is empty.</p>

          ) : (

            <>

              {cartItems.map((item) => (

                <div className="cart-item" key={item.id}>

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>

                    <h3>{item.name}</h3>

                    <p>${item.price}</p>

                    <button
                      onClick={() =>
                        dispatch(removeFromCart(item.id))
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))}

              <button
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>

            </>

          )}

        </div>
    
    </>
        
  );
}

export default Cart;