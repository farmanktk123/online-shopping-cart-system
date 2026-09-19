import './App.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/pages/Home";
import About from './components/pages/About';
import ProductsCart from './components/pages/ProductsCart';
import Cart from './components/pages/Cart';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';

function App() {

  const router = createBrowserRouter(
   [
      {

        path: '/',
        element: <Home />
      },

      {
        path:'/about',
        element: <About />
      },

      {
        path:'/products',
        element: <ProductsCart />
      },

      {
        path:'/contacts',
        element: <Contact />
      },

      {
        path:'/cart',
        element: <Cart />
      },

      {
        path: '/login',
        element: <Login />
      }

  ]
)

  return(
    <div>

    <RouterProvider router = {router} />
    </div>
  )
}

export default App