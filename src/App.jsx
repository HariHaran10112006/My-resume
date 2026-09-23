import React, { useState } from "react";
import { useSelector } from "react-redux";

import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";

import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const cart = useSelector((state) => state.cart.items);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="app-container">

      {page === "home" && (
        <div className="landing-page">

          <div className="landing-overlay">

            <div className="landing_content">

              <h1>Paradise Nursery</h1>

              <div className="divider"></div>

              <p>Where Green Meets Serenity</p>

              <button
                className="get-started-button"
                onClick={() => setPage("products")}
              >
                Get Started
              </button>

            </div>

            <AboutUs />

          </div>

        </div>
      )}

      {page === "products" && (
        <ProductList
          onHomeClick={() => setPage("home")}
          onCartClick={() => setPage("cart")}
          totalItems={totalItems}
        />
      )}

      {page === "cart" && (
        <CartItem
          onHomeClick={() => setPage("home")}
          onContinueShopping={() => setPage("products")}
          totalItems={totalItems}
        />
      )}

    </div>
  );
}

export default App;
