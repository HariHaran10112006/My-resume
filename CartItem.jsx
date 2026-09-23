import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "./CartSlice";

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const decreaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1
      })
    );
  };

  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-page">

      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <button onClick={onContinueShopping}>
            Home
          </button>

          <button onClick={onContinueShopping}>
            Plants
          </button>

          <button>
            🛒 Cart ({cartItems.length})
          </button>
        </div>
      </nav>

      <div
        style={{
          maxWidth: "1000px",
          margin: "40px auto",
          padding: "20px"
        }}
      >

        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (

          <div>
            <h2>Your cart is empty</h2>

            <button
              onClick={onContinueShopping}
            >
              Continue Shopping
            </button>
          </div>

        ) : (

          <div>

            {cartItems.map((item) => (

              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  padding: "20px",
                  marginBottom: "15px",
                  border: "1px solid #ddd",
                  borderRadius: "10px"
                }}
              >

                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "8px"
                  }}
                />

                <div style={{ flex: 1 }}>

                  <h2>{item.name}</h2>

                  <p>
                    Unit Price: ${item.price}
                  </p>

                  <p>
                    Total Cost: $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  <div>

                    <button
                      onClick={() =>
                        decreaseQuantity(item)
                      }
                    >
                      -
                    </button>

                    <span
                      style={{
                        margin: "0 15px",
                        fontWeight: "bold"
                      }}
                    >
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item)
                      }
                    >
                      +
                    </button>

                  </div>

                  <button
                    onClick={() =>
                      deleteItem(item.id)
                    }
                    style={{
                      marginTop: "10px"
                    }}
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

            <h2>
              Total Amount: $
              {totalAmount.toFixed(2)}
            </h2>

            <button
              onClick={() =>
                alert("Coming Soon!")
              }
            >
              Checkout
            </button>

            <button
              onClick={onContinueShopping}
              style={{
                marginLeft: "15px"
              }}
            >
              Continue Shopping
            </button>

          </div>

        )}

      </div>

    </div>
  );
}

export default CartItem;
